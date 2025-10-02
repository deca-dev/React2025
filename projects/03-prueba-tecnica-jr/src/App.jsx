import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import "./App.css";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imgURL } = useCatImage({ fact });

  const handleClick = async () => {
    useCatFact();
  };

  return (
    <main className="main__container">
      <h1>Cat Facts</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imgURL && <img src={imgURL} alt={`Image using words for ${fact}`} />}
    </main>
  );
}
