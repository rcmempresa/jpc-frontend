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

  const [status, setStatus] = useState<string | null>(null); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    // Agora inclui a validação do subject
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }

    setStatus('Enviando...');

    try {
      const response = await fetch('http://localhost:3000/api/contacto/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // subject já incluído no formData
      });

      if (response.ok) {
        setStatus('✅ Sua mensagem foi enviada com sucesso! Entraremos em contacto o mais breve possível.');
      } else {
        setStatus('❌ Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
      }

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus('❌ Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
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
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Enviar Mensagem
                  </button>
                  {/* Status de envio */}
                  {status && (
                    <div className={`text-center mt-4 ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
                    {status}
                  </div>            
                  )}
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 h-64">
                  <iframe
                    title="Localização da JPC Rodrigues - Funchal"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.1084096805675!2d-16.96439778325571!3d32.6509918727009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605f752e138c8b%3A0x6a9ee7992313a68d!2sEstr.%20da%20Vit%C3%B3ria%2C%20Funchal!5e0!3m2!1spt-PT!2spt!4v1686322929000!5m2!1spt-PT!2spt"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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