import gsap from "gsap";

// ── Section Entrance 
export const animateContactTitle = (tl) => {
  tl.fromTo(
    ".contact-badge",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
  )
    .fromTo(
      ".contact-title",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
      "-=0.3"
    )
    .fromTo(
      ".contact-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );
};

// ── Info Cards Stagger 
export const animateInfoCards = (cards) => {
  gsap.fromTo(
    cards,
    { x: -60, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 85%",
      },
    }
  );
};

// ── Form Entrance 
export const animateForm = (form) => {
  gsap.fromTo(
    form,
    { x: 60, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: form,
        start: "top 85%",
      },
    }
  );
};
