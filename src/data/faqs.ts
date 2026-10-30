import type { FAQItem, ProcessStepData } from '../types'

export const processSteps: ProcessStepData[] = [
  {
    number: '1',
    title: 'Choose your breed',
    description:
      "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.",
  },
  {
    number: '2',
    title: 'Get photos & details',
    description:
      'Our team will share real photos, health details, and all necessary information directly on WhatsApp.',
  },
  {
    number: '3',
    title: 'Secure & safe delivery',
    description:
      'Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.',
  },
]

export const faqs: FAQItem[] = [
  {
    question: 'Are your puppies vaccinated and health-checked?',
    answer:
      'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.',
  },
  {
    question: 'Can I meet a puppy before I decide?',
    answer:
      'Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.',
  },
  {
    question: 'Can I take my puppy home the same day?',
    answer: 'Local puppies are available immediately, so you can take your puppy home the same day.',
  },
]