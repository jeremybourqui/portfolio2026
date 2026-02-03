import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../EmblaCarouselArrowButtons/EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from '../EmblaCarouselDotButton/EmblaCarouselDotButton'
import './embla.css'


const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true, align: 'start' })
  const [lightboxSrc, setLightboxSrc] = React.useState(null)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="embla__slide__img" onClick={() => setLightboxSrc(image)} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>

      {lightboxSrc && (
        <div className="embla__lightbox" onClick={() => setLightboxSrc(null)}>
          <button className="embla__lightbox__close" onClick={() => setLightboxSrc(null)} aria-label="Close">&#x2715;</button>
          <img src={lightboxSrc} alt="Enlarged" className="embla__lightbox__img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}

export default EmblaCarousel