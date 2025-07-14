import Ingmelec from '../assets/Ingmelec.jpeg'
import Voz from '../assets/Voz.jpeg'
import Nerdot from '../assets/Nerdot.jpeg'
import OceanWorld from '../assets/OceanWorld.png'
import { useState } from 'react';
import { useEffect } from 'react';

export const Experience = ({scroll}) =>{
    const [desplegar , setDesplegar] = useState(false)
    const esPantallaGrande = window.innerWidth >= 768;
    
      useEffect(()=>{
        if (esPantallaGrande){
            scroll>= 2300 ? setDesplegar(true): setDesplegar(false)
        }else{
            scroll>= 4228 ? setDesplegar(true): setDesplegar(false)
        }

      }, [esPantallaGrande, scroll])
    return(
        <section className={` 
            flex-col md:gap-15 gap-10 flex 
            p-5 md:grid md:grid-cols-2 items-center
            place-items-center w-[99%] md:w-[90%] md:max-w-[1500px]
            h-fit mt-5 border-color bg-[#121212]/50
            rounded-2xl text-color opacity-0 xl:mb-100
            ${desplegar ? ' animate-[move-Left_0.7s_ease-in-out_forwards]' : 'animate-[retroceso-Left_0.7s_ease-in-out_forwards]'}
            transition-all duration-1000 ease-in-out
            `}>
            <h2 className='md:text-4xl text-3xl text-[#EAE4D5] col-span-2 text-center font-extrabold'>Experiencia Laboral</h2>
            <div className='flex md:gap-7 gap-4 items-center md:justify-start'>
                <img src={Ingmelec} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div>
                    <h3 className='md:text-3xl text-[20px] font-bold'>Tecnico electricista</h3>
                    <p className='md:text-2xl'>Técnico de electricidad media-baja tension.</p>
                </div>  
            </div>
            <div className='flex md:flex-row flex-row-reverse md:gap-7 gap-4 items-center md:justify-start'>
                <img src={Voz} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div>
                    <h3 className='md:text-3xl text-[20px] font-bold'>Tecnico en telecomunicaciones</h3>
                    <p className='md:text-2xl'>Tecnico reparado de servicios ADSL y Voz.</p>
                </div>
            </div >
            <div className='flex md:gap-7 gap-4 items-center md:justify-start'>
                <img src={Nerdot} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div>
                    <h3 className='md:text-3xl text-[20px] font-bold'>Tecnico en Logistica Digital</h3>
                    <p className='md:text-2xl'>Servicios tercnicos de software en terminales de tarjetas bancarias.</p>
                </div>
            </div>
            <div className='flex md:flex-row flex-row-reverse md:gap-7 gap-4 items-center md:justify-start m-0 p-0 '>
                <img src={OceanWorld} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div>
                    <h3 className='md:text-3xl text-[20px] font-bold'>Tecnico electricista</h3>
                    <p className='md:text-2xl'>Matenimiento electrico industrial.</p>
                </div>
            </div>

        </section>
    )
}