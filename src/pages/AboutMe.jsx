import FotoAnimada from "../assets/Foto-animada.jpg";

export default function Home() {
  return (
    <article
      id="about"
      className={`
        flex flex-col xl:flex-row
        gap-10 md:p-12 p-8 lg:mt-24
        w-[95%] md:w-[90%] xl:w-[85%] 2xl:max-w-[1250px]
        mx-auto rounded-[2.5rem] mt-10
        bg-slate-950/40 backdrop-blur-xl border border-white/10
        relative overflow-hidden
        animate-in fade-in slide-in-from-left-10 duration-1000
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        `}>
      
      {/* Decoración de fondo */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-sky-500/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-orange-500/10 blur-[100px] rounded-full" />

      {/* Contenedor de Imagen con Efecto Glow */}
      <div className="relative group self-center xl:self-start">
        <div className="absolute -inset-1 bg-gradient-to-tr from-sky-400 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative h-48 w-48 md:h-64 md:w-64 xl:h-72 xl:w-72 rounded-full border border-white/20 overflow-hidden shadow-2xl">
          <img
            src={FotoAnimada}
            alt="Adrian Lopez"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] hover:grayscale-0"
          />
        </div>
      </div>

      {/* Contenido de Texto */}
      <div className="flex-1 flex flex-col">
        {/* Nombre con Layout Limpio */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-black flex flex-wrap gap-x-3 leading-none">
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">
              Adrian
            </span>
            <span className="text-white/10">/</span>
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-sky-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">
              Alexis
            </span>
            <span className="w-full h-1" /> {/* Salto de línea visual en pantallas pequeñas */}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">
              Lopez
            </span>
            <span className="text-white/10 hidden md:inline">/</span>
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-sky-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">
              Santos
            </span>
          </h1>
        </div>

        {/* Badge de Rol */}
        <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-sky-500/50" />
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-sky-400/90 italic">
                Fullstack Developer
            </h2>
        </div>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-slate-300/90 leading-relaxed font-light">
          Hola, soy un desarrollador <span className="text-white font-medium">junior fullstack autodidacta</span>. 
          Me apasiona resolver problemas complejos y transformar ideas en experiencias digitales fluidas. 
          Mi enfoque principal es la superación diaria y la entrega de código de <span className="text-orange-300/90">alta calidad</span>.
          <br /><br />
          Estoy listo para colaborar en equipos dinámicos donde pueda aportar mi energía, aprender nuevas metodologías y crecer junto a proyectos innovadores.
        </p>

        {/* Botones de acción rápida (Opcional) */}
        <div className="mt-8 flex gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-transparent rounded-full" />
        </div>
      </div>
    </article>
  );
}