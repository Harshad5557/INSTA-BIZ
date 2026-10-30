import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

interface ReferencePageProps {
  title: string
  description: string
}

export function ReferencePage({ title, description }: ReferencePageProps) {
  return (
    <section className="reference-page">
      <Container>
        <SectionHeading description={description} level={1} title={title} />
      </Container>
    </section>
  )
}