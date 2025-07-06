import Ingmelec from '../assets/Ingmelec.jpeg'
import Voz from '../assets/Voz.jpeg'
import Nerdot from '../assets/Nerdot.jpeg'
import OceanWorld from '../assets/OceanWorld.png'

export const Experience = () =>{
    return(
        <section className="grid grid-cols-2 gap-7 p-10 items-center w-[70%] md:w-[75%] h-fit border-blue-950 rounded-r-2xl border-l-0 border-6 moveRight bg-[#121212]/50 text-white ">
            <h2 className='text-4xl col-span-2 text-center font-extrabold'> Experiencias</h2>
            <div className='flex gap-7 items-center'>
                <img src={Ingmelec} alt="Ingmelec" className='w-40 h-30 rounded ' />
                <div className='text-2xl'>
                    <h3 className='font-extrabold'>Tecnico electricista:</h3>
                    <p>Técnico de electricidad media-baja tension.</p>
                </div>  
            </div>
            <div className='flex gap-7 items-center'>
                <img src={Voz} alt="Ingmelec" className='w-40 h-30 rounded ' />
                <div className='text-2xl'>
                    <h3 className='font-extrabold'>Tecnico en telecomunicaciones:</h3>
                    <p>Tecnico reparado de servicios ADSL y Voz.</p>
                </div>
            </div >
            <div className='flex gap-7 items-center'>
                <img src={Nerdot} alt="Ingmelec" className='w-40 h-30 rounded ' />
                <div className='text-2xl'>
                    <h3 className='font-extrabold'>Tecnico en Logistica Digital:</h3>
                    <p>Servicios tercnicos de software en terminales de tarjetas bancarias.</p>
                </div>
            </div>
            <div className='flex gap-7 items-center'>
                <img src={OceanWorld} alt="Ingmelec" className='w-40 h-30 rounded ' />
                <div className='text-2xl'>
                    <h3 className='font-extrabold'>Tecnico electricista:</h3>
                    <p>Matenimiento electrico industrial.</p>
                </div>
            </div>

        </section>
    )
}