import { Link } from 'react-router-dom'
import { featuredPuppies } from '../../data/puppies'
import { whatsappUrl } from '../../data/site'
import { Container } from '../ui/Container'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { MagneticButton } from '../ui/MagneticButton'
import { SectionHeading } from '../ui/SectionHeading'

export function HeroSection() {
  return (
    <section aria-labelledby="home-title" className="home-hero">
      <Container className="home-hero__inner">
        <SectionHeading
          className="home-hero__heading"
          description="Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide."
          eyebrow="every puppy is family"
          headingId="home-title"
          level={1}
          title={
            <>
              Premium teacup
              <br />
              puppies in Dubai
            </>
          }
        />
        <div className="home-hero__actions">
          <MagneticButton to="/puppies" variant="primary">
            View available puppies
          </MagneticButton>
          <MagneticButton className="hero-whatsapp" href={whatsappUrl} rel="noreferrer" target="_blank" variant="secondary">
            Enquire on WhatsApp
          </MagneticButton>
        </div>
      </Container>
      <div aria-label="Some of the puppies in our showroom" className="hero-puppy-collage" role="group">
        {featuredPuppies.map((puppy, index) => (
          <Link
            aria-label={`Meet ${puppy.name}, ${puppy.breed}`}
            className={`hero-puppy hero-puppy--${index + 1}`}
            key={puppy.slug}
            to={`/puppies/${puppy.slug}`}
          >
            <ImageWithFallback
              alt={puppy.alt}
              aspectRatio="0.68"
              height={300}
              loading={index < 3 ? 'eager' : 'lazy'}
              src={puppy.image}
              width={204}
            />
          </Link>
        ))}
        <div aria-hidden="true" className="hero-puppy-collage__scallop" />
      </div>
    </section>
  )
}