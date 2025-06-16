import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importar Link se ainda não estiver
import CookieConsent from "react-cookie-consent"; // Importe o CookieConsent
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


function App() {
  return (
    <Router>
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
            location="bottom" // Onde o pop-up aparece (bottom, top, etc.)
            buttonText="Aceitar Cookies" // Texto do botão de aceitar
            declineButtonText="Recusar Cookies" // Texto do botão de recusar (se quiser a opção)
            cookieName="jpcRodriguesCookieConsent" // Nome do cookie que guarda a preferência
            style={{ background: "#2B373B", color: "#fff", alignItems: "center", padding: "15px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", zIndex: 1000 }} // Estilo do container principal
            buttonStyle={{ color: "#fff", background: "#1565c0", borderRadius: "5px", padding: "10px 20px", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "16px", margin: "0 10px" }} // Estilo do botão de aceitar
            declineButtonStyle={{ color: "#fff", background: "#d32f2f", borderRadius: "5px", padding: "10px 20px", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "16px", margin: "0 10px" }} // Estilo do botão de recusar
            expiresIn={365} // Duração do cookie em dias (ex: 365 dias = 1 ano)
            enableDeclineButton // Ativa o botão de recusar
            // onAccept={() => {
            //     // Lógica a ser executada quando o utilizador aceita os cookies
            //     // Ex: Inicializar scripts do Google Analytics, etc.
            //     console.log("Usuário aceitou os cookies!");
            // }}
            // onDecline={() => {
            //     // Lógica a ser executada quando o utilizador recusa os cookies
            //     // Ex: Desativar scripts de tracking
            //     console.log("Usuário recusou os cookies!");
            // }}
            debug={false} // Define para 'true' apenas durante o desenvolvimento para ver o cookie ser definido/apagado no console
        >
            Este website utiliza cookies para garantir a melhor experiência de navegação e para fins analíticos. Ao continuar a navegar, concorda com a nossa <Link to="/politica-cookies" style={{ color: "#87ceeb", textDecoration: "underline", fontWeight: "bold" }}>Política de Cookies</Link>.
        </CookieConsent>
        {/* --- FIM DO COMPONENTE COOKIECONSENT --- */}
      </div>
    </Router>
  );
}

export default App;