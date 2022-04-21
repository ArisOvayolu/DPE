import React from "react";
import Header from "../components/Header";
import Game from "./Game";
import Example1 from '../img/Facebook/Example1.jpg';

const faceBookData=[
    {text:'facebook', img: Example1, option1:'this is facebook', option2:'this is wank', option3:'this is timmiy'}
]

const Facebook = () => {
  return (
    <>
      <Header />
      <Game data={faceBookData}/>
    </>
  );
};

export default Facebook;
