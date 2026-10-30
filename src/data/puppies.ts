import type { Puppy } from '../types'
import copper from '../assets/reference/puppy-copper.jpg'
import koreanMaltipoo from '../assets/reference/puppy-korean-maltipoo.jpg'
import koreanPomeranianBoy from '../assets/reference/puppy-korean-pomeranian-boy.jpg'
import koreanPomeranianGirlA from '../assets/reference/puppy-korean-pomeranian-girl-a.jpg'
import koreanPomeranianGirlB from '../assets/reference/puppy-korean-pomeranian-girl-b.jpg'
import koreanPoodle from '../assets/reference/puppy-korean-poodle.jpg'
import maltipooCavapoo from '../assets/reference/puppy-maltipoo-cavapoo.jpg'
import maltipooGirl2m from '../assets/reference/puppy-maltipoo-girl-2m.jpg'
import maltipooGirl25m from '../assets/reference/puppy-maltipoo-girl-25m.jpg'
import maltipooGirl3m from '../assets/reference/puppy-maltipoo-girl-3m.jpg'
import max from '../assets/reference/puppy-max.jpg'
import pomeranian from '../assets/reference/puppy-pomeranian.jpg'
import shihTzuBoy from '../assets/reference/puppy-shih-tzu-boy.jpg'
import shihTzuGirl from '../assets/reference/puppy-shih-tzu-girl.jpg'
import toyPoodle from '../assets/reference/puppy-toy-poodle.jpg'

export const puppies: Puppy[] = [
  {
    slug: 'maltipoo-max-male',
    name: 'Max',
    breed: 'Maltipoo',
    details: 'boy, 3 months',
    image: max,
    alt: 'Max, male Maltipoo puppy',
    hasVideo: true,
  },
  {
    slug: 'korean-teacup-maltipoo-female',
    name: 'Korean Teacup Maltipoo',
    breed: 'Korean Teacup Maltipoo',
    details: 'girl, 2 months',
    image: koreanMaltipoo,
    alt: 'Female Korean Teacup Maltipoo puppy',
    hasVideo: true,
  },
  {
    slug: 'korean-teacup-poodle-female',
    name: 'Korean Teacup Poodle',
    breed: 'Korean Teacup Poodle',
    details: 'girl, 2 months',
    image: koreanPoodle,
    alt: 'Female Korean Teacup Poodle puppy',
  },
  {
    slug: 'maltipoo-cavapoo-male',
    name: 'Maltipoo & Cavapoo',
    breed: 'Maltipoo & Cavapoo',
    details: 'boy, 3 months Maltipoo & 2 months Cavapoo',
    image: maltipooCavapoo,
    alt: 'Male Maltipoo & Cavapoo puppy',
    hasVideo: true,
  },
  {
    slug: 'toy-poodle-male-female',
    name: 'Toy Poodle',
    breed: 'Toy Poodle',
    details: 'boy & girl, 2 months',
    image: toyPoodle,
    alt: 'Toy Poodle puppy',
  },
  {
    slug: 'maltipoo-female-2',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    details: 'girl, 3 months',
    image: maltipooGirl3m,
    alt: 'Female Maltipoo puppy',
    hasVideo: true,
  },
  {
    slug: 'pomeranian-female',
    name: 'Pomeranian',
    breed: 'Pomeranian',
    details: 'girl, 3 months',
    image: pomeranian,
    alt: 'Female Pomeranian puppy',
  },
  {
    slug: 'copper-male',
    name: 'Copper',
    breed: 'Cavapoo',
    details: 'boy, 2 months',
    image: copper,
    alt: 'Copper, male Cavapoo puppy',
  },
  {
    slug: 'shitzu-female',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    details: 'girl, 2 months',
    image: shihTzuGirl,
    alt: 'Female Shih Tzu puppy',
  },
  {
    slug: 'shitzu-male',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    details: 'boy, 2 months',
    image: shihTzuBoy,
    alt: 'Male Shih Tzu puppy',
  },
  {
    slug: 'maltipoo-female-1',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    details: 'girl, 2.5 months',
    image: maltipooGirl25m,
    alt: 'Female Maltipoo puppy',
  },
  {
    slug: 'maltipoo-female',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    details: 'girl, 2 months',
    image: maltipooGirl2m,
    alt: 'Female Maltipoo puppy',
  },
  {
    slug: 'korean-teacup-pomeranian-1',
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    details: 'girl, 2 months',
    image: koreanPomeranianGirlA,
    alt: 'Female Korean Teacup Pomeranian puppy',
  },
  {
    slug: 'korean-teacup-pomeranian',
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    details: 'girl, 2 months',
    image: koreanPomeranianGirlB,
    alt: 'Female Korean Teacup Pomeranian puppy',
  },
  {
    slug: 'korean-teacup-pomeranian-male',
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    details: 'boy, 2 months',
    image: koreanPomeranianBoy,
    alt: 'Male Korean Teacup Pomeranian puppy',
  },
]

export const featuredPuppies = puppies.slice(0, 6)