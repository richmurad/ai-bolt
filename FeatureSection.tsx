import React from 'react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: "/icons/target-audience.svg",
      title: "Otomatik Hedef Kitle Bulucu",
      description: "Kitabınızın kategorisine göre en uygun okuyucu kitlesini otomatik olarak belirler ve iletişim bilgilerini toplar."
    },
    {
      icon: "/icons/pdf-tracking.svg",
      title: "PDF Gönderim Takibi",
      description: "Kitabınızın PDF'ini potansiyel okuyuculara gönderir ve açılma, okunma durumunu gerçek zamanlı takip eder."
    },
    {
      icon: "/icons/review-analysis.svg",
      title: "Yorum Analizi & Raporlama",
      description: "Gelen yorumları analiz eder, duygu analizi yapar ve kapsamlı raporlar oluşturur."
    },
    {
      icon: "/icons/stripe-payment.svg",
      title: "Stripe ile Kolay Ödeme",
      description: "Güvenli ve hızlı ödeme sistemi ile kredi satın alın, kampanyalarınızı hemen başlatın."
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Kitabınız İçin Dürüst Yorumlar</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            HonestReach, Amazon KDP yazarlarının kitaplarına doğal ve dürüst yorumlar almasını sağlayan otomatik bir sistemdir.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-box bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="feature-icon"
                onError={(e) => {
                  // Fallback to a default icon if the image fails to load
                  e.currentTarget.src = "/icons/default-feature.svg";
                }}
              />
              <h3 className="feature-title text-xl font-serif mb-2">{feature.title}</h3>
              <p className="feature-description text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif mb-6">Amazon TOS Uyumlu Yorum Toplama</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            HonestReach, Amazon'un kurallarına tamamen uygun şekilde çalışır. Spam veya sahte yorum riski olmadan, 
            doğal ve samimi bir şekilde kitap yorumları toplamanızı sağlar.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-lg mb-2">3 Adımda Dürüst Yorumlar</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Amazon kitap linkinizi ekleyin</li>
                    <li>Hedef kitlenizi belirleyin</li>
                    <li>Otomatik e-posta kampanyasını başlatın</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
