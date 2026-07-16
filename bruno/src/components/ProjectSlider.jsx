import React, { useState } from "react";
import './style/ProjectSlider.css'
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

function ProjectSlider({ data }) {
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
      return "slide-active";
    }

    const leftIdx = (slide - 1 + totalSlides) % totalSlides;

    if (idx == leftIdx) {
      return "slide-left";
    }

    const rightIdx = (slide + 1) % totalSlides;

    if (idx == rightIdx) {
      return "slide-right";
    }

    return "slide-hidden";
  }

  const getContainerVisibility = (state) => {
    if (state === "slide-active") {
      return "slide-container-active";
    } else {
      return "slide-container-hidden";
    }
  }

  return (
    <div className="carousel">
      <ArrowBigLeftDash fill="white" stroke="white" size={30} className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        return (
          <div className={getSlidePosition(idx)}>
            <img src={item.src} alt={item.alt} key={idx} />
            <div className={getContainerVisibility(getSlidePosition(idx))}>
              <h4 className="slide-title">{item.title}</h4>
              <p className="slide-description">Insert Text Here</p>
            </div>
          </div>
        );
      })}
      <ArrowBigRightDash fill="white" stroke="white" size={30} className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, idx) => {
          return <button keys={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator-inactive"}>

          </button>
        })}
      </span>
    </div >
  );
}

export default ProjectSlider;