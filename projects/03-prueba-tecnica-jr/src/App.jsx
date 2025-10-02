import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT_URL = "https://catfact.ninja/fact";
const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/{firstWord}?fontSize=50&fontColor=red&json=true`;

export function App() {
  const [fact, setFact] = useState();
  const [imgURL, setImgURL] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(" ")[0];
    // const firstWord = fact.split(' ').slice(0,3).join(' ');
    const threeFirstWords = fact.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const { url } = data;
        setImgURL(url);
      });
  }, [fact]);

  return (
    <main className="main__container">
      <h1>Cat Facts</h1>
      {fact && <p>{fact}</p>}
      {imgURL && <img src={imgURL} alt={`Image using words for ${fact}`} />}
    </main>
  );
}
