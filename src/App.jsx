import AbouteMe from "./pages/AboutMe"
// import { IconCode , IconChevronLeft ,IconChevronRight, IconSlash } from '@tabler/icons-react'; 
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { Proyects } from "./pages/proyects"
import { Contact } from "./pages/contact"
import { Navegation } from "./Componentes/BarNavegation"
import { Studies } from "./pages/studies"
import { Experience } from "./pages/experience"
import { useState } from "react"
import { useEffect} from "react"


function App() {
  const [scroll, setScroll] = useState(0);

  

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      console.log("scrollY:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" flex flex-col md:gap-40 md:h-fit pb-50 relative w-[100%] ">
     {/* <Navegation/> */}
        <AbouteMe scroll={scroll}/>
        <Proyects scroll={scroll} />
        <Studies scroll={scroll}/>
        <Experience scroll={scroll}/>
        <Contact scroll={scroll}/>
     </div>
  )
}

export default App
