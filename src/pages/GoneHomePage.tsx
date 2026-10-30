import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { PuppyGrid } from '../components/home/PuppyGrid'
import { SectionHeading } from '../components/ui/SectionHeading'
import { goneHomePuppies } from '../data/goneHomePuppies'

export function GoneHomePage() {
  return (
    <>
      <section aria-labelledby="gone-home-title" className="catalog-intro gone-home-intro">
        <Container className="catalog-intro__inner">
          <div>
            <SectionHeading
              description="Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match."
              headingId="gone-home-title"
              level={1}
              title="Gone home"
            />
            <Link className="button button--secondary gone-home-intro__link" to="/puppies">
              See available puppies
            </Link>
          </div>
          <div aria-hidden="true" className="gone-home-intro__ticket">
            tickets home
          </div>
        </Container>
      </section>
      <section aria-label="Puppies who have gone home" className="catalog-results gone-home-results">
        <Container>
          <PuppyGrid items={goneHomePuppies} showAllLink={false} />
        </Container>
      </section>
    </>
  )
}