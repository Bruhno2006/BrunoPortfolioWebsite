import React, {useState} from "react";
import "./Carousel.css";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);


  return (
    <div className="carousel">
      <ArrowBigLeftDash fill="white" stroke="white" size={30} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide-hidden"} />
      })}
      <ArrowBigRightDash fill="white" stroke="white" size={30} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => {
          return <button keys={idx} onClick={null} className={slide === idx ? "indicator" : "indicator-inactive"}>

          </button>
        })}
      </span>
    </div>
  );
}

export default Carousel;