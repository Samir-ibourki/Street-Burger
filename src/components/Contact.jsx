import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import {
  animateContactTitle,
  animateInfoCards,
  animateForm,
} from "../animations/contactAnimations";

gsap.registerPlugin(ScrollTrigger);

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Bd Mohammed V, Casablanca",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+212 6 00 00 00 00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@streetburger.ma",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Dim · 11h00 - 23h00",
  },
];

const InfoCard = ({ item, refCallback }) => {
  const Icon = item.icon;

  return (
    <div
      ref={refCallback}
      className="info-card flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#e8a045]/30 transition-all duration-300 group"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8a045]/10 text-[#e8a045] group-hover:bg-[#e8a045]/20 transition-colors duration-300 shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
          {item.label}
        </p>
        <p className="text-white text-sm font-medium">{item.value}</p>
      </div>
    </div>
  );
};

export const Contact = () => {
  const sectionRef = useRef();
  const infoCardsRef = useRef([]);
  const formRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      animateContactTitle(tl);

      if (infoCardsRef.current.length) {
        animateInfoCards(infoCardsRef.current.filter(Boolean));
      }

      if (formRef.current) {
        animateForm(formRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const btn = e.target.querySelector("button[type='submit']");
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a1209 0%, #120e07 100%)" }}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e8a045]/5 blur-[120px] pointer-events-none" />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <div className="contact-badge inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#e8a045]/30 text-[#e8a045] text-xs tracking-[0.3em] uppercase backdrop-blur-sm bg-black/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a045] animate-pulse" />
          Contactez-Nous
        </div>

        <h2
          className="contact-title text-5xl md:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          UNE <span className="text-[#e8a045]">QUESTION</span> ?
        </h2>

        <p className="contact-subtitle text-white/40 text-sm tracking-[0.4em] uppercase mt-4">
          On est là pour vous &nbsp;·&nbsp; 7j/7
        </p>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
        {/* Left — Info */}
        <div className="flex flex-col gap-4">
          {INFO_ITEMS.map((item, i) => (
            <InfoCard
              key={item.label}
              item={item}
              refCallback={(el) => (infoCardsRef.current[i] = el)}
            />
          ))}

          {/* Map placeholder */}
          <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 h-48">
            <iframe
              title="Street Burger Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72737839457!2d-7.6896551!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1708012345678!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right — Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs uppercase tracking-widest">
              Nom complet
            </label>
            <input
              type="text"
              placeholder="Votre nom"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#e8a045]/50 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#e8a045]/50 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs uppercase tracking-widest">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Votre message..."
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#e8a045]/50 transition-colors duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 mt-2 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-black cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(232,160,69,0.4)]"
            style={{
              background: "linear-gradient(135deg, #e8a045, #c4832a)",
            }}
          >
            <Send size={16} />
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
