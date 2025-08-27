import FotoAnimada from "../assets/Foto-animada.jpg";

export default function Home() {
 
  return (
    <article
      className={`
        flex-col  xl:flex-row
        gap-7 md:p-10 p-4 lg:mt-20 
        w-[99%] md:w-[90%] xl:w-[80%] 2xl:w-[80%] 2xl:max-w-380
        md:h-fit border-orange-300 border-4
        rounded-2xl mt-7 
         bg-[#121212]/50 flex 
         opacity-0 items-center
          animate-[move-Left_0.7s_ease-in-out_forwards]
         `}>
      <div className=" h-fit md:mb-0  md:h-fit md:w-fit w-fit flex justify-center md:items-center  rounded-full border-blue-300 border-4">
        <img
          src={FotoAnimada}
          alt=""
          className=" filter grayscale-25 contrast-120 drop-shadow-2xl/50 w-50 xl:w-400 max-2xl-90 2xl:h-60 xl:h-60 lg:h-60  h-50  shadow-[#EAE4D5] rounded-full  "
        />
      </div>
      <div className="flex md:self-start  md:mb-4  relative ">
        <h1 className="text-orange-300 md:text-5xl text-[45px]">
          <span className=" efecto1 md:left-[43px] right-0  font-extrabold absolute  ">
            Adrian
          </span>
          <span className=" efecto2 md:left-[200px] hidden md:flex  font-extrabold text-blue-300 absolute">
            Alexis
          </span>
          <span className=" efecto3  md:left-[350px] left-5  font-extrabold  absolute">
            Lopez
          </span>
          <span className=" efecto4 md:left-[480px] hidden md:flex  font-extrabold text-blue-300 absolute">
            Santos
          </span>
        </h1>

      </div>
      <div className="self-center p-4 pt-10 lg:mt-10">
        <h2 className=""></h2>
        <h2 className="self-center md:text-3xl text-2xl font-black text-center md:text-start text-[#121212] mb-10">
          <span className="animate-[espejo_5s_ease-in_0s_infinite]">Desarrollador </span>
          <span className="animate-[espejo_5s_ease-in_0.3s_infinite]">web </span>
          <span className="animate-[espejo_5s_ease-in_0.6s_infinite]">fullstack</span>
        </h2>
        <p className=" md:text-2xl text-white  animate-[aparecer_2s_ease-in_forwards] ">


          Hola, soy un desarrollador junior fullstack, autodidacta, con muchas
          ganas de demostrar mi talento y superarme cada día. Me apasiona
          aprender, resolver problemas y siempre me enfoco en alcanzar metas,
          entregando lo mejor de mí en cada proyecto o tarea que realizo. <br/> <br/> Estoy
          motivado para trabajar en equipo, compartir conocimientos y aprender
          de diferentes formas de trabajar y pensar.
        </p>
      </div>
    </article>
  );
}
