// API placeholder for Bolt.ai integration
// This file will be used to integrate with Bolt.ai

import axios from 'axios';

// Base API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.honestreach.com/v1';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors (401, 403, etc.)
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints - These will be implemented with Bolt.ai
export const authAPI = {
  login: async (email, password) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log('Bolt.ai integration point: Login API');
    
    // Mock response for development
    return {
      user: {
        id: '123',
        email,
        firstName: 'Demo',
        lastName: 'User',
        role: 'user',
        credits: 100
      },
      token: 'mock-jwt-token'
    };
  },
  
  register: async (userData) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log('Bolt.ai integration point: Register API');
    
    // Mock response for development
    return {
      user: {
        id: '123',
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: 'user',
        credits: 10
      },
      token: 'mock-jwt-token'
    };
  },
  
  getCurrentUser: async () => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log('Bolt.ai integration point: Get Current User API');
    
    // Mock response for development
    return {
      id: '123',
      email: 'user@example.com',
      firstName: 'Demo',
      lastName: 'User',
      role: 'user',
      credits: 100
    };
  }
};

export const campaignAPI = {
  getAllCampaigns: async () => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log('Bolt.ai integration point: Get All Campaigns API');
    
    // Mock response for development
    return [
      {
        id: '1',
        title: 'Gölgelerin Efendisi',
        author: 'Ahmet Yılmaz',
        status: 'active',
        createdAt: '2025-05-15T10:30:00Z',
        emailsSent: 120,
        reviewsReceived: 32
      },
      {
        id: '2',
        title: 'Başarının Sırları',
        author: 'Zeynep Kaya',
        status: 'completed',
        createdAt: '2025-04-10T14:20:00Z',
        emailsSent: 200,
        reviewsReceived: 45
      }
    ];
  },
  
  getCampaign: async (id) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Get Campaign API for ID: ${id}`);
    
    // Mock response for development
    return {
      id,
      title: 'Gölgelerin Efendisi',
      author: 'Ahmet Yılmaz',
      description: 'Fantastik bir macera romanı',
      amazonUrl: 'https://amazon.com/dp/B08XXXX',
      coverImage: '/images/book-covers/fantasy-book.jpg',
      status: 'active',
      createdAt: '2025-05-15T10:30:00Z',
      targetAudience: 'Fantastik roman okuyucuları, 18-45 yaş arası',
      emailTemplate: 'Standart Şablon',
      emailsSent: 120,
      emailsOpened: 85,
      reviewsReceived: 32,
      reviewsVerified: 28
    };
  },
  
  createCampaign: async (campaignData) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log('Bolt.ai integration point: Create Campaign API');
    console.log('Campaign data:', campaignData);
    
    // Mock response for development
    return {
      id: '3',
      ...campaignData,
      status: 'active',
      createdAt: new Date().toISOString(),
      emailsSent: 0,
      emailsOpened: 0,
      reviewsReceived: 0,
      reviewsVerified: 0
    };
  },
  
  updateCampaign: async (id, campaignData) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Update Campaign API for ID: ${id}`);
    console.log('Updated data:', campaignData);
    
    // Mock response for development
    return {
      id,
      ...campaignData,
      updatedAt: new Date().toISOString()
    };
  },
  
  deleteCampaign: async (id) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Delete Campaign API for ID: ${id}`);
    
    // Mock response for development
    return { success: true };
  }
};

export const reviewAPI = {
  getReviewsForCampaign: async (campaignId) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Get Reviews API for Campaign ID: ${campaignId}`);
    
    // Mock response for development
    return [
      {
        id: '101',
        campaignId,
        reviewer: 'Mehmet K.',
        rating: 5,
        content: 'Harika bir kitap! Karakterler çok iyi işlenmiş ve hikaye sürükleyici. Kesinlikle tavsiye ederim.',
        date: '2025-05-15T10:30:00Z',
        verified: true
      },
      {
        id: '102',
        campaignId,
        reviewer: 'Ayşe Y.',
        rating: 4,
        content: 'Genel olarak beğendim ama bazı bölümler biraz uzun geldi. Yine de okumaya değer bir kitap.',
        date: '2025-05-12T14:20:00Z',
        verified: true
      }
    ];
  }
};

export const analyticsAPI = {
  getCampaignStats: async (campaignId) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Get Campaign Stats API for ID: ${campaignId}`);
    
    // Mock response for development
    return {
      emailsSent: 120,
      emailsOpened: 85,
      clickRate: 60,
      reviewsReceived: 32,
      reviewsVerified: 28,
      averageRating: 4.5,
      conversionRate: 26.7
    };
  },
  
  getAudienceAnalytics: async (campaignId) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Get Audience Analytics API for ID: ${campaignId}`);
    
    // Mock response for development
    return {
      ageDistribution: {
        '18-24': 15,
        '25-34': 40,
        '35-44': 25,
        '45+': 20
      },
      genderDistribution: {
        male: 60,
        female: 40
      },
      interests: [
        { name: 'Fantastik', percentage: 75 },
        { name: 'Macera', percentage: 65 },
        { name: 'Bilim Kurgu', percentage: 45 },
        { name: 'Aksiyon', percentage: 40 },
        { name: 'Gizem', percentage: 35 }
      ]
    };
  }
};

export const paymentAPI = {
  getPlans: async () => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log('Bolt.ai integration point: Get Plans API');
    
    // Mock response for development
    return [
      {
        id: 'plan_basic',
        name: 'Başlangıç',
        price: 199,
        credits: 50,
        features: [
          '50 Hedef Okuyucu',
          '1 Kitap Kampanyası',
          'Temel Analitik',
          'E-posta Şablonları',
          '7/24 Destek'
        ]
      },
      {
        id: 'plan_pro',
        name: 'Profesyonel',
        price: 499,
        credits: 200,
        features: [
          '200 Hedef Okuyucu',
          '3 Kitap Kampanyası',
          'Gelişmiş Analitik',
          'Özelleştirilebilir E-posta Şablonları',
          'Öncelikli Destek',
          'Yorum Takibi'
        ]
      },
      {
        id: 'plan_enterprise',
        name: 'Kurumsal',
        price: 999,
        credits: 500,
        features: [
          '500 Hedef Okuyucu',
          'Sınırsız Kitap Kampanyası',
          'Premium Analitik',
          'Tam Özelleştirilebilir E-posta Şablonları',
          'VIP Destek',
          'Gelişmiş Yorum Takibi',
          'API Erişimi'
        ]
      }
    ];
  },
  
  createCheckoutSession: async (planId) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Create Checkout Session API for Plan: ${planId}`);
    
    // Mock response for development
    return {
      sessionId: 'mock_session_id',
      url: 'https://checkout.stripe.com/mock-checkout'
    };
  },
  
  verifyPayment: async (sessionId) => {
    // BOLT.AI INTEGRATION POINT
    // This will be implemented with Bolt.ai
    console.log(`Bolt.ai integration point: Verify Payment API for Session: ${sessionId}`);
    
    // Mock response for development
    return {
      success: true,
      credits: 200
    };
  }
};

export default api;
