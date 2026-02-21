import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MenuCard from "./MenuCard";
import { MENU_ITEMS } from "../data/menuItems";
import { animateMenuTitle, animateMenuCards } from "../animations/menuAnimations";

gsap.registerPlugin(ScrollTrigger);

export const Menu = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      animateMenuTitle(tl);

      if (cardsRef.current.length) {
        animateMenuCards(cardsRef.current.filter(Boolean));
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a1209 0%, #0d0a05 50%, #1a1209 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#e8a045]/5 blur-[120px] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <div className="menu-badge inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#e8a045]/30 text-[#e8a045] text-xs tracking-[0.3em] uppercase backdrop-blur-sm bg-black/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a045] animate-pulse" />
          Notre Carte
        </div>

        <h2
          className="menu-title text-5xl md:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          NOS <span className="text-[#e8a045]">BURGERS</span>
        </h2>

        <p className="menu-subtitle text-white/40 text-sm tracking-[0.4em] uppercase mt-4">
          Flame Grilled &nbsp;·&nbsp; Handcrafted &nbsp;·&nbsp; Fresh Daily
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {MENU_ITEMS.map((item, i) => (
          <MenuCard
            key={item.name}
            item={item}
            refCallback={(el) => (cardsRef.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
