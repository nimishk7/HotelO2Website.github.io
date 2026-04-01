import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/res3.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl text-white font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-lg font-serif italic">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>•</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 shadow-2xl rounded-2xl border border-gray-100"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-secondary">Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-secondary">Phone</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-secondary">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-secondary">Message</label>
                    <textarea rows="6" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full py-4 text-lg shadow-xl shadow-primary/20">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>

            <div className="w-full lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-8 relative inline-block">
                    Get in Touch
                    <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p className="text-secondary leading-relaxed mb-10">
                    Whether you have a question about rooms, pricing, or anything else, our team is ready to answer all your questions.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="flex gap-6 items-start group">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors duration-300">
                      <MapPin className="text-primary group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Address</h4>
                      <p className="text-black font-medium leading-relaxed">
                        Sangli - Miraj Rd, near BJP MLA Office, Vishrambag, Sangli, 416415
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors duration-300">
                      <Phone className="text-primary group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</h4>
                      <p className="text-black font-medium">+91 97653 80202</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors duration-300">
                      <Mail className="text-primary group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email</h4>
                      <p className="text-black font-medium">hotel_o2@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
