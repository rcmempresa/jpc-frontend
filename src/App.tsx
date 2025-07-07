import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import Header from './components/Header';
import Footer from './components/Footer';
import Privacidade from './pages/Privacidade';
import TermosECondicoes from './pages/TermoseCondicoes';
import PoliticaCookies from './pages/PoliticaCookies';
import BlinkingPhoneNumber from './components/BlinkingPhoneNumber';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Career from './pages/Career';
import Contact from './pages/Contact';
import MachineRental from './pages/MachineRental';

// Importe o novo componente ScrollToTop
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      {/* O componente ScrollToTop deve ser renderizado dentro do Router, */}
      {/* mas fora do Routes, para que ele possa "ouvir" todas as mudanças de rota. */}
      <ScrollToTop />

      <div className="min-h-screen bg-gray-50 relative">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/carreira" element={<Career />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/aluguer-maquinas" element={<MachineRental />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos-e-condicoes" element={<TermosECondicoes />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
          </Routes>
        </main>
        <Footer />
        <BlinkingPhoneNumber />

        {/* --- ADICIONE O COMPONENTE COOKIECONSENT AQUI --- */}
        <CookieConsent
            location="bottom"
            buttonText="Aceitar Cookies"
            declineButtonText="Recusar Cookies"
            cookieName="jpcRodriguesCookieConsent"
            style={{ background: "#2B373B", color: "#fff", alignItems: "center", padding: "15px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", zIndex: 1000 }}
            buttonStyle={{ color: "#fff", background: "#1565c0", borderRadius: "5px", padding: "10px 20px", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "16px", margin: "0 10px" }}
            declineButtonStyle={{ color: "#fff", background: "#d32f2f", borderRadius: "5px", padding: "10px 20px", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "16px", margin: "0 10px" }}
            expiresIn={365}
            enableDeclineButton
            // onAccept={() => {
            //     console.log("Usuário aceitou os cookies!");
            // }}
            // onDecline={() => {
            //     console.log("Usuário recusou os cookies!");
            // }}
            debug={false}
        >
            Este website utiliza cookies para garantir a melhor experiência de navegação e para fins analíticos. Ao continuar a navegar, concorda com a nossa <Link to="/politica-cookies" style={{ color: "#87ceeb", textDecoration: "underline", fontWeight: "bold" }}>Política de Cookies</Link>.
        </CookieConsent>
        {/* --- FIM DO COMPONENTE COOKIECONSENT --- */}
      </div>
    </Router>
  );
}

export default App;
