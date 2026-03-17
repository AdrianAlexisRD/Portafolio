import AbouteMe from "./pages/AboutMe"
import { Proyects } from "./pages/proyects"
import { Contact } from "./pages/contact"
import { Studies } from "./pages/studies"
import { Experience } from "./pages/experience"
import { Atom } from "./Componentes/atomos"
import { Navegation } from "./Componentes/BarNavegation"

function App() {
  return (
    <div className="flex flex-col items-center gap-20 pb-32 relative w-full overflow-x-hidden">
      <Atom />
      <Navegation />
      <AbouteMe />
      <Proyects />
      <Studies />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
