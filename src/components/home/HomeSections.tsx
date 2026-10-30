import { Clock3, HeartHandshake, Plane, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import brandMark from '../../assets/reference/brand-mark.png'
import showroomPuppy from '../../assets/reference/showroom-puppy.jpg'
import { faqs, processSteps } from '../../data/faqs'
import { familyGallery, testimonial } from '../../data/testimonials'
import { puppies } from '../../data/puppies'
import { trustPoints, whatsappUrl } from '../../data/site'
import type { TrustPoint } from '../../types'
import { Container } from '../ui/Container'
import { buttonClassName } from '../ui/buttonClassName'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { SectionHeading } from '../ui/SectionHeading'
import { GalleryGrid } from './GalleryGrid'
import { ProcessStep } from './ProcessStep'
import { PuppyGrid } from './PuppyGrid'
import { TestimonialCard } from './TestimonialCard'

const trustIcons = {
  health: ShieldCheck,
  travel: Plane,
  support: Clock3,
  families: HeartHandshake,
} satisfies Record<TrustPoint['icon'], typeof ShieldCheck>

export function MeetThePupsSection() {
  return (
    <section aria-labelledby="meet-pups-title" className="home-section meet-pups">
      <Container>
        <div className="home-section__heading-row">
          <SectionHeading
            description="Real puppies, real photos, looking for their families right now."
            headingId="meet-pups-title"
            title="Meet the pups"
          />
          <Link className="text-link" to="/puppies">
            See all available puppies <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <PuppyGrid />
      </Container>
    </section>
  )
}

export function WaysToMeetSection() {
  return (
    <section aria-labelledby="ways-title" className="home-section ways-section">
      <Container>
        <SectionHeading headingId="ways-title" title="Two ways to meet your puppy" />
        <div className="ways-grid">
          <article className="way-card way-card--local">
            <div className="way-card__image">
              <ImageWithFallback
                alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom"
                aspectRatio="1.42"
                height={420}
                loading="lazy"
                src={showroomPuppy}
                width={600}
              />
              <span>In our showroom</span>
            </div>
            <div className="way-card__copy">
              <h3>Puppies in Dubai</h3>
              <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
              <Link className="text-link" to="/puppies?origin=local">
                Meet local puppies <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
          <article className="way-card way-card--imported">
            <div aria-hidden="true" className="import-route">
              <div className="import-route__dog">
                <ImageWithFallback
                  alt=""
                  aspectRatio="0.8"
                  height={300}
                  loading="lazy"
                  src={puppies[1].image}
                  width={240}
                />
              </div>
              <div className="import-route__line">
                <span>Korea</span>
                <Plane aria-hidden="true" size={26} />
                <span>Dubai</span>
              </div>
            </div>
            <div className="way-card__copy">
              <h3>Imported for you</h3>
              <p>Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p>
              <Link className="text-link" to="/puppies?origin=imported">
                See imported puppies <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

export function PuppyJourneySection() {
  return (
    <section aria-labelledby="journey-title" className="home-section journey-section">
      <Container className="journey-layout">
        <div className="journey-copy">
          <SectionHeading
            description="A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful."
            headingId="journey-title"
            title="Your puppy journey"
          />
          <ol className="process-list">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </ol>
          <Link className={buttonClassName('secondary')} to="/how-it-works">
            How it works
          </Link>
        </div>
        <div aria-label="A WhatsApp conversation with TeddyPups U.A.E." className="chat-preview" role="group">
          <div className="chat-preview__header">
            <img alt="" height="42" src={brandMark} width="42" />
            <div>
              <strong>TeddyPups U.A.E.</strong>
              <span>online</span>
            </div>
          </div>
          <div className="chat-preview__body">
            <p className="chat-bubble chat-bubble--sent">Hi TeddyPups! I'd love to know more about your puppies.</p>
            <p className="chat-bubble">
              Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.
            </p>
            <ImageWithFallback
              alt="The apricot teddy bear puppy from our showroom, held up to say hello"
              aspectRatio="0.8"
              className="chat-preview__photo"
              height={400}
              loading="lazy"
              src={showroomPuppy}
              width={320}
            />
            <p className="chat-bubble">
              Our team will share real photos, health details, and all necessary information directly on WhatsApp.
            </p>
          </div>
          <a className="chat-preview__link" href={whatsappUrl} rel="noreferrer" target="_blank">
            Say hello on WhatsApp <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </Container>
    </section>
  )
}

export function TrustSection() {
  return (
    <section aria-labelledby="trust-title" className="home-section trust-section">
      <Container className="trust-layout">
        <SectionHeading
          eyebrow="puppy passport"
          headingId="trust-title"
          title="Why families trust TeddyPups"
        />
        <ul className="trust-grid">
          {trustPoints.map((point) => {
            const Icon = trustIcons[point.icon]
            return (
              <li key={point.title}>
                <div className="trust-grid__title">
                  <Icon aria-hidden="true" size={22} />
                  <h3>{point.title}</h3>
                </div>
                <p>{point.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export function FamiliesSection() {
  return (
    <section aria-labelledby="families-title" className="home-section families-section">
      <Container>
        <div className="families-section__intro">
          <SectionHeading
            description="We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts."
            headingId="families-title"
            title="Happy families & puppies"
          />
          <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
        </div>
        <GalleryGrid items={familyGallery} />
        <Link className="text-link" to="/happy-families">
          See every happy family <span aria-hidden="true">&rarr;</span>
        </Link>
      </Container>
    </section>
  )
}

export function FAQSection() {
  return (
    <section aria-labelledby="faq-title" className="home-section faq-section">
      <Container>
        <div className="home-section__heading-row">
          <SectionHeading headingId="faq-title" title="Questions, answered" />
          <Link className="text-link" to="/faq">
            Read all questions <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <dl className="faq-list">
          {faqs.map((faq) => (
            <div className="faq-list__item" key={faq.question}>
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export function FinalCTASection() {
  return (
    <section aria-labelledby="final-cta-title" className="final-cta">
      <Container className="final-cta__inner">
        <div className="final-cta__copy">
          <SectionHeading
            description="Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE."
            headingId="final-cta-title"
            title="Ready to meet your new best friend?"
          />
          <div className="final-cta__actions">
            <a className={buttonClassName('primary')} href={whatsappUrl} rel="noreferrer" target="_blank">
              Enquire on WhatsApp
            </a>
            <Link className={buttonClassName('secondary')} to="/contact">
              Visit & contact
            </Link>
          </div>
        </div>
        <div className="final-cta__image-wrap">
          <ImageWithFallback
            alt="Max, waiting inside"
            aspectRatio="0.78"
            height={640}
            loading="lazy"
            src={puppies[0].image}
            width={500}
          />
          <span>welcome home</span>
        </div>
      </Container>
    </section>
  )
}