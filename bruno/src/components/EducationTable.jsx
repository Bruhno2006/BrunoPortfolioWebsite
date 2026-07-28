import React, { useState, useEffect } from "react";
import { schools } from "../data/educationData.json";
import "./style/EducationTable.css"

function EducationTable() {
  const [content, setContent] = useState(0);
  const [counter, setCounter] = useState(0);

  const totalContents = schools.length;

  const nextContent = () => {
    setContent(content === totalContents - 1 ? 0 : content + 1);
  }

  const getVisibility = (idx) => {
    if (content === idx) {
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
      nextContent();

      setCounter((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);

  }, [content, totalContents])

  return (
    <div className="content-carousel">
      {schools.map((item, idx) => {
        return (
          <div className={getContainerVisibility(getVisibility(idx))} key={idx}>
            <div className={getVisibility(idx)}>
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
        );
      })}
    </div>
  );
}

export default EducationTable;