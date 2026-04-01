import React from 'react';
import { motion } from 'framer-motion';

const Rooms = () => {
  const rooms = [
    {
      title: "Single Room",
      price: "xyz₹",
      image: "/images/room10.jpg",
      delay: 0.1
    },
    {
      title: "Family Room",
      price: "xyz₹",
      image: "/images/room4.jpeg",
      delay: 0.2
    },
    {
      title: "Presidential Room",
      price: "xyz₹",
      image: "/images/room1.jpeg",
      delay: 0.3
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: room.delay }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-primary text-white font-bold py-2 px-6 rounded-full shadow-lg">
                    {room.price} / night
                  </span>
                </div>
              </div>
              <div className="p-8 text-center bg-white border-t border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-primary">
                  {room.title}
                </h3>
                <p className="text-secondary text-sm uppercase tracking-widest font-bold">Standard Amenities Included</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
