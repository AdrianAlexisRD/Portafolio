

export const Espejo = ({ titulo }) => {
  function espejo(titulo) {
    return titulo.split('').map((letra, indice) => (
      <span 
        key={indice}
        className="inline-block opacity-0 animate-espejo"
        style={{ animationDelay: `${indice+1}00ms` }}
      >
        {letra}
      </span>
    ));
  }

  return <div className="flex">{espejo(titulo)}</div>;
};