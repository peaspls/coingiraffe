import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'
import useEmblaCarousel from 'embla-carousel-react';

const useStyles = createUseStyles({
  embla: {
    overflow: 'hidden',
    display: 'flex',
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
  const [slide, setSlide] = useState(value);

  useEffect(() => {
    const onSelect = () => {
      const slide = emblaApi.selectedScrollSnap();
      setSlide(slide);

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
    if (emblaApi && slide !== value) {
      const jump = true
      emblaApi.scrollTo(value, jump);
    }
  }, [value]);

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