import { useInView } from "../hooks/useInView";
import { motion } from "framer-motion";
import ImgIngmelec  from "../assets/Ingmelec.jpeg";
import ImgVoz       from "../assets/Voz.jpeg";
import ImgNerdot    from "../assets/Nerdot.jpeg";
import ImgOceanWorld from "../assets/OceanWorld.png";

const EXPERIENCIAS = [
  {
    empresa: "Ingmelec",
    cargo: "Técnico Electricista",
    descripcion: "Instalación y mantenimiento de sistemas eléctricos de media y baja tensión.",
    imagen: ImgIngmelec,
    accent: "border-sky-500/25",
    badge: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    dot: "bg-sky-400",
  },
  {
    empresa: "Voz & ADSL",
    cargo: "Técnico en Telecomunicaciones",
    descripcion: "Reparación y mantenimiento de servicios de telefonía ADSL y Voz.",
    imagen: ImgVoz,
    accent: "border-orange-500/25",
    badge: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    dot: "bg-orange-400",
  },
  {
    empresa: "Nerdot",
    cargo: "Técnico en Logística Digital",
    descripcion: "Servicios técnicos de software en terminales de tarjetas bancarias.",
    imagen: ImgNerdot,
    accent: "border-violet-500/25",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    dot: "bg-violet-400",
  },
  {
    empresa: "OceanWorld",
    cargo: "Técnico Electricista Industrial",
    descripcion: "Mantenimiento eléctrico industrial en planta de gran escala.",
    imagen: ImgOceanWorld,
    accent: "border-emerald-500/25",
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    dot: "bg-emerald-400",
  },
];

export const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="experience"
      className={`
        w-[95%] md:w-[90%] 2xl:max-w-[1250px] mx-auto
        flex flex-col gap-8 p-6 md:p-12
        rounded-[2.5rem] border border-white/10
        bg-slate-950/40 backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Encabezado */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
          Experiencia Laboral
        </h2>
        <p className="text-slate-500 text-sm tracking-widest uppercase font-medium">
          Trayectoria profesional
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mt-1" />
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-6 md:gap-0">

        {/* Línea vertical — solo desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {EXPERIENCIAS.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={exp.empresa}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className={`
                relative flex items-center gap-4
                md:w-[47%]
                ${isLeft ? "md:self-start md:mr-auto" : "md:self-end md:ml-auto"}
                md:mb-8
              `}
            >
              {/* Dot de timeline — solo desktop */}
              <div className={`
                hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${exp.dot} shadow-lg ring-4 ring-slate-950
                ${isLeft ? "-right-[2.15rem]" : "-left-[2.15rem]"}
              `} />

              {/* Card */}
              <div className={`
                group flex items-center gap-5 w-full
                p-5 rounded-2xl border ${exp.accent}
                bg-slate-900/60 backdrop-blur-sm
                hover:bg-slate-900/80 hover:scale-[1.02]
                transition-all duration-300 shadow-lg shadow-black/30
              `}>
                {/* Logo */}
                <div className="shrink-0 relative">
                  <div className={`absolute -inset-1 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 ${exp.dot}`} />
                  <img
                    src={exp.imagen}
                    alt={exp.empresa}
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-white/10 shadow-xl"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 min-w-0">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${exp.badge.split(" ")[0]} opacity-80`}>
                    {exp.empresa}
                  </span>
                  <h3 className="text-white font-black text-base md:text-lg leading-tight">
                    {exp.cargo}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {exp.descripcion}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
