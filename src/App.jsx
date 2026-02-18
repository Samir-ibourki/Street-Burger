import gsap from "gsap";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
