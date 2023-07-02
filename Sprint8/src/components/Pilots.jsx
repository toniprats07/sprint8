import React from 'react'

const Pilots = ({pilot}) => {

    if (pilot.length === 0) {
        return <div className='pilots'><p className='dates'>PILOTS:</p><p className='no-pilots'>Pilots not found</p></div>;
      }

  return (
    <>
    <p className='dates'>PILOTS:</p>
    <div className='pilots'>
    {pilot.map((name)=>
    <img key={name} src={`https://starwars-visualguide.com/assets/img/characters/${name.substr(-3,2)}.jpg`} alt=""/> 
    )}</div>
    
    </>
  )
}

export default Pilots