import React from "react";


const Naus = ({nau, indice, setIndex , setMostrarFitxa, setMostrarLlista}) => {

  const mostrarFitxa=(indice)=>{
    setIndex(indice);
    setMostrarFitxa(true);
    setMostrarLlista(false);
  }

  return (
    <>
        <div key={nau.name} className="nau" onClick={()=>mostrarFitxa(indice)}>
          <h2>{nau.name.toUpperCase()}</h2>
          <p>{nau.model}</p>
        </div>
    </>
  );
};

export default Naus;
