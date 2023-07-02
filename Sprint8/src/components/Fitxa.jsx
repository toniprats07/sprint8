import React, {useEffect, useState} from "react";
import imageError from '../images/imageNotFound.jpg';
import Pilots from "./Pilots";
import Films from "./Films";

const Fitxa = ({nau, index ,setMostrarLlista, setMostrarFitxa, imatge}) => {

  const mostrarLlista=()=>{
    setMostrarFitxa(false)
    setMostrarLlista(true)
  }

  const [imageExists, setImageExists] = useState(false);
  const imgUrl = `https://starwars-visualguide.com/assets/img/starships/${imatge}.jpg`;
 

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
    img.src = imgUrl;
  }, [imgUrl]);

  return (
    <>
      <div className="container" onClick={()=>mostrarLlista()}>
        <h1>{nau[index].name.toUpperCase()}</h1>
        {imageExists ? <img src={imgUrl} alt={nau[index].name} /> : <img src={imageError} alt={nau[index].name} />}
        <section className="info">
          <p className="dates">MODEL:<span>{nau[index].model.toUpperCase()}</span></p>
          <p className="dates">STARSHIP CLASS:<span>{nau[index].starship_class.toUpperCase()}</span></p>
          <p className="dates">MANUFACTURER:<span>{nau[index].manufacturer.toUpperCase()}</span></p>
          <p className="dates">COST:<span>{nau[index].cost_in_credits.toUpperCase()} CREDITS</span></p>
        </section>
        <section className="info2">
          <div>
          <p className="dates">CREW:<span>{nau[index].crew}</span></p>
          <p className="dates">PASSANGER CAPACITY:<span>{nau[index].passengers}</span></p>
          <p className="dates">CARGO CAPACITY:<span>{nau[index].cargo_capacity} TONS</span></p>
          <p className="dates">CONSUMABLES:<span>{nau[index].consumables.toUpperCase()}</span></p>
          </div>
          <div>
          <p className="dates">LENGTH:<span>{nau[index].length} METERS</span></p>
          <p className="dates">MAXIMUM ATMOSHPERING SPEED:<span>{nau[index].max_atmosphering_speed} KM/H</span></p>
          <p className="dates">HYPERDRIVE RATING:<span>{nau[index].hyperdrive_rating}</span></p>
          <p className="dates">MAXIMUM SPEED IN REALSPACE:<span>{nau[index].MGLT} MGLT</span></p>
          </div>
        </section>
        <section className="footer-container">
          <div className="pilots-starships">
            <Pilots pilot={nau[index].pilots}/>
          </div>
          <div className="films-starships">
            <Films films={nau[index].films}/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Fitxa;
