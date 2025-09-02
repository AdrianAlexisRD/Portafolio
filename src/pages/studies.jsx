
import Mescyt from "../assets/mescyt.jpeg";
import { useState } from "react";
import { useEffect } from "react";

export const Studies = ({ scroll }) => {
  const [desplegar, setDesplegar] = useState(false);
  const esPantallaGrande = window.innerWidth >= 768;

  useEffect(() => {
    if (esPantallaGrande) {
      scroll >= 4600 ? setDesplegar(true) : setDesplegar(false);
    } else {
      scroll >= 3400 ? setDesplegar(true) : setDesplegar(false);
    }
  }, [esPantallaGrande, scroll]);

  const itla = [
    "Diseño de páginas web.",
    "Fundamentos de programación en python.",
  ];
  const infotep = [
    "Mantenimiento preventivo de vehículos.",
    "Auxiliar de contabilidad.",
    "Manejador de inventario.",
    "Manejo básico de computadoras.",
  ];
  const aprende = [
    "Técnico en Redes de Datos.",
    "Instalador de Fibra Óptica. ",
    "Disciplina en el trabajo.",
  ];

  return (
    <section
      className={` 
        flex-col flex md:grid md:grid-cols-2 
        gap-7 md:p-10  justify-start md:items-center
        2xl:w-[80%] 2xl:max-w-380
        w-[99%] md:w-[90%]  md:gap-10
        h-fit p-5 rounded-2xl border-orange-300 border-4
         bg-[#121212]/50 opacity-0
                ${
                  desplegar
                    ? " animate-[move-Left_0.7s_ease-in-out_forwards]"
                    : "animate-[retroceso-Left_0.7s_ease-in-out_forwards]"
                }
    
        `}
    >
      <h2 className="text-4xl text-blue-300 font-extrabold title-color col-span-2 md:justify-start text-center  ">
        Estudios
      </h2>
      <div
        className={`flex items-end  bg-center h-64 w-full bg-cover rounded-2xl hover:scale-110 transition-all duration-300`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${
            esPantallaGrande
              ? "https://index.gob.do/wp-content/uploads/2022/10/itla.png"
              : "https://be.nortic.ogtic.gob.do/organizationsImages/ITLA.png"
          })`,
          backgroundSize: "cover",

        }}
      >
        <ul className=" text-color flex flex-col  justify-center pl-4">
          {itla.map((curso) => (
            <li className="sm:text-2xl xl:text-3xl text-[18px] p-2 font-bold ">
              {curso}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex items-end bg-center bg-no-repeat h-64 w-full rounded-2xl hover:scale-110 transition-all duration-300 `}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url('https://continuada.ipl.edu.do/images/cursos/infotep.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <ul className="text-color flex flex-col justify-center ">
          {infotep.map((curso) => (
            <li className="sm:text-2xl xl:text-3xl text-[18px] text-2xl font-bold p-2">
              {curso}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex items-end bg-center h-64 w-full bg-cover rounded-2xl hover:scale-110 transition-all duration-300`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${"https://accesolatino.org/wp-content/uploads/2022/05/aprende-con-nuestras-herramientas.png"})`,
          backgroundSize: "cover",
        }}
      >
        <ul className="text-color flex flex-col justify-center gap-2">
          {aprende.map((curso) => (
            <li className="sm:text-2xl xl:text-3xl text-[18px] font-bold p-2 ">
              {curso}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex items-end bg-center h-64 w-ful bg-no-repeat sm:bg-cover rounded-2xl hover:scale-110 transition-all duration-300`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${
            esPantallaGrande
              ? "https://startupeable.com/directorio/wp-content/uploads/listing-uploads/logo/2022/12/Logo-full-color-1.jpg"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Usg1HQtjhuJM0Go1ObVZZ8IYzgmy3L68GcKCN-DGstv3yl0p8kE3vvDs_4AfhiUCFPc&usqp=CAU"
          })`,
          backgroundSize: "cover",
        }}
      >
        <ul className="text-color flex flex-col justify-center  ">
          <li className="sm:text-2xl xl:text-3xl text-[18px] text-start font-bold p-2 ">
            Tecnico desarrollador fullstack.
          </li>
        </ul>
      </div>

      <div
        className={`flex items-end bg-center h-64 w-full  bg-no-repeat rounded-2xl hover:scale-110 transition-all duration-300`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${Mescyt})`,
          backgroundSize: "cover",
        }}
      >
        <ul className="text-color flex flex-col justify-center">
          <li className="sm:text-2xl xl:text-3xl text-[18px] font-bold  p-2 ">
            Ingles por inmersión.
          </li>
        </ul>
      </div>
    </section>
  );
};
