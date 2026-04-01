import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "/images/Slider/slider-1.jpeg",
    "/images/Slider/slider-2.jpeg",
    "/images/Slider/slider-3.jpeg",
    "/images/Slider/slider-4.jpeg",
    "/images/Slider/slider-5.jpeg",
    "/images/Slider/slider-6.jpeg",
    "/images/Slider/slider-7.jpg",
    "/images/Slider/slider-8.jpeg",
    "/images/Slider/slider-9.jpeg",
    "/images/Slider/slider-10.jpeg",
    "/images/Slider/slider-11.jpeg",
    "/images/Slider/slider-12.jpeg",
    "/images/Slider/slider-13.jpeg",
    "/images/Slider/slider-14.jpeg",
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Gallery</h2>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Discover our gallery featuring an array of photos highlighting the
              elegance and charm of Hotel O2. Let the beauty captured in our gallery inspire your next visit.
            </p>
          </motion.div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="gallery-swiper pb-16"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-2xl h-80 shadow-lg">
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles for Swiper pagination/navigation */}
      <style>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          @apply w-12 h-12 bg-white rounded-full text-black shadow-lg after:text-lg;
          transition: all 0.3s ease;
        }
        .gallery-swiper .swiper-button-next:hover,
        .gallery-swiper .swiper-button-prev:hover {
          @apply bg-primary text-white;
        }
        .gallery-swiper .swiper-pagination-bullet {
          @apply w-3 h-3 bg-gray-300 opacity-100;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          @apply bg-primary w-8 rounded-full;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
