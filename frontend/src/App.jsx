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
    <div className="relative w-screen min-h-screen bg-primary">
      <div className="sticky top-0 w-full z-50">
        <Navbar labyrintheToggle={labyrintheToggle} />
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
      <Forum labyrintheToggle={labyrintheToggle} />
      <CommentForm />
      <Footer />
    </div>
  );
}

export default App;
