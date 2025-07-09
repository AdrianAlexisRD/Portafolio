import Aprende from '../assets/Aprende.png'
import Itla from '../assets/ITLA.png'
import Infotep from '../assets/logo.infotep.webp'
import Talendig from '../assets/Talendig.png'
import Mescyt from '../assets/mescyt.jpeg'
import { useState } from 'react';
import { useEffect } from 'react';


export const Studies = ({scroll})=>{

    const [desplegar , setDesplegar] = useState(false)
    
    
      useEffect(()=>{
        if(scroll>1500 ){
         console.log('estas en proyect')
         setDesplegar(true)
        } else{
            setDesplegar(false)
        }
      }, [scroll])
    const itla =[
        'diseño de páginas web.',
        'Fundamentos de programación en python.'
    ]
    const infotep = [
        'Mantenimiento preventivo de vehículos.',
        'Auxiliar de contabilidad.',
        'Manejador de inventario.',
        'Manejo básico de computadoras.',
    ]
    const aprende = [
        
        'Técnico en Redes de Datos.',
        'Instalador de Fibra Óptica. ',
        'Disciplina en el trabajo.'
    ]
    return(
        <section className={` flex-col 
        md:grid md:grid-cols-2 
        gap-7 p-10  
        w-[99%] md:w-[99%] 
        h-fit border-color  
        rounded-l-2xl border-r-0 
        border-6 md:self-end
         bg-[#121212]/50
         ${desplegar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px] pointer-events-none'}
transition-all duration-700 ease-in-out

         `}>
             <h2 className="text-4xl font-extrabold text-color col-span-2 text-center">Estudios</h2>
             <div className='flex items-center'>
                <img src={Itla} alt="aprende" className='md:w-40 md:h-30 w-30 h-20 pr-4' />
                <ul className=" text-color flex flex-col justify-center border-l-2 border-white pl-4">
                    {itla.map(curso =><li className="md:text-2xl">{curso}</li>)}
                </ul>
             </div>
            <div className='flex items-center'>
                <img src={Infotep} alt="aprende" className='md:w-40 md:h-30 w-30 pr-4'  />
                <ul className="text-color flex flex-col justify-center border-l-2 border-white pl-4">
                    {infotep.map(curso =><li className="md:text-2xl">{curso}</li>)}
                </ul>
            </div>
            <div className='flex'>
                <img src={Aprende} alt="aprende" className='md:w-40 md:h-30 w-30 h-20  pr-4' />
                <ul className="text-color flex flex-col justify-center border-l-2 border-white pl-4">
                    {aprende.map(curso =><li className="md:text-2xl">{curso}</li>)}
                </ul>
            </div>
            <div className='flex'>
                <img src={Talendig} alt="aprende" className='md:w-40 md:h-30 w-30  h-20 pr-4' />
                <ul className="text-color flex flex-col justify-center border-l-2 border-white pl-4">
                    <li className="md:text-2xl">Tecnico desarrollador fullstack</li>
                </ul>
            </div>
            <div className='flex'>
                <img src={Mescyt} alt="aprende" className='md:w-40 md:h-30 h-20  pr-4' />
                <ul className="text-white flex flex-col justify-center border-l-2 border-white pl-4">
                    <li className="md:text-2xl">Ingles por inmersión</li>
                </ul>
            </div>
        </section>
    )
}