import gsap from "gsap";

// ── Title Entrance 
export const animateMenuTitle = (tl) => {
  tl.fromTo(
    ".menu-badge",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
  )
    .fromTo(
      ".menu-title",
      { y: 60, opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      {
        y: 0,
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.3"
    )
    .fromTo(
      ".menu-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );
};

// ── Card Stagger Reveal 
export const animateMenuCards = (cards) => {
  gsap.fromTo(
    cards,
    { y: 80, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 85%",
      },
    }
  );
};
