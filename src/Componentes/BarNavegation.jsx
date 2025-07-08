import { Link ,Outlet } from "react-router-dom"
import Fondo from "../assets/Fondo.jpg"
import { IconMenu2 } from '@tabler/icons-react';
// import { useState } from "react";

export const Navegation = ()=>{
    // const [toggle , setToggle] = useState(false)
    return(
    <div  className='flex sm:items-center justify-end flex-col-reverse md:justify-between md:flex-row   '>
        {/* <img src={Fondo} alt="" className="absolute z-[-1]  brightness-30" /> */}
       
        
        <nav className=" bg-[#121212]/50 text-white w-[100%] md:w-fit h-fit p-5 flex md:justify-end-safe md:fixed right-0 top-45 md:m-0 m-2 text-2xl md:text-4xl rounded-l-2xl border-color border-6 border-r-0 group-focus:w-full moveLeft "> 
      
            <ul className="flex md:flex-col justify-center md:flex-nowrap flex-wrap gap-5 md:p-5 ">
                <li className="">
                    <Link to='/'  className="relative group inline-block cursor-pointer">
                    <span className="title-color">Aboute me</span>
                    <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-[#EAE4D5] transition-all duration-300 group-hover:w-full shadow-lg shadow-white group-focus:w-full"></span>
                    </Link>
                </li>
                
                <li>
                    <Link to='/Proyects' className="relative group inline-block cursor-pointer" >
                        <span className="title-color">Proyects</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-[#EAE4D5] transition-all duration-300 group-hover:w-full group-focus:w-full shadow-lg shadow-white"></span>
                    </Link>  
                </li>
                
                <li>
                    <Link to='/studies'  className="relative group inline-block cursor-pointer">
                        <span className="title-color">Studies</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-[#EAE4D5] transition-all duration-300 group-hover:w-full shadow-lg shadow-white group-focus:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to='/experience'  className="relative group inline-block cursor-pointer">
                        <span className="title-color">Experience</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-[#EAE4D5] transition-all duration-300 group-hover:w-full shadow-lg shadow-white group-focus:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'  className="relative group inline-block cursor-pointer">
                        <span className="title-color">Contact</span>
                        <span className="absolute bottom-[-8px] left-0 h-[8px] w-0 bg-[#EAE4D5] shadow-lg shadow-white transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )


}