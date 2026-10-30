import { Link } from 'react-router-dom'
import { whatsappUrl } from '../../data/site'
import type { NavigationItem } from '../../types'
import { Container } from '../ui/Container'

const footerLinks: NavigationItem[] = [
  { label: 'Available puppies', to: '/puppies' },
  { label: 'Gone home', to: '/gone-home' },
  { label: 'Happy families', to: '/happy-families' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Delivery & collection', to: '/how-it-works#delivery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Visit & contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__content">
        <div className="site-footer__brand-block">
          <Link className="site-footer__brand" to="/">
            TeddyPups
          </Link>
          <p>Home, at last.</p>
          <p className="site-footer__description">
            TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
          </p>
        </div>
        <nav aria-label="Footer" className="site-footer__nav">
          <h2>Explore</h2>
          <ul>
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer__contact">
          <h2>Say hello</h2>
          <a href={whatsappUrl} rel="noreferrer" target="_blank">
            WhatsApp +971 54 167 6733
          </a>
          <a href="tel:+971541676733">Call +971 54 167 6733</a>
          <a href="mailto:teddypupsadmin@gmail.com">teddypupsadmin@gmail.com</a>
          <span>Downtown Dubai, United Arab Emirates</span>
          <nav aria-label="Social media" className="site-footer__socials">
            <a href="https://www.instagram.com/teddypups.worldwide/" rel="noreferrer" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/@teddypupsuae" rel="noreferrer" target="_blank">TikTok</a>
            <a href="https://www.facebook.com/profile.php?id=61567496944539" rel="noreferrer" target="_blank">Facebook</a>
          </nav>
        </div>
      </Container>
      <Container className="site-footer__bottom">
        <span>© 2026 TeddyPups U.A.E.</span>
        <span>every puppy is family</span>
      </Container>
    </footer>
  )
}