import type { ReactNode } from 'react'
import type { HeadingLevel } from '../../types'

interface SectionHeadingProps {
  title: ReactNode
  eyebrow?: string
  description?: string
  level?: HeadingLevel
  headingId?: string
  className?: string
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  level = 2,
  headingId,
  className = '',
}: SectionHeadingProps) {
  const Heading = `h${level}` as const

  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="section-heading__title" id={headingId}>
        {title}
      </Heading>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}