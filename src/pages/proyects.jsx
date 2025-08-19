
import { 
    IconBrandMongodb,  
    IconBrandNodejs, 
    IconBrandTailwind, 
    IconBrandCss3, 
    IconBrandHtml5, 
    IconBrandJavascript, 
    IconBrandGithub, 
    IconBrandReact,
    IconBrandVite 
} from '@tabler/icons-react';
import { useState, useEffect} from 'react';
import SM1 from '../assets/StockMaster1.png'
import SM2 from '../assets/StockMaster2.png'
import SM3 from '../assets/StockMaster3.png'
import SM4 from '../assets/StockMaster4.png'
import SM5 from '../assets/StockMaster5.png'
import WT1 from '../assets/Weather1.png'
import WT2 from '../assets/Weather2.png'
import WT3 from '../assets/Weather3.png'
import WT4 from '../assets/Weather4.png'
import WT5 from '../assets/Weather5.png'
import AN1 from '../assets/Animemania1.png'
import AN2 from '../assets/Animemania2.png'
import AN3 from '../assets/Animemania3.png'
import AN4 from '../assets/Animemania4.png'
import AN5 from '../assets/Animemania5.png'
import TD1 from '../assets/Todoapp1.png'
import TD2 from '../assets/Todoapp2.png'
import TD3 from '../assets/Todoapp3.png'
import TD4 from '../assets/Todoapp4.png'
import TD5 from '../assets/Todoapp5.png'
import { Slider } from '../Componentes/slider';





export const Proyects = ({scroll}) =>{
const [desplegar , setDesplegar] = useState(false)
    const esPantallaGrande = window.innerWidth >= 768;
    
      useEffect(()=>{
        if (esPantallaGrande){
            scroll>= 400 ? setDesplegar(true): setDesplegar(false)
        }else{
            scroll>= 96 ? setDesplegar(true): setDesplegar(false)
        }

      }, [esPantallaGrande, scroll])


    const logos = {
                   icons:[<IconBrandReact stroke={2} size={50} className='text-blue-600 md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-blue-600 transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_infinite]  cursor-pointer'/>,
                    <IconBrandMongodb stroke={2} size={50} className='text-[#4b9d4d] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#4b9d4d] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_1s_infinite] cursor-pointer'/>,
                    <IconBrandNodejs stroke={2} size={50} className='text-[#85c008] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#85c008] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_2s_infinite] cursor-pointer'/>,
                    <IconBrandTailwind stroke={2} size={50} className='text-[#30a2ff] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#30a2ff] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_3s_infinite] cursor-pointer'/>,
                    <IconBrandCss3 stroke={2} size={50} className='text-[#0874bc] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#0874bc] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_4s_infinite] cursor-pointer'/>,
                    <IconBrandHtml5 stroke={2} size={50} className='text-[#ef6b33] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#ef6b33] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_5s_infinite] cursor-pointer'/>,
                    <IconBrandJavascript stroke={2} size={50} className='col-span-2 text-[#f7e025] md:animate-none hover:drop-shadow-2xl hover:drop-shadow-[#f7e025] hover:scale-140 transition-all duration-00 ease animate-[aumentar_2s_ease-in-out_6s_infinite] cursor-pointer'/>,
                    <IconBrandGithub stroke={2} size={50} className='col-span-2 text-black md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-black transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_7s_infinite] cursor-pointer'/>,
                    <IconBrandVite  stroke={2} size={50} className='col-span-2 text-[#b14dfe] md:animate-none hover:scale-140 hover:drop-shadow-2xl hover:drop-shadow-[#b14dfe] transition-all duration-300 ease animate-[aumentar_2s_ease-in-out_8s_infinite] cursor-pointer'/>
                    ],
                nombres:    [
        'React', 'MongoDB','Nodejs','Tailwind','CSS','HTML','JavaScript','Github','Vite'
    ]
    }

            const data = [
        {
            title: "Inventario",
            github: "https://github.com/AdrianAlexisRD/Inventario-MERN",
            images: [SM1, SM2, SM3, SM4, SM5],
            url: ''
        },
        {
            title: "App Weather",
            github: "https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/App-clima",
            images: [WT1, WT2, WT3, WT4, WT5],
            url: 'https://jolly-peony-a4c08a.netlify.app/'
        },
        {
            title: "Animemania",
            github: "https://github.com/AdrianAlexisRD/Inventario-MERN",
            images: ['https://firebasestorage.googleapis.com/v0/b/fotos-portafolio-41731.firebasestorage.app/o/Animemania1.png?alt=media&token=04587b31-6230-4de2-90e0-19fcfed76f6c', AN2, AN3, AN4, AN5],
            url: ''
        },
        {
            title: "To do list",
            github: "https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/To-do-app",
            images: [TD1, TD2, TD3, TD4, TD5],
            url: 'https://golden-bubblegum-db0a73.netlify.app/'
        },
        ];

 
    return(
 

            <section  className={` 
                flex flex-col pt-10 md:pt-20 
                md:p-4 items-center gap-10 2xl:gap-20
                place-items-center w-[99%] md:w-[95%] xl:w-[90%] 2xl:w-[80%] 2xl:max-w-380
                md:mt-10 md:mb-20 sm:mb-10 sm:mt
                h-310 md:h-300 sm:h-350 xl:h-300 mb-10 mt-20 border-color bg-[#121212]/50
                rounded-2xl opacity-0
                ${desplegar ? ' animate-[move-Left_0.7s_ease-in-out_forwards]' : 'animate-[retroceso-Left_0.7s_ease-in-out_forwards]'}
                `}>
                    
                <h2 className=' text-white text-3xl md:text-4xl title-color font-extrabold text-center'>Tecnologias utilizadas</h2>
                <div className='grid grid-cols-3 gap-10 text-white lg:flex md:justify-around w-[100%] xl:w-300 border-color rounded-2xl bg-black/40 p-6 col-span-2'>
                { logos.icons.map((logo , i) =>(
                    <div className='relative group flex justify-center'>
                    <div className='absolute top-[-60px]  z-20 hidden group-hover:flex  '>
                        <h3 className='text-white text-3xl bg-black/30 px-2 py-1 rounded '>{logos.nombres[i]}</h3>
                    </div>
                        {logo}
                    </div>
                ))
                    }
                </div>
                    <h2 className='text-white text-3xl md:text-4xl title-color font-extrabold text-center'>Proyectos</h2>

                <Slider data={data}/>



            </section>


    )
}