import { Image, SearchBar } from "./Components";
import { useRef, useState, useEffect } from "react";

function App() {
  var multiplier = 1.777;

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{height: windowDimensions.height * 0.9, width: windowDimensions.height * 0.9 / multiplier, border: "2px solid black", overflow: "hidden"}}>
      <Image />
      Beep boop
      <SearchBar/>
    </div>
  );
}

export default App;
