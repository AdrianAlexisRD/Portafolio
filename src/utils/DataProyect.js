// proyectosData.js
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

import AN2 from "../assets/Animemania2.png";
import AN3 from "../assets/Animemania3.png";
import AN4 from "../assets/Animemania4.png";
import AN5 from "../assets/Animemania5.png";

import TD1 from "../assets/Todoapp1.png";
import TD2 from "../assets/Todoapp2.png";
import TD3 from "../assets/Todoapp3.png";
import TD4 from "../assets/Todoapp4.png";
import TD5 from "../assets/Todoapp5.png";

export const proyectosData = [
  {
    id: 1,
    title: "Stock Master",
    github: "https://github.com/AdrianAlexisRD/Inventario-MERN",
    url: "",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    images: [SM1, SM2, SM3, SM4, SM5],
    descripcion: {
      intro: "Aplicación fullstack para la gestión de inventario que permite registrar, consultar, actualizar y eliminar productos de manera eficiente.",
      backend: "Node.js + Express con API REST y base de datos MongoDB.",
      frontend: "React + Vite y Tailwind CSS, utilizando Axios para peticiones.",
      logros: [
        "Implementación de API escalable",
        "Base de datos con +50 productos",
        "Dashboard con autenticación",
        "Control de historial y reportes PDF"
      ]
    }
  },
  {
    id: 2,
    title: "Aquí Restaurante",
    github: "https://github.com/AdrianAlexisRD/Proyecto-aqui-restaurante",
    url: "",
    tech: ["TypeScript", "React", "Firebase", "MongoDB"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran1.png?alt=media&token=ae55477b-ba7b-4509-9713-be80c1203f0a",
      "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran2.png?alt=media&token=0427ca1e-0427-4978-9cae-777a850e83fc",
      "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran3.png?alt=media&token=05734b46-38e2-4652-897a-a67a79d1a063",
      "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran4.png?alt=media&token=6850e8b0-ce8d-4952-92fc-b8fe130f2ac1",
      "https://firebasestorage.googleapis.com/v0/b/data-6d9cf.firebasestorage.app/o/imagenes%2FaquiRestauran5.png?alt=media&token=dc5e1c93-7cd4-4cba-a1da-5889432b5f2b",
    ],
    descripcion: {
      intro: "Plataforma para optimizar la interacción entre clientes y restaurantes con contacto directo vía WhatsApp.",
      backend: "Node.js con Firebase para autenticación y almacenamiento.",
      frontend: "TypeScript + React con Tailwind CSS para una interfaz moderna.",
      logros: [
        "Sistema de publicación para propietarios",
        "Menú interactivo con imágenes",
        "Mapa integrado de ubicación",
        "Diseño 100% responsivo"
      ]
    }
  },
  {
    id: 3,
    title: "App Weather",
    github: "https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/App-clima",
    url: "https://jolly-peony-a4c08a.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "API Fetch"],
    images: [WT1, WT2, WT3, WT4, WT5],
    descripcion: {
      intro: "Consulta del clima en tiempo real para cualquier ciudad del mundo.",
      techStack: "Desarrollado con Vanilla JavaScript, CSS3 y HTML5, consumiendo OpenWeather API.",
      logros: [
        "Búsqueda en tiempo real",
        "Manejo de errores de API",
        "Persistencia con localStorage",
        "Geolocalización automática"
      ]
    }
  },
  {
    id: 4,
    title: "Animemania",
    github: "https://github.com/AdrianAlexisRD/Inventario-MERN",
    url: "",
    tech: ["JavaScript", "Axios", "RapidAPI"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fotos-portafolio-41731.firebasestorage.app/o/Animemania1.png?alt=media&token=04587b31-6230-4de2-90e0-19fcfed76f6c",
      AN2, AN3, AN4, AN5,
    ],
    descripcion: {
      intro: "Plataforma de reseñas de anime integrada con RapidAPI para rankings y puntuaciones.",
      techStack: "JavaScript, HTML, CSS y Axios para el consumo de endpoints.",
      logros: [
        "Buscador dinámico de animes",
        "Visualización de rankings mundiales",
        "Interfaz intuitiva y estética",
        "Consumo eficiente de API externa"
      ]
    }
  },
  {
    id: 5,
    title: "To Do List Pro",
    github: "https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/To-do-app",
    url: "https://golden-bubblegum-db0a73.netlify.app/",
    tech: ["JavaScript", "LocalStorage", "CRUD"],
    images: [TD1, TD2, TD3, TD4, TD5],
    descripcion: {
      intro: "Gestor de tareas diarias con persistencia de datos y control total de estados.",
      techStack: "HTML, CSS y JavaScript nativo con uso de LocalStorage.",
      logros: [
        "CRUD completo (Crear, leer, actualizar, borrar)",
        "Persistencia de datos local",
        "Filtros de tareas pendientes/completadas",
        "Diseño minimalista y práctico"
      ]
    }
  }
];

export default proyectosData;