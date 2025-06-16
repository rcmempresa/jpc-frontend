import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, Users, Award, Send, Upload, User, Mail, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Importar motion e AnimatePresence
import { useInView } from 'react-intersection-observer'; // Importar useInView

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    jobId: 0, // Valor inicial para jobId
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  // Lida com a mudança do input de ficheiro (CV)
  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const maxSize = 10 * 1024 * 1024; // 10MB (Ajuste para corresponder ao backend se necessário)
      if (file.size > maxSize) {
        setCvError(`O ficheiro CV é demasiado grande. O tamanho máximo permitido é ${maxSize / (1024 * 1024)}MB.`);
        setCvFile(null);
        e.target.value = ''; // Limpa o input para permitir uma nova seleção
      } else if (file.type !== 'application/pdf') {
        setCvError('Apenas ficheiros PDF são permitidos.');
        setCvFile(null);
        e.target.value = '';
      } else {
        setCvError(null); // Limpa qualquer erro anterior
        setCvFile(file);
      }
    } else {
      setCvError(null);
      setCvFile(null);
    }
  };

  // Dados das vagas de emprego (Mantidos como estavam)
  const jobs = [
    {
      id: 1,
      title: 'Operador de Corte de Betão',
      department: 'Operações',
      location: 'Madeira, Funchal',
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
      location: 'Madeira, Funchal',
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
      location: 'Madeira, Funchal',
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

  // Dados dos benefícios da empresa (Mantidos como estavam)
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
    // Garantir que a rolagem da página é desativada quando o modal abre
    document.body.style.overflow = 'hidden';
  };

  // Função para fechar o modal e reativar a rolagem
  const closeApplicationModal = () => {
    setSelectedJob(null);
    document.body.style.overflow = 'auto';
    setStatus(null); // Limpa o status de envio ao fechar o modal
    setCvFile(null); // Limpa o ficheiro CV selecionado
    setCvError(null); // Limpa o erro do CV
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      message: '',
      jobId: 0,
    });
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cvError) {
      alert(cvError);
      return;
    }
    if (!cvFile) {
        setStatus('❌ Por favor, anexe o seu CV.');
        return;
    }

    const formData = new FormData();
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    formData.append('message', applicationData.message);
    formData.append('jobId', applicationData.jobId.toString());

    if (cvFile) {
      formData.append('cv', cvFile);
    }

    console.log('Conteúdo do FormData ANTES do envio:');
    for (let pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]);
    }
    
    setStatus('Enviando...');

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/candidatura/enviar`, {
        method: 'POST',
        body: formData,
      });

      console.log('Resposta do Backend (objeto):', response); 

      if (response.ok) {
        setStatus('✅ Sua mensagem foi enviada com sucesso! Entraremos em contacto o mais breve possível.');
        // Limpar o formulário após o sucesso
        setApplicationData({ name: '', email: '', phone: '', message: '', jobId: 0 });
        setCvFile(null);
        // Não fechar o modal imediatamente para o usuário ver a mensagem de sucesso
      } else {
        const errorData = await response.json();
        console.error('Erro na resposta do backend:', errorData);
        setStatus(`❌ Ocorreu um erro ao enviar a mensagem: ${errorData.message || 'Erro desconhecido.'}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setStatus('❌ Não foi possível conectar ao servidor. Tente novamente mais tarde.');
    }
  };

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

  // --- Hooks para cada seção que queremos animar (usando useInView) ---
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: jobsRef, inView: jobsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Junte-se à Nossa <span className="text-blue-300">Equipa</span>
            </motion.h1>
            <motion.p variants={itemFadeIn} className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Construa a sua carreira connosco. Oferecemos oportunidades de desenvolvimento em ambiente profissional.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideInRight} className="text-center mb-12">
            <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Porquê Trabalhar Connosco?
            </motion.h2>
            <motion.p variants={itemFadeIn} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um ambiente de trabalho estimulante com excelentes oportunidades de crescimento.
            </motion.p>
          </motion.div>
          <motion.div variants={slideInLeft} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemFadeIn} // Cada benefício entra com um fade-in
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

      {/* Jobs Section */}
      <motion.section
        ref={jobsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 lg:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideInLeft} className="text-center mb-12">
            <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vagas Disponíveis
            </motion.h2>
            <motion.p variants={itemFadeIn} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore as nossas oportunidades de carreira e candidate-se às posições que mais se adequam ao seu perfil.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={index % 2 === 0 ? slideInRight : slideInLeft} // Alterna animação esquerda/direita para os cartões
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3 variants={itemFadeIn} className="text-2xl font-bold text-gray-900 mb-2">{job.title}</motion.h3>
                    <motion.div variants={itemFadeIn} className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </motion.div>
                  </div>
                  <motion.div variants={itemFadeIn}>
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </motion.div>
                </div>

                <motion.div variants={itemFadeIn} className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Experiência: {job.experience}</span>
                  </div>
                </motion.div>

                <motion.p variants={itemFadeIn} className="text-gray-700 mb-6">{job.description}</motion.p>

                <div className="space-y-4">
                  <motion.div variants={itemFadeIn}>
                    <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <motion.li key={index} variants={itemFadeIn} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {req}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.button
                    onClick={() => handleJobApplication(job.id)}
                    variants={itemFadeIn} // O botão também tem um fade-in
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Candidatar-me
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalContentStagger} // Aplica a animação escalonada ao conteúdo do modal
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <motion.h2 variants={formFieldItem} className="text-2xl font-bold text-gray-900">
                    Candidatura - {jobs.find(j => j.id === selectedJob)?.title}
                  </motion.h2>
                  <motion.button
                    onClick={closeApplicationModal}
                    variants={formFieldItem}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none" // Adicionei 'text-3xl leading-none' para o 'x'
                  >
                    &times;
                  </motion.button>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  <motion.div variants={formFieldItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </motion.div>

                  <motion.div variants={formFieldItem}>
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
                  </motion.div>

                  <motion.div variants={formFieldItem}>
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
                  </motion.div>

                  <motion.div variants={formFieldItem} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Anexar CV (PDF, máx. 10MB)</p>
                    <input
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      id="cv-upload"
                      onChange={handleCvChange}
                    />
                    <label
                      htmlFor="cv-upload"
                      className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                    >
                      {cvFile ? cvFile.name : 'Escolher Ficheiro'}
                    </label>
                    {cvError && (
                      <p className="text-red-500 text-sm mt-2">{cvError}</p>
                    )}
                  </motion.div>

                  <motion.div variants={formFieldItem} className="flex gap-4">
                    <button
                      type="button"
                      onClick={closeApplicationModal}
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
                  </motion.div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;