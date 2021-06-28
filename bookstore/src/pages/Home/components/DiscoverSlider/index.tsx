import { useKeenSlider } from 'keen-slider/react';
import { RefObject } from 'react';
import { DiscoverCard } from '../DiscoverCard';

export function DiscoverSlider() {
  const [sliderRef] = useKeenSlider({
    spacing: 8,
    rubberband: false,
    loop: true,
    centered: true,
    slidesPerView: 1,

    breakpoints: {
      '(min-width: 540px)': {
        slidesPerView: 2,
      },

      '(min-width: 875px)': {
        slidesPerView: 3,
      },
    },
  });

  return (
    <div ref={sliderRef as RefObject<HTMLDivElement>} className="keen-slider">
      <div className="keen-slider__slide">
        <DiscoverCard isOdd />
      </div>
      <div className="keen-slider__slide">
        <DiscoverCard isOdd={false} />
      </div>
      <div className="keen-slider__slide">
        <DiscoverCard isOdd />
      </div>
      <div className="keen-slider__slide">
        <DiscoverCard isOdd={false} />
      </div>
      <div className="keen-slider__slide">
        <DiscoverCard isOdd />
      </div>
      <div className="keen-slider__slide">
        <DiscoverCard isOdd={false} />
      </div>
    </div>
  );
}
