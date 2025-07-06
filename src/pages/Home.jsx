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
    <article className="w-[70%] md:w-[60%] h-[70%] border-6 border-l-0 border-blue-950  rounded-r-2xl flex gap-4 moveRight bg-[#121212]/50  ">
        <div className="h-[100%] w-fit flex items-center">
            <img src={FotoAnimada} alt="" className="  rounded-r-2xl  " />
        </div>
      <div className="text-white flex justify-center mt-[10%] relative ">
        <IconChevronLeft stroke={4} size={45} className="absolute left-5 aparecer" />
        <h1>
          <span className="text-white text-4xl efecto1 left-[60px] absolute "> 
            Adrian
          </span>
          <span className="text-white text-4xl efecto2 left-[180px] absolute"> 
            Alexis
          </span>
          <span className="text-white text-4xl efecto3 left-[300px] absolute">
            Lopez
          </span>
          <span className="text-white text-4xl efecto4 left-[420px] absolute">
            Santos
          </span>
        </h1>
        <IconSlash stroke={4} size={45} className="absolute left-132 aparecer" />
        <IconChevronRight stroke={4} size={45} className="absolute left-139 aparecer" />
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
