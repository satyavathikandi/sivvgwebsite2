// src/components/Banner.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const vedio = new URL("../assets/vedio.mp4", import.meta.url).href;
const poster = new URL("../assets/banner1.png", import.meta.url).href;
const banner2 = new URL("../assets/banner2.png", import.meta.url).href;
const banner3 = new URL("../assets/banner3.png", import.meta.url).href;

export default function Banner() {
  // autoplay config for swiper (either false or an object)
  const [autoplayCfg, setAutoplayCfg] = useState({
    delay: 4000000,
    disableOnInteraction: false,
  });

  // detect mobile / small screen reliably
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    // reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setAutoplay = (matches) => {
      setAutoplayCfg(matches ? false : { delay: 4000, disableOnInteraction: false });
    };
    setAutoplay(mq.matches);
    const onChange = (e) => setAutoplay(e.matches);
    try {
      mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    } catch {}
    return () => {
      window.removeEventListener("resize", handleResize);
      try {
        mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
      } catch {}
    };
  }, []);

  // video ref (for desktop)
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // lazy attempt to autoplay when video is visible on desktop
  useEffect(() => {
    if (isMobile) return; // only try autoplay on non-mobile
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.preload = "metadata";
    // try to play; browsers may block — catch errors silently
    v.play().then(() => {
      setVideoLoaded(true);
    }).catch((err) => {
      // autoplay blocked or other error - keep poster visible
      console.warn("video autoplay blocked or failed:", err);
      setVideoLoaded(false);
    });
  }, [isMobile]);

  const slideContainerClasses = "relative w-full h-[56.25vw] sm:h-[50vh] md:h-screen overflow-hidden";
  const captionClasses = "absolute left-4 md:left-10 bottom-6 md:bottom-10 bg-[#4b4d9c] text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg max-w-[90%] md:max-w-[40%] text-sm md:text-lg";

  return (
    <section aria-label="Hero banner" className="w-full">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={autoplayCfg}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
         <div className={slideContainerClasses}>
  {/* Desktop video */}
  <div className="hidden md:block absolute inset-0">
    <video
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
      autoPlay
    >
      <source src={vedio} type="video/mp4" />
    </video>
  </div>

  {/* Mobile video */}
  <div className="block md:hidden absolute inset-0">
    <video
      className="w-full h-full object-cover"
     
      loop
      muted
      playsInline
      autoPlay
    >
      <source src={vedio} type="video/mp4" />
    </video>
  </div>
    
</div>
          
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={slideContainerClasses}>
            <img src={banner2} alt="Slide 2" className="absolute inset-0 w-full h-full object-cover" />
           
          </div>
        </SwiperSlide>
<SwiperSlide>
  <div className={slideContainerClasses}>
    {/* Banner background */}
    <img
      src={banner3}
      alt="Slide 3"
      className="absolute inset-0 w-full h-full object-cover"/>

    {/* Quote aligned top-left */}
    {/* <h2 className="absolute top-8 left-6 md:top-12 md:left-12 text-lg md:text-2xl font-semibold text-white bg-black/40 px-4 py-2 rounded-lg">
      Clarity in every move, confident in every trade
    </h2> */}

    {/* Main heading */}
    <h1
  className="
    relative
    z-10
    font-bold
    text-white
    text-left
    mt-40 sm:mt-48 md:mt-56
    mb-3
    px-4 md:px-16
    text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl
    leading-snug md:leading-tight
    max-w-[90%] md:max-w-[60%]
  "
>
  Your future is <br />
  <span className="block md:inline md:ml- text-white/90">
    already in your hand
  </span>
</h1>

    {/* Mobile poster overlay */}
    <div className="block md:hidden absolute inset-0">
      <img
        src={banner3}
        alt="Hero poster"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</SwiperSlide>


      </Swiper>
    </section>
  );
}
