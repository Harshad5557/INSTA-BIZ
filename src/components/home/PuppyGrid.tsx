import type { Puppy } from '../../types'
import { puppies } from '../../data/puppies'
import { Link } from 'react-router-dom'
import { PuppyCard } from './PuppyCard'

interface PuppyGridProps {
  items?: Puppy[]
  showAllLink?: boolean
}

export function PuppyGrid({ items = puppies, showAllLink = true }: PuppyGridProps) {
  return (
    <div className="puppy-grid-wrap">
      <ul
        aria-label={items[0]?.status === 'gone-home' ? 'Puppies who have gone home' : 'Puppies looking for a family'}
        className="puppy-grid"
      >
        {items.map((puppy) => (
          <PuppyCard key={puppy.slug} puppy={puppy} />
        ))}
      </ul>
      {showAllLink && (
        <Link className="text-link puppy-grid__all" to="/puppies">
          Meet them all <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  )
}