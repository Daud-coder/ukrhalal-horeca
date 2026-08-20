export type Lead = {
  name: string
  company: string
  phone: string
  email?: string
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'network' | 'timeout' | 'server' | 'rate-limit' | 'not-configured' }

const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined
const TIMEOUT_MS = 15000

export async function submitLead(lead: Lead): Promise<SubmitResult> {
  if (!ENDPOINT?.trim()) return { ok: false, reason: 'not-configured' }

  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: controller.signal,
    })

    if (response.status === 429) return { ok: false, reason: 'rate-limit' }
    if (!response.ok) return { ok: false, reason: 'server' }
    return { ok: true }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { ok: false, reason: 'timeout' }
    }
    return { ok: false, reason: 'network' }
  } finally {
    window.clearTimeout(timeoutId)
  }
}
