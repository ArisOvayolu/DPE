import React from 'react'

const Game = (props) => {
    const {data}=props
  return (
    <img src={data[0].img} alt='img1' style={{padding:'10px'}}/>

  )
}

export default Game;