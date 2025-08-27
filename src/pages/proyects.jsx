import {
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandGithub,
  IconBrandReact,
  IconBrandVite,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import SM1 from "../assets/StockMaster1.png";
import SM2 from "../assets/StockMaster2.png";
import SM3 from "../assets/StockMaster3.png";
import SM4 from "../assets/StockMaster4.png";
import SM5 from "../assets/StockMaster5.png";
import WT1 from "../assets/Weather1.png";
import WT2 from "../assets/Weather2.png";
import WT3 from "../assets/Weather3.png";
import WT4 from "../assets/Weather4.png";
import WT5 from "../assets/Weather5.png";
import AN1 from "../assets/Animemania1.png";
import AN2 from "../assets/Animemania2.png";
import AN3 from "../assets/Animemania3.png";
import AN4 from "../assets/Animemania4.png";
import AN5 from "../assets/Animemania5.png";
import TD1 from "../assets/Todoapp1.png";
import TD2 from "../assets/Todoapp2.png";
import TD3 from "../assets/Todoapp3.png";
import TD4 from "../assets/Todoapp4.png";
import TD5 from "../assets/Todoapp5.png";
import { Slider } from "../Componentes/slider";
import ImageSlider from "../Componentes/cardsProyect";

export const Proyects = ({ scroll }) => {
  const [desplegar, setDesplegar] = useState(false);
  const esPantallaGrande = window.innerWidth >= 768;

  useEffect(() => {
    if (esPantallaGrande) {
      scroll >= 400 ? setDesplegar(true) : setDesplegar(false);
    } else {
      scroll >= 96 ? setDesplegar(true) : setDesplegar(false);
    }
  }, [esPantallaGrande, scroll]);

  const logos = {
    icons: [
      <IconBrandReact
        stroke={2}
        size={50}
        className="text-blue-600 md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-blue-600 transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_infinite]  cursor-pointer"
      />,
      <IconBrandMongodb
        stroke={2}
        size={50}
        className="text-[#4b9d4d] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#4b9d4d] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_1s_infinite] cursor-pointer"
      />,
      <IconBrandNodejs
        stroke={2}
        size={50}
        className="text-[#85c008] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#85c008] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_2s_infinite] cursor-pointer"
      />,
      <IconBrandTailwind
        stroke={2}
        size={50}
        className="text-[#30a2ff] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#30a2ff] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_3s_infinite] cursor-pointer"
      />,
      <IconBrandCss3
        stroke={2}
        size={50}
        className="text-[#0874bc] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#0874bc] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_4s_infinite] cursor-pointer"
      />,
      <IconBrandHtml5
        stroke={2}
        size={50}
        className="text-[#ef6b33] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#ef6b33] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_5s_infinite] cursor-pointer"
      />,
      <IconBrandJavascript
        stroke={2}
        size={50}
        className="col-span-2 text-[#f7e025] md:animate-none hover:drop-shadow-2xl hover:drop-shadow-[#f7e025] hover:scale-140 transition-all duration-00 ease animate-[aumentar_2s_ease-in-out_6s_infinite] cursor-pointer"
      />,
      <IconBrandGithub
        stroke={2}
        size={50}
        className="col-span-2 text-black md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-black transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_7s_infinite] cursor-pointer"
      />,
      <IconBrandVite
        stroke={2}
        size={50}
        className="col-span-2 text-[#b14dfe] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#b14dfe] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_8s_infinite] cursor-pointer"
      />,
    ],
    nombres: [
      ["React", "bg-blue-600"],
      ["MongoDB", "bg-[#4b9d4d]"],
      ["Nodejs", "bg-[#85c008]"],
      ["Tailwind", "bg-[#30a2ff]"],
      ["CSS", "bg-[#0874bc]"],
      ["HTML", "bg-[#ef6b33]"],
      ["JavaScript", "bg-[#f7e025]"],
      ["Github", "bg-black"],
      ["Vite", "bg-[#b14dfe]"],
    ],
  };

  const data = [
    {
      title: "Inventario",
      github: "https://github.com/AdrianAlexisRD/Inventario-MERN",
      images: [SM1, SM2, SM3, SM4, SM5],
      url: "",
      descripcion: (
        <div className="bg-[#121212]/60 rounded p-3 text-[14px] animate-[aparecer_1s_ease-in-out]">
          <p>
            Desarrollé una aplicación para la gestión de inventario que permite
            registrar, consultar, actualizar y eliminar productos de manera
            sencilla y eficiente.
            <br />
            <br />
            <span className="text-[16px] font-bold text-orange-300">
              Tecnologías utilizadas:{" "}
            </span>{" "}
            <br />
            <span className="font-bold text-blue-300">Backend</span> con Node.js
            + Express, base de datos MongoDB, API REST con CRUD completo{" "}
            <span className="font-extrabold text-red-400">(</span>GET, POST,
            PUT, DELETE <span className="font-extrabold text-red-400">)</span> y
            lenguaje JavaScript . <br /> <br />
            <span className="font-bold text-blue-300">Backend</span> con React +
            Vite y Tailwind para los estilo, librerias como axios para realizar
            peticiones y React dom para para tener una pagina estruturada en
            rutas <br /> <br />
            <span className="text-[16px] font-bold text-orange-300">
              Logros del proyecto:{" "}
            </span>
            <ul className="flex flex-col gap-4">
              <li>
                Implementación de una API escalable para manejar productos
              </li>
              <li>base de datos inicial con más de 50 productos registrados</li>
              <li>
                {" "}
                estructura clara para expandir funciones como búsqueda, filtros
                o reportes
              </li>
              <li> Dashboard en React con autenticación de usuarios</li>
              <li>control de entradas y salidas de productos con historial</li>
              <li>exportación de inventario en Excel/PDF</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "App Weather",
      github:
        "https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/App-clima",
      images: [WT1, WT2, WT3, WT4, WT5],
      url: "https://jolly-peony-a4c08a.netlify.app/",
      descripcion: (
        <div className="bg-[#121212]/60 rounded p-3 text-[14px] animate-[aparecer_1s_ease-in-out]">
          <p>
            <span className="font-extrabold text-[18px] text-blue-300">
              App weather
            </span>{" "}
            permite consultar el clima de cualquier ciudad en tiempo real,
            mostrando información como temperatura, humedad, estado del cielo y
            predicciones diarias.
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Tecnologías utilizadas:
            </span>
            <br />
            <span className="text-[#f7e025] font-bold">
              Vanilla JavaScript
            </span>{" "}
            + <span className="text-[#b14dfe] font-bold">CSS </span>y{" "}
            <span className="text-[#ef6b33] font-bold">HTML</span>
            para los estilos, se realizo Fetch para consumir la API de clima .
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Logros del proyecto:{" "}
            </span>
            <ul className="flex flex-col gap-4">
              <li>Implementación de búsqueda en tiempo real por ciudad</li>
              <li>
                Visualización clara y estilizada de los datos meteorológicos
              </li>
              <li>
                Manejo de errores al ingresar ciudades inexistentes o mal
                escritas
              </li>
              <li>
                Interfaz responsiva y amigable para distintos dispositivos
              </li>
              <li>
                Estructura preparada para futuras mejoras como pronósticos
                extendidos o integración de mapas
              </li>
              <li>Guardar ciudades con localStorage favoritas</li>
              <li>geolocalización automática para mostrar el clima local</li>
              <li>Historial de busqueda</li>
            </ul>

          </p>
        </div>
      ),
    },

    {
      title: "Animemania",
      github: "https://github.com/AdrianAlexisRD/Inventario-MERN",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/fotos-portafolio-41731.firebasestorage.app/o/Animemania1.png?alt=media&token=04587b31-6230-4de2-90e0-19fcfed76f6c",
        AN2,
        AN3,
        AN4,
        AN5,
      ],
      url: "",
    },
    {
      title: "To do list",
      github:
        "https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/To-do-app",
      images: [TD1, TD2, TD3, TD4, TD5],
      url: "https://golden-bubblegum-db0a73.netlify.app/",
    },
  ];
  // h-320 md:h-300 sm:h-350 xl:h-300
  return (
    <section
      className={` 
                flex flex-col pt-10 md:pt-20 
                md:p-4 items-center gap-10 2xl:gap-20
                place-items-center w-[99%] md:w-[95%] xl:w-[90%] 2xl:w-[80%] 2xl:max-w-380
                md:mt-10 md:mb-20 sm:mb-10 sm:mt
                border-blue-300 border-4 bg-[#121212]/50
                rounded-2xl opacity-0 
                ${
                  desplegar
                    ? " animate-[move-Left_0.7s_ease-in-out_forwards]"
                    : "animate-[retroceso-Left_0.7s_ease-in-out_forwards]"
                }
                `}
    >
      <h2 className=" text-orange-300 text-3xl md:text-4xl titl font-extrabold text-center">
        Tecnologias utilizadas
      </h2>
      <div className="grid grid-cols-3 gap-10 text-white lg:flex md:justify-around w-[100%] xl:w-300 border-blue-300 border-4 rounded-2xl bg-black/40 p-6 col-span-2">
        {logos.icons.map((logo, i) => (
          <div className="relative group flex justify-center">
            <div className="absolute top-[-60px]  z-20 hidden group-hover:flex  ">
              <h3
                className={`text-white text-3xl ${logos.nombres[i][1]} px-2 py-1 rounded `}
              >
                {logos.nombres[i][0]}
              </h3>
            </div>
            {logo}
          </div>
        ))}
      </div>
      <h2 className="text-blue-300 text-3xl md:text-4xl title-color font-extrabold text-center">
        Proyectos
      </h2>
      {/* <Slider data={data}/> */}
      <ImageSlider data={data} />
    </section>
  );
};
