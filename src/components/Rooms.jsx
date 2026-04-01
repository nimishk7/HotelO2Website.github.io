import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Wifi, Wind } from 'lucide-react';

const AutoCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Room View"
          initial={{ opacity: 0.2, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
    </div>
  );
};

const Rooms = () => {
  const rooms = [
    {
      title: "Deluxe Room",
      price: "xyz₹",
      images: [
        "/images/room1.jpeg",
        "/images/room2.jpeg",
        "/images/room3.jpeg",
        "/images/bath1.jpeg"
      ],
      delay: 0.1
    },
    {
      title: "Super Deluxe Room",
      price: "xyz₹",
      images: [
        "/images/room4.jpeg",
        "/images/room5.jpeg",
        "/images/room6.jpeg",
        "/images/bath2.jpeg"
      ],
      delay: 0.2
    }
  ];

  return (
    <section id="rooms" className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Elegantly Designed Rooms</h2>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              At Hotel O2, experience comfort and sophistication in our
              elegantly designed air-conditioned rooms. Each room is equipped
              with modern amenities for a relaxing stay.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: room.delay }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden h-72 lg:h-80">
                <AutoCarousel images={room.images} />
                <div className="absolute bottom-6 right-6 z-10">
                  <span className="bg-primary text-white font-bold py-2 px-6 rounded-full shadow-lg">
                    {room.price} / night
                  </span>
                </div>
              </div>
              <div className="p-8 text-center bg-white border-t border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-primary">
                  {room.title}
                </h3>
                <p className="text-secondary text-sm uppercase tracking-widest font-bold mb-4">Standard Amenities Included</p>
                <div className="flex items-center justify-center gap-8 text-primary">
                  <Tv size={22} />
                  <Wifi size={22} />
                  <Wind size={22} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
