import AbouteMe from "./pages/AbouteMe"
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
    <div className="overflow-y-scroll h-[200vh] ">
      <Routes >
      <Route  path='/' element={<Navegation/>}>
        <Route path='/' element={<AbouteMe scroll={scroll}/>}/>
        <Route path='/proyects' element={<Proyects scroll={scroll}/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/studies' element={<Studies/>} />
        <Route path='/experience' element={<Experience/>} />


      </Route>

      </Routes>


     </div>
  )
}

export default App
