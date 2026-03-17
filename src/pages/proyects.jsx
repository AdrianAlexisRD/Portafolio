/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  IconBrandMongodb, IconBrandNodejs, IconBrandTailwind,
  IconBrandCss3, IconBrandHtml5, IconBrandJavascript,
  IconBrandGithub, IconBrandReact, IconBrandVite,
  IconBrandTypescript, IconBrandDocker, IconBrandReactNative
} from "@tabler/icons-react";
import { useInView } from "../hooks/useInView";
import ImageSlider from "../Componentes/cardsProyect";
import proyectosData from "../utils/DataProyect";


// Configuración de tecnología para un renderizado limpio
const TECH_STACK = [
  { icon: IconBrandReact, name: "React", color: "text-blue-600", bg: "bg-blue-600" },
  { icon: IconBrandMongodb, name: "MongoDB", color: "text-[#4b9d4d]", bg: "bg-[#4b9d4d]" },
  { icon: IconBrandNodejs, name: "Nodejs", color: "text-[#85c008]", bg: "bg-[#85c008]" },
  { icon: IconBrandTailwind, name: "Tailwind", color: "text-[#30a2ff]", bg: "bg-[#30a2ff]" },
  { icon: IconBrandCss3, name: "CSS", color: "text-[#0874bc]", bg: "bg-[#0874bc]" },
  { icon: IconBrandHtml5, name: "HTML", color: "text-[#ef6b33]", bg: "bg-[#ef6b33]" },
  { icon: IconBrandJavascript, name: "JavaScript", color: "text-[#f7e025]", bg: "bg-[#f7e025]" },
  { icon: IconBrandGithub, name: "Github", color: "text-white", bg: "bg-black" },
  { icon: IconBrandVite, name: "Vite", color: "text-[#b14dfe]", bg: "bg-[#b14dfe]" },
  { icon: IconBrandTypescript, name: "TypeScript", color: "text-[#3178c6]", bg: "bg-[#3178c6]" },
  { icon: IconBrandDocker, name: "Docker", color: "text-[#2496ed]", bg: "bg-[#2496ed]" },
  { icon: IconBrandReactNative, name: "React Native", color: "text-[#61dafb]", bg: "bg-[#61dafb]" },
];

export const Proyects = () => {
  const { ref, inView: desplegar } = useInView();
  const data = proyectosData    


  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={desplegar ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col pt-10 md:pt-20 items-center gap-12 w-[95%] xl:w-[90%] 2xl:max-w-[1200px] mx-auto border border-white/10 bg-slate-950/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl mb-20"
    >
      {/* Sección Tecnologías */}
      <div className="w-full px-6 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent italic tracking-tight">
          Stack Tecnológico
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 p-8 rounded-3xl bg-white/5 border border-white/5 w-full">
          {TECH_STACK.map((tech) => (
            <motion.div 
              key={tech.name}
              whileHover={{ scale: 1.2, y: -5 }}
              className="relative group cursor-pointer"
            >
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <span className={`${tech.bg} flex flex-nowrap text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {tech.name}
                </span>
              </div>
              
              <tech.icon 
                size={45} 
                stroke={1.5} 
                className={`${tech.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección Proyectos */}
      <div className="w-full flex flex-col items-center gap-10 pb-20">
        <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent italic tracking-tight">
            Proyectos Destacados
            </h2>
            <div className="h-1 w-24 bg-sky-500/20 rounded-full mt-2" />
        </div>
        
        <div className="w-full px-4 md:px-10">
          <ImageSlider data={data} />
        </div>
      </div>
    </motion.section>
  );
};

// NOTA: El array 'data' se mantiene igual, pero te recomiendo 
// moverlo a un archivo separado (proyectsData.js) para mantener 
// este archivo de componentes corto y legible.