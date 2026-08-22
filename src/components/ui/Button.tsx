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
  primary: 'bg-brand text-white border border-brand shadow-[0_5px_14px_-8px_rgba(20,80,41,0.7)] hover:bg-brand-dark hover:border-brand-dark',
  outline: 'bg-white text-ink-muted border border-hairline hover:border-brand/35 hover:text-brand',
  link: 'bg-transparent text-brand border border-transparent hover:bg-white/60',
}

const sizeClasses = {
  sm: 'text-body-sm',
  md: 'text-body',
}

const coreSizeClasses = {
  sm: 'px-4 py-2',
  md: 'px-6 py-3',
}

const coreVariantClasses = {
  primary: 'bg-transparent',
  outline: 'bg-transparent',
  link: 'bg-transparent',
}

const iconVariantClasses = {
  primary: 'bg-white/15',
  outline: 'bg-brand-soft',
  link: 'bg-brand-soft',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, iconRight, className = '' } = props
  const classes = [
    'group inline-flex rounded-btn font-semibold whitespace-nowrap transition-[color,background-color,border-color,transform] duration-[160ms] ease-drawer hover:-translate-y-px active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:transition-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ')
  const content = (
    <span className={`inline-flex items-center justify-center gap-2 rounded-[8px] ${coreSizeClasses[size]} ${coreVariantClasses[variant]}`}>
      <span className="whitespace-nowrap">{children}</span>
      {iconRight && (
        <span className={`flex ${size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'} shrink-0 items-center justify-center rounded-full ${iconVariantClasses[variant]} transition-[transform] duration-[160ms] ease-drawer group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none`}>
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
