import React from 'react'

const Films = ({films}) => {

  return (
    <>
    <p className='dates'>FILMS:</p>
     <div className='films'>{films.map((film, index)=>
    <img src={`https://starwars-visualguide.com/assets/img/films/${film.substr(-3,2)}.jpg`} alt="" key={index}/>
    )}</div>
    
    </>
  )
}

export default Films