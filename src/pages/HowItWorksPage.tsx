import { useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, MapPin, Plane } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { ProcessStep } from '../components/home/ProcessStep'
import { SectionHeading } from '../components/ui/SectionHeading'
import { deliveryPoints, journeyPaths, puppyPromise, whyChooseUs } from '../data/howItWorks'
import { whatsappUrl } from '../data/site'

export function HowItWorksPage() {
  const [activePath, setActivePath] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const selectedPath = journeyPaths[activePath]

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % journeyPaths.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + journeyPaths.length) % journeyPaths.length
    } else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = journeyPaths.length - 1
    else return

    event.preventDefault()
    setActivePath(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="information-page how-page">
      <section aria-labelledby="how-title" className="information-hero">
        <Container className="information-hero__inner">
          <div>
            <p className="eyebrow">a little guidance, a lot of love</p>
            <SectionHeading
              description="Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable."
              headingId="how-title"
              level={1}
              title="How it works"
            />
          </div>
          <nav aria-label="On this page" className="section-index">
            <a href="#two-ways"><span>1</span> Two ways home</a>
            <a href="#promise"><span>2</span> Our premium puppy promise</a>
            <a href="#delivery"><span>3</span> Delivery & collection</a>
            <a href="#why"><span>4</span> Why choose us</a>
          </nav>
        </Container>
      </section>

      <section aria-labelledby="two-ways-title" className="information-section two-ways-page" id="two-ways">
        <Container>
          <div className="information-section__heading">
            <p className="eyebrow">choose your way</p>
            <SectionHeading headingId="two-ways-title" title="Two ways home" />
          </div>
          <div aria-label="Ways to bring your puppy home" className="journey-tabs" role="tablist">
            {journeyPaths.map((path, index) => (
              <button
                aria-controls="journey-panel"
                aria-selected={activePath === index}
                className="journey-tab"
                id={`journey-tab-${path.id}`}
                key={path.id}
                onClick={() => setActivePath(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                ref={(element) => {
                  tabRefs.current[index] = element
                }}
                role="tab"
                tabIndex={activePath === index ? 0 : -1}
                type="button"
              >
                <span>{path.label}</span>
                <small>{path.sublabel}</small>
              </button>
            ))}
          </div>
          <div
            aria-labelledby={`journey-tab-${selectedPath.id}`}
            className="journey-panel"
            id="journey-panel"
            role="tabpanel"
            tabIndex={0}
          >
            <div className="journey-panel__intro">
              <div>
                <h3>{selectedPath.title}</h3>
                <p>{selectedPath.description}</p>
                <span className="journey-panel__location">
                  {activePath === 0 ? <MapPin aria-hidden="true" size={17} /> : <Plane aria-hidden="true" size={18} />}
                  {selectedPath.imageLabel}
                </span>
              </div>
              <ImageWithFallback
                alt={selectedPath.imageAlt}
                aspectRatio="1.42"
                height={420}
                loading="lazy"
                src={selectedPath.image}
                width={600}
              />
            </div>
            <ol className="journey-panel__steps">
              {selectedPath.steps.map((step) => (
                <ProcessStep key={`${selectedPath.id}-${step.number}`} step={step} />
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section aria-labelledby="promise-title" className="information-section promise-section" id="promise">
        <Container>
          <p className="eyebrow">puppy passport</p>
          <SectionHeading headingId="promise-title" title="Our premium puppy promise" />
          <ul className="information-cards information-cards--three">
            {puppyPromise.map((point, index) => (
              <li key={point.title}>
                <span className="information-card__number">0{index + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="delivery-title" className="information-section delivery-section" id="delivery">
        <Container className="delivery-layout">
          <div>
            <SectionHeading
              description="From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely."
              headingId="delivery-title"
              title="Delivery & collection"
            />
            <ul className="delivery-list">
              {deliveryPoints.map((point, index) => (
                <li key={point.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div aria-label="Flight route from Korea to Dubai" className="delivery-route">
            <div className="delivery-route__labels"><span>Korea</span><span>Dubai</span></div>
            <span aria-hidden="true" className="delivery-route__path" />
            <Plane aria-hidden="true" className="delivery-route__plane" size={36} />
            <ImageWithFallback
              alt="Female Korean Teacup Maltipoo puppy"
              aspectRatio="0.8"
              className="delivery-route__puppy"
              height={340}
              loading="lazy"
              src={journeyPaths[1].image}
              width={270}
            />
          </div>
        </Container>
      </section>

      <section aria-labelledby="why-title" className="information-section why-section" id="why">
        <Container>
          <div className="why-section__intro">
            <SectionHeading
              description="We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love."
              headingId="why-title"
              title="Why choose us"
            />
          </div>
          <ul className="information-cards information-cards--three">
            {whyChooseUs.map((point, index) => (
              <li key={point.title}>
                <span className="information-card__number">0{index + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="quality-title" className="information-section quality-section">
        <Container>
          <div>
            <p className="eyebrow">here for every little paw</p>
            <SectionHeading
              description="When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend."
              headingId="quality-title"
              title="Unique and high quality puppies"
            />
            <div className="quality-section__actions">
              <a className="button button--primary" href={whatsappUrl} rel="noreferrer" target="_blank">Ask us on WhatsApp</a>
              <Link className="button button--secondary" to="/puppies">See available puppies</Link>
            </div>
          </div>
          <ArrowDown aria-hidden="true" className="quality-section__mark" size={56} />
        </Container>
      </section>
    </div>
  )
}