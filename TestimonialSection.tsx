import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Fantastik Roman Yazarı",
      image: "/images/testimonials/author1.jpg",
      quote: "HonestReview sayesinde kitabım için 30'dan fazla dürüst yorum topladım. Satışlarım %40 arttı ve Amazon algoritmasında daha görünür hale geldim."
    },
    {
      name: "Zeynep Kaya",
      role: "Kişisel Gelişim Yazarı",
      image: "/images/testimonials/author2.jpg",
      quote: "Diğer platformlarda sahte yorum riski vardı. HonestReview ile gerçek okuyuculardan samimi geri bildirimler aldım ve kitabımı bu yorumlar doğrultusunda geliştirdim."
    },
    {
      name: "Mehmet Demir",
      role: "Bilim Kurgu Yazarı",
      image: "/images/testimonials/author3.jpg",
      quote: "Hedef kitle bulma özelliği muhteşem! Tam olarak kitabımla ilgilenecek okuyucuları buldu ve yorum oranım diğer yöntemlere göre 3 kat daha yüksek oldu."
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-black/10"></div>
      
      {/* Gold accent shapes */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-gold opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">YAZARLARIMIZ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Başarı Hikayeleri</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            HonestReview ile kitapları için dürüst yorumlar toplayan yazarların deneyimlerini keşfedin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a default avatar if the image fails to load
                      e.currentTarget.src = "/images/testimonials/default-avatar.jpg";
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="relative">
                <svg className="absolute top-0 left-0 w-8 h-8 text-gold/20 -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                </svg>
                <p className="text-gray-300 italic">{testimonial.quote}</p>
              </blockquote>
              
              <div className="mt-6 flex justify-end">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/success-stories" 
            className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
          >
            <span>Tüm Başarı Hikayelerini Görüntüle</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
