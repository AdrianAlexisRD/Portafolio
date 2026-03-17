import Ingmelec from "../assets/Ingmelec.jpeg";
import Voz from "../assets/Voz.jpeg";
import Nerdot from "../assets/Nerdot.jpeg";
import OceanWorld from "../assets/OceanWorld.png";
import { useInView } from "../hooks/useInView";

export const Experience = () => {
  const { ref, inView: desplegar } = useInView();

  return (
    <section
      ref={ref}
      id="experience"
      className={`
            flex-col md:gap-15 gap-10 flex
            p-5 xl:grid xl:grid-cols-2 items-center
            place-items-center w-[99%] md:w-[90%] md:max-w-[1500px]
            h-fit mt-5 border border-sky-500/30 bg-slate-950/60 backdrop-blur-md
            rounded-2xl text-color xl:mb-20 shadow-xl shadow-black/40
            transition-all duration-700 ease-out
            ${desplegar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
    >
      <h2 className="md:text-4xl text-3xl col-span-2 text-center font-extrabold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
        Experiencia Laboral
      </h2>

      <div className="flex md:gap-7 gap-2 items-center md:justify-start border border-sky-500/30 hover:border-sky-400/60 hover:bg-sky-500/10 p-5 transition-all duration-300 rounded-2xl bg-slate-900/50 backdrop-blur-sm sm:w-[90%] xl:w-[100%] xl:h-50">
        <img
          src={Ingmelec}
          alt="Ingmelec"
          className="md:w-30 w-25 md:h-30 h-25 rounded-full hover:scale-120 transition-all duration-500 ease-in-out"
        />
        <div className="text-[15px]">
          <h3 className="md:text-3xl font-extrabold">Técnico electricista</h3>
          <p className="md:text-2xl">
            Técnico de electricidad media-baja tensión.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-row-reverse md:gap-7 gap-2 items-center m-0 border border-orange-400/30 hover:border-orange-400/60 hover:bg-orange-500/10 p-5 rounded-2xl transition-all duration-300 xl:text-start text-end bg-slate-900/50 backdrop-blur-sm sm:w-[90%] xl:w-[100%] xl:h-50">
        <img
          src={Voz}
          alt="Voz"
          className="md:w-30 w-25 md:h-30 h-25 rounded-full hover:scale-120 transition-all duration-500 ease-in-out"
        />
        <div className="text-[15px]">
          <h3 className="md:text-3xl font-extrabold">
            Técnico en telecomunicaciones
          </h3>
          <p className="md:text-2xl te">
            Técnico reparador de servicios ADSL y Voz.
          </p>
        </div>
      </div>

      <div className="flex md:gap-7 gap-2 items-center md:justify-start border border-sky-500/30 hover:border-sky-400/60 hover:bg-sky-500/10 p-5 rounded-2xl transition-all duration-300 bg-slate-900/50 backdrop-blur-sm sm:w-[90%] xl:w-[100%] xl:h-50">
        <img
          src={Nerdot}
          alt="Nerdot"
          className="md:w-30 w-25 md:h-30 h-25 rounded-full hover:scale-120 transition-all duration-500 ease-in-out"
        />
        <div className="text-[15px]">
          <h3 className="md:text-3xl  font-extrabold">
            Técnico en Logística Digital
          </h3>
          <p className="md:text-2xl">
            Servicios técnicos de software en terminales de tarjetas bancarias.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-row-reverse md:gap-7 gap-2 items-center m-0 xl:text-start text-end border border-orange-400/30 hover:border-orange-400/60 hover:bg-orange-500/10 p-5 rounded-2xl bg-slate-900/50 backdrop-blur-sm sm:w-[90%] xl:w-[100%] xl:h-50 transition-all duration-300">
        <img
          src={OceanWorld}
          alt="OceanWorld"
          className="md:w-30 w-25 md:h-30 h-25 rounded-full hover:scale-120 transition-all duration-500 ease-in-out"
        />
        <div className="text-[15px]">
          <h3 className="md:text-3xl font-extrabold">Técnico electricista</h3>
          <p className="md:text-2xl">Mantenimiento eléctrico industrial.</p>
        </div>
      </div>
    </section>
  );
};
