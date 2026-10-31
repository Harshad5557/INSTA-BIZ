import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { puppies } from '../../data/puppies'

const introPuppies = puppies.slice(0, 5)

export function PageCurtain() {
  const { pathname } = useLocation()
  const curtainRef = useRef<HTMLDivElement>(null)
  const previousPathname = useRef(pathname)

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname

    const curtain = curtainRef.current
    if (!curtain) return

    curtain.dataset.phase = 'idle'
    void curtain.offsetHeight
    curtain.dataset.phase = 'route'

    const timeout = window.setTimeout(() => {
      if (curtain.dataset.phase === 'route') {
        curtain.dataset.phase = 'idle'
      }
    }, 1250)

    return () => window.clearTimeout(timeout)
  }, [pathname])

  return (
    <div aria-hidden="true" className="page-curtain" data-phase="entrance" ref={curtainRef}>
      <div className="page-curtain__blanket">
        <div className="page-curtain__scene">
          <p className="page-curtain__message">every puppy is family</p>
          <div className="page-curtain__puppies">
            {introPuppies.map((puppy, index) => (
              <img
                alt=""
                className={`page-curtain__puppy page-curtain__puppy--${index + 1}`}
                draggable="false"
                key={puppy.slug}
                src={puppy.image}
              />
            ))}
            <img
              alt=""
              className="page-curtain__runner"
              draggable="false"
              src={introPuppies[0].image}
            />
          </div>
        </div>
        <div aria-hidden="true" className="page-curtain__prints">
          {introPuppies.map((puppy) => (
            <span className="page-curtain__print" key={puppy.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}
