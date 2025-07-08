import { IconBrandLinkedin, IconBrandGithub ,IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Contact = ({scroll}) =>{

    const [desplegar , setDesplegar] = useState(false)
    
    
        useEffect(()=>{
        if(scroll>2590 ){
            console.log('estas en proyect')
            setDesplegar(true)
        } else{
            setDesplegar(false)
        }
        }, [scroll])
    return(
        <section className={` flex-col  
        gap-7 p-10 items-center
        w-[99%] md:w-[50%] 
        h-fit border-color  
        rounded-l-2xl border-r-0 
        border-6 md:self-end
         bg-[#121212]/50
         ${desplegar?'flex moveLeft': 'animate-[retroceso-Left_1s_ease-in-out_forwards]'}
         `}>
            <h2 className='text-3xl md:text-4xl title-color font-extrabold mb-15'>Contacta me</h2>
            <ul className='text-color flex flex-col gap-5 '>
                <div className='flex gap-8'>
                    <li>
                        <a className='flex items-center  ease-in-out active:scale-90  efecto1' href='https://www.linkedin.com/in/adri%C3%A1n-a-lopez-santos-669ba4333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank">
                            <IconBrandLinkedin stroke={2} size={60} className='animate-[linkColor_4s_ease-in-out_infinite]' />
                            <h2 className='text-2xl hover:text-[#162556]'>Linkedin</h2>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center  active:scale-90  efecto2'  href="https://github.com/Alex09121995/Curso-fullstack-talenting" target="_blank">
                            <IconBrandGithub stroke={2} size={60} className='animate-[gitColor_4s_ease-in-out_infinite]'  /> 
                            <h2 className='text-2xl hover:text-[#000000]'>Github</h2>

                        </a>
                    </li>
                </div>
                <div className='flex gap-5'>
                    <li>
                        <a className='flex items-center efecto4' href='https://wa.me/18092322812' target="_blank">
                            <IconBrandWhatsapp stroke={2} size={60} className='animate-[wsColor_4s_ease-in-out_infinite]'  />
                            <h2 className='text-2xl hover:text-[#08aa5e] '> Whatsapp</h2>
                        </a>
                    </li>
                    <li> 
                        <a className='flex items-center active:scale-90  efecto3' href="mailto:Alexaghm411@gmail.com?subject=Hola&body=Quiero contactarte" target="_blank">
                            <IconMail stroke={2} size={60} className='animate-[emailColor_4s_ease-in-out_infinite]' />
                            <h2 className='text-2xl hover:text-[#f5493b]'>Gmail</h2>

                        </a>
                    </li>
                </div>
            </ul>
        </section>
    )
}