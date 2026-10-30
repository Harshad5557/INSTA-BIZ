import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { SectionHeading } from '../components/ui/SectionHeading'
import { goneHomePuppies } from '../data/goneHomePuppies'
import { puppies, puppySnapshotDate } from '../data/puppies'
import type { Puppy } from '../types'

function PuppyNotFound() {
  return (
    <section className="reference-page">
      <Container className="not-found-page">
        <SectionHeading
          description="We couldn't find a puppy with that profile. Browse the current listings instead."
          eyebrow="Puppy profile"
          level={1}
          title="Puppy not found"
        />
        <Link className="button button--primary" to="/puppies">
          View available puppies
        </Link>
      </Container>
    </section>
  )
}

function statusLabel(status: Puppy['status']) {
  return status === 'available' ? 'Available' : 'Gone home'
}

export function PuppyDetailPage() {
  const { slug } = useParams()
  const puppy = [...puppies, ...goneHomePuppies].find((item) => item.slug === slug)
  const [activePhoto, setActivePhoto] = useState(0)

  if (!puppy) return <PuppyNotFound />

  const isAvailable = puppy.status === 'available'
  const genderLabel = puppy.gender === 'both' ? 'Boy & girl' : puppy.gender === 'male' ? 'Boy' : 'Girl'
  const enquiryUrl = `https://wa.me/971541676733?text=${encodeURIComponent(`Hi TeddyPups! I'm interested in ${puppy.name}, the ${puppy.breed}: https://puppy.instabizweb.com/puppies/${puppy.slug}`)}`
  const gallery = puppy.gallery.length > 0 ? puppy.gallery : [puppy.image]

  return (
    <>
      <section aria-labelledby="puppy-title" className="puppy-detail">
        <Container>
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <Link to="/puppies">Available puppies</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{puppy.name}</span>
          </nav>
          <div className="puppy-detail__layout">
            <div className="puppy-detail__gallery">
              <div className="puppy-detail__main-image">
                <ImageWithFallback
                  alt={puppy.alt}
                  aspectRatio="0.8"
                  height={1000}
                  loading="eager"
                  src={gallery[activePhoto]}
                  width={800}
                />
                <span className={`puppy-status puppy-status--${puppy.status}`}>
                  {statusLabel(puppy.status)}
                </span>
                {gallery.length > 1 && (
                  <>
                    <button
                      aria-label="Previous photo"
                      className="puppy-detail__gallery-arrow puppy-detail__gallery-arrow--previous"
                      onClick={() => setActivePhoto((activePhoto - 1 + gallery.length) % gallery.length)}
                      type="button"
                    >
                      &larr;
                    </button>
                    <button
                      aria-label="Next photo"
                      className="puppy-detail__gallery-arrow puppy-detail__gallery-arrow--next"
                      onClick={() => setActivePhoto((activePhoto + 1) % gallery.length)}
                      type="button"
                    >
                      &rarr;
                    </button>
                    <span aria-live="polite" className="puppy-detail__gallery-count">
                      {activePhoto + 1} / {gallery.length}
                    </span>
                  </>
                )}
              </div>
              {gallery.length > 1 && (
                <div aria-label="Puppy photos" className="puppy-detail__thumbnails">
                  {gallery.map((image, index) => (
                    <button
                      aria-label={`Show photo ${index + 1}`}
                      aria-pressed={activePhoto === index}
                      className={activePhoto === index ? 'is-selected' : ''}
                      key={image}
                      onClick={() => setActivePhoto(index)}
                      type="button"
                    >
                      <ImageWithFallback alt="" aspectRatio="0.8" height={120} src={image} width={96} />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="puppy-detail__copy">
              <p className="eyebrow">hello, it's me</p>
              <SectionHeading headingId="puppy-title" level={1} title={puppy.name} />
              <p className="puppy-detail__breed">{puppy.breed}</p>
              <dl className="puppy-facts">
                <div>
                  <dt>Breed</dt>
                  <dd>{puppy.breed}</dd>
                </div>
                <div>
                  <dt>Boy or girl</dt>
                  <dd>{genderLabel}</dd>
                </div>
                {puppy.age && (
                  <div>
                    <dt>Age</dt>
                    <dd>{puppy.age}</dd>
                  </div>
                )}
                {(puppy.origin || puppy.storyLocation) && (
                  <div>
                    <dt>Where</dt>
                    <dd>{puppy.origin === 'imported' ? 'Imported for you' : puppy.storyLocation}</dd>
                  </div>
                )}
              </dl>
              {puppy.description && <p className="puppy-detail__description">{puppy.description}</p>}
              {isAvailable ? (
                <>
                  <p className="puppy-detail__snapshot">
                    Availability shown is from the reference listing captured {puppySnapshotDate}; please confirm current status.
                  </p>
                  <div className="puppy-detail__actions">
                    <a className="button button--primary" href={enquiryUrl} rel="noreferrer" target="_blank">
                      Ask about {puppy.name} on WhatsApp
                    </a>
                    <a
                      className="button button--secondary"
                      href={`mailto:teddypupsadmin@gmail.com?subject=${encodeURIComponent(`Enquiry about ${puppy.name}`)}&body=${encodeURIComponent(`Hi TeddyPups, I'm interested in ${puppy.name} (${puppy.breed}).`)}`}
                    >
                      Email TeddyPups
                    </a>
                  </div>
                </>
              ) : (
                <div className="puppy-detail__gone-home">
                  <strong>This puppy has already joined a family.</strong>
                  <Link className="button button--primary" to="/puppies">
                    See available puppies
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      <section className="puppy-detail__more">
        <Container>
          <Link className="text-link" to={isAvailable ? '/puppies' : '/gone-home'}>
            {isAvailable ? 'Back to available puppies' : 'Back to Gone Home'} <span aria-hidden="true">&rarr;</span>
          </Link>
        </Container>
      </section>
    </>
  )
}