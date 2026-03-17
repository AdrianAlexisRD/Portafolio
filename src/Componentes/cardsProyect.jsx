import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight, IconBrandGithub, IconExternalLink, IconLayoutList, IconPhoto } from "@tabler/icons-react";

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative h-full w-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`slide-${current}`}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35 }}
          className="h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Controles - siempre visibles en mobile, hover en desktop */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 backdrop-blur-sm text-white rounded-full p-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 shadow-lg"
      >
        <IconChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 backdrop-blur-sm text-white rounded-full p-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 shadow-lg"
      >
        <IconChevronRight size={18} />
      </button>

      {/* Dots + counter */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
          <span className="text-white/60 text-[10px] font-bold ml-1">
            {current + 1}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

const ACCENT = [
  { border: "border-sky-500/25",   glow: "bg-sky-500",    text: "text-sky-400"    },
  { border: "border-orange-500/25", glow: "bg-orange-500", text: "text-orange-400" },
  { border: "border-violet-500/25", glow: "bg-violet-500", text: "text-violet-400" },
  { border: "border-emerald-500/25",glow: "bg-emerald-500",text: "text-emerald-400"},
  { border: "border-pink-500/25",   glow: "bg-pink-500",   text: "text-pink-400"   },
];

function DescripcionPanel({ descripcion }) {
  return (
    <div className="h-full w-full p-5 md:p-6 overflow-y-auto bg-slate-950/90 backdrop-blur-sm flex flex-col gap-4">
      {descripcion?.intro && (
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          {descripcion.intro}
        </p>
      )}

      {(descripcion?.backend || descripcion?.frontend || descripcion?.techStack) && (
        <div className="flex flex-col gap-2 text-sm">
          {descripcion?.backend && (
            <p>
              <span className="text-sky-400 font-bold">Backend — </span>
              <span className="text-slate-400">{descripcion.backend}</span>
            </p>
          )}
          {descripcion?.frontend && (
            <p>
              <span className="text-violet-400 font-bold">Frontend — </span>
              <span className="text-slate-400">{descripcion.frontend}</span>
            </p>
          )}
          {descripcion?.techStack && (
            <p>
              <span className="text-orange-400 font-bold">Stack — </span>
              <span className="text-slate-400">{descripcion.techStack}</span>
            </p>
          )}
        </div>
      )}

      {descripcion?.logros?.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
            Logros
          </p>
          <ul className="flex flex-col gap-2">
            {descripcion.logros.map((logro, i) => (
              <li key={i} className="flex gap-2.5 items-start text-sm text-slate-300">
                <span className="text-orange-400 font-bold mt-0.5 shrink-0">▸</span>
                {logro}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CardsProyectos({ data }) {
  const [activeDesc, setActiveDesc] = useState(null);

  return (
    <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto px-2 md:px-4 pb-6">
      {data.map((project, index) => {
        const accent = ACCENT[index % ACCENT.length];
        const isFlipped = index % 2 !== 0;
        const showDesc = activeDesc === index;

        return (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`
              relative overflow-hidden
              bg-slate-900/60 backdrop-blur-md
              border ${accent.border}
              rounded-2xl md:rounded-3xl
              shadow-xl shadow-black/40
              flex flex-col
              ${isFlipped ? "lg:flex-row-reverse" : "lg:flex-row"}
            `}
          >
            {/* Glow de acento en la esquina */}
            <div className={`pointer-events-none absolute ${isFlipped ? "top-0 right-0" : "top-0 left-0"} w-48 h-48 ${accent.glow} opacity-5 blur-[80px] rounded-full`} />

            {/* ── Lado imagen ── */}
            <div className="w-full lg:w-[55%] h-56 sm:h-72 lg:h-auto lg:min-h-[340px] relative shrink-0">
              <AnimatePresence mode="wait">
                {showDesc ? (
                  <motion.div
                    key="desc"
                    initial={{ opacity: 0, x: isFlipped ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isFlipped ? -20 : 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <DescripcionPanel descripcion={project.descripcion} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="slider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <ImageSlider images={project.images} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divisor vertical en desktop */}
            <div className={`hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent shrink-0`} />

            {/* ── Lado info ── */}
            <div className="flex-1 flex flex-col justify-between gap-5 p-6 md:p-8">

              {/* Número + título */}
              <div>
                <span className={`text-xs font-black tracking-[0.3em] uppercase ${accent.text} opacity-60`}>
                  {String(index + 1).padStart(2, "0")} — Proyecto
                </span>
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Descripción corta visible siempre */}
              {project.descripcion?.intro && (
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.descripcion.intro}
                </p>
              )}

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] sm:text-xs uppercase tracking-wider font-bold px-2.5 py-1 bg-white/5 border border-white/10 text-slate-400 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <button
                  onClick={() => setActiveDesc(showDesc ? null : index)}
                  className={`
                    flex items-center justify-center gap-2 flex-1
                    px-4 py-2.5 rounded-xl text-sm font-bold
                    border transition-all duration-300 active:scale-95
                    ${showDesc
                      ? "bg-white/10 border-white/20 text-white"
                      : `bg-white/5 border-white/10 ${accent.text} hover:bg-white/10`
                    }
                  `}
                >
                  {showDesc
                    ? <><IconPhoto size={16} /> Ver Imágenes</>
                    : <><IconLayoutList size={16} /> Ver Detalles</>
                  }
                </button>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold transition-all duration-300 shadow-lg shadow-sky-500/20 active:scale-95"
                  >
                    <IconExternalLink size={16} /> Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold border border-white/10 transition-all duration-300 active:scale-95"
                >
                  <IconBrandGithub size={16} /> Código
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
