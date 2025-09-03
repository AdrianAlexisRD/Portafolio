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
import ImageSlider from "../Componentes/cardsProyect";

export const Proyects = ({ scroll }) => {
  const [desplegar, setDesplegar] = useState(false);
  const esPantallaGrande = window.innerWidth >= 768;

  useEffect(() => {
    if (esPantallaGrande) {
      scroll >= 250 ? setDesplegar(true) : setDesplegar(false);
    } else {
      scroll >= 500 ? setDesplegar(true) : setDesplegar(false);
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
        className="col-span-2 text-white md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-black transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_7s_infinite] cursor-pointer"
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
            <span className="text-blue-500 font-bold">Stock Master </span> es aplicación 
            fullstack para la gestión de inventario que permite
            registrar, consultar, actualizar y eliminar productos de manera
            sencilla y eficiente.
            <br />
            <br />
            <span className="text-[16px] font-bold text-orange-300">
              Tecnologías utilizadas:{" "}
            </span>{" "}
            <br />
            <span className="font-bold text-blue-300 font">Backend</span> conocer
            <span className="text-green-400 font-bold"> Node.js </span> +
            <span className="text-red-300 font-bold"> Express</span>
             , base de datos MongoDB, API REST con CRUD completo{" "}
            <span className="font-extrabold text-red-400 font">(</span>GET, POST,
            PUT, DELETE <span className="font-extrabold text-red-400">)</span> y
            lenguaje JavaScript . <br /> <br />
            <span className="font-bold text-blue-300">Frontend</span> con 
            <span className="text-blue-400 font-bold"> React</span> +
            <span className="text-purple-500 font-bold"> Vite </span> y
            <span className="text-blue-400 font-bold"> Tailwind </span> 
            para los estilo, librerias como axios para realizar
            peticiones y React dom para para tener una pagina estruturada en
            rutas <br /> <br />
            <span className="text-[16px] font-bold text-orange-300">
              Logros del proyecto:{" "}
            </span>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
               Implementación de una API escalable para manejar productos
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                base de datos inicial con más de 50 productos registrados</li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                estructura clara para expandir funciones como búsqueda, filtros
                o reportes
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                 Dashboard en React con autenticación de usuarios
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                control de entradas y salidas de productos con historial
                </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                exportación de inventario en Excel/PDF
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "Aqui Restaurante",
      github: "https://github.com/AdrianAlexisRD/Proyecto-aqui-restaurante",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran1.png?alt=media&token=ae55477b-ba7b-4509-9713-be80c1203f0a",
        "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran2.png?alt=media&token=0427ca1e-0427-4978-9cae-777a850e83fc",
        "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran3.png?alt=media&token=05734b46-38e2-4652-897a-a67a79d1a063",
        "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran4.png?alt=media&token=6850e8b0-ce8d-4952-92fc-b8fe130f2ac1",
        "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran5.png?alt=media&token=dc5e1c93-7cd4-4cba-a1da-5889432b5f2b",
      ],
      url: "",
      descripcion: (
        <div className="bg-[#121212]/60 rounded p-3 text-[14px] animate-[aparecer_1s_ease-in-out]">
          <p>
            <span className="font-extrabold text-[18px] text-blue-300">
              Aquí Restaurante
            </span>{" "}
            Es una aplicación web fullstack diseñada para optimizar la
            interacción entre clientes y restaurantes. Permite a los usuarios
            consultar información detallada de los negocios y contactarlos
            directamente a través de WhatsApp, teléfono, dirección o correo
            electrónico. Además, ofrece la posibilidad de valorar cada
            restaurante mediante puntuaciones y dar “like” como muestra de
            preferencia.
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Tecnologías utilizadas:
            </span>
            <br />
            <span className="text-blue-500 font-bold">TypeScript</span> +{" "}
            <span className="text-blue-400 font-bold"> React</span> ,
            <span className="text-[#ef6b33] font-bold"> Tailwind</span> y
            <span className="text-[#b14dfe] font-bold"> CSS</span> para el
            diseño y la interactividad,{" "}
            <span className="text-[#85c008] font-bold">Nodejs</span> para el
            backend
            <span className="text-red-400 font-bold"> Firebase</span> y
            <span className="text-[#4b9d4d] font-bold"> MongoDB Atlas </span>{" "}
            para almacenamiento de datos, authetificacion .
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Logros del proyecto:{" "}
            </span>
            <ul className="flex flex-col gap-1 mt-3">
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Formulario para que los propietarios puedan publicar
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Una presentacion estetica de cada restaurante
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Menú interactivo con imágenes y descripciones de los productos
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Mapa integrado para mostrar la ubicación del restaurante
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Sistema adaptable a cualquier tipo de negocio gastronómico con
                mínimos cambios
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Interfaz moderna, responsiva y optimizada para móviles y
                escritorio
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Posibilidad de expansión hacia un sistema completo de inventario
                y gestión de pedidos
              </li>
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
            </span>{' '}
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
            <ul className="flex flex-col gap-2">
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Implementación de búsqueda en tiempo real por ciudad
                </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Visualización clara y estilizada de los datos meteorológicos
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Manejo de errores al ingresar ciudades inexistentes o mal
                escritas
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Interfaz responsiva y amigable para distintos dispositivos
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Estructura preparada para futuras mejoras como pronósticos
                extendidos o integración de mapas
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Guardar ciudades con localStorage favoritas
                </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                geolocalización automática para mostrar el clima local
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Historial de busqueda
              </li>
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
      descripcion: (
        <div className="bg-[#121212]/60 rounded p-3 text-[14px] animate-[aparecer_1s_ease-in-out]">
          <p>
            <span className="font-extrabold text-[18px] text-blue-300">
              Animemania
            </span>{" "}
            es una plataforma web dedicada a reseñar animes, donde los usuarios
            pueden buscar su anime preferido, conocer en qué top se encuentra,
            su puntuación, reseñas y más. Todo esto gracias a la integración con
            una API de RapidAPI.
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Tecnologías utilizadas:
            </span>
            <br />
            <span className="text-[#ef6b33] font-bold">HTML</span>,{" "}
            <span className="text-[#b14dfe] font-bold">CSS</span> y{" "}
            <span className="text-[#f7e025] font-bold">JavaScript</span> junto
            con <span className="text-green-400 font-bold">Axios</span> para
            realizar las peticiones al endpoint de la API.
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Logros del proyecto:{" "}
            </span>
            <ul className="flex flex-col gap-2 mt-3">
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Implementación de buscador de animes por nombre
                </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Visualización de puntuaciones y rankings de cada anime
                </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Sección de reseñas y detalles de cada título
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Interfaz intuitiva y amigable para fans del anime
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Consumo de API externa de manera eficiente con Axios
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Diseño responsivo que se adapta a distintos dispositivos
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Preparado para futuras mejoras como favoritos, historial de
                búsqueda o recomendaciones personalizadas
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "To do list",
      github:
        "https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/To-do-app",
      images: [TD1, TD2, TD3, TD4, TD5],
      url: "https://golden-bubblegum-db0a73.netlify.app/",
      descripcion: (
        <div className="bg-[#121212]/60 rounded p-3 text-[14px] animate-[aparecer_1s_ease-in-out]">
          <p>
            <span className="font-extrabold text-[18px] text-blue-300">
              To Do List
            </span>{" "}
            es una aplicación web diseñada para gestionar tus tareas diarias,
            permitiendo guardarlas, marcarlas como realizadas o pendientes,
            borrarlas y actualizarlas en cualquier momento. Funciona como un
            CRUD completo, asegurando control total sobre tus actividades.
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Tecnologías utilizadas:
            </span>
            <br />
            <span className="text-[#ef6b33] font-bold">HTML</span>,{" "}
            <span className="text-[#b14dfe] font-bold">CSS</span> y{" "}
            <span className="text-[#f7e025] font-bold">JavaScript</span>, con{" "}
            <span className="text-green-400 font-bold">localStorage</span> para
            almacenar los datos de manera persistente en el navegador.
            <br />
            <br />
            <span className="text-[16px] font-bold text-blue-300">
              Logros del proyecto:{" "}
            </span>
            <ul className="flex flex-col gap-2 mt-3">
              <li>
                Creación, edición y eliminación de tareas
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Marcado de tareas como realizadas o pendientes
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Persistencia de los datos gracias al uso de localStorage
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Interfaz sencilla y práctica para el usuario
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Diseño responsivo adaptable a distintos dispositivos
              </li>
              <li>
               <span className="text-black font-extrabold text-2xl">- </span> 
                Base sólida para agregar futuras funciones como categorías o
                filtros
              </li>
            </ul>
          </p>
        </div>
      ),
    },
  ];

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
