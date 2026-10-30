import { CirclePlay } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Puppy } from '../../types'
import { ImageWithFallback } from '../ui/ImageWithFallback'

interface PuppyCardProps {
  puppy: Puppy
}

export function PuppyCard({ puppy }: PuppyCardProps) {
  return (
    <li className="puppy-card">
      <Link aria-label={`${puppy.name}, ${puppy.breed}, ${puppy.details}. Available`} to={`/puppies/${puppy.slug}`}>
        <div className="puppy-card__image-wrap">
          <ImageWithFallback
            alt={puppy.alt}
            aspectRatio="0.8"
            height={600}
            loading="lazy"
            src={puppy.image}
            width={480}
          />
          {puppy.hasVideo && (
            <span aria-label="Video available" className="puppy-card__video">
              <CirclePlay aria-hidden="true" size={21} />
            </span>
          )}
          <span className="puppy-card__status">Available</span>
        </div>
        <div className="puppy-card__copy">
          <h3>{puppy.name}</h3>
          <p>{puppy.details}</p>
        </div>
      </Link>
    </li>
  )
}