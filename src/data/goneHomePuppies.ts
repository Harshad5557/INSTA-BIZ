import type { Puppy } from '../types'
import ace from '../assets/reference/gone-ace.jpg'
import bailey from '../assets/reference/gone-bailey.jpg'
import bella from '../assets/reference/gone-bella.jpg'
import bluePomeranian from '../assets/reference/gone-blue-pomeranian.jpg'
import bruno from '../assets/reference/gone-bruno.jpg'
import buddy from '../assets/reference/gone-buddy.jpg'
import charlie from '../assets/reference/gone-charlie.jpg'
import coco from '../assets/reference/gone-coco.jpg'
import daisy from '../assets/reference/gone-daisy.jpg'
import finn from '../assets/reference/gone-finn.jpg'
import leoPomeranian from '../assets/reference/gone-leo-pomeranian.jpg'
import leoPoodle from '../assets/reference/gone-leo-poodle.jpg'
import lola from '../assets/reference/gone-lola.jpg'
import maltipooPuppy from '../assets/reference/gone-maltipoo-puppy.jpg'
import mia from '../assets/reference/gone-mia.jpg'
import mimi from '../assets/reference/gone-mimi.jpg'
import mollyPoodleGirl from '../assets/reference/gone-molly-poodle-girl.jpg'
import mollyPoodle from '../assets/reference/gone-molly-poodle.jpg'
import ollie from '../assets/reference/gone-ollie.jpg'
import poodlePuppy from '../assets/reference/gone-poodle-puppy.jpg'
import rex from '../assets/reference/gone-rex.jpg'
import rocky from '../assets/reference/gone-rocky.jpg'
import rosie from '../assets/reference/gone-rosie.jpg'
import sadie from '../assets/reference/gone-sadie.jpg'
import sophie from '../assets/reference/gone-sophie.jpg'
import teddyPoodle from '../assets/reference/gone-teddy-poodle.jpg'
import zoe from '../assets/reference/gone-zoe.jpg'

function goneHomePuppy(
  slug: string,
  name: string,
  breed: string,
  details: string,
  gender: 'male' | 'female',
  image: string,
  alt: string,
  storyLocation: 'TeddyPups' | 'Dubai showroom',
): Puppy {
  return {
    id: slug,
    slug,
    name,
    breed,
    details,
    image,
    gallery: [image],
    alt,
    status: 'gone-home',
    gender,
    storyLocation,
  }
}

export const goneHomePuppies: Puppy[] = [
  goneHomePuppy('pomeranian-ace-boy', 'Ace', 'Pomeranian', 'Pomeranian · boy', 'male', ace, 'Ace, male Pomeranian puppy', 'TeddyPups'),
  goneHomePuppy('poodle-leo-male', 'Leo', 'Poodle', 'Poodle · boy', 'male', leoPoodle, 'Leo, male Poodle puppy', 'TeddyPups'),
  goneHomePuppy('maltipoo-mia-girl', 'Mia', 'Maltipoo', 'Maltipoo · girl', 'female', mia, 'Female Maltipoo puppy pictured with the Dubai showroom tag', 'Dubai showroom'),
  goneHomePuppy('maltipoo-sadie-girl', 'Sadie', 'Maltipoo', 'Maltipoo · girl', 'female', sadie, 'Sadie, female Maltipoo puppy', 'TeddyPups'),
  goneHomePuppy('blue-marle-pomeranian', 'Pomeranian', 'Pomeranian', 'Pomeranian · boy', 'male', bluePomeranian, 'Male Pomeranian puppy', 'TeddyPups'),
  goneHomePuppy('pomsky-ollie-boy', 'Ollie', 'Pomsky', 'Pomsky · boy', 'male', ollie, 'Ollie, male Pomsky puppy', 'TeddyPups'),
  goneHomePuppy('maltipoo-bruno-boy', 'Bruno', 'Maltipoo', 'Maltipoo · boy', 'male', bruno, 'Bruno, male Maltipoo puppy', 'Dubai showroom'),
  goneHomePuppy('maltese-buddy-male', 'Buddy', 'Maltese', 'Maltese · boy', 'male', buddy, 'Buddy, male Maltese puppy', 'Dubai showroom'),
  goneHomePuppy('maltese-charlie-male', 'Charlie', 'Maltese', 'Maltese · boy', 'male', charlie, 'Charlie, male Maltese puppy', 'TeddyPups'),
  goneHomePuppy('pomeranian-daisy-girl', 'Daisy', 'Pomeranian', 'Pomeranian · girl', 'female', daisy, 'Daisy, female Pomeranian puppy', 'Dubai showroom'),
  goneHomePuppy('pomeranian-bella-female', 'Bella', 'Pomeranian', 'Pomeranian · girl', 'female', bella, 'Bella, female Pomeranian puppy', 'TeddyPups'),
  goneHomePuppy('poodle-teddy-male', 'Teddy', 'Poodle', 'Poodle · boy', 'male', teddyPoodle, 'Teddy, male Poodle puppy', 'TeddyPups'),
  goneHomePuppy('poodle-molly-female', 'Molly', 'Poodle', 'Poodle · girl', 'female', mollyPoodle, 'Molly, female Poodle puppy', 'Dubai showroom'),
  goneHomePuppy('pomski-coco-girl', 'Coco', 'Pomsky', 'Pomsky · girl', 'female', coco, 'Coco, female Pomsky puppy', 'TeddyPups'),
  goneHomePuppy('pomsky-rosie-girl', 'Rosie', 'Pomsky', 'Pomsky · girl', 'female', rosie, 'Rosie, female Pomsky puppy', 'Dubai showroom'),
  goneHomePuppy('pomeranian-leo-boy', 'Leo', 'Pomeranian', 'Pomeranian · boy', 'male', leoPomeranian, 'Leo, male Pomeranian puppy', 'Dubai showroom'),
  goneHomePuppy('poodle-molly-girl', 'Molly', 'Poodle', 'Poodle · girl', 'female', mollyPoodleGirl, 'Molly, female Poodle puppy', 'TeddyPups'),
  goneHomePuppy('poodle-rocky-boy', 'Rocky', 'Poodle', 'Poodle · boy', 'male', rocky, 'Rocky, male Poodle puppy', 'TeddyPups'),
  goneHomePuppy('maltipoo-sophie-girl', 'Sophie', 'Maltipoo', 'Maltipoo · girl', 'female', sophie, 'Sophie, female Maltipoo puppy', 'Dubai showroom'),
  goneHomePuppy('maltipoo-lola-girl', 'Lola', 'Maltipoo', 'Maltipoo · girl', 'female', lola, 'Lola, female Maltipoo puppy', 'Dubai showroom'),
  goneHomePuppy('pomeranian-rex-boy', 'Rex', 'Pomeranian', 'Pomeranian · boy', 'male', rex, 'Rex, male Pomeranian puppy', 'TeddyPups'),
  goneHomePuppy('pomsky-finn-male', 'Finn', 'Pomsky', 'Pomsky · boy', 'male', finn, 'Finn, male Pomsky puppy', 'TeddyPups'),
  goneHomePuppy('maltipoo-zoe-girl', 'Zoe', 'Maltipoo', 'Maltipoo · girl', 'female', zoe, 'Zoe, female Maltipoo puppy', 'TeddyPups'),
  goneHomePuppy('pomeranian-mimi-girl', 'Mimi', 'Pomeranian', 'Pomeranian · girl', 'female', mimi, 'Mimi, female Pomeranian puppy', 'Dubai showroom'),
  goneHomePuppy('bichon-bailey-boy', 'Bailey', 'Bichon', 'Bichon · boy', 'male', bailey, 'Bailey, male Bichon puppy', 'Dubai showroom'),
  goneHomePuppy('puppy', 'Maltipoo', 'Maltipoo', 'Maltipoo · girl', 'female', maltipooPuppy, 'Female Maltipoo puppy', 'TeddyPups'),
  goneHomePuppy('maltipo', 'Poodle', 'Poodle', 'Poodle · girl', 'female', poodlePuppy, 'Female Poodle puppy', 'Dubai showroom'),
]

export const goneHomePreview = goneHomePuppies.slice(0, 5)