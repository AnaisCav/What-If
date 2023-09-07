import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Description from "../src/components/Description";
import Forum from "./components/Forum";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen  bg-primary">
      <Navbar />
      <Toggle />
      <Description />;
      <Forum />
    </div>
  );
}

export default App;
