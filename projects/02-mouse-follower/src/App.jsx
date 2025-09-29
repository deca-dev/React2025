import { useEffect, useState } from "react";
import "./App.css";

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Pointer move
   useEffect(() => {
    const handleMove = () => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    console.log("efecto");
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // Change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    
    return () => {
      document.body.classList.remove('no-cursor')
    }

  }, [enabled])

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Deactivate" : "Activate"} follow mouse
      </button>
    </>
  );
};

function App() {
 
  return (
  <main>
    <FollowMouse/>
  </main>
);
}

export default App;
