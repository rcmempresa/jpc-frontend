import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion'; // Importar motion
import { useInView } from 'react-intersection-observer'; // Importar useInView

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('Enviando...');

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacto/enviar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Sua mensagem foi enviada com sucesso! Entraremos em contacto o mais breve possível.');
      } else {
        const errorData = await response.json(); // Tenta ler a mensagem de erro do backend
        setStatus(`❌ Ocorreu um erro ao enviar a mensagem: ${errorData.message || 'Erro desconhecido.'}`);
      }

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Limpar formulário mesmo em caso de erro para nova tentativa
    } catch (error) {
      console.error('Erro na requisição:', error);
      setStatus('❌ Não foi possível conectar ao servidor. Tente novamente mais tarde.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+351 913 823 499'],
      action: 'tel:+351913823499',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['geral@jpcrodrigues.pt'],
      action: 'mailto:geral@jpcrodrigues.pt',
    },
    {
      icon: MapPin,
      title: 'Morada',
      details: ['Estrada da vitória nº63, Funchal, Portugal'],
      action: 'https://maps.app.goo.gl/YourGoogleMapsLinkHere', // Por favor, coloque um link real do Google Maps
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Seg-Sex: 8h00-18h00', 'Sáb: 8h00-13h00', 'Dom: Fechado'],
      action: null,
    },
  ];

  const subjects = [
    'Pedido de Orçamento',
    'Informações sobre Serviços',
    'Agendamento de Visita',
    'Aluguer de Equipamentos',
    'Suporte Técnico',
    'Parceria Comercial',
    'Outro',
  ];

  // --- Variantes de animação ---
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

  // --- Hooks para cada seção que queremos animar ---
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: formSectionRef, inView: formSectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: quickContactRef, inView: quickContactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: responseTimeRef, inView: responseTimeInView } = useInView({ triggerOnce: true, threshold: 0.1 });


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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 variants={itemFadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entre em <span className="text-blue-300">Contacto</span>
            </motion.h1>
            <motion.p variants={itemFadeIn} className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Entre em contacto connosco para qualquer questão ou pedido de orçamento.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        ref={contactInfoRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideInRight} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={cardRiseUp} // Animação de cada cartão subindo
                className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {info.action && detailIndex === 0 ? (
                        <a
                          href={info.action}
                          className="hover:text-blue-600 transition-colors"
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              ref={formSectionRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={slideInLeft}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <motion.h2 variants={itemFadeIn} className="text-3xl font-bold text-gray-900 mb-6">
                  Envie-nos uma Mensagem
                </motion.h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemFadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="O seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemFadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+351 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  <motion.div variants={itemFadeIn}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-1" />
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Descreva o seu projeto ou dúvida em detalhe..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    variants={itemFadeIn}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Enviar Mensagem
                  </motion.button>
                  {/* Status de envio */}
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

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <motion.div
                ref={mapRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={slideInRight}
                className="bg-gray-200 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-12 h-64">
                  <iframe
                    title="Localização da JPC Rodrigues - Funchal"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.8757049405626!2d-16.92097032349079!3d32.65089337365691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xcd62594a1b0660f%3A0xc34a64d1f56a31c!2sEstrada%20da%20Vit%C3%B3ria%2063%2C%209000-096%20Funchal!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt" // Exemplo de um link real para o Funchal
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                ref={quickContactRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={slideInRight}
                className="bg-blue-600 p-8 rounded-xl text-white shadow-lg"
              >
                <motion.h3 variants={itemFadeIn} className="text-2xl font-bold mb-4">Contacto Rápido</motion.h3>
                <motion.p variants={itemFadeIn} className="mb-6 text-blue-100">
                  Para situações urgentes ou pedidos de orçamento expresso, contacte-nos diretamente:
                </motion.p>
                <motion.div variants={slideInLeft} className="space-y-4"> {/* Animações para os links de contacto */}
                  <a
                    href="tel:+351913823499"
                    className="flex items-center space-x-3 bg-blue-700 p-4 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Chamada Direta</p>
                      <p className="text-blue-200">+351 913 823 499</p>
                    </div>
                  </a>
                  <a
                    href="mailto:geral@jpcrodrigues.pt"
                    className="flex items-center space-x-3 bg-blue-700 p-4 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Email Direto</p>
                      <p className="text-blue-200">geral@jpcrodrigues.pt</p>
                    </div>
                  </a>
                </motion.div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                ref={responseTimeRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardRiseUp}
                className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-800">Tempo de Resposta</h4>
                </div>
                <p className="text-green-700">
                  Respondemos a todas as mensagens num prazo máximo de <strong>24 horas</strong> durante os dias úteis.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;