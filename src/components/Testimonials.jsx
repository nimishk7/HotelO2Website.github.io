import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Amazing experience! The rooms were spacious and clean. The service was top-notch. Highly recommend for business trips and family stays alike.",
    },
    {
      name: "Priya Sharma",
      text: "A wonderful stay with family. The hospitality at Hotel O2 is unmatched. The staff was very helpful and the facilities were great. Will definitely visit again.",
    },
    {
      name: "Amit Kulkarni",
      text: "Excellent stay! The banquet hall was perfect for our corporate event. Truly a professional team and a gem of a hotel in the heart of the city.",
    },
    {
      name: "Neha Joshi",
      text: "Beautiful ambiance and very comfortable stay. Everything from the check-in to check-out was seamless. The location is very convenient.",
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-24 relative bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/Resto-6.avif')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      
      <div className="container-custom relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Client Testimonials</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              What our guests say about their experience at Hotel O2. A celebration of hospitality and comfort!
            </p>
          </motion.div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonial-swiper pb-16"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-4xl mx-auto text-center px-4 group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="mx-auto mb-8 text-primary/40 w-16 h-16 group-hover:text-primary transition-colors duration-500" />
                  <blockquote className="text-2xl md:text-3xl font-serif italic text-white mb-8 leading-relaxed">
                    "{t.text}"
                  </blockquote>
                  <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                  <cite className="text-xl font-bold text-white not-italic">— {t.name}</cite>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          @apply bg-white/30 opacity-100 w-3 h-3;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          @apply bg-primary w-10 rounded-full;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
