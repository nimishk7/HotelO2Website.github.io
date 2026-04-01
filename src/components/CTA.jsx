import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero_4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      <div className="container-custom relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              A Best Place To Stay.
            </h2>
            <p className="text-white/80 text-xl font-serif italic text-center lg:text-left">
              Luxury & Comfort awaits you. Contact Now!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact" 
              className="btn btn-outline-white-primary px-12 py-5 text-xl bg-transparent border-2 border-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-2xl text-white font-bold"
            >
              Contact Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
