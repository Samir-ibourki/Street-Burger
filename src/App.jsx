import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";

import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Contact } from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Contact />
    </>
  );
}

export default App;
