import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-black text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider">HonestReview İstatistikleri</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">5K+</div>
              <div className="text-gray-400">Aktif Yazar</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">12K+</div>
              <div className="text-gray-400">Kitap Kampanyası</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">50K+</div>
              <div className="text-gray-400">Toplanan Yorum</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-400">Memnuniyet Oranı</div>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
