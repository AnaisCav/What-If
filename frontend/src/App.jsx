import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Description from "../src/components/Description";
import Forum from "./components/Forum";

import "./index.css";
import Footer from "./components/ Footer";
import CommentForm from "./components/CommentForm";

function App() {
  return (
    <div className="relative w-screen min-h-screen bg-primary">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
        <Toggle />
      </div>
      <Description />;
      <Forum />
      <CommentForm />
      <Footer />
    </div>
  );
}

export default App;
