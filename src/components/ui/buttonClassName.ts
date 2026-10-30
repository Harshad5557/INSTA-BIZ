import type { ButtonVariant } from '../../types'

export function buttonClassName(variant: ButtonVariant = 'primary') {
  return `button button--${variant}`
}