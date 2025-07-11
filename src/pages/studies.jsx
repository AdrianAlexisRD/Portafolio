import Aprende from '../assets/Aprende.png'
import Itla from '../assets/ITLA.png'
import Infotep from '../assets/logo.infotep.webp'
import Talendig from '../assets/Talendig.png'
import Mescyt from '../assets/mescyt.jpeg'
import { useState } from 'react';
import { useEffect } from 'react';


export const Studies = ({scroll})=>{

    const [desplegar , setDesplegar] = useState(false)
    const esPantallaGrande = window.innerWidth >= 768;
    
      useEffect(()=>{
        if (esPantallaGrande){
            scroll>= 1500 ? setDesplegar(true): setDesplegar(false)
        }else{
            scroll>= 3500 ? setDesplegar(true): setDesplegar(false)
        }

      }, [esPantallaGrande, scroll])

    const itla =[
        'Diseño de páginas web.',
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
        <section className={` 
        flex-col flex md:grid md:grid-cols-2 
        gap-7 md:p-10  justify-start md:items-center
        w-[99%] md:w-[90%]  md:gap-10
        h-fit border-color  p-5
        rounded-2xl border-6 
         bg-[#121212]/50 opacity-0
        ${desplegar ? ' animate-[move-right_0.7s_ease-in-out_forwards]' : 'animate-[retroceso-Left_0.7s_ease-in-out_forwards]'}
    
        `}>
             <h2 className="text-4xl font-extrabold text-color col-span-2 md:justify-start text-center ">Estudios</h2>
             <div className='flex '>
                <img src={Itla} alt="aprende" className='md:w-40 md:h-30 w-[100px] h-20 rounded  ' />
                <ul className=" text-color flex flex-col gap-2 justify-center   pl-4">
                    {itla.map(curso =><li className="md:text-2xl p-2 ">{curso}</li>)}
                </ul>
             </div>
            <div className='flex gap-5 md:flex-row flex-row-reverse md:justify-start '>
                <img src={Infotep} alt="aprende" className='md:w-40 md:h-30 w-[100px] h-20 rounded'  />
                <ul className="text-color flex flex-col justify-center gap-2 ">
                    {infotep.map(curso =><li className="md:text-2xl p-2">{curso}</li>)}
                </ul>
            </div>
            <div className='flex gap-5 md:justify-start'>
                <img src={Aprende} alt="aprende" className='md:w-40 md:h-30 w-[100px] h-20 rounded' />
                <ul className="text-color flex flex-col justify-center gap-2">
                    {aprende.map(curso =><li className="md:text-2xl  p-2 ">{curso}</li>)}
                </ul>
            </div>
            <div className='flex gap-5 md:flex-row flex-row-reverse justify-end md:justify-start'>
                <img src={Talendig} alt="aprende" className='md:w-45 md:h-30 w-[100px] h-20 rounded' />
                <ul className="text-color flex flex-col justify-center gap-2 ">
                    <li className="md:text-2xl text-start p-2 ">Tecnico desarrollador fullstack.</li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <img src={Mescyt} alt="aprende" className='md:w-40 md:h-30 h-20 rounded' />
                <ul className="text-color flex flex-col justify-center gap-2">
                    <li className="md:text-2xl  p-2 ">Ingles por inmersión.</li>
                </ul>
            </div>
        </section>
    )
}