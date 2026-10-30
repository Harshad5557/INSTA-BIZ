import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import brandMark from '../assets/reference/brand-mark.png'
import { goneHomePreview } from '../data/goneHomePuppies'
import { puppies } from '../data/puppies'
import { puppySnapshotDate } from '../data/puppies'
import { whatsappUrl } from '../data/site'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PuppyGrid } from '../components/home/PuppyGrid'
import { PuppyCard } from '../components/home/PuppyCard'

const breedOptions = [
  { label: 'Maltipoo', value: 'maltipoo' },
  { label: 'Pomeranian', value: 'pomeranian' },
  { label: 'Poodle', value: 'poodle' },
  { label: 'Cavapoo', value: 'cavapoo' },
  { label: 'Shih Tzu', value: 'shih-tzu' },
]

function normalizedBreed(value: string) {
  return value.toLowerCase().replace(/[^a-z]/g, '')
}

export function PuppiesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const origin = searchParams.get('origin')
  const collection = searchParams.get('collection')
  const breed = searchParams.get('breed')
  const gender = searchParams.get('gender')
  const hasFilters = ['origin', 'collection', 'breed', 'gender'].some((key) => searchParams.has(key))

  const filteredPuppies = puppies.filter((puppy) => {
    if (origin && puppy.origin !== origin) return false
    if (collection && puppy.collection !== collection) return false
    if (breed) {
      const filterValue = normalizedBreed(breed)
      const availableBreeds = [puppy.breed, ...(puppy.filterBreeds ?? [])]
      if (!availableBreeds.some((item) => normalizedBreed(item).includes(filterValue))) return false
    }
    if (gender === 'male' && puppy.gender === 'female') return false
    if (gender === 'female' && puppy.gender === 'male') return false
    if (gender && gender !== 'male' && gender !== 'female') return false
    return true
  })

  function setFilter(key: string, value: string) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      if (next.get(key) === value) next.delete(key)
      else next.set(key, value)
      return next
    })
  }

  function resetFilters() {
    setSearchParams(new URLSearchParams())
  }

  return (
    <>
      <section aria-labelledby="puppies-title" className="catalog-intro">
        <Container className="catalog-intro__inner">
          <div>
            <p className="eyebrow">from Teddy's sketchbook</p>
            <SectionHeading
              className="catalog-intro__heading"
              description="Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp."
              headingId="puppies-title"
              level={1}
              title="Available puppies"
            />
          </div>
          <div aria-hidden="true" className="catalog-intro__self-portrait">
            <img alt="" height="144" src={brandMark} width="144" />
            <span className="catalog-intro__sketch">self-portrait</span>
          </div>
        </Container>
      </section>

      <section aria-label="Puppy listings" className="catalog-results">
        <Container>
          <div aria-label="Filter puppies" className="puppy-filters" role="group">
            <div aria-label="Where" className="puppy-filters__group" role="group">
              <span className="puppy-filters__label">where</span>
              <div className="puppy-filters__options">
                <button
                  aria-pressed={!origin && !collection}
                  className="filter-chip"
                  onClick={() => {
                    setSearchParams((current) => {
                      const next = new URLSearchParams(current)
                      next.delete('origin')
                      next.delete('collection')
                      return next
                    })
                  }}
                  type="button"
                >
                  Everywhere
                </button>
                <button
                  aria-pressed={origin === 'imported'}
                  className="filter-chip"
                  onClick={() => {
                    setSearchParams((current) => {
                      const next = new URLSearchParams(current)
                      next.set('origin', 'imported')
                      next.delete('collection')
                      return next
                    })
                  }}
                  type="button"
                >
                  Imported
                </button>
                <button
                  aria-pressed={collection === 'korean-teacup'}
                  className="filter-chip"
                  onClick={() => {
                    setSearchParams((current) => {
                      const next = new URLSearchParams(current)
                      next.delete('origin')
                      next.set('collection', 'korean-teacup')
                      return next
                    })
                  }}
                  type="button"
                >
                  Korean Teacup
                </button>
              </div>
            </div>
            <div aria-label="Breed" className="puppy-filters__group" role="group">
              <span className="puppy-filters__label">breed</span>
              <div className="puppy-filters__options">
                {breedOptions.map((option) => (
                  <button
                    aria-pressed={breed === option.value}
                    className="filter-chip"
                    key={option.value}
                    onClick={() => setFilter('breed', option.value)}
                    type="button"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <div aria-label="Gender" className="puppy-filters__group" role="group">
              <span className="puppy-filters__label">boy or girl</span>
              <div className="puppy-filters__options">
                <button
                  aria-pressed={gender === 'male'}
                  className="filter-chip"
                  onClick={() => setFilter('gender', 'male')}
                  type="button"
                >
                  Boys
                </button>
                <button
                  aria-pressed={gender === 'female'}
                  className="filter-chip"
                  onClick={() => setFilter('gender', 'female')}
                  type="button"
                >
                  Girls
                </button>
              </div>
            </div>
            {hasFilters && (
              <button className="filter-reset" onClick={resetFilters} type="button">
                Clear filters
              </button>
            )}
          </div>

          <p aria-live="polite" className="catalog-count">
            {filteredPuppies.length}{' '}
            {hasFilters ? 'puppies match' : 'puppies looking for a home'}
          </p>

          {filteredPuppies.length > 0 ? (
            <PuppyGrid items={filteredPuppies} showAllLink={false} />
          ) : (
            <div className="catalog-empty">
              <div>
                <p className="eyebrow">No match just now</p>
                <h2>No puppies match just now.</h2>
                <p>
                  Tell us what you're hoping for and we'll let you know what's in our showroom or what we can bring in for you.
                </p>
                <div className="catalog-empty__actions">
                  <a
                    className="button button--primary"
                    href={`${whatsappUrl.split('?')[0]}?text=${encodeURIComponent("Hi TeddyPups! I'm looking for a puppy — what do you have at the moment?")}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Ask on WhatsApp
                  </a>
                  <button className="button button--secondary" onClick={resetFilters} type="button">
                    Show all puppies
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      <section aria-labelledby="already-home-title" className="gone-home-preview">
        <Container>
          <div className="home-section__heading-row">
            <SectionHeading
              description="These puppies have found their families."
              headingId="already-home-title"
              title="Already gone home"
            />
            <Link className="text-link" to="/gone-home">
              See the puppies who've gone home <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <ul aria-label="Some puppies who have gone home" className="gone-home-preview-grid">
            {goneHomePreview.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </ul>
        </Container>
      </section>
      <p className="catalog-snapshot-note">
        Availability shown is from the reference listing captured {puppySnapshotDate}. Please confirm current status with TeddyPups.
      </p>
    </>
  )
}