import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    const formatDate = (date) => {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-GB', options);
    };

    const phoneNumber = "919765380202"; 
    const message = `Hello, I would like to book rooms in your hotel from ${formatDate(checkIn)} to ${formatDate(checkOut)}. Please let me know the availability.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="next" className="relative -mt-16 z-20 px-4">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl p-8 lg:p-12 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-black font-bold text-sm uppercase tracking-wider block">Check In</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary z-10">
                  <Calendar size={18} />
                </div>
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  placeholderText="Check In Date"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-black font-bold text-sm uppercase tracking-wider block">Check Out</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary z-10">
                  <Calendar size={18} />
                </div>
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  placeholderText="Check Out Date"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  minDate={checkIn}
                />
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="btn btn-primary w-full h-[54px] shadow-lg shadow-primary/20"
            >
              Check Availability on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
