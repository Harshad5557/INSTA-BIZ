export type ButtonVariant = 'primary' | 'secondary'

export type HeadingLevel = 1 | 2 | 3

export interface NavigationItem {
  label: string
  to: string
}

export interface Puppy {
  slug: string
  name: string
  breed: string
  details: string
  image: string
  alt: string
  hasVideo?: boolean
}

export interface ProcessStepData {
  number: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface GalleryItem {
  image: string
  alt: string
  caption: string
}

export interface TrustPoint {
  title: string
  description: string
  icon: 'health' | 'travel' | 'support' | 'families'
}