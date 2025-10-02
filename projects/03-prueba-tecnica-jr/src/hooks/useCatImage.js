import { useState, useEffect } from "react";

const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/{firstWord}?fontSize=50&fontColor=red&json=true`;

export function useCatImage({ fact }) {
  const [imgURL, setImgURL] = useState();

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

  return { imgURL };
}