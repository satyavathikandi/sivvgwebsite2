import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import './home.css';
import icon from './assets/icon.png'
import gicon from './assets/gicon.png'
import ficon from './assets/ficon.png'
import ricon from './assets/ricon.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import section2 from './assets/section2.png';

import qr from './assets/qr.png';
import playstore from './assets/playstore.png';
import appstore from './assets/app-store.png';

import iphone from './assets/iphone.png';
import iphone2 from './assets/iphone2.png';
import BeginjourneySection from './pages/Beginjourney';
import Banner from './pages/banner';


function Home() {
  return (
    <>
          <Banner/>
         
            {/* banner Section1
      <section className="relative w-full h-[100vh]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          <SwiperSlide>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={vedio} type="video/mp4" />
              Your browser does not support the video tag.

            </video>

            <motion.div
              className="absolute bottom-10 left-10 bg-[#4b4d9c] font-semibold text-white p-4 text-lg rounded-lg shadow-lg max-w-xm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Clarity in every move, confident in every trade

            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={banner2} className="w-full h-full object-cover" alt="Slide 2" />
            <motion.div
              className="absolute bottom-10 left-10 bg-[#4b4d9c] font-semibold text-white p-4 text-lg rounded-lg shadow-lg max-w-xm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Clarity in every move, confident in every trade
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
              <img src={banner3} className="w-full h-full object-cover" alt="Slide 2" />
            <motion.div
              className="absolute bottom-10 left-10 bg-[#4b4d9c] font-semibold text-white p-4 text-lg rounded-lg shadow-lg max-w-xm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Clarity in every move, confident in every trade
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </section> */}


          {/* welcome Section2 */}

     <div className="space-y-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-18">
  <motion.section
    className="flex flex-col md:flex-row items-center gap-8 md:gap-10"
    initial={{ opacity: 0, scale: 0.8, y: 60 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeIn" }}
    viewport={{ once: true, amount: 0.4 }}
  >
    {/* Text Content */}
   <div className="w-full md:w-1/2 flex flex-col justify-center mb-6 mt-6 md:mt-12 lg:mt-20">
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 md:mb-8">
    <span className="bg-[#4b4d9c] bg-clip-text text-transparent">
      Welcome To SIVVG Infotech
    </span>
  </h2>

  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
    At SIVVG InfoTech, we empower traders with strategies built on deep market research and experience.
    Our recommendations go beyond guesswork, offering clarity in a noisy market.
    Each tip is shaped by time-tested methods and real analytical depth.
    We focus on delivering practical, result-driven guidance you can rely on.
  </p>
</div>


    {/* Image */}
    <div className="w-full md:w-1/2  mb-6 mt-6 md:mt-12 lg:mt-20flex justify-center">
      <img
        src={section2}
        alt="section-2"
        className="w-full max-w-md md:max-w-full rounded-xl shadow-lg object-cover"
      />
    </div>
  </motion.section>



   {/* whychoose Section3 */}
   
      <motion.section
  className="bg-white px-4 py-2"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
 <h2 className="text-2xl text-center sm:text-4xl md:text-5xl font-bold text-blue-800 mb-6 mt-6 md:mt-16 lg:mt-20 ">
        <span className="bg-[#4b4d9c] bg-clip-text text-transparent">
          Why Choose SIVVG
        </span>
      </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 bg-[#4b4d9c] text-white rounded-xl p-6 md:p-10 shadow-lg mb-2 mt-2 md:mt-12 lg:mt-20">
    {/* Left Icons Section */}
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-10">
      {/* Icon 1 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-24 h-24 bg-white shadow-lg rounded-xl flex items-center justify-center">
          <img src={icon} alt="Trust" className="w-20 h-20 object-contain" />
        </div>
        <span className="text-lg font-semibold">Trust</span>
      </div>

      {/* Icon 2 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-24 h-24 bg-white shadow-lg rounded-xl flex items-center justify-center">
          <img src={gicon} alt="Guidance" className="w-12 h-12 object-contain" />
        </div>
        <span className="text-lg font-semibold">Guidance</span>
      </div>

      {/* Icon 3 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-24 h-24 bg-white shadow-lg rounded-xl flex items-center justify-center">
          <img src={ficon} alt="Focus" className="w-12 h-12 object-contain" />
        </div>
        <span className="text-lg font-semibold">Focus</span>
      </div>

      {/* Icon 4 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-24 h-24 bg-white shadow-lg rounded-xl flex items-center justify-center">
          <img src={ricon} alt="Returns" className="w-12 h-12 object-contain" />
        </div>
        <span className="text-lg font-semibold">Returns</span>
      </div>
    </div>

    {/* Right Text Section */}
    <div className="mt-6 md:mt-0 text-sm sm:text-base md:text-lg leading-relaxed">
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        In our company, we believe that successful trading doesn’t come from
        luck—it comes from logic, discipline, and genuine market analysis.
        That’s why our tips stand apart from the rest. We don’t follow the
        crowd or rely on guesswork. Instead, every recommendation we provide
        is backed by research, tested strategies, and a clear purpose.
        <br /><br />
        Our users choose us because they trust the transparency we offer,
        the consistent guidance we provide, and the discipline and solid
        returns that are the foundation of what we deliver—because your
        growth is our priority.
      </motion.p>
    </div>
  </div>
</motion.section>

          {/* beginjourney Section4 */}
           <BeginjourneySection/>

         {/* phones Section5 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-[#6768c9] rounded-t-3xl text-white gap-x-2  ">

  {/* Left Section */}
<div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-4 px-4 md:ml-10">
  <p className="text-white font-semibold text-base sm:text-lg">
    "Scan here — your Trading <br className="hidden sm:block" />
    Journey starts soon"
  </p>

  <p className="text-green-400 font-semibold text-sm sm:text-base md:text-lg">
    #Made for tip recommendations
  </p>

  <img
    src={qr}
    alt="QR Code"
    className="w-20 sm:w-24 md:w-28"
  />

  <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
    Open your SIVVG Account in minutes!
  </h2>

  <a
    href="https://w3schools.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto flex justify-center md:justify-start"
  >
    <button className="bg-yellow-400 text-black px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-yellow-300 transition">
      Get Started Now →
    </button>
  </a>
</div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:w-1/2 mt-8 md:mt-0 space-y-6">

            {/* Stacked Phone Images */}
            <div className="relative w-48 md:w-64 lg:w-72 h-[300px] md:h-[400px] lg:h-[480px] flex justify-center">

              {/* Back phone */}
              <img
                src={iphone}
                alt="Android App"
                className="absolute w-34 md:w-40 lg:w-56 rotate-[0deg] "
                style={{ top: "20px", left: "-70px" }} />

              {/* Front phone */}
              <img
                src={iphone2}
                alt="iOS App"
                className="absolute w-34 md:w-40 lg:w-58 rotate-[20deg] l"
                style={{ top: "50px", left: "80px" }} />

            </div>

            {/* App Store Buttons */}
            <div className="flex gap-4 justify-center ml-90 ">
              <a 
  href="https://play.google.com/store/games?hl=en" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src={playstore} 
    alt="Google Play" 
    className="w-6 sm:w-8 cursor-pointer" 
  />
</a>
             <a 
  href="https://www.apple.com/in/app-store/" 
  target="_blank" 
  rel="noopener noreferrer"
>
              <img src={appstore} alt="App Store" className="w-6 sm:w-8" />

              </a>
            </div>

          </div>


        </div>
      </div>

    </>



  );
}

export default Home;
