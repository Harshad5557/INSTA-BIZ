import { useState, type CSSProperties, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'

interface ImageWithFallbackProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> {
  src: string
  alt: string
  aspectRatio?: string
}

export function ImageWithFallback({
  src,
  alt,
  aspectRatio,
  className = '',
  onError,
  style,
  ...props
}: ImageWithFallbackProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  const hasError = failedSource === src
  const imageStyle: CSSProperties = aspectRatio ? { ...style, aspectRatio } : (style ?? {})

  if (hasError) {
    return (
      <span
        aria-label={`${alt} (image unavailable)`}
        className={`image-fallback ${className}`.trim()}
        role="img"
        style={imageStyle}
      >
        <ImageOff aria-hidden="true" size={24} />
      </span>
    )
  }

  return (
    <img
      alt={alt}
      className={className}
      onError={(event) => {
        onError?.(event)
        setFailedSource(src)
      }}
      src={src}
      style={imageStyle}
      {...props}
    />
  )
}