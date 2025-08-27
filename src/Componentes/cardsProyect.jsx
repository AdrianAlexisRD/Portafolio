import { useState } from "react";
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from "@tabler/icons-react";

export default function CardsProyectos({ data }) {
  // Estado para controlar qué tarjeta muestra la descripción
  const [activeDesc, setActiveDesc] = useState(null);

  const toggleDesc = (index) => {
    setActiveDesc(activeDesc === index ? null : index);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6 w-full lg:p-4 p-1">
      {data.map((project, index) => (
        <div
          key={index}
          className={`
          ${index % 2 == 0 ? 'bg-blue-300/50' : 'bg-orange-300/50'} rounded-2xl p-1 pb-4 flex flex-col items-center 
            shadow-lg hover:scale-103 transition-transform  gap-5`}
        >
        {activeDesc === index ? (
            <div className="text-white text-sm lg:p-2">
              {project.descripcion}
            </div>
          ) : (
            <ImageSlider images={project.images} />
          )}

          <h3 className="text-white text-3xl font-bold mt-4">{project.title}</h3>
          <div className="flex gap-4 mt-3 font-bold">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-300 transition-colors "
              >
                Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-900 transition-colors"
            >
              GitHub
            </a>
            <button 
            onClick={() => toggleDesc(index)}
            className='px-4 py-2 rounded-xl bg-orange-400 text-white 
            hover:bg-orange-300 transition-colors cursor-pointer active:scale-90'>
                Descripcion
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden animate-[aparecer_1s_ease-in-out]">
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
      < IconChevronCompactLeft
        size={80}
        stroke={4}
        onClick={prev}
        className="absolute left-0 top-1/2 text-orange-500/50 
        hover:text-orange-500 cursor-pointer hover:scale-125 active:scale-90 
        transition-all duration-100 ease-in"
      />

        < IconChevronCompactRight
        size={80}
        stroke={4}
        onClick={next}
        className="absolute right-0 top-1/2  text-orange-500/50 
        hover:text-orange-500 cursor-pointer hover:scale-125 active:scale-90
        transition-all duration-100 ease-in"
      />
    </div>
  );
}
