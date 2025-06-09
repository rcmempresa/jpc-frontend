import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Award, Send, Upload, User, Mail, Phone, FileText } from 'lucide-react';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    jobId: 0,
  });

  const jobs = [
    {
      id: 1,
      title: 'Operador de Corte de Betão',
      department: 'Operações',
      location: 'Lisboa',
      type: 'Tempo Inteiro',
      experience: '2-5 anos',
      description: 'Procuramos operador experiente para trabalhos de corte de betão com equipamentos profissionais.',
      requirements: [
        'Experiência mínima de 2 anos em corte de betão',
        'Conhecimento de equipamentos diamantados',
        'Carta de condução categoria B',
        'Disponibilidade para deslocações',
        'Formação em segurança no trabalho',
      ],
      responsibilities: [
        'Operar equipamentos de corte de betão',
        'Preparar e manter ferramentas e equipamentos',
        'Seguir protocolos de segurança rigorosamente',
        'Colaborar com a equipa técnica',
        'Reportar progresso e eventuais problemas',
      ],
      benefits: [
        'Salário competitivo',
        'Subsídio de alimentação',
        'Seguro de saúde',
        'Formação contínua',
        'Oportunidades de progressão',
      ],
    },
    {
      id: 2,
      title: 'Técnico de Furação',
      department: 'Operações',
      location: 'Porto',
      type: 'Tempo Inteiro',
      experience: '3+ anos',
      description: 'Técnico especializado em furação de precisão para instalações técnicas e ancoragens.',
      requirements: [
        'Experiência em furação de betão',
        'Conhecimento de sistemas de aspiração',
        'Certificação de segurança',
        'Capacidade física adequada',
        'Flexibilidade de horários',
      ],
      responsibilities: [
        'Executar furações de alta precisão',
        'Manter equipamentos em perfeito estado',
        'Garantir cumprimento de prazos',
        'Coordenar com outros técnicos',
        'Documentar trabalhos realizados',
      ],
      benefits: [
        'Remuneração atrativa',
        'Prémios de produtividade',
        'Equipamento de proteção fornecido',
        'Formação especializada',
        'Ambiente de trabalho seguro',
      ],
    },
    {
      id: 3,
      title: 'Coordenador de Obra',
      department: 'Gestão',
      location: 'Lisboa',
      type: 'Tempo Inteiro',
      experience: '5+ anos',
      description: 'Coordenador experiente para gestão e supervisão de obras de corte e furação de betão.',
      requirements: [
        'Formação superior em Engenharia Civil',
        'Experiência em coordenação de obras',
        'Conhecimento de legislação de segurança',
        'Capacidades de liderança',
        'Excelente comunicação',
      ],
      responsibilities: [
        'Planear e coordenar trabalhos',
        'Supervisionar equipas técnicas',
        'Garantir cumprimento de prazos',
        'Liaison com clientes',
        'Controlo de qualidade',
      ],
      benefits: [
        'Salário de acordo com experiência',
        'Carro da empresa',
        'Telemóvel empresarial',
        'Plano de saúde premium',
        'Desenvolvimento profissional',
      ],
    },
    {
      id: 4,
      title: 'Comercial Júnior',
      department: 'Vendas',
      location: 'Lisboa',
      type: 'Tempo Inteiro',
      experience: '1-3 anos',
      description: 'Profissional de vendas para desenvolvimento de negócio na área da construção.',
      requirements: [
        'Formação superior ou experiência equivalente',
        'Interesse na área da construção',
        'Capacidades comerciais',
        'Carta de condução',
        'Facilidade de relacionamento',
      ],
      responsibilities: [
        'Prospeção de novos clientes',
        'Elaboração de propostas comerciais',
        'Acompanhamento de clientes',
        'Participação em feiras e eventos',
        'Reporting de vendas',
      ],
      benefits: [
        'Salário base + comissões',
        'Ajudas de custo',
        'Formação comercial',
        'Oportunidades de crescimento',
        'Ambiente jovem e dinâmico',
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Desenvolvimento Profissional',
      description: 'Formação contínua e oportunidades de crescimento na carreira.',
    },
    {
      icon: Users,
      title: 'Equipa Unida',
      description: 'Ambiente de trabalho colaborativo e espírito de equipa.',
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Horários flexíveis e respeito pelo tempo pessoal.',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleJobApplication = (jobId: number) => {
    setSelectedJob(jobId);
    setApplicationData({ ...applicationData, jobId });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application data to your backend
    alert('Candidatura enviada com sucesso! Entraremos em contacto consigo brevemente.');
    setSelectedJob(null);
    setApplicationData({ name: '', email: '', phone: '', message: '', jobId: 0 });
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Junte-se à Nossa <span className="text-blue-300">Equipa</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Construa a sua carreira connosco. Oferecemos oportunidades de desenvolvimento em ambiente profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Porquê Trabalhar Connosco?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um ambiente de trabalho estimulante com excelentes oportunidades de crescimento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Jobs Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vagas Disponíveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore as nossas oportunidades de carreira e candidate-se às posições que mais se adequam ao seu perfil.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Experiência: {job.experience}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{job.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleJobApplication(job.id)}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Candidatar-me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Candidatura - {jobs.find(j => j.id === selectedJob)?.title}
                </h2>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={applicationData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="O seu nome completo"
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
                      value={applicationData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
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
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+351 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="inline h-4 w-4 mr-1" />
                    Carta de Motivação
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={applicationData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva brevemente a sua motivação e experiência relevante..."
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Anexar CV (PDF, máx. 5MB)</p>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                  >
                    Escolher Ficheiro
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Candidatura
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;