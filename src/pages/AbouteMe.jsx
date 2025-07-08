import FotoAnimada from "../assets/Foto-animada.jpg";
import {
  IconChevronLeft,
  IconChevronRight,
  IconSlash,
} from "@tabler/icons-react";
// import ImagenCode from './assets/codigos.jpg'
import { Navegation } from "../Componentes/BarNavegation"

export default function Home() {
  return (
    <article className="w-[99%] md:w-[70%] h-fit border-6 border-l-0 border-color  rounded-r-2xl flex  flex-col md:flex-row gap-4 moveRight bg-[#121212]/50  ">
        <div className="md:h-[100%]  w-[100%] md:w-fit flex justify-center md:items-center">
            <img src={FotoAnimada} alt="" className=" shadow-xl shadow-[#000000] p-2 border-color rounded-3xl md:w-fit w-[200px] md:rounded-r-2xl md:h-fit h-[200px] " />
        </div>
      <div className="text-white flex justify-center mt-4 mb-4 md:mt-[10%] relative ">
        <IconChevronLeft stroke={3} size={40} className="absolute md:left-5 left-0 aparecer title-color" />
        <h1>
          <span className="text-color md:text-2xl efecto1 md:left-[60px] left-[40px] text-[28px] font-extrabold absolute "> 
            Adrian
          </span>
          <span className="text-color md:text-2xl efecto2 md:left-[185px] left-[140px] text-[28px] font-extrabold   absolute"> 
            Alexis
          </span>
          <span className="text-color md:text-2xl efecto3 md:left-[310px] left-[235px]  text-[28px] font-extrabold  absolute">
            Lopez
          </span>
          <span className="text-color md:text-2xl efecto4 md:left-[420px] hidden md:flex right-[60px] font-extrabold text-[28px]  absolute">
            Santos
          </span>
        </h1>
        <IconSlash stroke={3} size={40} className="absolute md:left-134 right-6 aparecer title-color" />
        <IconChevronRight stroke={3} size={40} className="absolute md:left-140 right-0  aparecer title-color" />
      </div>
      <div className="self-center p-4 pt-10 ">
        <h2 className="self-center md:text-3xl text-2xl font-black text-color">Desarrollardor web fullstack</h2>
        <p className=" md:text-2xl text-white ">
        Hola soy un desarrollar junior fullstack autodidactacon deseos de demostrar
        mi talento y cada dia mas superarme a mi mismo. Me gusta aprender y resolver 
        problemas, siempre orientado a alcanzar metas y entregar lo mejor de mi en cada 
        trabajo u oficio a realizar<br></br>Motivado a trabajar en equipo, compartir 
        y aprender conocimiento y distintas formas de trabajar.
        </p>
      </div>

    </article>

  );
}
