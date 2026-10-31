import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { ButtonVariant } from '../../types'
import { buttonClassName } from './buttonClassName'

interface MagneticButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  to?: string
  href?: string
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
  rel?: string
}

export function MagneticButton({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const classes = `${buttonClassName(variant)} magnetic-button ${className}`.trim()

  if (to) return <Link className={classes} to={to}>{children}</Link>

  return <a className={classes} href={href} rel={rel} target={target}>{children}</a>
}