import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { goneHomePuppies } from '../data/goneHomePuppies'
import { puppies } from '../data/puppies'

const pages: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'TeddyPups U.A.E. | Premium puppies in Dubai',
    description: 'Meet TeddyPups U.A.E., browse puppy profiles, and learn about local visits and imported puppy journeys in Dubai.',
  },
  '/puppies': {
    title: 'Available puppies | TeddyPups U.A.E.',
    description: 'Browse puppy profiles and filter the latest reference listing by origin, breed, or gender.',
  },
  '/gone-home': {
    title: 'Gone home | TeddyPups U.A.E.',
    description: 'Meet puppies from the TeddyPups archive who have already joined their families.',
  },
  '/how-it-works': {
    title: 'How it works | TeddyPups U.A.E.',
    description: 'Learn about meeting a puppy in Dubai or ordering a puppy from overseas, plus delivery information.',
  },
  '/faq': {
    title: 'Questions & answers | TeddyPups U.A.E.',
    description: 'Answers to common questions about meeting puppies, imports, delivery, and support.',
  },
  '/happy-families': {
    title: 'Happy families | TeddyPups U.A.E.',
    description: 'Browse family photos shared by TeddyPups customers.',
  },
  '/contact': {
    title: 'Visit & contact | TeddyPups U.A.E.',
    description: 'Contact TeddyPups U.A.E. by WhatsApp, phone, or email, or find the Downtown Dubai showroom.',
  },
}

export function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const puppy = pathname.startsWith('/puppies/')
      ? [...puppies, ...goneHomePuppies].find((item) => item.slug === pathname.split('/').at(-1))
      : undefined
    const page = puppy
      ? {
          title: `${puppy.name}, ${puppy.breed} puppy | TeddyPups U.A.E.`,
          description: puppy.status === 'gone-home'
            ? `${puppy.name} has already joined a family. View the TeddyPups puppy archive.`
            : `Meet ${puppy.name}, a ${puppy.breed} puppy. View profile details and contact TeddyPups directly.`,
        }
      : pages[pathname] ?? {
          title: 'Page not found | TeddyPups U.A.E.',
          description: 'This page could not be found. Browse puppy profiles or return to TeddyPups U.A.E. home.',
        }

    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description)
  }, [pathname])

  return null
}