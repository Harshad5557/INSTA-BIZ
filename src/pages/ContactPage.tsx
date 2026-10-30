import { Link } from 'react-router-dom'
import showroomPuppy from '../assets/reference/showroom-puppy.jpg'
import { Container } from '../components/ui/Container'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/contact/ContactForm'
import { whatsappUrl } from '../data/site'

export function ContactPage() {
  return (
    <div className="information-page contact-page">
      <section aria-labelledby="contact-title" className="information-hero contact-page__hero">
        <Container className="information-hero__inner">
          <div>
            <SectionHeading
              description="Have questions about our puppies or adoption process? Whether ready to adopt or just seeking info, we'd love to hear from you."
              headingId="contact-title"
              level={1}
              title="Get in touch with us"
            />
          </div>
          <a className="contact-page__hero-link" href={whatsappUrl} rel="noreferrer" target="_blank">
            WhatsApp TeddyPups <span aria-hidden="true">&rarr;</span>
          </a>
        </Container>
      </section>
      <section aria-label="Write to TeddyPups" className="information-section contact-page__form-section">
        <Container className="contact-page__layout">
          <ContactForm />
          <aside className="contact-page__aside">
            <ImageWithFallback
              alt="TeddyPups showroom puppy waiting for your letter"
              aspectRatio="0.8"
              height={640}
              loading="lazy"
              src={showroomPuppy}
              width={500}
            />
            <a href={whatsappUrl} rel="noreferrer" target="_blank">WhatsApp +971 54 167 6733</a>
            <a href="tel:+971541676733">Call +971 54 167 6733</a>
            <a href="mailto:teddypupsadmin@gmail.com">teddypupsadmin@gmail.com</a>
          </aside>
        </Container>
      </section>
      <section aria-labelledby="visit-title" className="visit-section">
        <Container className="visit-section__inner">
          <div>
            <p className="eyebrow">come say hello</p>
            <h2 id="visit-title">Visit us in Downtown Dubai</h2>
            <p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p>
            <p className="visit-section__address">Downtown Dubai, United Arab Emirates</p>
            <a
              className="text-link"
              href="https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7"
              rel="noreferrer"
              target="_blank"
            >
              Open in Google Maps <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <ImageWithFallback
            alt="The apricot teddy bear puppy from our showroom, held up to say hello"
            aspectRatio="1.2"
            height={480}
            loading="lazy"
            src={showroomPuppy}
            width={600}
          />
        </Container>
      </section>
      <Container className="contact-page__back-link">
        <Link className="text-link" to="/puppies">Browse available puppies <span aria-hidden="true">&rarr;</span></Link>
      </Container>
    </div>
  )
}