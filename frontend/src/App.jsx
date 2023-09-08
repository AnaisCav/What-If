import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Description from "../src/components/Description";
import Forum from "./components/Forum";
import { useState, useEffect } from "react";
import "./index.css";
import Footer from "./components/ Footer";
import CommentForm from "./components/CommentForm";
import InverseMouseCursor from "./components/InverseMouseCursor";

function App() {
  const [labyrintheToggle, setLabyrintheToggle] = useState(false);

  const [aLenver, setALenver] = useState(false);

  const [mauvaisGoutToggle, setMauvaisGoutToggle] = useState(false);

  const [zoomToggle, setZoomToggle] = useState(false);

  const handleLabyrintheClick = () => {
    setLabyrintheToggle(!labyrintheToggle);
  };

  const handleALenverClick = () => {
    setALenver(!aLenver);
  };

  return (
    <div
      className={` ${aLenver && "rotate-180 cursor-none"} ${
        mauvaisGoutToggle && " bg-lime-900"
      } ${zoomToggle && "text-custom"}`}
    >
      <div className={`"sticky top-0 w-full z-50" ${aLenver && "fix"}`}>
        <Navbar
          labyrintheToggle={labyrintheToggle}
          mauvaisGoutToggle={mauvaisGoutToggle}
          zoomToggle={zoomToggle}
        />
        <Toggle
          labyrintheToggle={labyrintheToggle}
          onLabyrintheButtonClick={handleLabyrintheClick}
          mauvaisGoutToggle={mauvaisGoutToggle}
          setMauvaisGoutToggle={setMauvaisGoutToggle}
          aLenver={aLenver}
          onALenverButtonClick={handleALenverClick}
          zoomToggle={zoomToggle}
          setZoomToggle={setZoomToggle}
        />
      </div>
      {aLenver && <InverseMouseCursor />} {InverseMouseCursor}
      <Description
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
        aLenver={aLenver}
        zoomToggle={zoomToggle}
      />
      <Forum
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
        zoomToggle={zoomToggle}
      />
      <CommentForm
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
        zoomToggle={zoomToggle}
      />
      <Footer
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
        zoomToggle={zoomToggle}
      />
    </div>
  );
}

export default App;
