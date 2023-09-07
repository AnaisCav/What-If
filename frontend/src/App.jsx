import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Description from "../src/components/Description";
import Forum from "./components/Forum";
import { useState } from "react";
import "./index.css";

function App() {
  const [labyrintheToggle, setLabyrintheToggle] = useState(false);
  const handleLabyrintheClick = () => {
    setLabyrintheToggle(!labyrintheToggle);
  };
  return (
    <div
      className={`${
        labyrintheToggle ? "" : "w-screen min-h-screen  bg-primary"
      }`}
    >
      <Navbar labyrintheToggle={labyrintheToggle} />
      <Toggle
        labyrintheToggle={labyrintheToggle}
        onLabyrintheButtonClick={handleLabyrintheClick}
      />
      <Description labyrintheToggle={labyrintheToggle} />
      <Forum labyrintheToggle={labyrintheToggle} />
    </div>
  );
}

export default App;
