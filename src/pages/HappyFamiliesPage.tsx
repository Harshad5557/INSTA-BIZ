import { Container } from '../components/ui/Container'
import { GalleryGrid } from '../components/home/GalleryGrid'
import { SectionHeading } from '../components/ui/SectionHeading'
import { fullFamilyGallery, testimonial } from '../data/testimonials'
import { TestimonialCard } from '../components/home/TestimonialCard'

export function HappyFamiliesPage() {
  return (
    <div className="information-page families-page">
      <section aria-labelledby="families-page-title" className="information-hero">
        <Container className="information-hero__inner">
          <div>
            <p className="eyebrow">our wall of happy endings</p>
            <SectionHeading
              description="Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends."
              headingId="families-page-title"
              level={1}
              title="Happy families"
            />
          </div>
          <div className="families-page__count" aria-label="64 moments and counting">
            <strong>64</strong>
            <span>moments and counting</span>
          </div>
        </Container>
      </section>
      <section aria-label="TeddyPups family photos" className="information-section families-page__content">
        <Container>
          <div className="families-page__testimonial">
            <p>Every one of them was a Teddy Pup once.</p>
            <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
          </div>
          <GalleryGrid items={fullFamilyGallery} />
        </Container>
      </section>
    </div>
  )
}