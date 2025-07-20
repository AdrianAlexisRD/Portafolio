import { useEffect, useState } from "react"
import { IconChevronCompactLeft, IconChevronCompactRight } from "@tabler/icons-react"
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";


import { 

    IconBrandGithub, 
 
} from '@tabler/icons-react';


export const Slider = ({data}) =>{
    const [index , setIndex] = useState(0)
    const esPantallaGrande = window.innerWidth >= 768;

  const [isPaused, setIsPaused] = useState(false); 


  useEffect(() => {
    if (isPaused) return; 

    const intervalo = setInterval(() => {
      setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }, 8000);

    return () => clearInterval(intervalo);
  }, [isPaused, data.length]);


    return(

        <div className="flex flex-col items-center w-[100%]  relative" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
        <IconChevronCompactLeft className="absolute left-[0px] lg:top-40 bottom-[0px] lg:left-[-40px] z-50 text-[#121212]/50 active:scale-90" stroke={5} size={esPantallaGrande ? 150 : 100} onClick={() =>  index > 0 ? setIndex(index - 1) : setIndex(data.length - 1) }/>

            <AnimatePresence mode="wait">
            <motion.div
                key={index}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full flex justify-center items-center "
            >

            <article key={index}  className=" flex flex-col gap-4 h-fit 2xl:w-300 xl:w-250 lg:w-200 p-3 bg-[#121212]/50 rounded-2xl border-color  ">
              <a href={data[index].url} target="_blank">

            <div className='grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 gap-2 h-fit rounded-2xl group relative  justify-items-center  '>
                <img src={data[index].images[0]} alt="Portada" className='col-span-2 row-span-2 h-[100%] rounded hover:scale-120 transition-all duration-700 ease-initial hover:z-100 ' />
                <img src={data[index].images[1]} alt="" className='img-style' />
                <img src={data[index].images[2]} alt="" className='img-style' />
                <img src={data[index].images[3]} alt="" className='img-style' />
                <img src={data[index].images[4]} alt="" className='img-style' />
            </div>
              </a>

            <a href={data[index].github} className='flex justify-center ' target='_blank'>
                <IconBrandGithub stroke={2} size={50} className='p-2 text-white'/>
                <h2 className='text-white text-2xl font-bold hover:border-b-6 border-[#F2F2F2]'>{data[index].title}</h2>
            </a>
            </article>
        
          </motion.div>
</AnimatePresence>

         < IconChevronCompactRight className="absolute right-[0px] lg:right-[-40px] lg:top-40 bottom-[0px] active:scale-90 text-[#121212]/50" stroke={5} size={esPantallaGrande ? 150 : 100} onClick={ () => index < data.length - 1 ? setIndex(index + 1) : setIndex(0) }/>


            
       
        </div>
    )
}