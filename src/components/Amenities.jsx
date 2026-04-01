import React from 'react';
import { 
  Wifi, 
  Utensils, 
  GlassWater, 
  DoorOpen, 
  ParkingCircle, 
  ConciergeBell, 
  Shirt, 
  Sparkles, 
  Snowflake, 
  PhoneCall, 
  Users, 
  Home 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Amenities = () => {
  const amenities = [
    { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected with high-speed internet" },
    { icon: Utensils, title: "Restaurant", desc: "Enjoy delicious meals at our restaurant" },
    { icon: DoorOpen, title: "Banquet Hall", desc: "Perfect venue for weddings and events" },
    { icon: ConciergeBell, title: "24-Hour Front Desk", desc: "Our staff is always available" },
    { icon: ParkingCircle, title: "Free Parking", desc: "Secure parking space for all guests" },
    { icon: PhoneCall, title: "Room Service", desc: "Enjoy meals in your room" },
    { icon: Shirt, title: "Laundry Service", desc: "Professional laundry services" },
    { icon: Sparkles, title: "Housekeeping", desc: "Daily cleaning for high standards" },
    { icon: Snowflake, title: "Air Conditioning", desc: "All rooms climate controlled" },
    { icon: PhoneCall, title: "Intercom", desc: "Easy communication with services" },
    { icon: Users, title: "Meeting Rooms", desc: "Professional spaces for meetings" },
    { icon: Home, title: "Family Rooms", desc: "Spacious accommodations" }
  ];

  return (
    <section id="amenities" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Amenities</h2>
            <p className="text-secondary text-lg leading-relaxed">
              Hotel O2 offers a wide range of amenities to make your stay comfortable and convenient. 
              As a 3-star hotel, we take pride in our cleanliness and quality service.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
