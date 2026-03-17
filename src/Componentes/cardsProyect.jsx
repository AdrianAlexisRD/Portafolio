/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full object-cover"
        />
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IconChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IconChevronRight size={20} />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-3" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

const gradients = [
  'from-sky-500/10 to-blue-600/5 border-sky-500/20',
  'from-orange-500/10 to-amber-600/5 border-orange-500/20',
  'from-violet-500/10 to-purple-600/5 border-violet-500/20',
  'from-emerald-500/10 to-green-600/5 border-emerald-500/20',
];

export default function CardsProyectos({ data }) {
  const [activeDesc, setActiveDesc] = useState(null);

  return (
    <div className="grid grid-cols-1 gap-12 w-full max-w-6xl mx-auto p-4">
      {data.map((project, index) => (
        <motion.div
          key={project.id || index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-md border rounded-[2rem] p-6 lg:p-8 shadow-2xl flex flex-col lg:flex-row gap-8 items-center`}
        >
          {/* Contenedor Izquierdo: Slider o Descripción */}
          <div className="w-full lg:w-3/5 aspect-video relative rounded-2xl overflow-hidden shadow-inner bg-black/20">
            <AnimatePresence mode="wait">
              {activeDesc === index ? (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="h-full w-full p-6 overflow-y-auto bg-slate-900/80"
                >
                  {/* Renderizado de la descripción */}
                  <div className="text-slate-200 text-sm leading-relaxed flex flex-col gap-3">
                    {project.descripcion?.intro && (
                      <p>{project.descripcion.intro}</p>
                    )}
                    {project.descripcion?.backend && (
                      <p><span className="text-sky-400 font-bold">Backend: </span>{project.descripcion.backend}</p>
                    )}
                    {project.descripcion?.frontend && (
                      <p><span className="text-violet-400 font-bold">Frontend: </span>{project.descripcion.frontend}</p>
                    )}
                    {project.descripcion?.techStack && (
                      <p><span className="text-orange-400 font-bold">Stack: </span>{project.descripcion.techStack}</p>
                    )}
                    {project.descripcion?.logros?.length > 0 && (
                      <ul className="flex flex-col gap-1 mt-1">
                        {project.descripcion.logros.map((logro, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-orange-400 mt-0.5">▸</span>
                            <span>{logro}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="slider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full"
                >
                  <ImageSlider images={project.images} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contenedor Derecho: Info y Botones */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
            <h3 className="text-white text-3xl lg:text-4xl font-black mb-4 italic tracking-tight">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
              {project.tech?.map(t => (
                <span key={t} className="text-[10px] uppercase tracking-tighter font-bold px-2 py-1 bg-white/5 border border-white/10 text-slate-400 rounded-md">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 w-full flex-wrap">
              {project.url && (
                <a href={project.url} target="_blank" className="flex-1 min-w-[120px] text-center px-5 py-3 rounded-xl bg-sky-500 text-white font-bold hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20">
                  Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" className="flex-1 min-w-[120px] text-center px-5 py-3 rounded-xl bg-slate-800 text-white font-bold border border-white/10 hover:bg-slate-700 transition-colors">
                Código
              </a>
            </div>
            
            <button
              onClick={() => setActiveDesc(activeDesc === index ? null : index)}
              className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold hover:brightness-110 transition-all active:scale-95"
            >
              {activeDesc === index ? "Ver Imágenes" : "Ver Detalles"}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}