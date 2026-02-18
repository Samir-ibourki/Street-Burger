import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.png";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".nav-link",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      },
    );

    gsap.fromTo(
      ".header-logo",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
    );

    gsap.fromTo(
      ".header-btn",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
    );

    ScrollTrigger.create({
      trigger: "body",
      start: "80px top",
      onEnter: () => {
        gsap.to("header", {
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(12px)",
          duration: 0.4,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to("header", {
          backgroundColor: "#2e2014",
          backdropFilter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });
  });

  return (
    <header
      className="h-11 fixed w-full z-50 flex justify-between items-center py-8 px-8 md:px-16 transition-all"
      style={{ backgroundColor: "#2e2014" }}
    >
      {/* Logo */}
      <div className="header-logo w-14 h-14">
        <img
          className="w-full h-full object-contain"
          src={logo}
          alt="Street Burger Logo"
        />
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-10">
        {["Home", "Menu", "Contact Us"].map((item) => (
          <a
            key={item}
            href="#"
            className="nav-link relative text-sm text-white/80 hover:text-[#e8a045] transition-colors duration-300 group"
          >
            {item}
            {/* underline hover effect */}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e8a045] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Order Now */}
      <button
        className="header-btn cursor-pointer px-5 py-2 text-sm font-bold tracking-widest uppercase rounded-full text-black transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #e8a045, #c4832a)",
          boxShadow: "0 4px 20px rgba(232,160,69,0.35)",
        }}
      >
        Order Now
      </button>
    </header>
  );
};

export default Header;
