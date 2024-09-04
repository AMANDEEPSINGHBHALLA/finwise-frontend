import React from 'react';
import Heroos from '../Homepage/Hero/hero.gif';
import EarlyAccessBtn from "../Homepage/Header Files/RequestEarlyAccessForHome";
import HeroFooter from "../Homepage/HeroFooter";
import CountCards from "../Homepage/CountCards";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Right Image - Displayed first in mobile view */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center order-1 md:order-2 w-full">
            <img 
              src={Heroos} 
              alt="Illustration" 
              className="hero-image"
            />
          </div>

          {/* Left Content - Displayed below the image in mobile view */}
          <div className="flex flex-col items-center md:items-start justify-center h-full space-y-6 text-center md:text-left w-full md:w-1/2 order-2 md:order-1">
            <p id="heading" className="finwise-blue text-5xl md:text-5xl font-bold mb-4">
              Master Your Money with Finwise School
            </p>
            <p id="para" className="text-base md:text-lg mb-4 text-gray-500">
              Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
            </p>
            <div className="mt-6">
              <EarlyAccessBtn />
            </div>
            {/* Center the CountCards component only on mobile */}
            <div className="count-cards-wrapper">
              <CountCards />
            </div>
          </div>
        </div>
      </div>

      {/* HeroFooter */}
      <div className="hero-footer-container">
        <HeroFooter />
      </div>

      {/* Scoped CSS using styled-jsx */}
      <style jsx>{`
        .hero-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        @media (min-width: 640px) {
          .hero-image {
            max-width: 86%;
            margin-right: -20px;
          }
        }

        @media (max-width: 767px) { /* Mobile views */
          #heading {
            font-size: 1.3rem;
            text-align: left;
            margin-left: 0; /* Resetting margin-left */
            max-width: 100%; /* Ensure it does not overflow */
          }
          #para {
            text-align: left;
            max-width: 100%; /* Ensure it does not overflow */
          }
          .flex-col.items-center {
            text-align: left; /* Ensure the text alignment is left for the entire column */
            align-items: flex-start; /* Ensure items are aligned to the start */
          }
          .count-cards-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 1.5rem; /* Adjust the spacing as needed */
          }
        }

        @media (min-width: 768px) {
          #heading {
            font-size: 3rem; /* Or your desired font size for larger screens */
          }
        }

        @media (min-width: 1024px) {
          .hero-image {
            max-width: 101%;
          }
        }

        @media (min-width: 1280px) {
          .hero-image {
            max-width: 101%;
          }
        }

        @media (min-width: 1536px) {
          .hero-image {
            max-width: 101%;
          }
        }

        /* Ensure HeroFooter is not affected by the layout */
        .hero-footer-container {
          width: 100%;
          text-align: center; /* Ensure it's centered in larger layouts */
          margin-top: 2rem; /* Add space between Hero section and footer */
        }

      `}</style>
    </div>
  );
};

export default Hero;
