import React, { useState, useEffect } from "react";
import { schools } from "../data/educationData.json";
import "./style/EducationTable.css"

function EducationTable() {
  const [contentIndex, setContentIndex] = useState(0);
  const totalContents = schools.length;

  const nextContent = () => {
    setContent(content === totalContents - 1 ? 0 : content + 1);
  }

  const getVisibility = (idx) => {
    if (contentIndex === idx) {
      return "content-active"
    }

    return "content-hidden";
  }

  const getContainerVisibility = (state) => {
    if (state === "content-active") {
      return "content-container-active";
    } else {
      return "content-container-hidden";
    }
  }

  useEffect(() => {
    if (totalContents <= 1) return;

    const interval = setInterval(() => {
      setContentIndex((prev) => (prev === totalContents - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalContents]);

  useEffect(() => {
    if (!schools || schools.length === 0) {
      return;
    }

    const prevIndex = contentIndex === 0 ? totalContents - 1 : contentIndex - 1;
    const previousColour = schools[prevIndex].main_colour;
    const currentColour = schools[contentIndex].main_colour;

    setPreviousBackgroundColour(previousColour);
    setCurrentBackgroundColour(currentColour);
  }, [contentIndex, totalContents]);


  const setCurrentBackgroundColour = (colour) => {
    var root = document.documentElement;

    root.style.setProperty('--current-background-colour', colour);
  }

  const setPreviousBackgroundColour = (colour) => {
    var root = document.documentElement;

    root.style.setProperty('--previous-background-colour', colour);
  }

  return (
    <div>
      <div className="content-carousel">
        {schools.map((item, idx) => {
          return (
            <div className={getContainerVisibility(getVisibility(idx))} key={idx}>
              <div className={getVisibility(idx)}>
                <div>
                  <img className="school-logo" src={item.logo} alt={item.alt} />
                </div>
                <div className="education-information">
                  <h1>{item.name}</h1>
                  <h2>{item.course}</h2>
                  <h2>{item.duration}</h2>
                  <div className="results-overview">
                    {item.results.map((result, idx) => {
                      return (
                        <div key={idx}>
                          <p>Year {idx + 1}: {result}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="short-overview-carousel">
        {schools.map((item, idx) => {
          return (
            <div className={getContainerVisibility(getVisibility(idx))} key={idx}>
              <div className={getVisibility(idx)}>
                <div>
                  <img className="school-logo" src={item.logo} alt={item.alt} />
                </div>
                <div className="education-information">
                  <h1>{item.name}</h1>
                  <h2>{item.course}</h2>
                  <h2>{item.duration}</h2>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default EducationTable;