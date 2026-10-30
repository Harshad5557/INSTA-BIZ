import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { faqs } from '../data/faqs'
import { whatsappUrl } from '../data/site'

export function FAQPage() {
  return (
    <div className="information-page faq-page">
      <section aria-labelledby="faq-page-title" className="information-hero">
        <Container className="information-hero__inner">
          <div>
            <p className="eyebrow">9 notes on the board</p>
            <SectionHeading
              headingId="faq-page-title"
              level={1}
              title="Questions & answers"
            />
          </div>
          <p className="faq-page__intro">
            Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.
          </p>
        </Container>
      </section>
      <section aria-label="Frequently asked questions" className="information-section faq-page__content">
        <Container>
          <dl className="faq-list faq-list--page">
            {faqs.map((faq, index) => (
              <div className="faq-list__item" key={faq.question}>
                <dt><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <a className="button button--primary faq-page__contact" href={whatsappUrl} rel="noreferrer" target="_blank">
            Message us on WhatsApp
          </a>
          <Link className="text-link" to="/contact">Visit & contact <span aria-hidden="true">&rarr;</span></Link>
        </Container>
      </section>
    </div>
  )
}