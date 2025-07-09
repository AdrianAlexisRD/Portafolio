import FotoAnimada from "../assets/Foto-animada.jpg";
import {
  IconChevronLeft,
  IconChevronRight,
  IconSlash,
} from "@tabler/icons-react";

import { Espejo } from "../Componentes/EfectoEspejo";


export default function Home() {
const titulo = 'Desarrollardor web fullstack'
  return (
    <article  className={`
        flex-col  md:flex-row
        gap-7 md:p-10 p-4 md:mt-15 
        w-[99%] md:w-[90%] 
        md:h-[70vh] border-color  
        rounded-2xl mt-7
         bg-[#121212]/50
         flex moveLeft 
         opacity-0 items-center
         pointer-events-none
          transition-all duration-700 ease-in-out
         `} >
        <div className="md:h-[300px] h-25 mb-10 md:mb-0 md:w-fit w-[100%] flex justify-center md:items-center ">
            <img src={FotoAnimada} alt="" className=" h-50 w-[50%] md:h-fit md:w-fit md:shadow-xl shadow-xl/40 opacity-80 shadow-[#EAE4D5]  border-color rounded-3xl   md:rounded-r-2xl  " />
        </div>
      <div className="text-white flex md:self-start   md:mb-4  relative ">
        {/* <IconChevronLeft stroke={3} size={40} className="absolute md:left-5 right-25 aparecer title-color" /> */}
        <h1>
          <span className="text-color md:text-4xl efecto1 md:left-[43px] right-0 text-[45px] font-extrabold absolute  "> 
            Adrian
          </span>
          <span className="text-color md:text-4xl md:efecto2 md:left-[200px] hidden md:flex text-[28px] font-extrabold   absolute"> 
            Alexis
          </span>
          <span className="text-color md:text-4xl md:efecto3 efecto2 md:left-[350px] left-5 text-[45px] font-extrabold absolute">
            Lopez
          </span>
          <span className="text-color md:text-4xl efecto4 md:left-[480px] hidden md:flex  font-extrabold text-[28px]  absolute">
            Santos
          </span>
        </h1>
        {/* <IconSlash stroke={3} size={40} className="absolute md:left-134 right-[-120px] aparecer title-color" /> */}
        {/* <IconChevronRight stroke={3} size={40} className="absolute md:left-140 right-[-142px]  aparecer title-color" /> */}
      </div>
      <div className="self-center p-4 pt-10 ">
        <h2 className=""></h2>
        <p className=" md:text-2xl text-white ">
        <span className="self-center md:text-3xl text-2xl font-black text-[#121212]">{titulo}</span><br/><br/>
        Hola soy un desarrollar junior fullstack autodidacta con deseos de demostrar
        mi talento y cada dia mas superarme a mi mismo. Me gusta aprender y resolver 
        problemas, siempre orientado a alcanzar metas y entregar lo mejor de mi en cada 
        trabajo u oficio a realizar<br/><br/>Motivado a trabajar en equipo, compartir 
        y aprender conocimiento y distintas formas de trabajar.
        </p>
      </div>

    </article>

  );
}
