import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type SharedProps = {
  variant?: 'primary' | 'outline' | 'link'
  size?: 'sm' | 'md'
  children: ReactNode
  iconRight?: ReactNode
}

type ButtonElementProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
  href?: never
}

type AnchorElementProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a'
  href?: string
}

export type ButtonProps = ButtonElementProps | AnchorElementProps

const variantClasses = {
  primary: 'bg-brand text-white ring-1 ring-ink/[0.06] shadow-[0_14px_30px_-14px_rgba(26,104,55,0.65)] hover:shadow-[0_18px_34px_-14px_rgba(26,104,55,0.78)]',
  outline: 'bg-white/70 text-brand ring-1 ring-brand/35 hover:bg-brand-soft hover:ring-brand/60',
  link: 'bg-transparent text-brand ring-1 ring-ink/[0.06]',
}

const sizeClasses = {
  sm: 'text-body-sm',
  md: 'text-body',
}

const coreSizeClasses = {
  sm: 'px-5 py-2.5',
  md: 'px-7 py-3.5',
}

const coreVariantClasses = {
  primary: 'bg-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]',
  outline: 'bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] group-hover:bg-brand-soft',
  link: 'bg-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]',
}

const iconVariantClasses = {
  primary: 'bg-white/15',
  outline: 'bg-brand-soft',
  link: 'bg-brand-soft',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, iconRight, className = '' } = props
  const classes = [
    'group inline-flex rounded-full p-1.5 font-semibold whitespace-nowrap transition-[transform,box-shadow] duration-[160ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ')
  const content = (
    <span className={`inline-flex items-center justify-center gap-2 rounded-[calc(9999px-0.375rem)] ${coreSizeClasses[size]} ${coreVariantClasses[variant]}`}>
      <span className="whitespace-nowrap">{children}</span>
      {iconRight && (
        <span className={`flex ${size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'} shrink-0 items-center justify-center rounded-full ${iconVariantClasses[variant]} transition-[transform] duration-[160ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none`}>
          {iconRight}
        </span>
      )}
    </span>
  )

  if (props.as === 'a') {
    const { as: _as, variant: _variant, size: _size, iconRight: _icon, ...anchorProps } = props
    return <a {...anchorProps} className={classes}>{content}</a>
  }

  const { as: _as, variant: _variant, size: _size, iconRight: _icon, ...buttonProps } = props
  return <button {...buttonProps} className={classes}>{content}</button>
}
