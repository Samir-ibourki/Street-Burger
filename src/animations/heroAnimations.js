import gsap from "gsap";

export const FLOAT_MAIN = {
  y: -20,
  rotate: 5,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.5,
};

export const FLOAT_SIDE = {
  y: -15,
  rotate: -5,
  x: 10,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1,
};

export const animateBurgersEntrance = (tl, refs) => {
  const { main, side } = refs;

  tl.fromTo(
    main.current,
    { y: 500, opacity: 0, scale: 0.5, rotateX: 45 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 1.8,
      ease: "elastic.out(1, 0.5)",
    }
  ).fromTo(
    side.current,
    { x: 300, opacity: 0, rotate: 180, scale: 0.3 },
    {
      opacity: 1,
      x: 0,
      rotate: -10,
      scale: 1,
      duration: 1.5,
      ease: "back.out(1.7)",
    },
    "-=1.3"
  );
};

export const animateTextEntrance = (tl) => {
  tl.fromTo(
    ".hero-word",
    {
      y: 100,
      opacity: 0,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    },
    {
      y: 0,
      opacity: 1,
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
    },
    "-=0.8"
  );
};

export const animateCtaEntrance = (tl) => {
  tl.fromTo(
    ".hero-desc",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    "-=0.5"
  ).fromTo(
    ".hero-cta",
    { y: 20, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    },
    "-=0.4"
  );
};

export const createParallaxHandler = (refs) => {
  const { main, side, text } = refs;

  return (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
    const tweenOpts = { duration: 0.8, ease: "power2.out" };

    gsap.to(main.current, {
      rotateY: xPos * 15,
      rotateX: -yPos * 15,
      x: xPos * 30,
      y: yPos * 20,
      ...tweenOpts,
    });

    gsap.to(side.current, {
      rotateY: xPos * 8,
      rotateX: -yPos * 8,
      x: xPos * 40 + 50,
      y: yPos * 25 - 50,
      ...tweenOpts,
    });

    gsap.to(text.current, {
      x: -xPos * 20,
      y: -yPos * 10,
      duration: 1,
      ease: "power2.out",
    });
  };
};

export const setupScrollFade = (trigger) => {
  gsap.to(".big-title", {
    scrollTrigger: {
      trigger: trigger.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
    y: -200,
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  });
};

export const animateButtonMove = (btn, e) => {
  const rect = btn.getBoundingClientRect();

  gsap.to(btn, {
    x: (e.clientX - rect.left - rect.width / 2) * 0.3,
    y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    duration: 0.3,
    ease: "power2.out",
  });
};

export const animateButtonLeave = (btn) => {
  gsap.to(btn, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.3)",
  });
};
