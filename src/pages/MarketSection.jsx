import React, { useState } from 'react';
import options from '../assets/options.png';
import { motion, AnimatePresence } from "framer-motion";

export default function MarketSection() {
  const [selected, setSelected] = useState('Equity');

  const content = {
    Equity: {
      title: 'Equity Intraday Recommendation',
      description: `At SIVVG, we make stock trading smarter, faster, and more accessible. Whether you're new to the market or a seasoned trader, our platform adapts to your style. Buy, sell, and manage shares with real-time data, intuitive tools, and secure execution. Track trends, analyze companies, and place trades with confidence — all in one seamless experience. We offer access to top stock exchanges, smart and  transparent, commission-friendly structure. No guesswork. No clutter. Just pure trading potential. SIVVG empowers your equity trading journey from day one.
Join SIVVG. Trade with purpose , Grow with precision.`,
    },
    Futures: {
      title: 'Futures Intraday Recommendation',
      description: `Futures trading lets you buy or sell contracts to trade assets at a predetermined price on a future date. This powerful tool allows traders to speculate on price movements or hedge against market risks. At SIVVG, we provide a fast, reliable platform to help you seize opportunities in futures. Our advanced tools include real-time data, technical indicators, and easy-to-use order types to support smart, timely decisions. With flexible leverage options, you can amplify your exposure while managing risk carefully.  Whether you’re a beginner or an expert, SIVVG offers educational resources and expert support to guide your futures trading journey.
Trade with confidence, speed, and precision.`,
    },
    Options: {
      title: 'Options Intraday Recommendation',
      description: `Options trading gives you the right, but not the obligation, to buy or sell an asset at a specific price within a set time. This powerful tool offers traders flexibility to manage risk, speculate, or enhance portfolio strategies. Whether you want to buy calls or puts or hedge your investments, our tools make it easy to design and execute your plan. Leverage market movements while controlling your risk with clear margin requirements and risk management features. Our educational resources help beginners understand options basics.
Trade options confidently with SIVVG — where technology meets smart decision-making.`,
    },
  };

  return (
    <section className="p-4 md:p-12 bg-white text-center">
      <h2 className="text-2xl text-center sm:text-4xl md:text-5xl font-bold text-blue-800 mb-16 mt-10">
        <span className="bg-[#4b4d9c] bg-clip-text text-transparent">
          Explore Our Market Recommendation
        </span>
      </h2>

      {/* Top Icons Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-22 border p-4 rounded-xl shadow-md max-w-4xl mx-auto border-purple-500">


        {/* Equity */}
        <div
          onClick={() => setSelected('Equity')}
          className={`flex items-center cursor-pointer space-x-3 md:space-x-4 transform transition duration-300 ease-in-out hover:scale-105 hover:text-purple-900 ${selected === 'Equity' ? 'text-green-800' : 'text-purple-600'
            }`}
        >
          <img
            src="https://img.icons8.com/emoji/48/000000/money-bag-emoji.png"
            alt="Equity"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <p className="text-lg md:text-2xl font-semibold">Equity</p>
        </div>

        {/* Futures */}
        <div
          onClick={() => setSelected('Futures')}
          className={`flex items-center cursor-pointer space-x-3 md:space-x-4 transform transition duration-300 ease-in-out hover:scale-105 hover:text-purple-900 ${selected === 'Futures' ? 'text-green-800' : 'text-purple-600'
            }`}
        >
          <img
            src="https://img.icons8.com/color/48/000000/futures.png"
            alt="Futures"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <p className="text-lg md:text-2xl font-semibold">Futures</p>
        </div>

        {/* Options */}
        <div
          onClick={() => setSelected('Options')}
          className={`flex items-center cursor-pointer space-x-3 md:space-x-4 transform transition duration-300 ease-in-out hover:scale-105 hover:text-purple-900 ${selected === 'Options' ? 'text-green-800' : 'text-purple-600'
            }`}
        >
          <img
            src={options}
            alt="Options"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <p className="text-lg md:text-2xl font-semibold">Options</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-10 text-xl md:text-3xl font-bold text-purple-600">
            {content[selected].title}
          </h2>
          <p className="mt-4 mx-auto text-base md:text-2xl text-gray-900 max-w-7xl whitespace-pre-line">
            {content[selected].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
