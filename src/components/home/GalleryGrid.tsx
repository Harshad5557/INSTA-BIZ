import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import type { GalleryItem } from '../../types'
import { ImageWithFallback } from '../ui/ImageWithFallback'

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeIndex === null) {
      if (dialog.open) dialog.close()
      return
    }

    if (!dialog.open) dialog.showModal()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        dialogRef.current?.close()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  return (
    <>
      <ul aria-label="Photos from TeddyPups families" className="family-gallery">
        {items.map((item, index) => (
          <li key={item.image}>
            <button
              aria-label={`Open photo ${index + 1} of ${items.length}: ${item.caption}`}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <ImageWithFallback
                alt={item.alt}
                aspectRatio="0.82"
                height={586}
                loading="lazy"
                src={item.image}
                width={480}
              />
              <span>{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>
      <dialog
        aria-label="Family photo"
        className="gallery-dialog"
        onCancel={() => setActiveIndex(null)}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null)
        }}
        ref={dialogRef}
      >
        {activeIndex !== null && (
          <>
            <button
              aria-label="Close photo"
              className="gallery-dialog__close"
              onClick={() => dialogRef.current?.close()}
              type="button"
            >
              <X aria-hidden="true" size={22} />
            </button>
            <ImageWithFallback
              alt={items[activeIndex].alt}
              height={1200}
              src={items[activeIndex].image}
              width={1000}
            />
            <p>{items[activeIndex].caption}</p>
          </>
        )}
      </dialog>
    </>
  )
}