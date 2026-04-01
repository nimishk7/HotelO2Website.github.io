import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="aboutus" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0046764427875!2d74.5982003!3d16.8480251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12309c6e24bdf%3A0x6d020c8f3dc184b3!2sHOTEL%20O2%20LODGING%20%26%20PURE%20VEG%20RESTAURANT%20(%20BANQUET%20HALL%20%26%20TERRACE%20PARTY%20LAWN)!5e1!3m2!1sen!2sin!4v1775041158495!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel O2 Location"
              ></iframe>
              {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <a 
                  href="https://maps.app.goo.gl/EkZjx1Sgz8ukf7wg7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg hover:bg-black transition-colors block"
                >
                  Get Directions
                </a>
              </div> */}
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
                Our guest experience is elevated by premium deluxe and super deluxe AC rooms, a grand banquet hall, and two sophisticated meeting rooms tailored for your professional needs. Guests can enjoy exquisite dining at our pure veg restaurant or host unforgettable celebrations at our vibrant open terrace party section. Experience the pinnacle of sophistication and comfort at Hotel O2.
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
