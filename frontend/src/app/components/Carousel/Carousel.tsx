'use client'
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import FundraisingProgress from './Components/Progres';
import Title from './Components/Title';
import PrevButton from './Components/PrevButton';
import NextButton from './Components/NextButton';

const images = [
  '/imgs/carousel.svg',
  '/imgs/carousel.svg',
  '/imgs/carousel.svg',
  '/imgs/carousel.svg',
  '/imgs/carousel.svg',
  '/imgs/carousel.svg',
  '/imgs/carousel.svg',
  '/imgs/carousel.svg',
];

const Dots = ({ total, current }) => {
  return (
    <div className="flex justify-center space-x-2 absolute bottom-4">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`block w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`}
        ></span>
      ))}
    </div>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const raisedAmount = 15000; // Înlocuiește cu suma reală
  const goalAmount = 74000; 

  return (
    <div className="relative flex justify-center h-full bg-black">
      <div className="flex items-center justify-center w-full">
        <PrevButton onClick={prevSlide}/>
        <div className="w-full overflow-hidden relative flex justify-center">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, width: '85%' }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative max-w-full h-screen flex-shrink-0 mx-4 flex items-center max-2xl:w-auto max-2xl:h-full">
                <Image src={image} alt={`Slide ${index}`} width={1587} height={0} objectFit="cover" className='h-[925px]' />
                {index === currentIndex && (
                  <div>
                      <div className="absolute top-0 left-0 w-3/6 h-[1000px] mt-3 bg-gradient-to-r from-black  to-transparent opacity-80 text-white p-10 space-y-56">
                          <Title/>
                          <FundraisingProgress raisedAmount={raisedAmount} goalAmount={goalAmount} />
                      </div>
                  </div>                   
                )}
              </div>
            ))}
          </div>
        </div>
        <NextButton onClick={nextSlide}/>
      </div>
      <Dots total={images.length} current={currentIndex} />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
        <div className="w-1/6 overflow-hidden">
          <Image src={images[(currentIndex - 1 + images.length) % images.length]} alt="Previous slide" width={400} height={150} objectFit="cover" className="opacity-0" />
        </div>
        <div className="w-1/6 overflow-hidden">
          <Image src={images[(currentIndex + 1) % images.length]} alt="Next slide" width={200} height={150} objectFit="cover" className="opacity-0" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
