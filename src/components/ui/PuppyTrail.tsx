import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface Point {
  x: number
  y: number
}

const pawSpacing = 27
const maxTrailPrints = 36

function PuppyFace({ className, fitBottom = false }: { className: string; fitBottom?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      preserveAspectRatio={fitBottom ? 'xMidYMax meet' : undefined}
      viewBox={fitBottom ? '0 0 120 100' : '0 0 120 112'}
    >
      <path className="puppy-trail__face-tail" d="M28 75C13 71 5 62 8 54c3-7 12-6 15 1l5 11" />
      <path className="puppy-trail__face-ear" d="M25 42C4 18 10 1 24 8c11 5 15 21 15 35" />
      <path className="puppy-trail__face-ear puppy-trail__face-ear--far" d="M81 42C94 14 112 9 115 24c3 12-10 24-22 31" />
      <circle className="puppy-trail__face-head" cx="60" cy="56" r="43" />
      <ellipse className="puppy-trail__face-cheek" cx="37" cy="66" rx="8" ry="5" />
      <ellipse className="puppy-trail__face-cheek" cx="83" cy="66" rx="8" ry="5" />
      <ellipse className="puppy-trail__face-muzzle" cx="60" cy="69" rx="20" ry="14" />
      <ellipse className="puppy-trail__face-nose" cx="60" cy="62" rx="5" ry="3.5" />
      <path className="puppy-trail__face-mouth" d="M60 66v6m0 0c-5 7-11 6-14 2m14-2c5 7 11 6 14 2" />
      <ellipse className="puppy-trail__face-mouth-open" cx="60" cy="73" rx="7" ry="8" />
      <ellipse className="puppy-trail__face-tongue" cx="60" cy="79" rx="4" ry="2.5" />
      <ellipse className="puppy-trail__face-eye" cx="43" cy="49" rx="3.4" ry="4.3" />
      <ellipse className="puppy-trail__face-eye" cx="77" cy="49" rx="3.4" ry="4.3" />
      <path className="puppy-trail__face-tuft" d="M51 15c-5-13 9-16 12-5 6-10 17-3 10 8" />
    </svg>
  )
}

function leavePawprints(
  trail: HTMLDivElement,
  start: Point,
  end: Point,
  kind: 'cursor' | 'puppy',
): Point {
  const deltaX = end.x - start.x
  const deltaY = end.y - start.y
  const distance = Math.hypot(deltaX, deltaY)
  const steps = Math.floor(distance / pawSpacing)

  if (!steps) return start

  const direction = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90
  const perpendicularX = -deltaY / distance
  const perpendicularY = deltaX / distance

  for (let index = 1; index <= steps; index += 1) {
    const distanceAlongPath = Math.min(index * pawSpacing, distance)
    const progress = distanceAlongPath / distance
    const side = index % 2 === 0 ? 1 : -1
    const print = document.createElement('span')
    print.className = `puppy-trail__print puppy-trail__print--${kind}`
    print.style.setProperty('--paw-x', `${start.x + deltaX * progress + perpendicularX * side * 4}px`)
    print.style.setProperty('--paw-y', `${start.y + deltaY * progress + perpendicularY * side * 4}px`)
    print.style.setProperty('--paw-angle', `${direction}deg`)
    print.addEventListener('animationend', () => print.remove(), { once: true })
    trail.append(print)

    while (trail.childElementCount > maxTrailPrints) {
      trail.firstElementChild?.remove()
    }
  }

  const distanceLeft = distance - steps * pawSpacing
  return {
    x: end.x - (deltaX / distance) * distanceLeft,
    y: end.y - (deltaY / distance) * distanceLeft,
  }
}

export function PuppyTrail() {
  const { pathname } = useLocation()
  const trailRef = useRef<HTMLDivElement>(null)
  const puppyRef = useRef<HTMLButtonElement>(null)
  const reactionTimeoutRef = useRef<number | null>(null)
  const [isReacting, setIsReacting] = useState(false)

  function handlePuppyClick() {
    setIsReacting(true)
    if (reactionTimeoutRef.current !== null) {
      window.clearTimeout(reactionTimeoutRef.current)
    }
    reactionTimeoutRef.current = window.setTimeout(() => {
      setIsReacting(false)
      reactionTimeoutRef.current = null
    }, 2400)
  }

  useEffect(() => () => {
    if (reactionTimeoutRef.current !== null) {
      window.clearTimeout(reactionTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const trail = trailRef.current
    const puppy = puppyRef.current
    if (!trail || !puppy) return

    const activeTrail = trail
    const activePuppy = puppy
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let cursorPoint: Point | null = null
    let puppyTrailPoint: Point | null = null
    let previousPuppyPoint: Point | null = null
    let facing = 1
    let animationFrame = 0
    let movingTimeout = 0

    function updatePuppy() {
      animationFrame = 0
      if (reducedMotion.matches) return

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0
      const width = window.innerWidth
      const height = window.innerHeight
      const collage = document.querySelector<HTMLElement>('.home-hero .hero-puppy-collage')
      const scallop = document.querySelector<HTMLElement>('.home-hero .hero-puppy-collage__scallop')
      const mode = pathname === '/' && progress <= 0.01
        ? 'hero'
        : progress >= 0.995
          ? 'basket'
          : 'running'
      const x = Math.min(
        width - 48,
        Math.max(48, width / 2 + Math.sin(progress * Math.PI * 6) * width * 0.38),
      )
      const collageBounds = collage?.getBoundingClientRect()
      const scallopBounds = scallop?.getBoundingClientRect()
      const y = mode === 'hero' && collageBounds
        ? scallopBounds?.top ?? collageBounds.bottom - Math.min(200, Math.max(140, width * 0.155))
        : mode === 'basket'
          ? height - (window.matchMedia('(max-width: 63.999rem)').matches ? 7.5 : 1.5) * 16 - 76
          : height * (0.72 - progress * 0.42)

      if (previousPuppyPoint) {
        if (Math.abs(x - previousPuppyPoint.x) > 0.5) {
          facing = x > previousPuppyPoint.x ? 1 : -1
        }
      } else {
        facing = Math.cos(progress * Math.PI * 6) >= 0 ? 1 : -1
      }

      const hasMoved = previousPuppyPoint !== null &&
        (Math.abs(x - previousPuppyPoint.x) > 0.5 || Math.abs(y - previousPuppyPoint.y) > 0.5)
      activePuppy.dataset.mode = mode
      if (hasMoved && mode === 'running') {
        activePuppy.dataset.moving = 'true'
        window.clearTimeout(movingTimeout)
        movingTimeout = window.setTimeout(() => {
          activePuppy.dataset.moving = 'false'
        }, 190)
      } else if (mode !== 'running') {
        activePuppy.dataset.moving = 'false'
        window.clearTimeout(movingTimeout)
      }

      activePuppy.dataset.facing = facing === 1 ? 'right' : 'left'
      activePuppy.style.transform = mode === 'basket'
        ? 'translate3d(0, 0, 0)'
        : mode === 'hero' && collageBounds
          ? `translate3d(${collageBounds.left + collageBounds.width / 2}px, ${y}px, 0) translate(-50%, -100%)`
          : `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scaleX(${facing})`
      activePuppy.style.opacity = mode === 'running' ? `${Math.min(1, (1 - progress) / 0.06)}` : '1'

      const nextPuppyTrailPoint = { x: x - facing * 32, y: y + 13 }
      if (puppyTrailPoint && mode === 'running') {
        puppyTrailPoint = leavePawprints(activeTrail, puppyTrailPoint, nextPuppyTrailPoint, 'puppy')
      } else {
        puppyTrailPoint = nextPuppyTrailPoint
      }

      previousPuppyPoint = { x, y }
    }

    function schedulePuppyUpdate() {
      if (!animationFrame && !reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(updatePuppy)
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType !== 'mouse') return

      const nextPoint = { x: event.clientX, y: event.clientY }
      if (cursorPoint) {
        cursorPoint = leavePawprints(activeTrail, cursorPoint, nextPoint, 'cursor')
      } else {
        cursorPoint = nextPoint
      }
    }

    function handlePointerLeave(event: PointerEvent) {
      if (!event.relatedTarget) cursorPoint = null
    }

    function handleMotionPreferenceChange() {
      if (reducedMotion.matches) {
        if (animationFrame) window.cancelAnimationFrame(animationFrame)
        animationFrame = 0
        puppyTrailPoint = null
        previousPuppyPoint = null
      } else {
        schedulePuppyUpdate()
      }
    }

    window.addEventListener('scroll', schedulePuppyUpdate, { passive: true })
    window.addEventListener('resize', schedulePuppyUpdate, { passive: true })
    document.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    reducedMotion.addEventListener('change', handleMotionPreferenceChange)

    const resizeObserver = new ResizeObserver(schedulePuppyUpdate)
    resizeObserver.observe(document.documentElement)
    updatePuppy()

    return () => {
      window.removeEventListener('scroll', schedulePuppyUpdate)
      window.removeEventListener('resize', schedulePuppyUpdate)
      document.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
      reducedMotion.removeEventListener('change', handleMotionPreferenceChange)
      resizeObserver.disconnect()
      window.clearTimeout(movingTimeout)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [pathname])

  return (
    <div className="puppy-trail">
      <div aria-hidden="true" className="puppy-trail__prints" ref={trailRef} />
      <button
        aria-label="Make the puppy say hello"
        aria-pressed={isReacting}
        className="puppy-trail__puppy"
        data-facing="right"
        data-mode="running"
        data-moving="false"
        data-reacting={isReacting}
        onClick={handlePuppyClick}
        ref={puppyRef}
        type="button"
      >
        <span aria-live="polite" className="puppy-trail__speech">
          {isReacting ? 'I love it, woof!' : ''}
        </span>
        <svg className="puppy-trail__art" viewBox="0 0 120 100">
          <path
            className="puppy-trail__tail"
            d="M25 58C12 56 7 47 12 38c3-5 9-5 12 0l8 13"
          />
          <ellipse className="puppy-trail__body" cx="52" cy="63" rx="34" ry="22" />
          <path className="puppy-trail__leg puppy-trail__leg--back" d="m32 73-3 15" />
          <path className="puppy-trail__leg puppy-trail__leg--back" d="m48 78 1 11" />
          <path className="puppy-trail__leg puppy-trail__leg--front" d="m69 76-3 13" />
          <path className="puppy-trail__leg puppy-trail__leg--front" d="m82 70 4 18" />
          <path className="puppy-trail__head-ear" d="M72 31c-10-17-2-29 7-25 8 4 8 17 6 27" />
          <path className="puppy-trail__head-ear puppy-trail__head-ear--far" d="M98 31c4-18 17-17 17-7 0 8-7 15-13 18" />
          <circle className="puppy-trail__head" cx="91" cy="39" r="24" />
          <ellipse className="puppy-trail__muzzle" cx="99" cy="49" rx="13" ry="9" />
          <circle className="puppy-trail__eye" cx="97" cy="35" r="2.2" />
          <ellipse className="puppy-trail__nose" cx="108" cy="46" rx="3.3" ry="2.5" />
          <path className="puppy-trail__smile" d="M104 54q-4 5-9 1" />
          <ellipse className="puppy-trail__open-mouth" cx="103" cy="55" rx="5" ry="6" />
          <ellipse className="puppy-trail__tongue" cx="103" cy="59" rx="2.5" ry="1.8" />
        </svg>
        <PuppyFace className="puppy-trail__hero-face" fitBottom />
        <div className="puppy-trail__basket-scene">
          <div className="puppy-trail__basket-handle" />
          <PuppyFace className="puppy-trail__basket-face" />
          <div className="puppy-trail__basket">
            <span />
            <span />
            <span />
          </div>
        </div>
      </button>
    </div>
  )
}
