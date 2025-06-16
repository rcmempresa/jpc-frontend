import React, { useState } from 'react';
import { PenTool as Tool, Calendar, MapPin, Phone, Mail, Send, User, MessageSquare, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MachineRental = () => {
  const [rentalRequest, setRentalRequest] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    startDate: '',
    endDate: '',
    location: '',
    message: '',
    machineId: 1, // Definido diretamente para a única máquina
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Novo estado para controlar o modal

  const machine = { // Apenas uma máquina disponível
    id: 1,
    name: 'Geradora Trifásica SDMO R44C3-65 A',
    category: 'Energia',
    description: 'Gerador profissional e robusto, ideal para alimentação de equipamentos em projetos de média e grande dimensão, oferecendo energia trifásica fiável e contínua.',
    specifications: [
      'Potência: 40 kVA / 32 kW',
      'Combustível: Diesel',
      'Tensão: 400V Trifásica / 230V Monofásica',
      'Capacidade do Tanque: 100 L',
      'Autonomia: Aprox. 12h (a 75% carga)',
      'Dimensões (CxLxA): 220 x 95 x 150 cm',
      'Peso: 1312 kg',
      'Nível de Ruído: 68 dB(A) a 7m',
    ],
    dailyRate: 'SOB CONSULTA',
    weeklyRate: 'SOB CONSULTA',
    image: '/geradora_trifacica.png',
    features: [
      'Arranque elétrico',
      'Quadro de controlo digital',
      'Proteção contra sobrecarga',
      'Baixas emissões',
      'Manutenção simplificada',
      'Rodas para transporte (opcional)',
    ],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRentalRequest({
      ...rentalRequest,
      [e.target.name]: e.target.value,
    });
  };

  const openRentalModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Desativar scroll
    setRentalRequest(prev => ({ ...prev, machineId: machine.id })); // Garante que o ID da máquina está correto
  };

  const closeRentalModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Reativar scroll
    setStatus(null); // Limpar o status ao fechar
    setRentalRequest({ // Limpar o formulário
      name: '',
      email: '',
      phone: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      message: '',
      machineId: machine.id, // Manter o ID da máquina
    });
  };

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!rentalRequest.name || !rentalRequest.email || !rentalRequest.phone || !rentalRequest.startDate || !rentalRequest.endDate || !rentalRequest.location) {
      setStatus('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('Enviando...');

    try {
      // --- ESTA É A ALTERAÇÃO CHAVE ---
      // Use o URL completo do seu endpoint de backend
      const response = await fetch('http://localhost:3000/api/rentals/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Se precisar enviar cookies ou credenciais, garanta que o 'credentials' no backend está configurado e use:
          // 'credentials': 'include'
        },
        body: JSON.stringify(rentalRequest),
      });

      // Parse a resposta JSON do backend
      const data = await response.json();

      if (response.ok && data.success) { // Verifica se a requisição foi bem-sucedida (status 2xx) E o backend retornou success: true
        setStatus('✅ Pedido de aluguer enviado com sucesso! Entraremos em contacto consigo brevemente.');
        // O formulário é limpo ao fechar o modal, então não precisamos limpar aqui
      } else {
        // Se a requisição não foi OK ou o backend retornou success: false (ex: erro de validação)
        setStatus(`❌ Ocorreu um erro: ${data.message || 'Tente novamente mais tarde.'}`);
      }

    } catch (error) {
      console.error('Erro na requisição:', error);
      // Erro de rede (backend não está a correr, URL incorreto, etc.)
      setStatus('❌ Não foi possível conectar ao servidor. Verifique se o backend está a correr. Tente novamente mais tarde.');
    }
  };

  // --- Variantes de animação (nenhuma alteração aqui) ---
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardRiseUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variante para o modal e seu conteúdo
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const modalContentStagger = {
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const formFieldItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // --- Hooks para cada seção que queremos animar (nenhuma alteração aqui) ---
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: machineDetailRef, inView: machineDetailInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactSectionRef, inView: contactSectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={slideInLeft}
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={itemFadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aluguer de <span className="text-blue-300">Geradora Trifásica</span>
          </motion.h1>
          <motion.p variants={itemFadeIn} className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Disponibilizamos a <strong>SDMO R44C3-65 A</strong> uma solução robusta e fiável para as suas necessidades de energia.
          </motion.p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideInRight} className="text-center mb-12">
            <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens do Nosso Aluguer
            </motion.h2>
            <motion.p variants={itemFadeIn} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos mais do que simples aluguer de equipamentos - é uma solução completa.
            </motion.p>
          </motion.div>
          <motion.div variants={slideInLeft} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Tool,
                title: 'Equipamento Certificado',
                description: 'Geradora profissional mantida e calibrada regularmente para máxima performance.',
              },
              {
                icon: Clock,
                title: 'Suporte 24/7',
                description: 'Assistência técnica disponível durante todo o período de aluguer.',
              },
              {
                icon: Phone,
                title: 'Entrega e Recolha',
                description: 'Serviço de entrega e recolha incluído na região de Lisboa.', // Atualize a região se necessário
              },
              {
                icon: User,
                title: 'Formação Incluída',
                description: 'Briefing técnico sobre o funcionamento e segurança da geradora.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardRiseUp}
                className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Machine Detail Section (Substitui a Machines Grid) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={machineDetailRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardRiseUp} // Anima o cartão da máquina individualmente
            className="bg-white rounded-xl shadow-lg overflow-hidden lg:flex lg:items-center"
          >
            <div className="lg:w-1/2">
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-80 object-cover lg:h-full"
              />
            </div>
            <div className="p-8 lg:w-1/2">
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {machine.category}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{machine.name}</h3>
              <p className="text-gray-700 mb-6 text-lg">{machine.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Especificações Técnicas:</h4>
                  <ul className="text-base text-gray-700 space-y-1">
                    {machine.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Características Principais:</h4>
                  <ul className="text-base text-gray-700 space-y-1">
                    {machine.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6 flex justify-between items-center flex-wrap gap-4">
                <div>
                  <p className="text-base text-gray-600">Preço Diário</p>
                  <p className="text-3xl font-bold text-blue-600">{machine.dailyRate}</p>
                </div>
                <div>
                  <p className="text-base text-gray-600">Preço Semanal</p>
                  <p className="text-2xl font-semibold text-gray-900">{machine.weeklyRate}</p>
                </div>
                <button
                  onClick={openRentalModal}
                  className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center mt-4 sm:mt-0"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Solicitar Aluguer Agora
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rental Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalContentStagger}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <motion.h2 variants={formFieldItem} className="text-2xl font-bold text-gray-900">
                    Pedido de Aluguer - {machine.name}
                  </motion.h2>
                  <motion.button
                    onClick={closeRentalModal}
                    variants={formFieldItem}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                  >
                    &times;
                  </motion.button>
                </div>

                <form onSubmit={handleSubmitRequest} className="space-y-6">
                  <motion.div variants={formFieldItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={rentalRequest.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="O seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={rentalRequest.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={formFieldItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={rentalRequest.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={rentalRequest.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+351 xxx xxx xxx"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={formFieldItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Data de Início *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        required
                        value={rentalRequest.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Data de Fim *
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        required
                        value={rentalRequest.endDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={formFieldItem}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Local da Obra *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={rentalRequest.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Morada completa da obra"
                    />
                  </motion.div>

                  <motion.div variants={formFieldItem}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-1" />
                      Observações
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={rentalRequest.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Informações adicionais sobre o projeto ou necessidades específicas..."
                    />
                  </motion.div>

                  <motion.div variants={formFieldItem} className="flex gap-4">
                    <button
                      type="button"
                      onClick={closeRentalModal}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Pedido
                    </button>
                  </motion.div>
                  {status && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center mt-4 ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}
                    >
                        {status}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <motion.section
        ref={contactSectionRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideInLeft}
        className="py-16 lg:py-24 bg-blue-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de Ajuda ou Mais Informações?
          </motion.h2>
          <motion.p variants={itemFadeIn} className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contacte a nossa equipa para qualquer questão sobre o aluguer da geradora.
          </motion.p>
          <motion.div variants={slideInRight} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar com Especialista
            </a>
            <a
              href="mailto:geral@jpcrodrigues.pt"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Direto
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MachineRental;