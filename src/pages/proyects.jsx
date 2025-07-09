
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
import { useState, useEffect } from 'react';
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




export const Proyects = ({scroll}) =>{
const [desplegar , setDesplegar] = useState(false)

useEffect(() => {
    if (scroll > 1 ) {
      setDesplegar(true);
    } else {
      setDesplegar(false);
    }
}, [scroll]);


{/* <div class="animate-[wiggle_1s_ease-in-out_infinite] ..."></div> */}
    const logos = {
                   icons:[<IconBrandReact stroke={2} size={50} className='text-[#30a2ff] animate-[aumentar_2s_ease-in-out_infinite]  cursor-pointer'/>,
                    <IconBrandMongodb stroke={2} size={50} className='text-[#4b9d4d] animate-[aumentar_2s_ease-in-out_1s_infinite]'/>,
                    <IconBrandNodejs stroke={2} size={50} className='text-[#85c008] animate-[aumentar_2s_ease-in-out_2s_infinite]'/>,
                    <IconBrandTailwind stroke={2} size={50} className='text-[#30a2ff] animate-[aumentar_2s_ease-in-out_3s_infinite]'/>,
                    <IconBrandCss3 stroke={2} size={50} className='text-[#0874bc] animate-[aumentar_2s_ease-in-out_4s_infinite]'/>,
                    <IconBrandHtml5 stroke={2} size={50} className='text-[#ef6b33] animate-[aumentar_2s_ease-in-out_5s_infinite]'/>,
                    <IconBrandJavascript stroke={2} size={50} className='col-span-2 text-[#f7e025] animate-[aumentar_2s_ease-in-out_6s_infinite]'/>,
                    <IconBrandGithub stroke={2} size={50} className='col-span-2 text-black animate-[aumentar_2s_ease-in-out_7s_infinite]'/>,
                    <IconBrandVite  stroke={2} size={50} className='col-span-2 text-[#b14dfe] animate-[aumentar_2s_ease-in-out_8s_infinite]'/>
                    ],
                nombres:    [
        'React', 'MongoDB','Nodejs','Tailwind','CSS','HTML','JavaScript','Github','Vite'
    ]
    }
 
    return(
 

            <section className={` 
                flex
                flex-col md:gap-20 gap-30 
                p-15 md:grid md:grid-cols-2 items-center
                place-items-center w-[99%] md:w-[95%] 
                h-fit mb-10 mt-5 border-color bg-[#121212]/50
                rounded-2xl  
                ${desplegar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100px] pointer-events-none'}
                transition-all duration-700 ease-in-out
                `}>
                <h2 className='col-span-2 text-white text-3xl md:text-4xl title-color font-extrabold text-center'>Tecnologias utilizadas</h2>
                <div className='grid grid-cols-3 gap-10 text-white md:flex md:justify-around w-[100%] border-color rounded-2xl bg-black/40 p-6 col-span-2'>
                { logos.icons.map((logo , i) =>(
                    <div className='relative group '>
                    <div className='absolute top-[-60px] right-[-20px] z-20 hidden group-hover:flex '>
                        <h3 className='text-white text-3xl bg-black/30 px-2 py-1 rounded '>{logos.nombres[i]}</h3>
                    </div>
                        {logo}
                    </div>
                ))
                    }
                </div>
                <article className=" md:w-170 w-95 h-fit p-3 bg-[#121212]/50 aparecer rounded-2xl" >
                    <div className='grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 gap-2 h-[100%] rounded-2xl'>
                        <img src={SM1} alt="Portada" className='col-span-2 row-span-2 h-[100%] rounded hover:scale-120   transition-all duration-700 ease-initial' />
                        <img src={SM2} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={SM3} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={SM4} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={SM5} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                    </div>
                    <a href='https://github.com/AdrianAlexisRD/Inventario-MERN' className='flex justify-center items-center' target='_blank'>
                        <IconBrandGithub stroke={2} size={50} className='p-2 text-white'/>
                        <h2 className='text-white text-2xl font-bold hover:border-b-6 border-[#F2F2F2] '>Sistema de inventario</h2>
                    </a>
                </article>
                <article className=" md:w-170 w-95 h-fit p-3 bg-[#121212]/50 aparecer rounded-2xl" >
                    <div className='grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 gap-2 h-[100%] rounded-2xl'>
                        <img src={WT1} alt="Portada" className='col-span-2 row-span-2 h-[100%] rounded hover:scale-120   transition-all duration-700 ease-initial' />
                        <img src={WT2} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={WT3} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={WT4} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={WT5} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                    </div>
                    <a href='https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/App-clima' className='flex justify-center items-center' target='_blank'>
                        <IconBrandGithub stroke={2} size={50} className='p-2 text-white'/>
                        <h2 className='text-white text-2xl font-bold hover:border-b-6 border-[#F2F2F2] '>App Weather</h2>
                    </a>
                </article>
                <article className=" md:w-170 w-95 h-fit p-3 bg-[#121212]/50 aparecer rounded-2xl" >
                    <div className='grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 gap-2 h-[100%] rounded-2xl'>
                        <img src={AN1} alt="Portada" className='col-span-2 row-span-2 h-[100%] rounded hover:scale-120   transition-all duration-700 ease-initial' />
                        <img src={AN2} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={AN3} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={AN4} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={AN5} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                    </div>
                    <a href='https://github.com/AdrianAlexisRD/Inventario-MERN' className='flex justify-center items-center' target='_blank'>
                        <IconBrandGithub stroke={2} size={50} className='p-2 text-white'/>
                        <h2 className='text-white text-2xl font-bold hover:border-b-6 border-[#F2F2F2] '>Animemania</h2>
                    </a>
                </article>
                <article className=" md:w-170 w-95 h-fit p-3 bg-[#121212]/50 aparecer rounded-2xl" >
                    <div className='grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 gap-2 h-[100%] rounded-2xl'>
                        <img src={TD1} alt="Portada" className='col-span-2 row-span-2 h-[100%] rounded hover:scale-120   transition-all duration-700 ease-initial' />
                        <img src={TD2} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={TD3} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={TD4} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                        <img src={TD5} alt="" className='rounded hover:scale-200 transition-all duration-400 ease-initial'/>
                    </div>
                    <a href='https://github.com/AdrianAlexisRD/Curso-fullstack-talenting/tree/main/To-do-app' className='flex justify-center items-center' target='_blank'>
                        <IconBrandGithub stroke={2} size={50} className='p-2 text-white'/>
                        <h2 className='text-white text-2xl font-bold hover:border-b-6 border-[#F2F2F2] '>To do list</h2>
                    </a>
                </article>
                {/* <article className=" md:w-100 w-90 h-fit bg-[#121212]/50 rounded aparecer " >
                    <iframe
                    width="100%"
                    src="https://golden-bubblegum-db0a73.netlify.app/"
                    title="Sistema de inventario"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t"
                    />
                    <h2 className='text-white text-center text-2xl font-bold'>To do list</h2> */}

                {/* </article>
                    <article className=" md:w-100 w-90 h-fit bg-[#121212]/30 rounded aparecer " >
                    <iframe
                    width="100%"
                    src="https://cualquiercosa.xyz/"
                    title="Sistema de inventario"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t"
                    />
                    <h2 className='text-white text-center text-2xl font-bold'>Pagina de pedidos</h2>

                </article>
                <article className=" md:w-100 w-90 h-fit bg-[#121212]/20 rounded aparecer" >
                    <iframe
                    width="100%"                   
                    src="https://jolly-peony-a4c08a.netlify.app/"
                    title="Sistema de inventario"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t"
                    />
                    <h2 className='text-white text-center text-2xl font-bold'>App weather</h2>

                </article> */}


            </section>


    )
}