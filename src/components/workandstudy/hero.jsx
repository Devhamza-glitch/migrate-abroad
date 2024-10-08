import React from 'react';
import image from "../../assets/canda.jpeg";

const HeroCanada = () => {
  return (
    <div className="relative  bg-fit bg-center h-[500px]" 
      style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-white text-4xl sm:text-5xl font-semibold">Work & Study Program in Canada</h1>
      </div>
    </div>
  );
};

export default HeroCanada;
