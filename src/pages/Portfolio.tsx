import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Eye,
  Calendar,
  MapPin,
  Video,
  Loader,
  Shield,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Importar motion e AnimatePresence
import { useInView } from 'react-intersection-observer'; // Importar useInView

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);

  // Removido o useEffect para setIsVisible, já que useInView gerencia as animações por seção.

  const projects = [
    {
      id: 7,
      title: 'Antiga Escola Cristóvão Colombo',
      category: 'education',
      location: 'Avenida do Infante, Funchal',
      date: '2025',
      description: 'Demolição da cobertura, demolição de escadaria em betão armado no interior do piso 0 ao último piso e abertura de negativos para implantação do novo elevador, incluindo diversos trabalhos de carotagem e corte de pavimentos.',
      images: [
        '/cristovao_colombo_1.jpeg', // Caminho consistente
        '/cristovao_colombo_2.jpeg',
        '/cristovao_colombo_3.jpeg',
        '/cristovao_colombo_4.jpeg',
        '/cristovao_colombo_5.jpeg',
        '/cristovao_colombo_6.jpeg',
        '/cristovao_colombo_7.jpeg',
        '/cristovao_colombo_8.jpeg',
        '/cristovao_colombo_9.jpeg',
      ],
      videos: [],
      type: 'Demolição, Carotagem e Corte',
      duration: 'A definir',
      details: {
        'Serviços': 'Demolição de cobertura e escadaria, abertura de vãos para elevador, carotagem, corte de pavimentos', // Chaves padronizadas
        'Desafios': 'Trabalho em estrutura existente, precisão na abertura de vãos',
      },
    },
    {
      id: 8,
      title: 'Choupana Hills',
      category: 'hotel',
      location: 'Funchal, Madeira',
      date: '2025',
      description: 'Demolição de betão armado da torre do antigo elevador panorâmico (12m exterior, 6m interior SPA), demolição de duas chaminés (8m e 6m), demolição de diversos compartimentos do SPA e Receção e abertura de negativos para novos elevadores, incluindo corte e furação.',
      images: [
        '/choupana_hills_3.jpeg',
        '/choupana_hills_2.jpeg',
        '/choupana_hills_1.jpeg',
        '/choupana_hills_4.jpeg',
        '/choupana_hills_5.jpeg',
        '/choupana_hills_6.jpeg'
      ],
      videos: [
        { type: 'external', url: 'choupana_hills_video_1.mp4' },
        { type: 'external', url: 'choupana_hills_video_2.mp4' },
        { type: 'external', url: 'choupana_hills_video_3.mp4' },
        { type: 'external', url: 'choupana_hills_video_4.mp4' },
        { type: 'external', url: 'choupana_hills_video_5.mp4' },
      ],
      type: 'Demolição, Corte e Furação',
      duration: 'A definir',
      details: {
        'Demolições Realizadas': 'Torre de elevador panorâmico, chaminés, compartimentos do SPA e Receção',
        'Trabalhos de Corte e Furação': 'Abertura de vãos para novos elevadores',
        'Complexidade do Projeto': 'Trabalho em estrutura hoteleira em ambiente delicado',
      },
    },
    {
      id: 9,
      title: 'Porto do Funchal',
      category: 'infrastructure',
      location: 'Funchal, Madeira',
      date: '2025',
      description: 'Furação para substituição de parafusos de fixação dos cabeços de atracação de navios.',
      images: [
        '/porto_funchal_1.png',
        '/porto_funchal_2.png',
        '/porto_funchal_3.png',
        '/porto_funchal_4.png',
      ],
      videos: [
         { type: 'youtube', url: 'https://www.youtube.com/embed/qDpRDDqWFNE' },
      ],
      type: 'Furação Profissional',
      duration: 'A definir',
      details: {
        'Objetivo Principal': 'Substituição e reforço de fixações',
        'Aplicação Específica': 'Cabeços de atracação de navios',
        'Ambiente de Trabalho': 'Infraestrutura portuária',
      },
    },
    {
      id: 10,
      title: 'Padaria Sésamo (Centro de Produção)',
      category: 'commercial',
      location: 'Santo António, Funchal',
      date: '2024',
      description: 'Furação para instalação de sistemas especiais, incluindo Ar condicionado, águas e Esgotos e eletricidade nas novas instalações do centro de produção.',
      images: [
        '/padaria_sesamo_1.jpg',
        '/padaria_sesamo_2.jpg',
      ],
      videos: [],
      type: 'Furação para Instalações',
      duration: 'A definir',
      details: {
        'Sistemas Envolvidos': 'AVAC, Águas, Esgotos, Eletricidade',
        'Tipo de Edifício': 'Centro de produção industrial/comercial',
      },
    },
    {
      id: 11,
      title: 'Edifício na Rua João Tavira (Antigas instalações do Banif)',
      category: 'office',
      location: 'Rua João Tavira, Funchal',
      date: '2024',
      description: 'Execução de trabalhos de furação e carotagem em edifício de escritórios.',
      images: [
        '/instalacoes_banif_1.jpeg',
        '/instalacoes_banif_2.jpeg',
      ],
      videos: [],
      type: 'Furação e Carotagem',
      duration: 'A definir',
      details: {
        'Serviços Realizados': 'Furação e carotagem diversas',
        'Localização do Projeto': 'Edifício de escritórios',
      },
    },
    {
      id: 12,
      title: 'Hospital da Luz',
      category: 'healthcare',
      location: 'Rua João Tavira, Funchal',
      date: '2024',
      description: 'Execução de trabalhos de furação e carotagem em ambiente hospitalar.',
      images: [
        '/hospital_da_luz_3.jpg',
        '/hospital_da_luz_2.jpg',
        '/hospital_da_luz_1.jpg',
      ],
      videos: [],
      type: 'Furação e Carotagem',
      duration: 'A definir',
      details: {
        'Serviços Realizados': 'Furação e carotagem diversas',
        'Ambiente de Operação': 'Hospitalar (exige cuidado e precisão)',
      },
    },
    {
      id: 13,
      title: 'Tribunal da Ponta do Sol',
      category: 'government',
      location: 'Ponta do Sol, Madeira',
      date: '2024',
      description: 'Execução de trabalhos de furação e carotagem nas instalações do Tribunal da Ponta do Sol.',
      images: [
        '/tribunal_ponta_do_sol_1.jpg',
        '/tribunal_ponta_do_sol_2.jpg',
      ],
      videos: [],
      type: 'Furação e Carotagem',
      duration: 'A definir',
      details: {
        'Serviços Executados': 'Furação e carotagem diversas',
        'Tipo de Edifício': 'Público/governamental',
      },
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'commercial', name: 'Padarias' },
    { id: 'healthcare', name: 'Hospitais' },
    { id: 'office', name: 'Escritórios' },
    { id: 'infrastructure', name: 'Porto do Funchal' },
    { id: 'education', name: 'Escolas' },
    { id: 'hotel', name: 'Hotelaria' },
    { id: 'government', name: 'Governamental' },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

  const openModal = (id) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto'; // Alterado para 'auto' para melhor compatibilidade
  };

  // Modificado para aceitar um objeto de mídia estruturado
  const openMediaModal = (mediaItem) => {
    setIsLoadingMedia(true);
    setSelectedMedia(mediaItem);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
    setIsLoadingMedia(false); // Reinicia o estado de carregamento ao fechar o modal de mídia
  };

  const handleMediaLoad = () => {
    setIsLoadingMedia(false);
  };

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

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

    // Hooks para cada seção
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: categoriesRef, inView: categoriesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
            Obras <span className="text-blue-300">Recentes</span>
          </motion.h1>
          <motion.p variants={itemFadeIn} className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Conheça alguns dos projetos que realizámos com sucesso em diversos setores na Ilha da Madeira.
          </motion.p>
        </div>
      </motion.section>

      {/* Filtro de Categorias */}
      <motion.section
        ref={categoriesRef}
        initial="hidden"
        animate={categoriesInView ? "visible" : "hidden"} // Usar animate para re-triggerar se sair e entrar de novo
        variants={slideInRight}
        className="py-8 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              variants={itemFadeIn}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Projetos */}
      <motion.section
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"} // Usar animate
        variants={slideInLeft} // A seção inteira pode deslizar, e os itens dentro dela animam.
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              onClick={() => openModal(proj.id)}
              variants={itemFadeIn} // Cada item de projeto tem um fade-in simples
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
            >
              <motion.img
                src={proj.images[0]}
                alt={`Primeira imagem do projeto: ${proj.title}`}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <motion.h3 variants={itemFadeIn} className="text-lg font-bold text-gray-800">{proj.title}</motion.h3>
                <motion.p variants={itemFadeIn} className="text-gray-500 flex items-center gap-2 mt-1">
                  <MapPin size={16} className="inline-block" /> {proj.location}
                </motion.p>
                <motion.p variants={itemFadeIn} className="text-sm text-gray-400 flex items-center gap-2">
                  <Calendar size={14} className="inline-block" /> {proj.date}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal de Projeto */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl max-w-3xl w-full overflow-y-auto max-h-[90vh] relative shadow-lg"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors z-10"
                aria-label="Fechar detalhes do projeto"
              >
                <X size={20} />
              </button>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">{selectedProjectData.title}</h2>
                <p className="text-gray-600 flex items-center gap-2 mb-2">
                  <MapPin size={16} /> {selectedProjectData.location}
                </p>
                <p className="text-gray-600 flex items-center gap-2 mb-4">
                  <Calendar size={16} /> {selectedProjectData.date}
                </p>
                <p className="mb-4 text-gray-700">{selectedProjectData.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {selectedProjectData.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openMediaModal({ type: 'image', src: img })} // Passa objeto estruturado
                      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-sm"
                    >
                      <motion.img
                        src={img}
                        alt={`Imagem ${idx + 1} do projeto ${selectedProjectData.title}`}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye size={28} color="white" />
                      </div>
                    </div>
                  ))}
                  {selectedProjectData.videos.map((vid, idx) => (
                    <div
                      key={idx}
                      onClick={() => openMediaModal(vid)} // Passa objeto de vídeo estruturado
                      className="relative group cursor-pointer bg-blue-800 rounded-lg flex flex-col items-center justify-center w-full h-40 text-white shadow-sm hover:bg-blue-900 transition-colors"
                    >
                      <Video size={40} color="white" />
                      <span className="mt-2 text-sm font-semibold">Ver Vídeo</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Detalhes do Projeto:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {Object.entries(selectedProjectData.details).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-medium">{key}:</span> {value} {/* Chave já formatada */}
                      </li>
                    ))}
                    <li><span className="font-medium">Tipo de Serviço:</span> {selectedProjectData.type}</li>
                    <li><span className="font-medium">Duração:</span> {selectedProjectData.duration}</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Mídia (Imagem ou Vídeo) */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMediaModal}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 cursor-pointer"
          >
            {isLoadingMedia && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <Loader className="animate-spin h-10 w-10" />
                <p className="mt-2">A carregar...</p>
              </div>
            )}
            {selectedMedia.type === 'image' ? (
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedMedia.src}
                alt="Mídia do projeto"
                className={`max-w-full max-h-[80vh] rounded shadow-lg ${isLoadingMedia ? 'hidden' : 'block'}`}
                onLoad={handleMediaLoad}
              />
            ) : selectedMedia.type === 'youtube' ? (
              <motion.iframe
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedMedia.url} // Usa 'url' para vídeos estruturados
                title="Vídeo do Projeto"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`w-full max-w-3xl h-[450px] rounded shadow-lg ${isLoadingMedia ? 'hidden' : 'block'}`}
                onLoad={handleMediaLoad}
              ></motion.iframe>
            ) : ( // Trata outros tipos de vídeo, como 'external'
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg text-center shadow-lg max-w-md mx-auto"
              >
                <p className="text-gray-800 text-lg mb-4">
                  Este vídeo não pode ser pré-visualizado diretamente aqui.
                </p>
                <a
                  href={selectedMedia.url || selectedMedia.src} // Prioriza 'url', fallback para 'src'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Play size={20} className="mr-2" /> Abrir Vídeo
                </a>
                <p className="text-sm text-gray-500 mt-4">Será aberto numa nova aba.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

       {/* Final CTA */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={slideInLeft}
        className="py-12 bg-blue-900 text-white text-center"
      >
        <motion.h2 variants={itemFadeIn} className="text-2xl md:text-3xl font-bold mb-6">
          Tem um projeto em mente?
        </motion.h2>
        <motion.div variants={itemFadeIn}>
          <Link
            to="/contacto"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Peça um Orçamento Agora
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        ref={valuesRef}
        initial="hidden"
        animate={valuesInView ? "visible" : "hidden"}
        variants={slideInRight} // Mudei para slideInRight para variar
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Os Nossos <span className="text-blue-600">Valores e Compromisso</span>
          </motion.h2>
          <motion.p variants={itemFadeIn} className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Construímos relações duradouras baseadas na confiança, integridade e dedicação.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agora cada item de valor terá seu próprio itemFadeIn */}
            <motion.div variants={itemFadeIn} className="bg-gray-50 p-6 rounded-lg shadow-md border-b-4 border-blue-600 hover:shadow-lg transition-shadow">
                <CheckCircle size={32} className="text-blue-600 mb-3 inline-block" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Integridade</h3>
                <p className="text-gray-700">
                  Agimos com total transparência e honestidade em todas as nossas operações e interações.
                </p>
            </motion.div>
            <motion.div variants={itemFadeIn} className="bg-gray-50 p-6 rounded-lg shadow-md border-b-4 border-blue-600 hover:shadow-lg transition-shadow">
                <Shield size={32} className="text-blue-600 mb-3 inline-block" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Segurança</h3>
                <p className="text-gray-700">
                  A segurança da nossa equipa e dos locais de trabalho é a nossa prioridade máxima em cada projeto.
                </p>
            </motion.div>
            <motion.div variants={itemFadeIn} className="bg-gray-50 p-6 rounded-lg shadow-md border-b-4 border-blue-600 hover:shadow-lg transition-shadow">
                <Sparkles size={32} className="text-blue-600 mb-3 inline-block" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Inovação</h3>
                <p className="text-gray-700">
                  Investimos continuamente em novas tecnologias e métodos para oferecer as melhores soluções.
                </p>
            </motion.div>
          </div>
          <motion.div variants={itemFadeIn}>
            <Link
              to="/servicos"
              className="mt-12 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Saber +
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;