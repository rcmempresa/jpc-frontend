import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="logotipo_jpc.png" alt="JPC Rodrigues Logo" className="h-24" />
            </div>
            <p className="text-blue-200 mb-4">
              Especialistas em corte e furação de betão com mais de 8 anos de experiência.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+351913823499" className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer" aria-label="Ligar para JPC Rodrigues">
                <Phone className="h-4 w-4" />
              </a>
              <a href="mailto:geral@jpcrodrigues.pt" className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer" aria-label="Enviar email para JPC Rodrigues">
                <Mail className="h-4 w-4" />
              </a>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {/* --- NOVOS LINKS LEGAIS --- */}
              <li><Link to="/privacidade" className="text-blue-200 hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-e-condicoes" className="text-blue-200 hover:text-white transition-colors">Termos e Condições</Link></li>
              <li><Link to="/politica-cookies" className="text-blue-200 hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">+351 913 823 499</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">geral@jpcrodrigues.pt</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">Estrada da vitória nº63, Funchal, Portugal</span>
              </div>
            </div>
          </div>     
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 mb-2">
            © 2025 JPC Rodrigues. Todos os direitos reservados.
          </p>
          <p className="text-blue-200 text-sm">
            Desenvolvido por{' '}
            <a
              href="https://1way.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-blue-300 transition-colors text-base"
            >
              1way.pt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;