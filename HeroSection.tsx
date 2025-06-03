import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Gerçek Yorumlarla Kitabını Zirveye Taşı",
      description: "Amazon KDP yazarları için doğal ve dürüst yorumlar alma platformu. Kitabınızı hedef kitlenize ulaştırın, gerçek okuyucu geri bildirimleri alın."
    },
    {
      title: "Amazon'un Kurallarına Uygun Otomatik İnceleme Talebi",
      description: "Tamamen Amazon TOS uyumlu, spam veya sahte yorum riski olmadan, doğal ve samimi bir şekilde kitap yorumları toplayın."
    },
    {
      title: "PDF Hediye Gönder, Okuyucudan Doğal Geri Bildirim Al",
      description: "Kitabınızın PDF'ini potansiyel okuyuculara hediye olarak gönderin ve karşılığında dürüst yorumlar alın."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        <div className="slide-container relative h-32">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute transition-all duration-500 w-full ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/register" className="btn-primary text-lg px-8 py-3">
            Hemen Başla
          </Link>
          <Link to="/demo" className="btn-secondary text-lg px-8 py-3">
            Demo İzle
          </Link>
        </div>
        
        {/* Slider Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-gold w-6' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
