import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Description from "../src/components/Description";
import Forum from "./components/Forum";
import "./index.css";

function App() {
  return (
    <div className="relative w-screen min-h-screen  bg-primary">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
        <Toggle />
      </div>
      <Description />;
      <Forum />
    </div>
  );
}

export default App;
