import { whatsappUrl } from '../../data/site'

export function ContactDock() {
  return (
    <nav aria-label="Quick contact" className="contact-dock">
      <a className="contact-dock__whatsapp" href={whatsappUrl} rel="noreferrer" target="_blank">
        WhatsApp us
      </a>
      <a className="contact-dock__call" href="tel:+971541676733">
        Call
      </a>
    </nav>
  )
}