import type { ContentPoint, JourneyPath } from '../types'
import importedPuppy from '../assets/reference/puppy-korean-maltipoo.jpg'
import showroomPuppy from '../assets/reference/showroom-puppy.jpg'

export const journeyPaths: JourneyPath[] = [
  {
    id: 'local',
    label: 'In Dubai',
    sublabel: 'meet in person',
    title: 'Meet your puppy in person',
    description:
      "Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.",
    image: showroomPuppy,
    imageAlt: 'A tiny apricot teddy bear puppy held up in the TeddyPups showroom',
    imageLabel: 'Downtown Dubai',
    steps: [
      {
        number: '1',
        title: 'Explore our puppies',
        description:
          'Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.',
      },
      {
        number: '2',
        title: 'Choose your puppy',
        description:
          'Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.',
      },
      {
        number: '3',
        title: 'Meet before you choose',
        description: 'Spend time bonding before making your decision.',
      },
      {
        number: '4',
        title: 'Pick-up or delivery',
        description:
          'Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.',
      },
    ],
  },
  {
    id: 'imported',
    label: 'Imported',
    sublabel: 'order upon request',
    title: 'Order upon request',
    description:
      "Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds, sourced from breeders across Europe, Korea, and beyond. From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring puppies to Dubai for you.",
    image: importedPuppy,
    imageAlt: 'Female Korean Teacup Maltipoo puppy',
    imageLabel: 'Europe · Korea → Dubai',
    steps: [
      {
        number: '1',
        title: 'Reserve your puppy',
        description:
          'Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.',
      },
      {
        number: '2',
        title: 'Personalized consultation',
        description:
          "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.",
      },
      {
        number: '3',
        title: 'Import and arrival',
        description:
          'We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.',
      },
      {
        number: '4',
        title: 'Welcome home',
        description:
          'Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.',
      },
    ],
  },
]

export const puppyPromise: ContentPoint[] = [
  {
    title: 'Hand-selected breeders',
    description: 'We work only with breeders who uphold the highest ethical and health standards.',
  },
  {
    title: 'Full transparency',
    description: 'Photos, videos, and health certificates are shared before your puppy travels.',
  },
  {
    title: 'Safe, stress-free delivery',
    description:
      'We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.',
  },
]

export const deliveryPoints: ContentPoint[] = [
  {
    title: 'Take your puppy home the same day',
    description: 'Local puppies are available immediately — visit, fall in love, and go home together.',
  },
  {
    title: 'Delivery within Dubai',
    description: 'Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.',
  },
  {
    title: 'Safe international cargo',
    description: 'We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.',
  },
  {
    title: 'Worldwide delivery',
    description:
      'We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.',
  },
]

export const whyChooseUs: ContentPoint[] = [
  {
    title: 'International cargo',
    description:
      'We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.',
  },
  {
    title: 'Support 24/7',
    description:
      "Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support, we're just a message away.",
  },
  {
    title: 'Health guarantee',
    description:
      'All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.',
  },
]