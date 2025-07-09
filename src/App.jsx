import AbouteMe from "./pages/AboutMe"
// import { IconCode , IconChevronLeft ,IconChevronRight, IconSlash } from '@tabler/icons-react'; 
import { Proyects } from "./pages/proyects"
import { Contact } from "./pages/contact"
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
    <div className=" flex flex-col md:gap-40 gap-20 h-fit mb-30 md:h-fit pb-50 relative w-[99%] ">
        <AbouteMe/>
        <Proyects scroll={scroll} />
        <Studies scroll={scroll}/>
        <Experience scroll={scroll}/>
        <Contact scroll={scroll}/>
     </div>
  )
}

export default App
