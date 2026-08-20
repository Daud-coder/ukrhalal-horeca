import { CheckCircle } from '@phosphor-icons/react'
import { useRef, useState, type FormEvent } from 'react'
import { submitLead, type SubmitResult } from '../lib/submitLead'
import { Button } from './ui/Button'

type PriceRequestFormProps = {
  onDone: () => void
}

type FieldName = 'name' | 'company' | 'phone' | 'email' | 'consent'
type FormErrors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'sending' | 'error' | 'success'

const phonePattern = /^(\+?380\d{9}|0\d{9})$/
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const submitErrorMessages: Record<Exclude<SubmitResult, { ok: true }>['reason'], string> = {
  network: 'Не вдалося зʼєднатися. Перевірте інтернет і спробуйте ще раз',
  timeout: 'Сервер не відповідає. Спробуйте ще раз за хвилину',
  server: 'Щось зламалось на нашому боці. Спробуйте ще раз або напишіть менеджеру',
  'rate-limit': 'Забагато спроб поспіль. Зачекайте хвилину і спробуйте знову',
  'not-configured': 'Форма ще не підключена до сервера. Напишіть менеджеру напряму',
}

function validateField(field: FieldName, values: { name: string; company: string; phone: string; email: string; consent: boolean }) {
  if (field === 'name') {
    if (!values.name.trim()) return 'Вкажіть імʼя, щоб ми знали, до кого звертатись'
    if (values.name.trim().length < 2) return 'Імʼя закоротке. Введіть щонайменше дві літери'
  }
  if (field === 'company' && !values.company.trim()) {
    return 'Вкажіть назву закладу, це потрібно для розрахунку цін'
  }
  if (field === 'phone') {
    if (!values.phone.trim()) return 'Вкажіть телефон, менеджер зателефонує протягом робочого дня'
    const normalizedPhone = values.phone.replace(/[\s\-()]/g, '')
    if (!phonePattern.test(normalizedPhone)) {
      return 'Телефон не схожий на український номер. Приклад: +380 67 123 45 67'
    }
  }
  if (field === 'email' && values.email.trim() && !emailPattern.test(values.email.trim())) {
    return 'Перевірте адресу: у ній бракує символу @ або домену'
  }
  if (field === 'consent' && !values.consent) {
    return 'Позначте згоду, без неї ми не можемо обробити заявку'
  }
  return undefined
}

export function PriceRequestForm({ onDone }: PriceRequestFormProps) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submittedOnce, setSubmittedOnce] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [submitError, setSubmitError] = useState('')

  const nameRef = useRef<HTMLInputElement>(null)
  const companyRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const consentRef = useRef<HTMLInputElement>(null)

  const values = { name, company, phone, email, consent }
  const refs = { name: nameRef, company: companyRef, phone: phoneRef, email: emailRef, consent: consentRef }

  const validateOne = (field: FieldName) => {
    const error = validateField(field, values)
    setErrors((current) => ({ ...current, [field]: error }))
  }

  const handleBlur = (field: FieldName) => {
    if (submittedOnce) validateOne(field)
  }

  const fieldClassName = (field: FieldName) => [
    'w-full rounded-[var(--radius-btn)] bg-white px-4 py-3 text-body text-ink caret-brand ring-1 ring-hairline outline-none focus:ring-2 focus:ring-brand disabled:cursor-not-allowed disabled:opacity-60',
    errors[field] ? 'ring-2 ring-red-600 focus:ring-red-600' : '',
  ].filter(Boolean).join(' ')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // preventDefault строго ПЕРЕД охоронною умовою: якщо вийти раніше,
    // браузер виконає звичайну відправку форми з перезавантаженням сторінки
    // і все введене зникне.
    event.preventDefault()
    if (status === 'sending') return

    setSubmittedOnce(true)
    const fields: FieldName[] = ['name', 'company', 'phone', 'email', 'consent']
    const nextErrors = Object.fromEntries(
      fields.flatMap((field) => {
        const error = validateField(field, values)
        return error ? [[field, error]] : []
      }),
    ) as FormErrors

    setErrors(nextErrors)
    const firstInvalidField = fields.find((field) => nextErrors[field])
    if (firstInvalidField) {
      refs[firstInvalidField].current?.focus()
      return
    }

    setStatus('sending')
    setSubmitError('')
    const result = await submitLead({
      name: name.trim(),
      company: company.trim(),
      phone: phone.trim(),
      ...(email.trim() ? { email: email.trim() } : {}),
    })

    if (result.ok) {
      setStatus('success')
      return
    }

    setSubmitError(submitErrorMessages[result.reason])
    setStatus('error')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4">
        <CheckCircle size={48} weight="light" aria-hidden="true" className="text-brand" />
        <div className="space-y-2">
          <h3 className="font-display text-h3 font-semibold text-ink">Заявку прийнято</h3>
          <p className="text-body text-ink-muted">Менеджер звʼяжеться з вами протягом робочого дня.</p>
        </div>
        <Button type="button" variant="primary" size="md" onClick={onDone}>Зрозуміло</Button>
      </div>
    )
  }

  const disabled = status === 'sending'

  return (
    <form onSubmit={handleSubmit} noValidate>
      <fieldset disabled={disabled} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="price-name" className="block text-body-sm font-medium text-ink">Ваше імʼя</label>
          <input ref={nameRef} id="price-name" name="name" value={name} onChange={(event) => setName(event.target.value)} onBlur={() => handleBlur('name')} maxLength={80} autoComplete="name" className={fieldClassName('name')} aria-invalid={errors.name ? true : undefined} aria-describedby={errors.name ? 'price-name-error' : undefined} />
          {errors.name && <p id="price-name-error" role="alert" className="text-body-sm text-red-700">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="price-company" className="block text-body-sm font-medium text-ink">Назва закладу</label>
          <input ref={companyRef} id="price-company" name="company" value={company} onChange={(event) => setCompany(event.target.value)} onBlur={() => handleBlur('company')} maxLength={120} autoComplete="organization" className={fieldClassName('company')} aria-invalid={errors.company ? true : undefined} aria-describedby={errors.company ? 'price-company-error' : undefined} />
          {errors.company && <p id="price-company-error" role="alert" className="text-body-sm text-red-700">{errors.company}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="price-phone" className="block text-body-sm font-medium text-ink">Телефон</label>
          <input ref={phoneRef} id="price-phone" name="phone" type="tel" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} onBlur={() => handleBlur('phone')} maxLength={20} autoComplete="tel" className={fieldClassName('phone')} aria-invalid={errors.phone ? true : undefined} aria-describedby={errors.phone ? 'price-phone-error' : undefined} />
          {errors.phone && <p id="price-phone-error" role="alert" className="text-body-sm text-red-700">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="price-email" className="block text-body-sm font-medium text-ink">Email</label>
          <input ref={emailRef} id="price-email" name="email" type="email" inputMode="email" value={email} onChange={(event) => setEmail(event.target.value)} onBlur={() => handleBlur('email')} maxLength={120} autoComplete="email" className={fieldClassName('email')} aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? 'price-email-error' : 'price-email-hint'} />
          {errors.email ? (
            <p id="price-email-error" role="alert" className="text-body-sm text-red-700">{errors.email}</p>
          ) : (
            <p id="price-email-hint" className="text-body-sm text-ink-muted">Необовʼязково. Надішлемо прайс ще й поштою.</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <input ref={consentRef} id="price-consent" name="consent" type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} onBlur={() => handleBlur('consent')} className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-brand caret-brand disabled:cursor-not-allowed" aria-invalid={errors.consent ? true : undefined} aria-describedby={errors.consent ? 'price-consent-error' : undefined} />
            <label htmlFor="price-consent" className="text-body-sm font-medium text-ink">Погоджуюсь на обробку персональних даних</label>
          </div>
          {errors.consent && <p id="price-consent-error" role="alert" className="text-body-sm text-red-700">{errors.consent}</p>}
        </div>
      </fieldset>

      <div aria-live="polite" className="mt-5">
        {status === 'error' && <p role="alert" className="mb-3 text-body-sm text-red-700">{submitError}</p>}
        <Button type="submit" variant="primary" size="md" disabled={disabled}>
          {status === 'sending' ? 'Надсилаємо...' : status === 'error' ? 'Спробувати ще раз' : 'Надіслати заявку'}
        </Button>
      </div>
    </form>
  )
}
