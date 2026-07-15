import React, { useState } from "react";
import "./Carousel.css";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === totalSlides - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? totalSlides - 1 : slide - 1);
  };

  const totalSlides = data.length;

  const getSlidePosition = (idx) => {
    if (slide === idx) {
      console.log(idx + " " + "slide-active");
      return "slide-active";
    }

    const leftIdx = (slide - 1 + totalSlides) % totalSlides;
    
    if (idx == leftIdx) {
      console.log(idx + " " + "slide-left");
      return "slide-left";
    }

    const rightIdx = (slide + 1) % totalSlides;

    if (idx == rightIdx) {
      console.log(idx + " " + "slide-right");
      return "slide-right";
    }
    
    console.log(idx + " " + "slide-hidden");
    return "slide-hidden";
}

  return (
    <div className="carousel">
      <ArrowBigLeftDash fill="white" stroke="white" size={30} className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} className={getSlidePosition(idx)} />
      })}
      <ArrowBigRightDash fill="white" stroke="white" size={30} className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, idx) => {
          return <button keys={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator-inactive"}>

          </button>
        })}
      </span>
    </div>
  );
}

export default Carousel;