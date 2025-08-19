import { useEffect, useState } from "react";
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import { IconBrandGithub } from "@tabler/icons-react";

export const Slider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const esPantallaGrande = window.innerWidth >= 768;

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalo = setInterval(() => {
      setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(intervalo);
  }, [isPaused, data.length]);

  return (
    <div
      className="flex flex-col items-center w-[100%]  "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -30, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full flex justify-center items-center "
        >
          <article
            key={index}
            className=" flex flex-col items-center gap-4 2xl:w-300 xl:w-250 lg:w-200 p-5 bg-[#121212]/50 rounded-2xl border-color xl:h-110 h-180  "
          >
            <a href={data[index].url} target="_blank">
              <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 
              gap-2 h-fit rounded-2xl group relative  
              justify-items-center  ">
                <div className="col-span-2 row-span-2 overflow-hidden ">
                <img
                  src={data[index].images[0]}
                  alt="Portada"
                  className="h-[100%] rounded hover:scale-120 transition-all duration-700 ease-initial hover:z-100 "
                />
                </div>
                  <div className="overflow-hidden "><img src={data[index].images[1]} alt="" className="img-style" /></div>
                  <div className="overflow-hidden "><img src={data[index].images[2]} alt="" className="img-style" /></div>
                  <div className="overflow-hidden "><img src={data[index].images[3]} alt="" className="img-style" /></div>
                  <div className="overflow-hidden "><img src={data[index].images[4]} alt="" className="img-style" /></div>                
              </div>
            </a>

            <a
              href={data[index].github}
              className="flex justify-center items-center hover:text-[#1b3351] border-4 bg-[#1b3351] xl:w-150 
              w-[100%] rounded   hover:bg-white hover:border-[#1b3351] border-white text-white"
              target="_blank"
            >
              <IconBrandGithub stroke={2} size={50} className="p-2" />
              <h2 className=" text-2xl font-bold ">{data[index].title}</h2>
            </a>
          </article>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between w-[100%]">
        <IconChevronCompactLeft
          className="left-[0px] lg:top-40 bottom-[0px] lg:left-[-40px] z-50 text-[#1b3351]/90 active:scale-90"
          stroke={5}
          size={esPantallaGrande ? 150 : 100}
          onClick={() =>
            index > 0 ? setIndex(index - 1) : setIndex(data.length - 1)
          }
        />

        <IconChevronCompactRight
          className="right-[0px] lg:right-[-40px] lg:top-40 bottom-[0px] active:scale-90 text-[#1b3351]/90"
          stroke={5}
          size={esPantallaGrande ? 150 : 100}
          onClick={() =>
            index < data.length - 1 ? setIndex(index + 1) : setIndex(0)
          }
        />
      </div>
    </div>
  );
};
