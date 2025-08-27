import AbouteMe from "./pages/AboutMe"
// import { IconCode , IconChevronLeft ,IconChevronRight, IconSlash } from '@tabler/icons-react'; 
import { Proyects } from "./pages/proyects"
import { Contact } from "./pages/contact"
import { Studies } from "./pages/studies"
import { Experience } from "./pages/experience"
import { useState, useEffect } from "react"

import { Atom } from "./Componentes/atomos"



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
    <div className=" flex flex-col items-center justify-center md:gap-20 gap-20  mb-100 2xl:mb-80  pb-120 relative w-90vw">
      <Atom />
      <AbouteMe />
      <Proyects scroll={scroll} />
      <Studies scroll={scroll} />
        <Experience scroll={scroll}/>
        <Contact scroll={scroll}/>
     </div>
  )
}

export default App
