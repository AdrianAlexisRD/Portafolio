

export const Videos =() => {
  return (
    <article className="w-100 h-70 bg-blue-950 rounded-2xl aparecer" >
         <video width="100%" controls autoPlay loop muted>
        <source src={AnimeMania} type="video/mp4" /> 
        </video>
    </article>
  
  );
}
