import type { GalleryItem } from '../types'
import familyPhoto1 from '../assets/reference/family-photo-1.jpg'
import familyPhoto2 from '../assets/reference/family-photo-2.jpg'
import familyPhoto3 from '../assets/reference/family-photo-3.jpg'
import familyPhoto4 from '../assets/reference/family-photo-4.jpg'
import familyPhoto5 from '../assets/reference/family-photo-5.jpg'
import familyPhoto6 from '../assets/reference/family-photo-6.jpg'

export const testimonial = {
  quote:
    'TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.',
  author: 'Sarah M., Dubai, UAE',
}

export const familyGallery: GalleryItem[] = [
  {
    image: familyPhoto1,
    alt: 'A TeddyPups family with their new puppy',
    caption: 'Lulu with her new mummy',
  },
  {
    image: familyPhoto2,
    alt: 'A family holding their new Maltipoo puppy',
    caption: 'Adorable Maltipoo baby',
  },
  {
    image: familyPhoto3,
    alt: 'A family with their new teddy puppy',
    caption: 'My new teddy puppy',
  },
  {
    image: familyPhoto4,
    alt: 'A family with their new puppies',
    caption: 'Our new puppies',
  },
  {
    image: familyPhoto5,
    alt: 'A family welcoming a new puppy',
    caption: 'New puppy',
  },
  {
    image: familyPhoto6,
    alt: 'A family with three puppies',
    caption: 'Gang of three',
  },
]