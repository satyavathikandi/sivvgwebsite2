import React from "react";
import {
  FaBell,
  FaChartLine,
  FaMobileAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import iphone from "../assets/iphone.png";
import iphone2 from "../assets/iphone2.png";
import qr from "../assets/qr.png";

const DownloadAppSection = () => {
  return (
    <section className="bg-[#6768c9] text-gray-100 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center text-center lg:text-left">
        
        {/* ✅ Column 1: Features / CTA */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Download the <span className="text-white">SIVVG App</span>
          </h2>

          {/* ✅ Feature list: perfectly aligned */}
          <div className="flex flex-col space-y-4 w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
            <div className="flex items-center gap-3">
              <FaBell className="text-white text-xl flex-shrink-0" />
              <h3 className="font-semibold text-lg leading-tight">
                Real-time Alerts
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <FaChartLine className="text-white text-xl flex-shrink-0" />
              <h3 className="font-semibold text-lg leading-tight">
                Accurate Tips
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileAlt className="text-white text-xl flex-shrink-0" />
              <h3 className="font-semibold text-lg leading-tight">
                Transparent & Efficient
              </h3>
            </div>
          </div>

          {/* ✅ App buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <a
              href="https://apps.apple.com/app/idYOUR_APP_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-cyan-400 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition shadow-md"
            >
              <FaApple size={18} /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-300 px-4 py-2 rounded-lg font-medium hover:bg-green-400/10 transition shadow-md"
            >
              <FaGooglePlay size={18} /> Google Play
            </a>
          </div>

          <p className="text-xs text-gray-300 mt-2">
            * Free download. Premium features available with subscription.
          </p>
          <p className="text-sm text-white">
            SEBI Registration Number - INR0017042821
          </p>
        </div>

        {/* ✅ Column 2: QR + Text */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="text-white font-semibold text-base sm:text-2md mt-3">
            Scan here — your trading journey starts soon
          </p>          <img
            src={qr}
            alt="QR Code"
            className="w-24 sm:w-28 md:w-32 my-2"
          />
          <p className="text-green-300 font-semibold text-sm sm:text-base">
            #Made for tip recommendations
          </p>
          <p className="text-white font-semibold text-base sm:text-lg">
            Open your SIVVG account in minutes
          </p>
          <a
            href="https://w3schools.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-yellow-300 transition shadow-md mt-3">
              Get Started Now →
            </button>
          </a>
        </div>

        {/* ✅ Column 3: Mobile Mockups */}
        <div className="flex justify-center items-center relative mt-10 sm:mt-0">
          <div className="relative w-[220px] sm:w-[300px] md:w-[400px] lg:w-[460px] h-[260px] sm:h-[340px] md:h-[420px] lg:h-[460px]">
            {/* Left Phone */}
            <img
              src={iphone2}
              alt="Android App"
              className="absolute rounded-2xl transition-transform duration-500 hover:scale-105"
              style={{
                width: "55%",
                top: "-2%",
                left: "2%",
              }}
            />
            {/* Right Phone */}
            <img
              src={iphone}
              alt="iOS App"
              className="absolute rounded-2xl transition-transform duration-500 hover:scale-105"
              style={{
                width: "55%",
                top: "8%",
                left: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
