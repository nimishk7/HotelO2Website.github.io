import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: "url('/images/res5.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-white uppercase tracking-widest text-sm mb-6 font-medium">Welcome to</span>
          <h1 className="text-6xl md:text-7xl text-white font-bold mb-8">
            Hotel O2 <br className="hidden md:block" /> 
            <span className="font-serif italic">Best Place To Stay In Sangli</span>
          </h1>
        </motion.div>
      </div>

      {/* Mouse Icon Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <a 
          href="#next" 
          className="flex flex-col items-center group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('next')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-[26px] h-[46px] border-2 border-white rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                opacity: [1, 0, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
