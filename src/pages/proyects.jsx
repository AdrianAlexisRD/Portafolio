import AnimeMania  from '../assets/AnimeMania.mp4'
import Clima  from '../assets/Clima.mp4'
import Inventario  from '../assets/Inventario.mp4'
import TodoList from '../assets/TodoList.mp4'
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



export const Proyects = () =>{

    const logos = {
                   icons:[<IconBrandReact stroke={2} size={50} className='hover:text-[#30a2ff] hover:scale-150 ease-in-out duration-500 cursor-pointer'/>,
                    <IconBrandMongodb stroke={2} size={50} className='hover:text-[#4b9d4d] hover:scale-150 ease-in-out duration-500'/>,
                    <IconBrandNodejs stroke={2} size={50} className='hover:text-[#85c008] hover:scale-150 ease-in-out duration-500'/>,
                    <IconBrandTailwind stroke={2} size={50} className='hover:text-[#30a2ff] hover:scale-150 ease-in-out duration-500'/>,
                    <IconBrandCss3 stroke={2} size={50} className='hover:text-[#0874bc] hover:scale-150 ease-in-out duration-500'/>,
                    <IconBrandHtml5 stroke={2} size={50} className='hover:text-[#ef6b33] hover:scale-150 ease-in-out duration-500'/>,
                    <IconBrandJavascript stroke={2} size={50} className='hover:text-[#f7e025] hover:scale-150 ease-in-out duration-500'/>,
                    <IconBrandGithub stroke={2} size={50} className=' hover:scale-150 ease-in-out duration-500'/>],
                nombres:    [
        'React', 'MongoDB','Nodejs','Tailwind','CSS','HTML','JavaScript','Github'
    ]
    }
 
    return(
 

            <section className="grid grid-cols-2 items-center place-items-center w-[70%] md:w-[60%] h-[90%] border-blue-950 rounded-r-2xl border-l-0 border-6 moveRight bg-[#121212]/50 ">
                <article className="w-100 h-fit bg-[#121212] rounded-2xl aparecer" >
                    <video width="100%" controls autoPlay loop muted className='rounded-2xl'>
                    <source src={Inventario} type="video/mp4" /> 
                    </video>
                    <h2 className='text-white text-center text-2xl'>Sistema de inventario</h2>
                </article>
                <article className="w-100 h-fit bg-[#121212] rounded-2xl aparecer " >
                    <video width="100%" controls autoPlay loop muted className='rounded-2xl'>
                    <source src={Clima} type="video/mp4" /> 
                    </video>
                    <h2 className='text-white text-center text-2xl'>App weather</h2>

                </article>
                    <article className="w-100 h-fit bg-[#121212] rounded-2xl aparecer " >
                    <video width="100%" controls autoPlay loop muted className='rounded-2xl'>
                    <source src={TodoList} type="video/mp4" /> 
                    </video>
                    <h2 className='text-white text-center text-2xl'>To do list</h2>

                </article>
                <article className="w-100 h-fit bg-[#121212] rounded-2xl aparecer" >
                    <video width="100%" controls autoPlay loop muted className='rounded-2xl'>
                    <source src={AnimeMania} type="video/mp4" /> 
                    </video>
                    <h2 className='text-white text-center text-2xl'>Pagina de Anime</h2>

                </article>
                <h2 className='col-span-2 text-white text-4xl'>Tecnologias utilizadas</h2>
                <div className='text-white flex justify-around w-[100%] col-span-2'>
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

            </section>


    )
}