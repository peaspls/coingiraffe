import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss'
import useEmblaCarousel from 'embla-carousel-react';

const useStyles = createUseStyles({
  embla: {
    overflow: 'hidden',
    display: 'flex',
    flexGrow: '1',
  },
  emblaContainer: {
    display: 'flex',
    flexGrow: '1',
  },
  emblaSlide: {
    flex: '0 0 100%',
    minWidth: 0,
    overflowX: 'auto',
  },
});

export default function Carousel(props) {
  const cls = useStyles();
  const { children, onChange, value, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  useEffect(() => {
    const onSelect = () => {
      const slide = emblaApi.selectedScrollSnap();
      if (onChange !== undefined) {
        onChange(slide);
      }
    }

    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }

    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect);
      }
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      const selectedSlide = emblaApi.selectedScrollSnap();
      value !== selectedSlide && emblaApi.scrollTo(value, true);
    }
  }, [value, emblaApi]);

  return (
    <div className={cls.embla} ref={emblaRef}>
      <div className={cls.emblaContainer}>
        {children.map((slide, index) => (
          <div key={index} className={cls.emblaSlide}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}