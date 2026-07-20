import { useEffect, useRef } from 'react'

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const image = images[index]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 px-6 py-16 md:px-16"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-[32px] leading-none text-paper transition-opacity hover:opacity-70"
      >
        &times;
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous image"
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 text-[36px] text-paper transition-opacity hover:opacity-70 md:left-8"
      >
        &#8249;
      </button>

      <div className="flex h-full max-h-[580px] w-full max-w-[790px] items-center justify-center">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next image"
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 text-[36px] text-paper transition-opacity hover:opacity-70 md:right-8"
      >
        &#8250;
      </button>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[14px] text-paper">
        {index + 1} / {images.length}
      </p>
    </div>
  )
}
