import React from "react";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen ">
      <div
        className="h-screen flex md:flex-row flex-col-reverse  items-center justify-center text-center w-10/12 mx-auto "
        id="home"
      >
        <div className="flex flex-col items-center justify-center text-center md:gap-4 gap-2">
          <h1 className="lg:text-6xl md:text-4xl font-bold">
            We live to serve food to all, every where
          </h1>
          <p className="text-xl ">
            We are a food truck that serves delicious food to all your needs
          </p>
          <a
            href="#location"
            className="py-3 px-5 text-xl font-bold underline hover:bg-white"
          >
            Find out where we are
          </a>
        </div>

        <img
          src="/hero.png"
          alt="hero"
          className="lg:w-[600px] md:w-[500px] w-[400px] h-auto"
        />
      </div>
    </div>
  );
}
