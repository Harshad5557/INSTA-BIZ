import { useEffect, useRef, useState } from 'react'
import { PawPrint, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import brandMark from '../../assets/reference/brand-mark.png'
import { whatsappUrl } from '../../data/site'
import type { NavigationItem } from '../../types'
import { Button } from '../ui/Button'

const navigationItems: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Puppies', to: '/puppies' },
  { label: 'Happy families', to: '/happy-families' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Visit & contact', to: '/contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const mobileNavigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    mobileNavigationRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key === 'Tab') {
        const focusableElements = Array.from(
          menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements.at(-1)

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link aria-label="TeddyPups U.A.E. home" className="site-brand" to="/">
          <img alt="" height="44" src={brandMark} width="44" />
          <span>TeddyPups</span>
        </Link>
        <nav aria-label="Main" className="site-nav site-nav--desktop">
          {navigationItems.map((item) => (
            <NavLink end={item.to === '/'} key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          <a className="header-whatsapp" href={whatsappUrl} rel="noreferrer" target="_blank">
            WhatsApp us
          </a>
        </nav>
        <Button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          ref={menuButtonRef}
          variant="secondary"
        >
          {isMenuOpen ? <X aria-hidden="true" size={18} /> : <PawPrint aria-hidden="true" size={18} />}
          <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div
          aria-labelledby="mobile-menu-title"
          aria-modal="true"
          className="site-menu"
          id="mobile-navigation"
          ref={menuRef}
          role="dialog"
        >
          <div className="site-menu__top">
            <p className="eyebrow" id="mobile-menu-title">
              where to, friend?
            </p>
            <Button
              aria-label="Close navigation menu"
              className="site-menu__close"
              onClick={closeMenu}
              variant="secondary"
            >
              <X aria-hidden="true" size={20} />
            </Button>
          </div>
          <nav aria-label="Mobile" className="site-nav site-nav--mobile" ref={mobileNavigationRef}>
            {navigationItems.map((item) => (
              <NavLink
                end={item.to === '/'}
                key={item.to}
                onClick={closeMenu}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
            <a className="site-menu__whatsapp" href={whatsappUrl} rel="noreferrer" target="_blank">
              WhatsApp us
              <span>+971 54 167 6733</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}