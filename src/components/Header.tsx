import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Phone, MapPin } from 'lucide-react';

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
  const phoneNumber = '+351913823499';
  const address = 'Estrada da vitória nº63, Funchal';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Estrada+da+vitória+nº63,+Funchal';

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out font-sans">
      
      <div className="max-w-full px-4 sm:px-6 lg:px-16 py-1 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="jpc_logotipo_final.png" alt="Logotipo JPC Rodrigues" className="h-32 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation - Links discretos com hover elegante */}
        <nav className="hidden lg:flex items-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out
                ${
                  location.pathname === item.href
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botão Orçamento - Destaque com fundo azul */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contacto"
            className="ml-6 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold text-base shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Pedir Orçamento
          </Link>
        </div>

        {/* Mobile menu button - Ícone escuro, fundo transparente */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          aria-label="Abrir/Fechar menu móvel"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation - Fundo branco, texto escuro */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100 py-4 transition-all duration-300 ease-in-out origin-top animate-slideDown">
          <nav className="flex flex-col gap-2 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${
                    location.pathname === item.href
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Botão Orçamento no Mobile - Fundo azul */}
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 w-full text-center px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Pedir Orçamento
            </Link>

            {/* Contactos e Redes Sociais no Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3 text-gray-700">
                <a
                    href={`tel:${phoneNumber}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-blue-600 px-4 py-2 rounded-md transition-colors"
                >
                    <Phone size={16} className="text-gray-400" /> {phoneNumber}
                </a>
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-blue-600 px-4 py-2 rounded-md transition-colors"
                >
                    <MapPin size={16} className="text-gray-400" /> {address}
                </a>
                <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-blue-600 px-4 py-2 rounded-md transition-colors"
                >
                    <Facebook size={18} className="text-gray-400" /> Visite nosso Facebook
                </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;