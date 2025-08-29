import { IconBrandLinkedin, IconBrandGithub ,IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Contact = ({scroll}) =>{

    const [desplegar , setDesplegar] = useState(false)
    
    const esPantallaGrande = window.innerWidth >= 768;
    
      useEffect(()=>{
        if (esPantallaGrande){
                scroll>= 6600 ? setDesplegar(true): setDesplegar(false)
            
        }else{
                scroll>= 5700 ? setDesplegar(true): setDesplegar(false)   
        }

      }, [esPantallaGrande, scroll])
    return(
        <section className={` flex-col  
        gap-7 p-10 items-center
        w-[99%] md:w-[50%] max-w-200
        h-fit border-orange-300 border-4 absolute bottom-0
        rounded-2xl text-center 
         bg-[#121212]/50 opacity-0
        ${desplegar ? ' animate-[move-right_0.7s_ease-in-out_forwards]' : 'animate-[retroceso-Left_0.7s_ease-in-out_forwards]'}
        `}>
            <h2 className='text-3xl md:text-4xl text-blue-300 font-extrabold mb-15'>Contacta me</h2>
            <ul className='text-color flex flex-col items-center gap-5 md:gap-10 '>
                <div className='flex gap-8'>
                    <li className='group '>
                        <a className={desplegar && `flex items-center  ease-in-out active:scale-90 drop-shadow-2xl group-hover:drop-shadow-[#162556] text-[#162556] sm:text-white efecto1`} href='https://www.linkedin.com/in/adri%C3%A1n-a-lopez-santos-669ba4333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank">
                            <IconBrandLinkedin stroke={2} size={60} className='group-hover:text-[#162556] transition-all duration-300 ease-in-out' />
                            <h2 className=' group-hover:text-[#162556] font-extrabold text-2xl transition-all duration-300 ease-in-out'>Linkedin</h2>
                        </a>
                    </li>
                    <li className='group'>
                    <a className={ desplegar && `flex items-center  active:scale-90 drop-shadow-2xl group-hover:drop-shadow-[#000000] text-[#000000] sm:text-white efecto2`}  href="https://github.com/AdrianAlexisRD" target="_blank">
                            <IconBrandGithub stroke={2} size={60} className='group-hover:text-[#000000] transition-all duration-300 ease-in-out'  /> 
                            <h2 className=' group-hover:text-[#000000] font-extrabold text-2xl transition-all duration-300 ease-in-out'>Github</h2>
                        </a>
                    </li>
                </div>
                <div className='flex gap-5'>
                    <li className='group'>
                        <a className={desplegar&&`flex items-center text-[#08aa5e] drop-shadow-2xl group-hover:drop-shadow-[#08aa5e] sm:text-white efecto4`} href='https://wa.me/18092322812' target="_blank">
                            <IconBrandWhatsapp stroke={2} size={60} className='group-hover:text-[#08aa5e] transition-all duration-300 ease-in-out'  />
                            <h2 className='text-2xl group-hover:text-[#08aa5e] font-extrabold transition-all duration-300 ease-in-out'> Whatsapp</h2>
                        </a>
                    </li>
                    <li className='group transition-all duration-500 ease-in-out'> 
                        <a className={`flex items-center active:scale-90 text-[#f5493b] drop-shadow-2xl group-hover:drop-shadow-[#f5493b] sm:text-white efecto3 `} href="mailto:Alexaghm411@gmail.com?subject=Hola&body=Quiero contactarte" target="_blank">
                            <IconMail stroke={2} size={60} className='group-hover:text-[#f5493b] transition-all duration-300 ease-in-out' />
                            <h2 className='text-2xl group-hover:text-[#f5493b] font-extrabold transition-all duration-300 ease-in-out'>Gmail</h2>
                        </a>
                    </li>
                </div>
            </ul>
        </section>
    )
}