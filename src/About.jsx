import React from "react";
import about from "./assets/about.png";
import "./about.css";
import Section3 from "./Section3";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* First Section */}
      <section className="w-full px-6 sm:px-6 pt-24 lg:px-8 py-4 sm:py-30">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1600px] mx-auto">

          {/* Text Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}   // start smaller & invisible
            animate={{ scale: 1, opacity: 1 }}     // zoom to full size
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#4B50A5] flex items-center justify-center p-8 h-auto"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
              Patience guides every move, trust turns plans into profits.
            </h2>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // 👈 delay for stagger
          >
            <img
              src={about}
              alt="About"
              className="w-full h-[300px] md:h-[400px] object-cover block"
            />
          </motion.div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full h-auto bg-white pt-0 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl text-center sm:text-4xl md:text-5xl font-bold text-blue-800 mb-6 mt-10">
            <span className="bg-[#4b4d9c] bg-clip-text text-transparent">
              Who we are
            </span>
          </h2>
          <p className="text-gray-800 text-base md:text-xl leading-relaxed max-w-7xl mx-auto">
            At SIVVG Trading, we believe in making smart trading simple. We're a
            passionate team driven by the power of markets and data, working to
            deliver reliable, real-time trading solutions. Our goal is clear: to
            bridge the gap between opportunity and success. With a focus on
            transparency, integrity, and innovation, we offer trading services
            that are easy to access, secure, and built for results. Whether
            you're just starting out or scaling up, SIVVG Trading is here to
            support your journey - step by step, trade by trade.
          </p>
        </div>
      </section>
      <Section3 />
    </>
  );
};

export default About;
