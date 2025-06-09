import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Drill, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Serviços', href: '/servicos' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Carreira', href: '/carreira' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Aluguer de Máquinas', href: '/aluguer-maquinas' },
  ];

  const facebookUrl = 'https://www.facebook.com/profile.php?id=100064182873984';

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center py-2 px-6 text-sm bg-blue-700 text-white">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">📍 Estrada da vitória nº63, Funchal</span>
          <span className="flex items-center gap-1">📞 +351 913 823 499</span>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-transparent border-none outline-none cursor-pointer text-white">
            <option>Português</option>
          </select>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-700 p-2 rounded-full shadow">
              <Drill className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-900 tracking-tight">
              JPC Rodrigues
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-700 bg-blue-100 shadow-inner'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botão Orçamento */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contacto"
              className="ml-4 px-4 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
            >
              Pedir Orçamento
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full text-gray-700 hover:text-blue-700 hover:bg-blue-100 transition"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200 py-3">
          <nav className="flex flex-col gap-2 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition ${
                  location.pathname === item.href
                    ? 'text-blue-700 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Botão Orçamento no Mobile */}
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-4 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
            >
              Pedir Orçamento
            </Link>

            {/* Botão Facebook no Mobile */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
