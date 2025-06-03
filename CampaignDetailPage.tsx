import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CampaignDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [campaign, setCampaign] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    emailsSent: 0,
    emailsOpened: 0,
    reviewsReceived: 0,
    conversionRate: 0
  });

  useEffect(() => {
    // Bu kısım Bolt.ai ile entegre edilecek
    // API endpoint placeholder
    const fetchCampaign = async () => {
      try {
        setLoading(true);
        
        // API çağrısı placeholder - Bolt.ai entegrasyonu için
        // const response = await fetch(`/api/campaigns/${id}`);
        // const data = await response.json();
        
        // Geçici veri - Bolt.ai entegrasyonu sonrası kaldırılacak
        const mockData = {
          id: id,
          title: "Gölgelerin Efendisi",
          author: "Ahmet Yılmaz",
          description: "Fantastik bir macera romanı",
          amazonUrl: "https://amazon.com/dp/B08XXXX",
          coverImage: "/images/book-covers/fantasy-book.jpg",
          status: "active",
          createdAt: "2025-05-15T10:30:00Z",
          targetAudience: "Fantastik roman okuyucuları, 18-45 yaş arası",
          emailTemplate: "Standart Şablon",
          emailsSent: 120,
          emailsOpened: 85,
          reviewsReceived: 32,
          reviewsVerified: 28
        };
        
        setCampaign(mockData);
        setStats({
          emailsSent: mockData.emailsSent,
          emailsOpened: mockData.emailsOpened,
          reviewsReceived: mockData.reviewsReceived,
          conversionRate: Math.round((mockData.reviewsReceived / mockData.emailsSent) * 100)
        });
        
        setLoading(false);
      } catch (err) {
        setError('Kampanya bilgileri yüklenirken bir hata oluştu.');
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-24 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !campaign) {
    return (
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Hata</h2>
            <p>{error || 'Kampanya bulunamadı.'}</p>
            <Link to="/campaigns" className="mt-4 inline-block text-gold hover:underline">
              Kampanyalara Dön
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <Link to="/campaigns" className="text-gold hover:text-gold/80 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Kampanyalar
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kampanya Detayları */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <img 
                    src={campaign.coverImage} 
                    alt={campaign.title} 
                    className="w-full h-auto rounded-lg shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/images/book-covers/default-cover.jpg";
                    }}
                  />
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{campaign.title}</h1>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' ? 'bg-green-900/30 text-green-400' : 
                      campaign.status === 'paused' ? 'bg-yellow-900/30 text-yellow-400' : 
                      'bg-red-900/30 text-red-400'
                    }`}>
                      {campaign.status === 'active' ? 'Aktif' : 
                       campaign.status === 'paused' ? 'Duraklatıldı' : 'Sonlandırıldı'}
                    </span>
                  </div>
                  
                  <p className="text-gold mb-4">{campaign.author}</p>
                  
                  <div className="mb-4">
                    <p className="text-gray-300">{campaign.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Oluşturulma Tarihi</p>
                      <p>{new Date(campaign.createdAt).toLocaleDateString('tr-TR')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Hedef Kitle</p>
                      <p>{campaign.targetAudience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">E-posta Şablonu</p>
                      <p>{campaign.emailTemplate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Amazon Linki</p>
                      <a 
                        href={campaign.amazonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gold hover:underline"
                      >
                        Amazon'da Görüntüle
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-gold hover:bg-gold/90 text-black font-medium rounded-md px-4 py-2 text-sm transition-all">
                      Kampanyayı Düzenle
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-md px-4 py-2 text-sm transition-all">
                      {campaign.status === 'active' ? 'Kampanyayı Duraklat' : 'Kampanyayı Aktifleştir'}
                    </button>
                    <button className="bg-red-600/20 hover:bg-red-600/30 text-red-400 font-medium rounded-md px-4 py-2 text-sm transition-all">
                      Kampanyayı Sonlandır
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* İstatistikler */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">Kampanya İstatistikleri</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-400 mb-1">Gönderilen E-postalar</p>
                  <p className="text-3xl font-bold text-gold">{stats.emailsSent}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-400 mb-1">Açılan E-postalar</p>
                  <p className="text-3xl font-bold text-gold">{stats.emailsOpened}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-400 mb-1">Alınan Yorumlar</p>
                  <p className="text-3xl font-bold text-gold">{stats.reviewsReceived}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-400 mb-1">Dönüşüm Oranı</p>
                  <p className="text-3xl font-bold text-gold">%{stats.conversionRate}</p>
                </div>
              </div>
              
              <div className="h-64 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                <p className="text-gray-400">Grafik görselleştirmesi burada olacak</p>
                {/* Bolt.ai entegrasyonu sonrası grafik eklenecek */}
              </div>
            </div>
            
            {/* Yorumlar */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Alınan Yorumlar</h2>
                <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">
                  {campaign.reviewsReceived} Yorum
                </span>
              </div>
              
              {/* Bolt.ai entegrasyonu sonrası gerçek yorumlar eklenecek */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                        <span className="font-bold">MK</span>
                      </div>
                      <div>
                        <p className="font-medium">Mehmet K.</p>
                        <p className="text-xs text-gray-400">15 Mayıs 2025</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300">Harika bir kitap! Karakterler çok iyi işlenmiş ve hikaye sürükleyici. Kesinlikle tavsiye ederim.</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                        <span className="font-bold">AY</span>
                      </div>
                      <div>
                        <p className="font-medium">Ayşe Y.</p>
                        <p className="text-xs text-gray-400">12 Mayıs 2025</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300">Genel olarak beğendim ama bazı bölümler biraz uzun geldi. Yine de okumaya değer bir kitap.</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-gold hover:text-gold/80 transition-colors">
                  Tüm Yorumları Görüntüle
                </button>
              </div>
            </div>
          </div>
          
          {/* Sağ Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">Hızlı İşlemler</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-md px-4 py-3 text-sm transition-all flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-posta Hatırlatması Gönder
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-md px-4 py-3 text-sm transition-all flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Rapor Oluştur
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-md px-4 py-3 text-sm transition-all flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Takvime Ekle
                </button>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Hedef Kitle Analizi</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Yaş Dağılımı</p>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>18-24: 15%</span>
                    <span>25-34: 40%</span>
                    <span>35+: 45%</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">Cinsiyet Dağılımı</p>
                  <div className="flex gap-2">
                    <div className="h-4 bg-blue-500/50 rounded-full" style={{ width: '60%' }}></div>
                    <div className="h-4 bg-pink-500/50 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>Erkek: 60%</span>
                    <span>Kadın: 40%</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">İlgi Alanları</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Fantastik</span>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Macera</span>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Bilim Kurgu</span>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Aksiyon</span>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Gizem</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="text-gold hover:text-gold/80 transition-colors text-sm flex items-center">
                  <span>Detaylı Analiz</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CampaignDetailPage;
