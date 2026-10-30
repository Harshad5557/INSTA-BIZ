import type { Puppy } from '../../types'
import { puppies } from '../../data/puppies'
import { Link } from 'react-router-dom'
import { PuppyCard } from './PuppyCard'

interface PuppyGridProps {
  items?: Puppy[]
}

export function PuppyGrid({ items = puppies }: PuppyGridProps) {
  return (
    <>
      <ul aria-label="Puppies looking for a family" className="puppy-grid">
        {items.map((puppy) => (
          <PuppyCard key={puppy.slug} puppy={puppy} />
        ))}
      </ul>
      <Link className="text-link puppy-grid__all" to="/puppies">
        Meet them all <span aria-hidden="true">&rarr;</span>
      </Link>
    </>
  )
}