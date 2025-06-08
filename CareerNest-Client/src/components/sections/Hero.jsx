import React from "react";
import jobtc from "../../assets/jobtc.jpg";
const Hero = () => {
  return (
    <div className=" m-3 mt-20 flex justify-around gap-6 ">
      <div className="w-1/2 space-y-5 flex flex-col items-start">
        <h1 className="text-5xl text-left font-semibold shadow-sm font-poppins leading-snug">
        CareerNest — Your Smart <br /> Career Companion
      </h1>
      <p className="text-left font-roboto">
        From building standout resumes to keeping personal career notes —
        CareerNest helps you grow with expert blogs, real job listings, events,
        and smart tools, all crafted for students and freshers aiming high.
      </p>

      <button className="bg-amber-300 px-5 py-2 rounded-2xl font-bold text-lg">Sign Up - It's 100% Free!</button>
      </div>

      <div className="w-1/2">
        <img src={jobtc} alt="" />
      </div>
    </div>
  );
};

export default Hero;
