import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Mensagem enviada com sucesso! Entraremos em contacto consigo brevemente.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+351 210 123 456', '+351 918 765 432'],
      action: 'tel:+351210123456',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@jpcrodrigues.pt', 'comercial@jpcrodrigues.pt'],
      action: 'mailto:info@jpcrodrigues.pt',
    },
    {
      icon: MapPin,
      title: 'Morada',
      details: ['Rua da Construção, 123', '1200-100 Lisboa, Portugal'],
      action: 'https://maps.google.com',
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

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entre em <span className="text-blue-300">Contacto</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Entre em contacto connosco para qualquer questão ou pedido de orçamento.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envie-nos uma Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
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
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-blue-900 font-semibold">Localização da JPC Rodrigues</p>
                    <p className="text-blue-700">Lisboa, Portugal</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Contacto Rápido</h3>
                <p className="mb-6 text-blue-100">
                  Para situações urgentes ou pedidos de orçamento expresso, contacte-nos diretamente:
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+351210123456"
                    className="flex items-center space-x-3 bg-blue-700 p-4 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Chamada Direta</p>
                      <p className="text-blue-200">+351 210 123 456</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@jpcrodrigues.pt"
                    className="flex items-center space-x-3 bg-blue-700 p-4 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Email Direto</p>
                      <p className="text-blue-200">info@jpcrodrigues.pt</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-800">Tempo de Resposta</h4>
                </div>
                <p className="text-green-700">
                  Respondemos a todas as mensagens num prazo máximo de <strong>24 horas</strong> durante os dias úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;