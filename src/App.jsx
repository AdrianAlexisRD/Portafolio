import AbouteMe from "./pages/AbouteMe"
// import { IconCode , IconChevronLeft ,IconChevronRight, IconSlash } from '@tabler/icons-react'; 
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { Proyects } from "./pages/proyects"
import { Contact } from "./pages/contact"
import { Navegation } from "./Componentes/BarNavegation"
import { Studies } from "./pages/studies"
import { Experience } from "./pages/experience"



function App() {


  return (
    <BrowserRouter>
    <Routes >
    <Route path='/' element={<Navegation/>}>
      <Route path='/' element={<AbouteMe/>}/>
      <Route path='/proyects' element={<Proyects/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/studies' element={<Studies/>} />
      <Route path='/experience' element={<Experience/>} />


    </Route>

    </Routes>

    </BrowserRouter>
  )
}

export default App
