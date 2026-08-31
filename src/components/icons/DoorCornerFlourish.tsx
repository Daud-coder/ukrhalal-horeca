type DoorCornerFlourishProps = {
  size?: number | string
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

export function DoorCornerFlourish({ size = 28, className, ...rest }: DoorCornerFlourishProps) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} fill="none" className={className} {...rest}>
      <path d="M2 26 V8 Q2 2 8 2 H26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M2 15 Q2 9 9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <circle cx="9" cy="9" r="1.6" fill="currentColor" />
    </svg>
  )
}
