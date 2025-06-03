import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-black text-white relative overflow-hidden">
      {/* Gold accent shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Kitabınız İçin <span className="text-gold">Dürüst Yorumlar</span> Almaya Başlayın
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Amazon KDP başarınızı bir üst seviyeye taşımak için hemen kaydolun ve 
            kitaplarınız için doğal, samimi yorumlar toplamaya başlayın.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/register" 
              className="bg-gold hover:bg-gold/90 text-black font-medium rounded-md px-8 py-4 text-lg transition-all"
            >
              Hemen Başla
            </Link>
            <Link 
              to="/demo" 
              className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-md px-8 py-4 text-lg transition-all"
            >
              Demo İzle
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Amazon TOS Uyumlu</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>7/24 Destek</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14 Gün İade Garantisi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
