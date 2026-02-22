import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

import bg from "../assets/bgR.jpg";
import bur2 from "../assets/bur2.png";
import burger from "../assets/burger.png";

import {
  FLOAT_MAIN,
  FLOAT_SIDE,
  animateBurgersEntrance,
  animateTextEntrance,
  animateCtaEntrance,
  createParallaxHandler,
  setupScrollFade,
  animateButtonMove,
  animateButtonLeave,
} from "../animations/heroAnimations";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Hero = () => {
  const containerRef = useRef();
  const mainBurgerRef = useRef();
  const sideBurgerRef = useRef();
  const textRef = useRef();
  const ctaButtonsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      animateBurgersEntrance(tl, { main: mainBurgerRef, side: sideBurgerRef });
      animateTextEntrance(tl);
      animateCtaEntrance(tl);

      gsap.to(mainBurgerRef.current, FLOAT_MAIN);
      gsap.to(sideBurgerRef.current, FLOAT_SIDE);

      const handleMouseMove = createParallaxHandler({
        main: mainBurgerRef,
        side: sideBurgerRef,
        text: textRef,
      });
      window.addEventListener("mousemove", handleMouseMove);

      setupScrollFade(containerRef);

      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleBtnMove = (e, i) =>
    animateButtonMove(ctaButtonsRef.current[i], e);
  const handleBtnLeave = (i) => animateButtonLeave(ctaButtonsRef.current[i]);

  return (
    <section
      ref={containerRef}
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center md:justify-start overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, perspective: "1000px" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Background title */}
      <h1 className="big-title uppercase text-[6rem] md:text-[16rem] text-center tracking-[1rem] md:tracking-[2rem] text-white/5 font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
        BURGERS
      </h1>

      {/* Main burger */}
      <img
        ref={mainBurgerRef}
        className="hidden md:block absolute top-[20%] left-1/2 -translate-x-1/2 w-72 md:w-96 z-20 transform-gpu"
        style={{
          filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
          transformStyle: "preserve-3d",
        }}
        src={burger}
        alt="burger main"
      />

      {/* Side burger */}
      <img
        ref={sideBurgerRef}
        className="hidden md:block absolute top-[30%] right-[8%] w-52 md:w-72 drop-shadow-2xl transform-gpu"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
          transformStyle: "preserve-3d",
        }}
        src={bur2}
        alt="burger side"
      />

      {/* Text content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-20 w-full md:w-[55%] gap-5 md:gap-6 pt-20 transform-gpu"
      >
        <div className="hero-word inline-flex items-center gap-2 w-fit px-4 py-1 rounded-full border border-[#e8a045]/40 text-[#e8a045] text-xs tracking-[0.3em] uppercase backdrop-blur-sm bg-black/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a045] animate-pulse" />
          Fresh · Flame Grilled · Street Style
        </div>

        <div className="overflow-hidden">
          <h1
            className="leading-none font-black"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <span className="hero-word block tracking-[-1px] md:tracking-[-3px] text-white text-5xl md:text-8xl drop-shadow-lg">
              STREET
            </span>
            <span
              className="hero-word block tracking-[-1px] md:tracking-[-3px] text-[#e8a045] text-5xl md:text-8xl relative"
              style={{
                textShadow:
                  "0 0 60px rgba(232,160,69,0.45), 0 0 120px rgba(232,160,69,0.2)",
              }}
            >
              BURGER
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] animate-shine" />
            </span>
          </h1>
        </div>

        <p className="hero-word text-white/35 text-sm font-light tracking-[0.5em] uppercase">
          Est. 2026 &nbsp;·&nbsp; Casablanca
        </p>

        <p
          className="hero-desc text-white/65 text-sm md:text-lg leading-relaxed max-w-xs md:max-w-md backdrop-blur-sm"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Chaque burger est une œuvre d'art — viandes fraîches sélectionnées,
          sauces maison exclusives, et des saveurs qui restent gravées dans la
          mémoire. Venez vivre l'expérience Street.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-2 w-full md:w-auto">
          <button
            ref={(el) => (ctaButtonsRef.current[0] = el)}
            onMouseMove={(e) => handleBtnMove(e, 0)}
            onMouseLeave={() => handleBtnLeave(0)}
            className="hero-cta w-full md:w-auto px-8 py-3 font-bold text-xs md:text-sm tracking-widest uppercase rounded-full text-black transition-all duration-300 cursor-pointer relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #e8a045, #c4832a)",
              boxShadow: "0 8px 30px rgba(232,160,69,0.4)",
            }}
          >
            <span className="relative z-10">Order Now</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            ref={(el) => (ctaButtonsRef.current[1] = el)}
            onMouseMove={(e) => handleBtnMove(e, 1)}
            onMouseLeave={() => handleBtnLeave(1)}
            className="hero-cta w-full md:w-auto px-8 py-3 font-bold text-xs md:text-sm tracking-widest uppercase rounded-full text-white border border-white/25 hover:border-[#e8a045] hover:text-[#e8a045] transition-all duration-300 cursor-pointer backdrop-blur-sm bg-white/5"
          >
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
