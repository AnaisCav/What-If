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

  const handleLabyrintheClick = () => {
    setLabyrintheToggle(!labyrintheToggle);
  };
  const handleALenverClick = () => {
    setALenver(!aLenver);
  };
  return (
    <div className={`${aLenver && "rotate-180 cursor-none"}`}>
      <div className={`"sticky top-0 w-full z-50" ${aLenver && "fix"}`}>
        <Navbar labyrintheToggle={labyrintheToggle} />
        <Toggle
          labyrintheToggle={labyrintheToggle}
          onLabyrintheButtonClick={handleLabyrintheClick}
          aLenver={aLenver}
          onALenverButtonClick={handleALenverClick}
        />
      </div>
      {aLenver && <InverseMouseCursor />} {InverseMouseCursor}
      <Description labyrintheToggle={labyrintheToggle} />
      <Forum labyrintheToggle={labyrintheToggle} />
      <CommentForm labyrintheToggle={labyrintheToggle} />
      <Footer labyrintheToggle={labyrintheToggle} />
    </div>
  );
}

export default App;
