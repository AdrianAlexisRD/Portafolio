import Aprende from '../assets/Aprende.png'
import Itla from '../assets/ITLA.png'
import Infotep from '../assets/logo.infotep.webp'
import Talendig from '../assets/Talendig.png'
import Mescyt from '../assets/mescyt.jpeg'



export const Studies = ()=>{

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
        <section className="flex flex-col  md:grid md:grid-cols-2 gap-7 p-10 items-center w-[99%] md:w-[75%] h-fit border-blue-950 rounded-r-2xl border-l-0 border-6 moveRight bg-[#121212]/50 ">
             <h2 className="text-4xl font-extrabold text-white col-span-2 text-center">Estudios</h2>
             <div className='flex items-center'>
                <img src={Itla} alt="aprende" className='md:w-40 md:h-30 w-30 h-20 pr-4' />
                <ul className="text-white flex flex-col justify-center border-l-2 border-white pl-4">
                    {itla.map(curso =><li className="md:text-2xl">{curso}</li>)}
                </ul>
             </div>
            <div className='flex items-center'>
                <img src={Infotep} alt="aprende" className='md:w-40 md:h-30 w-30 pr-4'  />
                <ul className="text-white flex flex-col justify-center border-l-2 border-white pl-4">
                    {infotep.map(curso =><li className="md:text-2xl">{curso}</li>)}
                </ul>
            </div>
            <div className='flex'>
                <img src={Aprende} alt="aprende" className='md:w-40 md:h-30 w-30 h-20  pr-4' />
                <ul className="text-white flex flex-col justify-center border-l-2 border-white pl-4">
                    {aprende.map(curso =><li className="md:text-2xl">{curso}</li>)}
                </ul>
            </div>
            <div className='flex'>
                <img src={Talendig} alt="aprende" className='md:w-40 md:h-30 w-30  h-20 pr-4' />
                <ul className="text-white flex flex-col justify-center border-l-2 border-white pl-4">
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