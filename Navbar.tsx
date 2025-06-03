import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo-white.png" 
            alt="HonestReach Logo" 
            className="h-10 mr-3" 
          />
          <span className="text-xl font-serif">HonestReach</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-gold transition-colors">
            Ana Sayfa
          </Link>
          <Link to="/features" className="text-white hover:text-gold transition-colors">
            Özellikler
          </Link>
          <Link to="/pricing" className="text-white hover:text-gold transition-colors">
            Fiyatlandırma
          </Link>
          <Link to="/contact" className="text-white hover:text-gold transition-colors">
            İletişim
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="hidden md:block">
                <span className="text-gold mr-2">
                  {user?.credits || 0} Kredi
                </span>
              </div>
              <div className="relative group">
                <button className="flex items-center text-white">
                  <span className="mr-2 hidden md:inline">{user?.firstName || 'Kullanıcı'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profil
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Admin Paneli
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Çıkış Yap
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gold transition-colors">
                Giriş Yap
              </Link>
              <Link to="/register" className="btn-primary">
                Kayıt Ol
              </Link>
            </>
          )}
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
