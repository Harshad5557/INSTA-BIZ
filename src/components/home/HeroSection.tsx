import { Link } from 'react-router-dom'
import { featuredPuppies } from '../../data/puppies'
import { whatsappUrl } from '../../data/site'
import { Container } from '../ui/Container'
import { buttonClassName } from '../ui/buttonClassName'
import { ImageWithFallback } from '../ui/ImageWithFallback'
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
          <Link className={buttonClassName('primary')} to="/puppies">
            View available puppies
          </Link>
          <a className={buttonClassName('secondary')} href={whatsappUrl} rel="noreferrer" target="_blank">
            Enquire on WhatsApp
          </a>
        </div>
      </Container>
      <div aria-label="Some of the puppies in our showroom" className="hero-puppy-collage" role="group">
        <p className="hero-puppy-collage__note">peekaboo!</p>
        <div aria-hidden="true" className="hero-mascot">
          <span className="hero-mascot__ear hero-mascot__ear--left" />
          <span className="hero-mascot__ear hero-mascot__ear--right" />
          <span className="hero-mascot__face">
            <span className="hero-mascot__tuft" />
            <span className="hero-mascot__eye hero-mascot__eye--left" />
            <span className="hero-mascot__eye hero-mascot__eye--right" />
            <span className="hero-mascot__muzzle">
              <span className="hero-mascot__nose" />
            </span>
          </span>
        </div>
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