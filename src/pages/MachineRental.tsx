import React, { useState } from 'react';
import { PenTool as Tool, Calendar, MapPin, Phone, Mail, Send, User, MessageSquare, Clock } from 'lucide-react';

const MachineRental = () => {
  const [selectedMachine, setSelectedMachine] = useState<number | null>(null);
  const [rentalRequest, setRentalRequest] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    startDate: '',
    endDate: '',
    location: '',
    message: '',
    machineId: 0,
  });

  const machines = [
    {
      id: 1,
      name: 'Serra de Corte Wall Saw',
      category: 'Corte',
      description: 'Serra profissional para corte de paredes e estruturas verticais até 75cm de espessura.',
      specifications: [
        'Profundidade de corte: até 75cm',
        'Potência: 15 kW',
        'Peso: 85 kg',
        'Sistema de guias ajustável',
      ],
      dailyRate: '150€',
      weeklyRate: '900€',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Corte húmido', 'Baixa vibração', 'Operação silenciosa', 'Fácil transporte'],
    },
    {
      id: 2,
      name: 'Máquina de Furação Hilti DD 500',
      category: 'Furação',
      description: 'Máquina de furação diamantada para furos de precisão até 500mm de diâmetro.',
      specifications: [
        'Diâmetro máximo: 500mm',
        'Profundidade: até 3m',
        'Potência: 3,9 kW',
        'Sistema de aspiração incluído',
      ],
      dailyRate: '120€',
      weeklyRate: '720€',
      image: 'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Alta precisão', 'Sistema anti-vibração', 'Controlo automático', 'Suporte ajustável'],
    },
    {
      id: 3,
      name: 'Cortadora de Solo Stihl TS 800',
      category: 'Corte',
      description: 'Cortadora portátil para corte de betão, asfalto e materiais abrasivos.',
      specifications: [
        'Profundidade de corte: até 16cm',
        'Disco: 400mm',
        'Potência: 5 kW',
        'Peso: 10,3 kg',
      ],
      dailyRate: '80€',
      weeklyRate: '450€',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Portátil', 'Baixo consumo', 'Arranque fácil', 'Ergonómica'],
    },
    {
      id: 4,
      name: 'Martelo Demolidor Makita HM1812',
      category: 'Demolição',
      description: 'Martelo pneumático profissional para demolição controlada de estruturas.',
      specifications: [
        'Potência de impacto: 68 J',
        'Frequência: 870 bpm',
        'Peso: 28,6 kg',
        'Sistema anti-vibração AVT',
      ],
      dailyRate: '100€',
      weeklyRate: '600€',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Alta potência', 'Baixa vibração', 'Durabilidade', 'Múltiplos acessórios'],
    },
    {
      id: 5,
      name: 'Sistema de Aspiração Dustex',
      category: 'Aspiração',
      description: 'Sistema de aspiração industrial para controlo de poeira durante os trabalhos.',
      specifications: [
        'Caudal: 5.000 l/min',
        'Filtro HEPA',
        'Capacidade: 50L',
        'Auto-limpeza do filtro',
      ],
      dailyRate: '60€',
      weeklyRate: '300€',
      image: 'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Filtro HEPA', 'Auto-limpeza', 'Baixo ruído', 'Mobilidade'],
    },
    {
      id: 6,
      name: 'Gerador 20 kVA',
      category: 'Energia',
      description: 'Gerador profissional para alimentação de equipamentos em locais sem energia elétrica.',
      specifications: [
        'Potência: 20 kVA',
        'Combustível: Diesel',
        'Autonomia: 8h contínuas',
        'Arranque automático',
      ],
      dailyRate: '90€',
      weeklyRate: '500€',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Arranque automático', 'Baixo consumo', 'Silencioso', 'Fiável'],
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos os Equipamentos' },
    { id: 'Corte', name: 'Corte' },
    { id: 'Furação', name: 'Furação' },
    { id: 'Demolição', name: 'Demolição' },
    { id: 'Aspiração', name: 'Aspiração' },
    { id: 'Energia', name: 'Energia' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMachines = selectedCategory === 'all' 
    ? machines 
    : machines.filter(machine => machine.category === selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRentalRequest({
      ...rentalRequest,
      [e.target.name]: e.target.value,
    });
  };

  const handleRentalRequest = (machineId: number) => {
    setSelectedMachine(machineId);
    setRentalRequest({ ...rentalRequest, machineId });
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the rental request to your backend
    alert('Pedido de aluguer enviado com sucesso! Entraremos em contacto consigo brevemente.');
    setSelectedMachine(null);
    setRentalRequest({
      name: '',
      email: '',
      phone: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      message: '',
      machineId: 0,
    });
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Aluguer de <span className="text-blue-300">Máquinas</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Equipamentos profissionais de última geração disponíveis para aluguer com suporte técnico completo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens do Nosso Aluguer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos mais do que simples aluguer de equipamentos - é uma solução completa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Tool,
                title: 'Equipamentos Certificados',
                description: 'Máquinas profissionais mantidas e calibradas regularmente.',
              },
              {
                icon: Clock,
                title: 'Suporte 24/7',
                description: 'Assistência técnica disponível durante todo o período de aluguer.',
              },
              {
                icon: Phone,
                title: 'Entrega e Recolha',
                description: 'Serviço de entrega e recolha incluído na região de Lisboa.',
              },
              {
                icon: User,
                title: 'Formação Incluída',
                description: 'Briefing técnico sobre o funcionamento dos equipamentos.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {machine.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{machine.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{machine.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Especificações:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {machine.specifications.slice(0, 2).map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Características:</h4>
                    <div className="flex flex-wrap gap-2">
                      {machine.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Diária</p>
                        <p className="text-xl font-bold text-blue-600">{machine.dailyRate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Semanal</p>
                        <p className="text-lg font-semibold text-gray-900">{machine.weeklyRate}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRentalRequest(machine.id)}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Solicitar Aluguer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Request Modal */}
      {selectedMachine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Pedido de Aluguer - {machines.find(m => m.id === selectedMachine)?.name}
                </h2>
                <button
                  onClick={() => setSelectedMachine(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmitRequest} className="space-y-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div>
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
                </div>

                <div>
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
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedMachine(null)}
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
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de Ajuda na Escolha?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            A nossa equipa técnica pode ajudá-lo a escolher o equipamento ideal para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar com Especialista
            </a>
            <a
              href="mailto:aluguer@jpcrodrigues.pt"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Direto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineRental;