'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SlideData {
  title: string;
  content: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty('--x', `${x}px`);
      slideRef.current.style.setProperty('--y', `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = '1';
  };

  const { src, content, title } = slide;

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div>
      <li
        ref={slideRef}
        className='flex items-center md:px-[55px] px-[30px] flex-1 relative opacity-100 transition-all duration-300 ease-in-out md:w-[60vw] w-[80vw] h-[523px] mx-[10px] z-10 rounded-[12px] overflow-hidden'
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? 'scale(0.98) rotateX(8deg)'
              : 'scale(1) rotateX(0deg) translateY(-68px)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'bottom',
        }}>
        <div
          className='absolute top-0 left-0 w-full h-full bg-[#F6FAF3] rounded-[12px] overflow-hidden transition-all duration-150 ease-out'
          style={{
            transform:
              current === index
                ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)'
                : 'none',
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='absolute right-0 md:left-[60%] md:top-[10%] left-0 object-cover bottom-0 w-[120%] h-[120%] opacity-100 transition-opacity duration-600 ease-in-out rounded-[12px]'
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading='eager'
            decoding='sync'
          />
        </div>

        <motion.article
          initial='hidden'
          animate={current === index ? 'visible' : 'hidden'}
          variants={contentVariants}
          className='relative z-10 md:ml-8'>
          <motion.h2
            variants={itemVariants}
            className='text-lg md:text-xl text-white md:text-[#828282] font-semibold relative'>
            {title}
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className='md:max-w-[345px] text-white md:text-black md:text-[42px] md:tracking-[-2px] font-semibold md:leading-[50px] mt-4'>
            {content}
          </motion.h3>

          <motion.div variants={itemVariants} className='mt-6'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#0A2FB8] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#03217F] transition-colors'>
              Learn More
            </motion.button>
          </motion.div>
        </motion.article>
      </li>
    </div>
  );
};

interface CarouselProps {
  slides: SlideData[];
  initialIndex?: number;
}

export function Carousel({ slides, initialIndex = 1 }: CarouselProps) {
  const [current, setCurrent] = useState(initialIndex);

  // Update current slide when initialIndex changes
  useEffect(() => {
    setCurrent(initialIndex + 1);
  }, [initialIndex]);

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className='relative md:w-[60vw] w-[80vw] h-[523px] mx-auto'
      aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className='absolute flex mx-[-30px] transition-transform duration-1000 ease-in-out'
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      {/* <div className='absolute flex justify-center w-full top-[calc(100%+1rem)]'>
        <CarouselControl
          type='previous'
          title='Go to previous slide'
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type='next'
          title='Go to next slide'
          handleClick={handleNextClick}
        />
      </div> */}
    </div>
  );
}
