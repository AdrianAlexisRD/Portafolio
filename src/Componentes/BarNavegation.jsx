import { Link ,Outlet } from "react-router-dom"
import Fondo from "../assets/Fondo.jpg"

export const Navegation = ()=>{
    return(
    <div className='flex h-dvh items-center  md:justify-between flex-col md:flex-row  relative'>
        <img src={Fondo} alt="" className="absolute z-[-1]  brightness-30" />
        <Outlet/>

        <nav className=" bg-[#121212]/50 text-white w-fit  flex justify-end-safe text-4xl rounded-l-2xl border-blue-950 border-6 border-r-0  "> 
            <ul className="flex flex-col gap-5 p-5">
                <li className="">
                    <Link to='/'  className="relative group inline-block cursor-pointer">
                    <span className="text-white">DashBoard</span>
                    <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                
                <li>
                    <Link to='/Proyects' className="relative group inline-block cursor-pointer" >
                        <span className="text-white">Proyects</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                    </Link>  
                </li>
                
                <li>
                    <Link to='/studies'  className="relative group inline-block cursor-pointer">
                        <span className="text-white">Estudios</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to='/experience'  className="relative group inline-block cursor-pointer">
                        <span className="text-white">Experiencia</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'  className="relative group inline-block cursor-pointer">
                        <span className="text-white">Contact</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )


}