import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';  // importação
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
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton /> 
      </div>
    </Router>
  );
}

export default App;
