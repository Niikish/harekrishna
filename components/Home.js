import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video with Responsive Cover */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/videos/2835998-uhd_3840_2160_24fps.mp4"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-110 saturate-110"
          autoPlay
          playsInline
          muted
          loop
          aria-hidden="true"
        ></video>
      </div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none"></div>
      
      {/* Subtle Grid Texture for Premium Feel */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 z-20 relative h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          {mounted && (
            <>
              {/* Decorative Accent Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "80px", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 sm:mb-8 rounded-full"
              ></motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tight text-white drop-shadow-2xl leading-tight"
              >
                Hare Krishna <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                  Projects
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                className="mb-8 sm:mb-10"
              >
                <p className="text-lg sm:text-2xl md:text-3xl font-light text-gray-200 drop-shadow-lg tracking-wide border-l-4 border-yellow-500 pl-3 sm:pl-4">
                  Construct your dreams with devotion
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              >
                {/* Primary Button */}
                <Link href="/#services" className="group relative overflow-hidden py-4 px-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-semibold shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] transition-all duration-500 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Our Services
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </Link>

                {/* Secondary Button */}
                <Link href="/#founder" className="group relative overflow-hidden py-4 px-10 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white text-lg font-medium hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-1">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    About Us
                  </span>
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => {
          document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs text-gray-300 uppercase tracking-widest mb-3 font-semibold">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-2 bg-yellow-400 rounded-full"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade to merge with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
