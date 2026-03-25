import { useState } from 'react';
import './ImageSlider.css';

function CaretLeftIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 3L7.5 8L12.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CaretRightIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 3L12.5 8L7.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface SlideItem {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  slides: SlideItem[];
  showNavigation?: boolean;
  className?: string;
}

export function ImageSlider({
  slides,
  showNavigation = true,
  className,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const count = slides.length;

  function prev() {
    setCurrent(i => (i - 1 + count) % count);
  }

  function next() {
    setCurrent(i => (i + 1) % count);
  }

  const classes = ['image-slider', className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {/* Image */}
      <div className="image-slider-picture">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt ?? ''}
            className={['image-slider-img', i === current ? 'image-slider-img-active' : ''].filter(Boolean).join(' ')}
            aria-hidden={i !== current}
          />
        ))}
      </div>

      {/* Navigation */}
      {showNavigation && count > 1 && (
        <div className="image-slider-nav">
          <button
            className="image-slider-arrow"
            aria-label="Previous slide"
            onClick={prev}
          >
            <CaretLeftIcon />
          </button>

          <div className="image-slider-dots" role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={i}
                className={['image-slider-dot', i === current ? 'image-slider-dot-active' : ''].filter(Boolean).join(' ')}
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <button
            className="image-slider-arrow"
            aria-label="Next slide"
            onClick={next}
          >
            <CaretRightIcon />
          </button>
        </div>
      )}
    </div>
  );
}
