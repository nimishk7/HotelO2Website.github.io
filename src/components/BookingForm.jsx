import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [persons, setPersons] = useState('2');

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
    const message = `Hello, I would like to inquire about the availability of rooms for ${persons} Guests from ${formatDate(checkIn)} to ${formatDate(checkOut)}. Please let me know the room availability and rates. Thank you.`;
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
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
                  className="w-full pl-12 pr-4 h-[56px] border-2 border-gray-100 rounded-lg focus:border-primary focus:outline-none transition-colors"
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
                  className="w-full pl-12 pr-4 h-[56px] border-2 border-gray-100 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  minDate={checkIn}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-black font-bold text-sm uppercase tracking-wider block">No. of Persons</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary z-10 pointer-events-none">
                  <Users size={18} />
                </div>
                <select
                  value={persons}
                  onChange={(e) => setPersons(e.target.value)}
                  className="w-full pl-12 pr-4 h-[56px] border-2 border-gray-100 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white font-medium appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C2.185 5.355 2.398 5 2.851 5h9.297c.453 0 .666.355.4 0.658l-4.796 5.482a.5.5 0 0 1-.706 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="btn btn-primary w-full h-[56px] shadow-lg shadow-primary/20 flex items-center justify-center font-bold uppercase tracking-wider text-sm transition-transform active:scale-[0.98]"
            >
              Check Availability
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
