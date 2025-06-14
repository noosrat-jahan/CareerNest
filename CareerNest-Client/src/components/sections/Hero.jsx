import React from "react";
import jobtc from "../../assets/jobtc.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" m-3 mt-10 flex justify-around gap-6 ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 space-y-5 flex flex-col items-start"
      >
        {/* <h1 className="text-5xl text-left font-semibold shadow-sm font-poppins">
          CareerNest — Your Smart <br /> Career Companion
        </h1> */}
        <h1 className="scroll-m-20 text-left font-poppins text-6xl font-bold tracking-tight text-balance">
          CareerNest — Your Smart Career Companion
        </h1>
        <p className="text-left font-roboto">
          From building standout resumes to keeping personal career notes —
          CareerNest helps you grow with expert blogs, real job listings,
          events, and smart tools, all crafted for students and freshers aiming
          high.
        </p>

        <Link to="login">
          <button className="bg-amber-300 px-5 py-2 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300">
            Sign Up - It's 100% Free!
          </button>
        </Link>
      </motion.div>
      {/* <div className="w-1/2 space-y-5 flex flex-col items-start"></div> */}

      <motion.img
        src={jobtc}
        alt="Hero"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full mt-8 md:mt-0"
      />
    </div>
  );
};

export default Hero;
