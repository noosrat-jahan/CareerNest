import { AuthContext } from "@/Provider/AuthProvider";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ImProfile } from "react-icons/im";
import { AiTwotoneSave } from "react-icons/ai";
import { TbFileCv } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [person, setPerson] = useState("");
  useEffect(() => {
    axios.get(`https://career-nest-server-one.vercel.app/users/${user?.email}`).then((res) => {
      console.log(res.data);
      setPerson(res.data);
    });
  }, [user?.email]);

  return (
    <div>
      <div className="mt-10 px-10 rounded-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
          Welcome, {person.name}{" "}
        </h1>

        <div className="bg-accent my-10 p-20 grid grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            <Link
              to="/buildcoverletter"
              className="bg-teal-300/60  backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center p-5 space-y-3"
            >
              <p className="text-5xl">
                <ImProfile />
              </p>
              <h2 className="text-xl font-semibold">Build Cover Letter</h2>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring" }}
          >
            <Link to="/trackjobs" className="bg-pink-400/60 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center p-5 space-y-3">
              <p className="text-5xl">
                <AiTwotoneSave />
              </p>
              <h2 className="text-xl font-semibold">Track Jobs</h2>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, type: "spring" }}
          >
            <Link to="/buildresume" className="bg-green-400/60 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center p-5 space-y-3">
              <p className="text-5xl">
                <TbFileCv />
              </p>
              <h2 className="text-xl font-semibold"> Build Resume</h2>
            </Link>
          </motion.div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default UserDashboard;
