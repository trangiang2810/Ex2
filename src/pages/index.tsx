import React from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Product from '@/components/Product';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}
