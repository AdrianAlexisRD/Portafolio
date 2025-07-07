import Ingmelec from '../assets/Ingmelec.jpeg'
import Voz from '../assets/Voz.jpeg'
import Nerdot from '../assets/Nerdot.jpeg'
import OceanWorld from '../assets/OceanWorld.png'

export const Experience = () =>{
    return(
        <section className="flex flex-col  md:grid md:grid-cols-2 gap-7 pt-10 pb-10 pl-4 pr-4 items-center w-[99%] md:w-[75%] h-fit border-color rounded-r-2xl border-l-0 border-6 moveRight bg-[#121212]/50 text-white ">
            <h2 className='md:text-4xl text-3xl text-[#EAE4D5] col-span-2 text-center font-extrabold'> Experiencias</h2>
            <div className='flex md:gap-7 gap-4 items-center'>
                <img src={Ingmelec} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div className='md:text-2xl'>
                    <h3 className='font-extrabold'>Tecnico electricista</h3>
                    <p>Técnico de electricidad media-baja tension.</p>
                </div>  
            </div>
            <div className='flex md:flex-row flex-row-reverse md:gap-7 gap-4 items-center '>
                <img src={Voz} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div className='md:text-2xl text-end md:text-start'>
                    <h3 className='font-extrabold'>Tecnico en telecomunicaciones</h3>
                    <p>Tecnico reparado de servicios ADSL y Voz.</p>
                </div>
            </div >
            <div className='flex md:gap-7 gap-4 items-center'>
                <img src={Nerdot} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div className='md:text-2xl'>
                    <h3 className='font-extrabold'>Tecnico en Logistica Digital</h3>
                    <p>Servicios tercnicos de software en terminales de tarjetas bancarias.</p>
                </div>
            </div>
            <div className='flex md:flex-row flex-row-reverse md:gap-7 gap-4 items-center '>
                <img src={OceanWorld} alt="Ingmelec" className='md:w-40 w-30 md:h-30 h-25 rounded ' />
                <div className='md:text-2xl text-end md:text-start'>
                    <h3 className='font-extrabold'>Tecnico electricista</h3>
                    <p>Matenimiento electrico industrial.</p>
                </div>
            </div>

        </section>
    )
}