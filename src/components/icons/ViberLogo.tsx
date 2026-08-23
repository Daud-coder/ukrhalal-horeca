type ViberLogoProps = {
  size?: number | string
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

export function ViberLogo({ size = 22, className, ...rest }: ViberLogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...rest}>
      <circle cx="12" cy="11" r="8.5" fill="currentColor" />
      <path d="M7 18.5 L5.5 22 L10 19.3 Z" fill="currentColor" />
      <path
        fill="white"
        d="M9.3 8.2
           c 0.4 -0.5 1.1 -0.6 1.6 -0.2
           l 0.9 0.7
           c 0.4 0.3 0.5 0.9 0.2 1.3
           l -0.4 0.6
           c -0.2 0.3 -0.2 0.7 0 1
           c 0.6 1 1.5 1.7 2.6 2
           c 0.3 0.1 0.7 0 0.9 -0.3
           l 0.4 -0.6
           c 0.3 -0.4 0.8 -0.5 1.2 -0.3
           l 1 0.5
           c 0.5 0.3 0.7 0.9 0.4 1.4
           c -0.4 0.7 -1.2 1.1 -2 1
           c -3.3 -0.4 -6 -3 -6.5 -6.3
           c -0.1 -0.7 0.1 -1.4 0.7 -1.8 Z"
      />
    </svg>
  )
}
