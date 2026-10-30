interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <figure className="testimonial-card">
      <blockquote>{quote}</blockquote>
      <figcaption>{author}</figcaption>
    </figure>
  )
}