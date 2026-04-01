import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="aboutus" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative pr-12 pb-12"
            >
              <img 
                src="/images/res5.jpeg" 
                alt="Hotel Restaurant" 
                className="rounded-2xl shadow-2xl relative z-10 w-full"
              />
              <div className="absolute top-1/2 -right-4 lg:-right-12 translate-y-[-20%] z-20 w-1/2">
                <img 
                  src="/images/hotelO2.png" 
                  alt="Hotel Logo Overlay" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 relative inline-block">
                Welcome!
                <span className="absolute bottom-[-10px] left-0 w-20 h-1.5 bg-primary rounded-full"></span>
              </h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                Hotel O2 offers refined accommodations and exceptional service at
                our prime location in the heart of Sangli. A fusion of
                contemporary elegance and superior hospitality sets our
                establishment apart.
              </p>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                We also feature a small meeting hall and a hall for intimate
                functions. Experience the pinnacle of sophistication, style, and
                convenience at Hotel O2.
              </p>
              
              <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="text-3xl font-bold text-primary">Luxury</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Experience</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <h4 className="text-3xl font-bold text-primary">Stay</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">With Us</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
