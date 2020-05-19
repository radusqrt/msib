import React, { useState } from "react";
import FileUpload from "./FileUpload";
import RecommendationTable from "./RecommendationTable";
import Credits from "./Credits";

const Homepage = () => {
  const [recommendation, setRecommendation] = useState(null);
  return (
    <div>
      <h4>
        Pentru a vă genera un set aleatoriu de alimente care vă plac și care
        stimulează toți cei cinci stâlpi ai sănătății (angiogeneza, regenerarea,
        microbiomul, protecția ADN-ului și imunitatea), descărcați tabelul de{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/14A7PC1KYCFOYDbQ4iNCT7IO6pR-T4zQSVe8Uo7EgxYE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          aici
        </a>{" "}
        sub format <b>.xlsx</b> sau <b>.csv</b>, marcați cu <b>DA</b> toate
        alimentele care vă plac și încărcați-l folosind formularul de mai jos.
      </h4>
      &nbsp;
      <FileUpload callback={setRecommendation} />
      <RecommendationTable recommendation={recommendation} />
      <Credits />
    </div>
  );
};

export default Homepage;
