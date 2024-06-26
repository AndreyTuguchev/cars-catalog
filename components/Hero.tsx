'use client';

/**
 *
 * LIST OF ADDITIONAL TASKS:
 *
 * Add API data caching for 24 hours to minimize the API calls
 * Save each image in /public/ directory and name it properly
 *
 */

//  https://www.youtube.com/watch?v=pUNSHPyVryU
//  Current time:
// https://youtu.be/pUNSHPyVryU?t=10824

import Image from 'next/image';

import React from 'react';
import CustomButton from './CustomButton';

let Hero = () => {
    const handleScroll = () => {
        setTimeout(function(){
            document.querySelector('.filter-cars-section')?.scrollIntoView();
        }, 200);
    };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
            {/* Find, book or rent a car - quickly and easily! */}
            Find any car - quickly and easily!
        </h1>
        {/* <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p> */}

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero-image-bmw.png"
            alt="hero"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
