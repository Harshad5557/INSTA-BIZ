import type { ButtonHTMLAttributes, Ref } from 'react'
import type { ButtonVariant } from '../../types'
import { buttonClassName } from './buttonClassName'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  ref?: Ref<HTMLButtonElement>
}

export function Button({ className = '', ref, variant = 'primary', ...props }: ButtonProps) {
  return <button className={`${buttonClassName(variant)} ${className}`.trim()} ref={ref} {...props} />
}