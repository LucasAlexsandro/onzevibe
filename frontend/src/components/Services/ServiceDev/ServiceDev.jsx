import { useState, useEffect } from "react";
import { ServiceDevContainer, ServiceTitle } from "./Styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "/src/assets/pngwing-1.png",
  "/src/assets/pngwing-2.png",
  "/src/assets/tablet.png",
];

export default function ServiceDev() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <ServiceDevContainer>
      <ServiceTitle>
        <h1>Web Design</h1>
        <p>
          Were pretty sure everyone wants higher conversion rates and better
          recognition. Dont worry, we got you covered!
        </p>
      </ServiceTitle>
      <div className="servicedev-content-area">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slider-image"
        />
      </div>
      <div className="servicedev-slider-controls">
        <button onClick={prevSlide}>
          <i>
            <IoIosArrowBack />
          </i>
        </button>
        <button onClick={nextSlide}>
          <i>
            <IoIosArrowForward />
          </i>
        </button>
      </div>
    </ServiceDevContainer>
  );
}
