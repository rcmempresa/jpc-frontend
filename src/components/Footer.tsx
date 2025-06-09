import React from 'react';
import { Link } from 'react-router-dom';
import { Drill, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Drill className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">JPC Rodrigues</span>
            </div>
            <p className="text-blue-200 mb-4">
              Especialistas em corte e furação de betão com mais de 15 anos de experiência.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
              </div>
              <div className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/servicos" className="text-blue-200 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/portfolio" className="text-blue-200 hover:text-white transition-colors">Portfólio</Link></li>
              <li><Link to="/carreira" className="text-blue-200 hover:text-white transition-colors">Carreira</Link></li>
              <li><Link to="/aluguer-maquinas" className="text-blue-200 hover:text-white transition-colors">Aluguer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">+351 210 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">info@jpcrodrigues.pt</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">Lisboa, Portugal</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">Seg-Sex: 8h-18h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">Sáb: 8h-13h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">Dom: Fechado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 JPC Rodrigues. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;