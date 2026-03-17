import { useInView } from "../hooks/useInView";
import { motion } from "framer-motion";
import ImgITLA     from "../assets/ITLA.png";
import ImgInfotep  from "../assets/Infotep.jpg";
import ImgAprende  from "../assets/Aprende.png";
import ImgTalendig from "../assets/Talendig.png";
import ImgMescyt   from "../assets/mescyt.jpeg";

const ESTUDIOS = [
  {
    institucion: "ITLA",
    imagen: ImgITLA,
    accent: "from-sky-500/20 to-sky-500/0 border-sky-500/30",
    badge: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    dot: "bg-sky-400",
    cursos: [
      "Diseño de páginas web",
      "Fundamentos de programación en Python",
    ],
  },
  {
    institucion: "INFOTEP",
    imagen: ImgInfotep,
    accent: "from-orange-500/20 to-orange-500/0 border-orange-500/30",
    badge: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    dot: "bg-orange-400",
    cursos: [
      "Mantenimiento preventivo de vehículos",
      "Auxiliar de contabilidad",
      "Manejador de inventario",
      "Manejo básico de computadoras",
    ],
  },
  {
    institucion: "Aprende",
    imagen: ImgAprende,
    accent: "from-emerald-500/20 to-emerald-500/0 border-emerald-500/30",
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    dot: "bg-emerald-400",
    cursos: [
      "Técnico en Redes de Datos",
      "Instalador de Fibra Óptica",
      "Disciplina en el trabajo",
    ],
  },
  {
    institucion: "Talendig",
    imagen: ImgTalendig,
    accent: "from-violet-500/20 to-violet-500/0 border-violet-500/30",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    dot: "bg-violet-400",
    cursos: [
      "Técnico desarrollador Fullstack",
    ],
  },
  {
    institucion: "MESCYT",
    imagen: ImgMescyt,
    accent: "from-amber-500/20 to-amber-500/0 border-amber-500/30",
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    dot: "bg-amber-400",
    cursos: [
      "Inglés por inmersión",
    ],
  },
];

export const Studies = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="studies"
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
        <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
          Estudios
        </h2>
        <p className="text-slate-500 text-sm tracking-widest uppercase font-medium">
          Formación académica y certificaciones
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent mt-1" />
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {ESTUDIOS.map((estudio, i) => (
          <motion.div
            key={estudio.institucion}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className={`
              group relative flex flex-col overflow-hidden
              rounded-2xl border bg-gradient-to-b ${estudio.accent}
              bg-slate-900/60 backdrop-blur-sm
              hover:scale-[1.02] hover:shadow-xl
              transition-all duration-300
            `}
          >
            {/* Imagen de fondo */}
            <div className="relative h-36 overflow-hidden">
              <img
                src={estudio.imagen}
                alt={estudio.institucion}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 brightness-[0.35]"
              />
              {/* Badge institución sobre la imagen */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-lg font-black tracking-widest uppercase px-4 py-1.5 rounded-full border backdrop-blur-sm ${estudio.badge}`}>
                  {estudio.institucion}
                </span>
              </div>
            </div>

            {/* Cursos */}
            <ul className="flex flex-col gap-2 p-5">
              {estudio.cursos.map((curso) => (
                <li key={curso} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${estudio.dot}`} />
                  {curso}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
