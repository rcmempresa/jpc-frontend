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

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);

  const projects = [
    {
      id: 7,
      title: 'Antiga Escola Cristóvão Colombo',
      category: 'education',
      location: 'Avenida do Infante, Funchal',
      date: '2025', // Ajustado para ano atual
      description: 'Demolição da cobertura, demolição de escadaria em betão armado no interior do piso 0 ao último piso e abertura de negativos para implantação do novo elevador, incluindo diversos trabalhos de carotagem e corte de pavimentos.',
      images: [
        'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Demolição, Carotagem e Corte',
      duration: 'A definir', // Duração não especificada, use "A definir" ou um período estimado
      details: {
        servicos: 'Demolição de cobertura e escadaria, abertura de vãos para elevador, carotagem, corte de pavimentos',
        desafios: 'Trabalho em estrutura existente, precisão na abertura de vãos',
      },
    },
    {
      id: 8,
      title: 'Choupana Hills',
      category: 'hotel',
      location: 'Funchal, Madeira',
      date: '2025', // Ajustado para ano atual
      description: 'Demolição de betão armado da torre do antigo elevador panorâmico (12m exterior, 6m interior SPA), demolição de duas chaminés (8m e 6m), demolição de diversos compartimentos do SPA e Receção e abertura de negativos para novos elevadores, incluindo corte e furação.',
      images: [
        'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Demolição, Corte e Furação',
      duration: 'A definir',
      details: {
        demolicoes: 'Torre de elevador panorâmico, chaminés, compartimentos do SPA e Receção',
        corte_furacao: 'Abertura de vãos para novos elevadores',
        complexidade: 'Trabalho em estrutura hoteleira em ambiente delicado',
      },
    },
    {
      id: 9,
      title: 'Porto do Funchal',
      category: 'infrastructure',
      location: 'Funchal, Madeira',
      date: '2025', // Ajustado para ano atual
      description: 'Furação para substituição de parafusos de fixação dos cabeços de atracação de navios.',
      images: [
        'https://images.pexels.com/photos/339699/pexels-photo-339699.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Furação Profissional',
      duration: 'A definir',
      details: {
        objetivo: 'Substituição e reforço de fixações',
        aplicacao: 'Cabeços de atracação de navios',
        ambiente: 'Infraestrutura portuária',
      },
    },
    {
      id: 10,
      title: 'Padaria Sésamo (Centro de Produção)',
      category: 'commercial',
      location: 'Santo António, Funchal',
      date: '2025', // Ajustado para ano atual
      description: 'Furação para instalação de sistemas especiais, incluindo Ar condicionado, águas e Esgotos e eletricidade nas novas instalações do centro de produção.',
      images: [
        'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Furação para Instalações',
      duration: 'A definir',
      details: {
        sistemas: 'AVAC, Águas, Esgotos, Eletricidade',
        ambiente: 'Centro de produção industrial/comercial',
      },
    },
    {
      id: 11,
      title: 'Edifício na Rua João Tavira (Antigas instalações do Banif)',
      category: 'office',
      location: 'Rua João Tavira, Funchal',
      date: '2025', // Ajustado para ano atual
      description: 'Execução de trabalhos de furação e carotagem em edifício de escritórios.',
      images: [
        'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Furação e Carotagem',
      duration: 'A definir',
      details: {
        servicos: 'Furação e carotagem diversas',
        local: 'Edifício de escritórios',
      },
    },
    {
      id: 12,
      title: 'Hospital da Luz',
      category: 'healthcare',
      location: 'Rua João Tavira, Funchal',
      date: '2025', // Ajustado para ano atual
      description: 'Execução de trabalhos de furação e carotagem em ambiente hospitalar.',
      images: [
        'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/3576307/pexels-photo-3576307.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Furação e Carotagem',
      duration: 'A definir',
      details: {
        servicos: 'Furação e carotagem diversas',
        ambiente: 'Hospitalar (exige cuidado e precisão)',
      },
    },
    {
      id: 13,
      title: 'Tribunal da Ponta do Sol',
      category: 'government',
      location: 'Ponta do Sol, Madeira',
      date: '2025', // Ajustado para ano atual
      description: 'Execução de trabalhos de furação e carotagem nas instalações do Tribunal da Ponta do Sol.',
      images: [
        'https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Furação e Carotagem',
      duration: 'A definir',
      details: {
        servicos: 'Furação e carotagem diversas',
        local: 'Edifício público/governamental',
      },
    },
    {
      id: 14,
      title: 'Quinta das Vinhas',
      category: 'residential',
      location: 'Estreito da Calheta, Madeira',
      date: '2025', // Ajustado para ano atual
      description: 'Furação para instalação de rede de ar condicionado nas diversas moradias e no edifício central da Quinta das Vinhas.',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Furação para AVAC',
      duration: 'A definir',
      details: {
        servico: 'Instalação de rede de ar condicionado',
        tipo_propriedade: 'Moradias e edifício central',
      },
    },
    {
      id: 15,
      title: 'Escola Bartolomeu Perestrelo',
      category: 'education',
      location: 'Funchal, Madeira',
      date: '2025', // Ajustado para ano atual
      description: 'Execução de trabalhos de furação e carotagem na Escola Bartolomeu Perestrelo.',
      images: [
        'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Furação e Carotagem',
      duration: 'A definir',
      details: {
        servicos: 'Furação e carotagem diversas',
        local: 'Estabelecimento de ensino',
      },
    },
    {
      id: 16,
      title: 'Escola Gonçalves Zarco',
      category: 'education',
      location: 'Funchal, Madeira',
      date: '2025', // Ajustado para ano atual
      description: 'Demolição de laje e diversas furações na Escola Gonçalves Zarco.',
      images: [
        'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=800', // Exemplo de imagem
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [],
      type: 'Demolição e Furação',
      duration: 'A definir',
      details: {
        demolicao: 'Laje',
        furacao: 'Diversas furações',
        local: 'Estabelecimento de ensino',
      },
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'commercial', name: 'Padaria' },
    { id: 'healthcare', name: 'Hospital' },
    { id: 'office', name: 'Escritório' },
    { id: 'residential', name: 'Quinta' },
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
    document.body.style.overflow = 'unset';
  };

  const openMediaModal = (type, src) => {
    setIsLoadingMedia(true);
    setSelectedMedia({ type, src });
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  const handleMediaLoad = () => {
    setIsLoadingMedia(false);
  };

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Obras <span className="text-blue-300">Recentes</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Conheça alguns dos projetos que realizámos com sucesso em diversos setores na Ilha da Madeira.
          </p>
        </div>
      </section>

      {/* Filtro de Categorias */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => openModal(proj.id)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={proj.images[0]}
                alt={`Primeira imagem do projeto: ${proj.title}`}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{proj.title}</h3>
                <p className="text-gray-500 flex items-center gap-2 mt-1">
                  <MapPin size={16} className="inline-block" /> {proj.location}
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <Calendar size={14} className="inline-block" /> {proj.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Projeto */}
      {selectedProjectData && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-y-auto max-h-[90vh] relative shadow-lg">
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
                    onClick={() => openMediaModal('image', img)}
                    className="relative group cursor-pointer rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`Imagem ${idx + 1} do projeto ${selectedProjectData.title}`}
                      className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      onLoad={handleMediaLoad}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye size={28} color="white" />
                    </div>
                  </div>
                ))}
                {selectedProjectData.videos.map((vid, idx) => (
                  <div
                    key={idx}
                    onClick={() => openMediaModal('video', vid)}
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
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                    </li>
                  ))}
                  <li><span className="font-medium">Tipo de Serviço:</span> {selectedProjectData.type}</li>
                  <li><span className="font-medium">Duração:</span> {selectedProjectData.duration}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Mídia (Imagem ou Vídeo) */}
      {selectedMedia && (
        <div
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
            <img
              src={selectedMedia.src}
              alt="Mídia do projeto"
              className={`max-w-full max-h-[80vh] rounded shadow-lg ${isLoadingMedia ? 'hidden' : 'block'}`}
              onLoad={handleMediaLoad}
            />
          ) : (
            selectedMedia.src.includes('youtube.com/embed') ? (
              <iframe
                src={selectedMedia.src}
                title="Vídeo do Projeto"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`w-full max-w-3xl h-[450px] rounded shadow-lg ${isLoadingMedia ? 'hidden' : 'block'}`}
                onLoad={handleMediaLoad}
              ></iframe>
            ) : (
              <div className="bg-white p-8 rounded-lg text-center shadow-lg max-w-md mx-auto">
                <p className="text-gray-800 text-lg mb-4">
                  Este vídeo não pode ser pré-visualizado diretamente aqui.
                </p>
                <a
                  href={selectedMedia.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Play size={20} className="mr-2" /> Abrir Vídeo
                </a>
                <p className="text-sm text-gray-500 mt-4">Será aberto numa nova aba.</p>
              </div>
            )
          )}
        </div>
      )}
  
       {/* Final CTA */}
      <section className="py-12 bg-blue-900 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Tem um projeto em mente?
        </h2>
        <Link
          to="/contacto"
          className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Peça um Orçamento Agora
        </Link>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Os Nossos <span className="text-blue-600">Valores e Compromisso</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Construímos relações duradouras baseadas na confiança, integridade e dedicação.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-b-4 border-blue-600 hover:shadow-lg transition-shadow">
              <CheckCircle
                    size={32}
                    className="text-blue-600 mb-3 inline-block"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integridade</h3>
              <p className="text-gray-700">
                Agimos com total transparência e honestidade em todas as nossas operações e interações.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-b-4 border-blue-600 hover:shadow-lg transition-shadow">
              <Shield size={32} className="text-blue-600 mb-3 inline-block" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Segurança</h3>
              <p className="text-gray-700">
                A segurança da nossa equipa e dos locais de trabalho é a nossa prioridade máxima em cada projeto.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-b-4 border-blue-600 hover:shadow-lg transition-shadow">
              <Sparkles size={32} className="text-blue-600 mb-3 inline-block" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Inovação</h3>
              <p className="text-gray-700">
                Investimos continuamente em novas tecnologias e métodos para oferecer as melhores soluções.
              </p>
            </div>
          </div>
          <Link
            to="/servicos" // Assumindo que tem uma página "Sobre Nós"
            className="mt-12 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Saber +
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;