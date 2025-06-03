import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Başlangıç",
      price: "199",
      description: "Yeni yazarlar için ideal başlangıç paketi",
      features: [
        "50 Hedef Okuyucu",
        "1 Kitap Kampanyası",
        "Temel Analitik",
        "E-posta Şablonları",
        "7/24 Destek"
      ],
      buttonText: "Başla",
      popular: false
    },
    {
      name: "Profesyonel",
      price: "499",
      description: "Aktif yazarlar için gelişmiş özellikler",
      features: [
        "200 Hedef Okuyucu",
        "3 Kitap Kampanyası",
        "Gelişmiş Analitik",
        "Özelleştirilebilir E-posta Şablonları",
        "Öncelikli Destek",
        "Yorum Takibi"
      ],
      buttonText: "Şimdi Satın Al",
      popular: true
    },
    {
      name: "Kurumsal",
      price: "999",
      description: "Yayınevleri ve çok kitaplı yazarlar için",
      features: [
        "500 Hedef Okuyucu",
        "Sınırsız Kitap Kampanyası",
        "Premium Analitik",
        "Tam Özelleştirilebilir E-posta Şablonları",
        "VIP Destek",
        "Gelişmiş Yorum Takibi",
        "API Erişimi"
      ],
      buttonText: "İletişime Geç",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/20"></div>
      
      {/* Gold accent shapes */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gold opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">FİYATLANDIRMA</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Kitabınız İçin En Uygun Plan</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            İhtiyaçlarınıza uygun fiyatlandırma seçenekleri ile Amazon KDP kitaplarınız için dürüst yorumlar toplayın.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                rounded-xl overflow-hidden relative
                ${plan.popular ? 'transform md:-translate-y-4 scale-105 z-10' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gold text-black font-medium px-4 py-1 text-sm">
                  En Popüler
                </div>
              )}
              
              <div className={`
                h-full flex flex-col
                ${plan.popular 
                  ? 'bg-white/10 backdrop-blur-sm border border-gold/30' 
                  : 'bg-white/5 backdrop-blur-sm border border-white/10'}
              `}>
                <div className="p-8 border-b border-white/10">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-xl ml-1">₺</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <Link 
                    to="/register" 
                    className={`
                      block w-full py-3 px-6 text-center rounded-md font-medium transition-all
                      ${plan.popular 
                        ? 'bg-gold hover:bg-gold/90 text-black' 
                        : 'bg-white/10 hover:bg-white/20 text-white'}
                    `}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Özel ihtiyaçlarınız mı var? Kurumsal çözümler için bizimle iletişime geçin.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
          >
            <span>Özel Teklif Alın</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
