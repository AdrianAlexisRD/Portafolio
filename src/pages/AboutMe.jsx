import FotoAnimada from "../assets/Foto-animada.jpg";
import { useInView } from "../hooks/useInView";

const STATS = [
  { value: "5+",  label: "Proyectos" },
  { value: "2+",  label: "Años aprendiendo" },
  { value: "100%", label: "Autodidacta" },
];

export default function AboutMe() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      id="about"
      className={`
        relative flex flex-col xl:flex-row
        gap-10 md:p-14 p-8 lg:mt-24 mt-10
        w-[95%] md:w-[90%] xl:w-[85%] 2xl:max-w-[1250px] mx-auto
        rounded-[2.5rem] overflow-hidden
        bg-slate-950/40 backdrop-blur-xl border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 bg-sky-500/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/5 blur-[150px] rounded-full" />

      {/* ── Foto ── */}
      <div className="relative group self-center xl:self-start shrink-0">
        {/* Anillo animado */}
        <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-sky-400 via-violet-400 to-orange-400 opacity-40 blur-sm group-hover:opacity-70 transition-all duration-700 animate-[spin_8s_linear_infinite]" />
        <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-orange-400 via-sky-400 to-violet-400 opacity-20 group-hover:opacity-40 transition-all duration-700" />

        <div className="relative h-52 w-52 md:h-64 md:w-64 xl:h-72 xl:w-72 rounded-full border border-white/20 overflow-hidden shadow-2xl">
          <img
            src={FotoAnimada}
            alt="Adrian Lopez"
            className="h-full w-full object- transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
        </div>

        {/* Badge "disponible" */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible
        </div>
      </div>

      {/* ── Contenido ── */}
      <div className="flex-1 flex flex-col justify-center gap-5">

        {/* Nombre */}
        <div>
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-slate-500 mb-2">
            Portafolio · 2025
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">
              Adrian Alexis
            </span>
            <span className="block bg-gradient-to-r from-sky-400 via-violet-400 to-sky-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">
              Lopez Santos
            </span>
          </h1>
        </div>

        {/* Rol */}
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-sky-500 to-transparent" />
          <h2 className="text-base md:text-lg font-bold tracking-[0.25em] uppercase text-sky-400/90">
            Fullstack Developer
          </h2>
        </div>

        {/* Descripción */}
        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
          Desarrollador{" "}
          <span className="text-white font-semibold"> fullstack autodidacta</span>{" "}
          apasionado por resolver problemas complejos y convertir ideas en
          experiencias digitales fluidas. Enfocado en la superación diaria y
          en entregar código de{" "}
          <span className="text-orange-300/90 font-semibold">alta calidad</span>.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
            >
              <span className="text-2xl font-black text-white">{value}</span>
              <span className="text-xs text-slate-400 font-medium mt-0.5">{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mt-1">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white font-bold text-sm hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-500/20"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-sm hover:border-orange-400/40 hover:bg-orange-500/10 hover:scale-105 transition-all duration-300"
          >
            Contáctame
          </a>
        </div>

      </div>
    </article>
  );
}
