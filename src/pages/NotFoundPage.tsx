import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { buttonClassName } from '../components/ui/buttonClassName'
import { SectionHeading } from '../components/ui/SectionHeading'

export function NotFoundPage() {
  return (
    <section className="reference-page">
      <Container className="not-found-page">
        <SectionHeading
          description="That page isn't here. Head back home or browse the available puppies."
          eyebrow="404"
          level={1}
          title="Page not found"
        />
        <Link className={buttonClassName('primary')} to="/">
          Back to home
        </Link>
      </Container>
    </section>
  )
}