import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Naus from "../components/Naus";
import Fitxa from "../components/Fitxa";
import { RotatingLines } from  'react-loader-spinner'


const Main = () => {

  const [naus, setNaus] = useState([]);
  const [index, setIndex] = useState(0);
  const [mostrarLlista, setMostrarLlista] = useState(true);
  const [mostrarFitxa, setMostrarFitxa] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [loading,setLoading]=useState(true);

  const urlNaus = `https://swapi.dev/api/starships/?page=${pagina}`;   

  
   useEffect(() => {
     axios.get(urlNaus).then((response) => {
       setNaus((prev)=>[...prev,...response.data.results]);
       setLoading(false);
     });
    }, [pagina]);


   const handleScroll = () => {
     if (
       window.innerHeight + document.documentElement.scrollTop + 1 >=
       document.documentElement.scrollHeight
     ) {
       setLoading(true);
       setPagina((prev)=>prev+1);
     }
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);

     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

  return (
    <main className="llista">
        {mostrarLlista &&
          naus.map((nau, indice) => (
            <Naus
              key={indice}
              nau={nau}
              indice={indice}
              setIndex={setIndex}
              setMostrarFitxa={setMostrarFitxa}
              setMostrarLlista={setMostrarLlista}
            />
          ))}

        {mostrarFitxa &&
          naus.map((nau, indice) => {
            return indice === index ?(
              <Fitxa
                key={indice}
                nau={naus}
                index={indice}
                imatge={nau.url.substr(-3,2)}
                setMostrarFitxa={setMostrarFitxa}
                setMostrarLlista={setMostrarLlista}
              />
            ) : (
              ""
            );
          })}
          <div className="spinner">
              {loading && pagina<4 && <RotatingLines
                  strokeColor="#a1a1a1"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="50"
                  visible={true}
              />}
            </div>
      </main>
  )
}

export default Main