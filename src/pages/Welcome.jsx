import React from "react";
import welcome from "../assets/welcome.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.06,
    },
  },
};

const leftVariant = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WelcomeSection() {
  return (
    <section className="bg-white px-6 md:px-16 py-20 min-h-[60vh]">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:grid-flow-col-dense"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Text block */}
        <motion.div
          variants={leftVariant}
          className="flex flex-col justify-center order-1"
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
            Welcome to{" "}
            <span className="text-[#4b4d9c]">SIVVG</span>{" "}
            <span className="text-[#4b4d9c]">World</span>
          </h1>

          {/* Mobile Image */}
          <motion.div
            variants={rightVariant}
            className="block md:hidden mb-6 flex justify-center"
          >
            <img
              src={welcome}
              alt="Welcome"
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-600 text-center md:text-left leading-relaxed">
            Upgrade your trading journey with practical market insights, expert
            strategies and solid risk management. Join thousands of successful
            traders who trust SIVVG for market-beating returns. SIVVG Infotech
            provides traders with precise, actionable intraday strategies and
            clear market analysis. Built on thorough market research, dedicated
            effort, effective strategies and outcome-oriented guidance, we
            deliver consistent support to help every trader achieve financial
            growth and long-term independence.
          </p>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          variants={rightVariant}
          className="hidden md:flex order-2 justify-end"
        >
          <img
            src={welcome}
            alt="Welcome"
            className="w-full max-w-xl rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
