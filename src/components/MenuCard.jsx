import { ShoppingCart } from "lucide-react";

const MenuCard = ({ item, refCallback }) => (
  <div
    ref={refCallback}
    className="menu-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#e8a045]/40 hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(232,160,69,0.15)]"
  >
    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#e8a045] text-black">
      {item.tag}
    </div>

    <div className="relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
      <img
        src={item.img}
        alt={item.name}
        className="w-40 h-40 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1209] via-transparent to-transparent" />
    </div>

    <div className="p-5 flex flex-col gap-3">
      <h3
        className="text-white text-lg font-bold tracking-wide"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {item.name}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
        {item.desc}
      </p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
        <span className="text-[#e8a045] text-xl font-black">
          {item.price}
          <span className="text-sm font-normal text-white/40 ml-1">DH</span>
        </span>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8a045]/10 text-[#e8a045] border border-[#e8a045]/30 hover:bg-[#e8a045] hover:text-black transition-all duration-300 cursor-pointer">
          <ShoppingCart size={14} />
          Ajouter
        </button>
      </div>
    </div>
  </div>
);

export default MenuCard;
