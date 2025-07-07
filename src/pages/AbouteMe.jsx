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
    <article className="w-[99%] md:w-[60%] h-[60%] border-6 border-l-0 border-color  rounded-r-2xl flex  flex-col md:flex-row gap-4 moveRight bg-[#121212]/50  ">
        <div className="md:h-[100%]  w-[100%] md:w-fit flex justify-center md:items-center">
            <img src={FotoAnimada} alt="" className=" shadow-xl shadow-[#000000] p-2 border-color rounded-3xl md:w-fit w-[200px] md:rounded-r-2xl md:h-fit h-[200px] " />
        </div>
      <div className="text-white flex justify-center mt-4 mb-4 md:mt-[10%] relative ">
        <IconChevronLeft stroke={3} size={45} className="absolute md:left-5 left-0 aparecer title-color" />
        <h1>
          <span className="text-color md:text-4xl efecto1 md:left-[60px] left-[40px] text-[28px] font-extrabold absolute "> 
            Adrian
          </span>
          <span className="text-color md:text-4xl efecto2 md:left-[185px] left-[140px] text-[28px] font-extrabold   absolute"> 
            Alexis
          </span>
          <span className="text-color md:text-4xl efecto3 md:left-[300px] right-[70px]  text-[28px] font-extrabold  absolute">
            Lopez
          </span>
          <span className="text-color md:text-4xl efecto4 md:left-[420px] hidden md:flex right-[60px] font-extrabold text-[28px]  absolute">
            Santos
          </span>
        </h1>
        <IconSlash stroke={3} size={45} className="absolute md:left-132 right-6 aparecer title-color" />
        <IconChevronRight stroke={3} size={45} className="absolute md:left-139 right-0  aparecer title-color" />
      </div>
      <p className="self-center md:text-3xl text-white p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at
        provident iste repellendus labore soluta dicta qui adipisci totam!
        Laudantium accusamus maiores, laboriosam fugit omnis perferendis porro
        impedit nisi molestiae.
      </p>
    </article>

  );
}
