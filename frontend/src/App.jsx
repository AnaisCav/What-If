import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Description from "../src/components/Description";
import Forum from "./components/Forum";
import { useState } from "react";
import "./index.css";
import Footer from "./components/ Footer";
import CommentForm from "./components/CommentForm";

function App() {
  const [labyrintheToggle, setLabyrintheToggle] = useState(false);
  const [mauvaisGoutToggle, setMauvaisGoutToggle] = useState(false);

  const handleLabyrintheClick = () => {
    setLabyrintheToggle(!labyrintheToggle);
  };

  return (
    <div className={`"" ${mauvaisGoutToggle && " bg-lime-900"}`}>
      <div className="sticky top-0 w-full z-50">
        <Navbar
          labyrintheToggle={labyrintheToggle}
          mauvaisGoutToggle={mauvaisGoutToggle}
        />
        <Toggle
          labyrintheToggle={labyrintheToggle}
          onLabyrintheButtonClick={handleLabyrintheClick}
          mauvaisGoutToggle={mauvaisGoutToggle}
          setMauvaisGoutToggle={setMauvaisGoutToggle}
        />
      </div>
      <Description
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
      />
      <Forum
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
      />
      <CommentForm
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
      />
      <Footer
        labyrintheToggle={labyrintheToggle}
        mauvaisGoutToggle={mauvaisGoutToggle}
      />
    </div>
  );
}

export default App;
