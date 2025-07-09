import FotoAnimada from "../assets/Foto-animada.jpg";
import {
  IconChevronLeft,
  IconChevronRight,
  IconSlash,
} from "@tabler/icons-react";


export default function Home() {

  return (
    <article  className={`
        flex-col  md:flex-row
        gap-7 md:p-10 p-4 md:mt-15 
        w-[99%] md:w-[99%] 
        md:h-[70vh] border-color  
        rounded-l-2xl border-r-0 
        border-6 self-end
         bg-[#121212]/50
         flex moveLeft 
         opacity-0 items-center
         pointer-events-none
          transition-all duration-700 ease-in-out
         `} >
        <div className="md:h-[400px] h-25  md:w-[400px] w-30 flex justify-center md:items-center mb-15">
            <img src={FotoAnimada} alt="" className=" h-35 w-30 md:h-fit md:w-fit shadow-xl shadow-[#000000]  border-color rounded-3xl   md:rounded-r-2xl  " />
        </div>
      <div className="text-white flex md:self-start   md:mb-4  relative ">
        <IconChevronLeft stroke={3} size={40} className="absolute md:left-5 right-25 aparecer title-color" />
        <h1>
          <span className="text-color md:text-3xl efecto1 md:left-[60px] right-1 text-[28px] font-extrabold absolute "> 
            Adrian
          </span>
          <span className="text-color md:text-3xl efecto2 md:left-[185px] hidden md:flex text-[28px] font-extrabold   absolute"> 
            Alexis
          </span>
          <span className="text-color md:text-3xl efecto3 md:left-[310px] text-[28px] font-extrabold absolute">
            Lopez
          </span>
          <span className="text-color md:text-3xl efecto4 md:left-[420px] hidden md:flex  font-extrabold text-[28px]  absolute">
            Santos
          </span>
        </h1>
        <IconSlash stroke={3} size={40} className="absolute md:left-134 right-[-115px] aparecer title-color" />
        <IconChevronRight stroke={3} size={40} className="absolute md:left-140 right-[-135px]  aparecer title-color" />
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
