import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";


function App() {
  return (
    <body className="overflow-hidden ">
      <div className="bg-bg h-screen  flex justify-center items-center overflow-hidden  ">
        <motion.section
          className=" animate  overflow-hidden w-[320px]  h-[320px] absolute  -top-0 -left-0 rotate-45 rounded-[40px] bg-[#c1e3d6] opacity-50 "
      
          
        ></motion.section>
        
       <form
        action=""
        className="w-[455px]  bg-[#F6FBF9] rounded-[32px]  flex flex-col text-center items-center p-6
"
      >
        <h1 className=" font-medium  text-4xl mb-3 text-center li">
          create an acount
        </h1>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>

        <input
      
          type="email"
          name="email"
          placeholder="enter your email"
          className="w-[375px] h-[55px] rounded-xl pl-6  border-2 border-300"
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          className="w-[375px] h-[55px] rounded-xl pl-6  border-2 border-300 m-5"
        />
        <button className="bg-bg text-black rounded-[32px] text-center w-[200px] p-3 hover:bg-[#b1bbb7] ">
          create acount
        </button>
        <p className="mt-3">
         Did you forget your password?.{" "}
        </p>
      </form>
      <motion.section
          className=" animatee overflow-hidden w-[320px] h-[320px] absolute  -bottom-12 -right-20 rotate-45 rounded-[40px] bg-[#c1e3d6] opacity-50 "
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        ></motion.section>
      </div>
     
    </body>
  );
}

export default App;
