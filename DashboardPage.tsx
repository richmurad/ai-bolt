import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  
  // Bu veriler Bolt.ai entegrasyonu sonrası API'den gelecek
  const stats = {
    activeCampaigns: 2,
    totalReviews: 78,
    pendingEmails: 45,
    conversionRate: 26
  };
  
  const recentCampaigns = [
    {
      id: '1',
      title: 'Gölgelerin Efendisi',
      status: 'active',
      emailsSent: 120,
      reviewsReceived: 32,
      lastActivity: '2025-05-28T10:30:00Z'
    },
    {
      id: '2',
      title: 'Başarının Sırları',
      status: 'paused',
      emailsSent: 85,
      reviewsReceived: 24,
      lastActivity: '2025-05-25T14:20:00Z'
    }
  ];
  
  const recentReviews = [
    {
      id: '101',
      bookTitle: 'Gölgelerin Efendisi',
      reviewer: 'Mehmet K.',
      rating: 5,
      content: 'Harika bir kitap! Karakterler çok iyi işlenmiş ve hikaye sürükleyici.',
      date: '2025-05-28T10:30:00Z'
    },
    {
      id: '102',
      bookTitle: 'Gölgelerin Efendisi',
      reviewer: 'Ayşe Y.',
      rating: 4,
      content: 'Genel olarak beğendim ama bazı bölümler biraz uzun geldi.',
      date: '2025-05-26T14:20:00Z'
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Merhaba, {user?.firstName || 'Kullanıcı'}</h1>
          <p className="text-gray-400">Kampanyalarınızın durumunu ve son yorumları buradan takip edebilirsiniz.</p>
        </div>
        
        {/* Credits and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Kredi Bakiyeniz</h2>
                <p className="text-gray-400">Kampanyalarınız için kullanabileceğiniz krediler</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-4xl font-bold text-gold">{user?.credits || 0}</span>
                <span className="text-lg ml-2">Kredi</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/campaigns/create" 
                className="bg-gold hover:bg-gold/90 text-black font-medium rounded-md px-4 py-2 text-sm transition-all flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Yeni Kampanya Oluştur
              </Link>
              <Link 
                to="/credits" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-md px-4 py-2 text-sm transition-all flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kredi Satın Al
              </Link>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Hızlı İstatistikler</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-400 mb-1">Aktif Kampanyalar</p>
                <p className="text-3xl font-bold text-gold">{stats.activeCampaigns}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-400 mb-1">Toplam Yorumlar</p>
                <p className="text-3xl font-bold text-gold">{stats.totalReviews}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-400 mb-1">Bekleyen E-postalar</p>
                <p className="text-3xl font-bold text-gold">{stats.pendingEmails}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-400 mb-1">Dönüşüm Oranı</p>
                <p className="text-3xl font-bold text-gold">%{stats.conversionRate}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Campaigns */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Son Kampanyalar</h2>
            <Link to="/campaigns" className="text-gold hover:text-gold/80 transition-colors text-sm flex items-center">
              <span>Tüm Kampanyalar</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Kitap Adı</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-400">Durum</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-400">E-postalar</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-400">Yorumlar</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-400">Son Aktivite</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {recentCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4">
                      <Link to={`/campaigns/${campaign.id}`} className="text-white hover:text-gold">
                        {campaign.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.status === 'active' ? 'bg-green-900/30 text-green-400' : 
                        campaign.status === 'paused' ? 'bg-yellow-900/30 text-yellow-400' : 
                        'bg-red-900/30 text-red-400'
                      }`}>
                        {campaign.status === 'active' ? 'Aktif' : 
                         campaign.status === 'paused' ? 'Duraklatıldı' : 'Sonlandırıldı'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">{campaign.emailsSent}</td>
                    <td className="py-3 px-4 text-center">{campaign.reviewsReceived}</td>
                    <td className="py-3 px-4 text-center">
                      {new Date(campaign.lastActivity).toLocaleDateString('tr-TR')}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link 
                        to={`/campaigns/${campaign.id}`} 
                        className="text-gold hover:text-gold/80 mr-3"
                        title="Görüntüle"
                      >
                        <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                      <Link 
                        to={`/campaigns/${campaign.id}/edit`} 
                        className="text-blue-400 hover:text-blue-300"
                        title="Düzenle"
                      >
                        <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Recent Reviews */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Son Yorumlar</h2>
            <Link to="/reviews" className="text-gold hover:text-gold/80 transition-colors text-sm flex items-center">
              <span>Tüm Yorumlar</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{review.bookTitle}</p>
                    <div className="flex items-center mt-1">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-2 text-xs">
                        {review.reviewer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-sm text-gray-400">{review.reviewer}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-gold' : 'text-gray-500'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{review.content}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(review.date).toLocaleDateString('tr-TR')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
