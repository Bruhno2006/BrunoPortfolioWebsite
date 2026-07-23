import React from "react";
import { schools } from "../data/educationData.json";

function EducationTable() {
  return (
    <div>
      {schools.map((item, idx) => {
        return (
        <div key={idx}>
          <h1>{item.name}</h1>
          <h2>{item.course}</h2>
          <h2>{item.duration}</h2>
          <table>

          </table>
        </div>
        );

      })}
    </div>
  );
}

export default EducationTable;