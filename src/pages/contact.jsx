import { IconBrandLinkedin, IconBrandGithub ,IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Contact = ({scroll}) =>{

    const [desplegar , setDesplegar] = useState(false)
    
    const esPantallaGrande = window.innerWidth >= 768;
    
      useEffect(()=>{
        if (esPantallaGrande){
            if(scroll>2900 ){
            setDesplegar(true)
            } else{
                setDesplegar(false)
            }
        }else{
            scroll>= 5200 ? setDesplegar(true): setDesplegar(false)
        }

      }, [esPantallaGrande, scroll])
    return(
        <section className={` flex-col  
        gap-7 p-10 items-center
        w-[99%] md:w-[50%] 
        h-fit border-color  
        rounded-2xl text-center
         bg-[#121212]/50
        ${desplegar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px] pointer-events-none'}
        transition-all duration-700 ease-in-out

         `}>
            <h2 className='text-3xl md:text-4xl title-color font-extrabold mb-15'>Contacta me</h2>
            <ul className='text-color flex flex-col items-center gap-5 md:gap-10 '>
                <div className='flex gap-8'>
                    <li>
                        <a className={desplegar&&`flex items-center  ease-in-out active:scale-90  efecto1`} href='https://www.linkedin.com/in/adri%C3%A1n-a-lopez-santos-669ba4333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank">
                            <IconBrandLinkedin stroke={2} size={60} className='animate-[linkColor_5s_ease-in_infinite]' />
                            <h2 className='text-2xl hover:text-[#162556] font-extrabold'>Linkedin</h2>
                        </a>
                    </li>
                    <li>
                    <a className={ desplegar&&`flex items-center  active:scale-90  efecto2`}  href="https://github.com/Alex09121995/Curso-fullstack-talenting" target="_blank">
                            <IconBrandGithub stroke={2} size={60} className='animate-[gitColor_5s_ease-in_3ms_infinite]'  /> 
                            <h2 className='text-2xl hover:text-[#000000] font-extrabold'>Github</h2>

                        </a>
                    </li>
                </div>
                <div className='flex gap-5'>
                    <li>
                        <a className={desplegar&&`flex items-center efecto4`} href='https://wa.me/18092322812' target="_blank">
                            <IconBrandWhatsapp stroke={2} size={60} className='animate-[wsColor_5s_ease-in_6ms_infinite]'  />
                            <h2 className='text-2xl hover:text-[#08aa5e] font-extrabold '> Whatsapp</h2>
                        </a>
                    </li>
                    <li> 
                        <a className={`flex items-center active:scale-90  efecto3`} href="mailto:Alexaghm411@gmail.com?subject=Hola&body=Quiero contactarte" target="_blank">
                            <IconMail stroke={2} size={60} className='animate-[emailColor_5s_ease-in_9ms_infinite]' />
                            <h2 className='text-2xl hover:text-[#f5493b] font-extrabold'>Gmail</h2>

                        </a>
                    </li>
                </div>
            </ul>
        </section>
    )
}