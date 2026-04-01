import React from 'react';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Amenities from '../components/Amenities';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <BookingForm />
      <About />
      <Rooms />
      <Gallery />
      <Testimonials />
      <Amenities />
      <CTA />
    </>
  );
};

export default Home;
