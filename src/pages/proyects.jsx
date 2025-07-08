
import { 
    IconBrandMongodb,  
    IconBrandNodejs, 
    IconBrandTailwind, 
    IconBrandCss3, 
    IconBrandHtml5, 
    IconBrandJavascript, 
    IconBrandGithub, 
    IconBrandReact 
} from '@tabler/icons-react';
import { useState } from 'react';
import { useEffect } from 'react';



export const Proyects = ({scroll}) =>{
const [desplegar , setDesplegar] = useState(false)


useEffect(() => {
  const screenWidth = window.innerWidth;
    console.log(screenWidth)
  if (screenWidth < 800) {
    if (scroll > 200) {
      setDesplegar(true);
    } else {
      setDesplegar(false);
    }
  } else {
    if (scroll > 400 && scroll < 1240) {
      setDesplegar(true);
    } else {
      setDesplegar(false);
    }
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
                    <IconBrandGithub stroke={2} size={50} className='col-span-2 animate-[aumentar_2s_ease-in-out_7s_infinite]'/>],
                nombres:    [
        'React', 'MongoDB','Nodejs','Tailwind','CSS','HTML','JavaScript','Github'
    ]
    }
 
    return(
 

            <section className={` 
                flex-col md:gap-15 gap-10 
                p-4 md:grid md:grid-cols-2 items-center
                place-items-center w-[99%] md:w-[99%] md:max-w-[1500px]
                h-fit mb-10 mt-5 border-color bg-[#121212]/50
                rounded-r-2xl border-l-0 border-6 
                ${desplegar ? 'flex moveRight' : 'animate-[retroceso-Right_1s_ease-in-out_forwards]'} `}>
                <h2 className='col-span-2 text-white text-3xl md:text-4xl title-color font-extrabold text-center'>Tecnologias utilizadas</h2>
                <div className='grid grid-cols-3 gap-10 text-white md:flex md:justify-around w-[100%] col-span-2'>
                { logos.icons.map((logo , i) =>(
                    <div className='relative group'>
                    <div className='absolute top-[-60px] right-[-20px] z-20 hidden group-hover:flex'>
                        <h3 className='text-white text-3xl bg-black px-2 py-1 rounded'>{logos.nombres[i]}</h3>
                    </div>
                        {logo}
                    </div>
                ))
                    }
                </div>
                <article className="md:w-100 h-fit bg-[#121212] rounded-2xl aparecer" >
                    <iframe
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/1JfEJCyFgwc"
                    title="Sistema de inventario"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                    />
                    <h2 className='text-white text-center text-2xl'>Sistema de inventario</h2>
                </article>
                <article className="md:w-100 h-fit bg-[#121212] rounded-2xl aparecer " >
                    <iframe
                    width="100%"
                    height="auto"
                    src="https://golden-bubblegum-db0a73.netlify.app/"
                    title="Sistema de inventario"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                    />
                    <h2 className='text-white text-center text-2xl'>App weather</h2>

                </article>
                    <article className="md:w-100 h-fit bg-[#121212] rounded-2xl aparecer " >
                    <iframe
                    width="100%"
                    height="auto"
                    src="https://cualquiercosa.xyz/"
                    title="Sistema de inventario"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                    />
                    <h2 className='text-white text-center text-2xl'>To do list</h2>

                </article>
                <article className="md:w-100 h-fit bg-[#121212] rounded-2xl aparecer" >
                    <iframe
                    width="100%"
                    height="auto"
                    src="https://jolly-peony-a4c08a.netlify.app/"
                    title="Sistema de inventario"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                    />
                    <h2 className='text-white text-center text-2xl'>Pagina de Anime</h2>

                </article>


            </section>


    )
}