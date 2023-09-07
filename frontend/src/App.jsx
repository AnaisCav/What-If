import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Description from "../src/components/Description";
import Forum from "./components/Forum";
import "./index.css";
import Footer from "./components/ Footer";
import CommentForm from "./components/CommentForm";

function App() {
  return (
    <div className="w-full h-full  bg-primary">
      <Navbar />
      <Toggle />
      <Description />;
      <Forum />
      <CommentForm />
      <Footer />
    </div>
  );
}

export default App;
