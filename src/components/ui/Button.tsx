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
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border border-brand bg-transparent text-brand hover:bg-brand-soft',
  link: 'bg-transparent text-brand hover:underline',
}

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-3 text-base',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, iconRight, className = '' } = props
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-semibold whitespace-nowrap',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ')

  if (props.as === 'a') {
    const { as: _as, variant: _variant, size: _size, iconRight: _icon, ...anchorProps } = props
    return <a {...anchorProps} className={classes}><span className="whitespace-nowrap">{children}</span>{iconRight}</a>
  }

  const { as: _as, variant: _variant, size: _size, iconRight: _icon, ...buttonProps } = props
  return <button {...buttonProps} className={classes}><span className="whitespace-nowrap">{children}</span>{iconRight}</button>
}
