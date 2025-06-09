import React, { useState } from 'react';
import { X, Play, Eye, Calendar, MapPin, Video } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Centro Comercial Alegro Setúbal',
      category: 'commercial',
      location: 'Setúbal, Portugal',
      date: '2024',
      description: 'Corte de betão para instalação de sistemas AVAC em centro comercial de grande dimensão. Trabalho executado com precisão milimétrica para garantir o funcionamento perfeito dos sistemas de climatização.',
      images: [
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [
        'https://www.youtube.com/embed/xpxxDBrKJZA',
      ],
      type: 'Corte de Betão',
      duration: '15 dias',
      details: {
        area: '2.500 m²',
        depth: 'Até 40cm',
        equipment: 'Wall Saw, Serra Circular',
        challenges: 'Trabalho em ambiente comercial ativo',
      },
    },
    {
      id: 2,
      title: 'Hospital de Santa Maria',
      category: 'healthcare',
      location: 'Lisboa, Portugal',
      date: '2024',
      description: 'Furação especializada para instalação de equipamentos médicos em ambiente hospitalar. Projeto executado com máximo cuidado para não interferir com as operações hospitalares.',
      images: [
        'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      ],
      type: 'Furação Profissional',
      duration: '8 dias',
      details: {
        holes: '150 furos',
        diameter: '50-300mm',
        precision: '±1mm',
        environment: 'Ambiente hospitalar controlado',
      },
    },
    {
      id: 3,
      title: 'Torre de Escritórios Oriente',
      category: 'office',
      location: 'Lisboa, Portugal',
      date: '2023',
      description: 'Abertura de vãos em lajes para instalação de escadas de emergência. Projeto complexo que exigiu coordenação precisa com a estrutura existente.',
      images: [
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      ],
      type: 'Abertura de Vãos',
      duration: '12 dias',
      details: {
        openings: '8 vãos',
        size: '2x3 metros cada',
        floors: '15 pisos',
        technique: 'Corte controlado por fases',
      },
    },
    {
      id: 4,
      title: 'Fábrica Autoeuropa',
      category: 'industrial',
      location: 'Palmela, Portugal',
      date: '2023',
      description: 'Demolição controlada de estruturas para ampliação da linha de produção. Trabalho executado durante paragens programadas da produção.',
      images: [
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      ],
      type: 'Demolição Controlada',
      duration: '20 dias',
      details: {
        volume: '500 m³ de betão',
        method: 'Hidrodemolição',
        safety: 'Ambiente industrial ativo',
        recycling: '95% material reciclado',
      },
    },
    {
      id: 5,
      title: 'Residencial Quinta da Malagueira',
      category: 'residential',
      location: 'Évora, Portugal',
      date: '2023',
      description: 'Corte de betão para instalação de elevadores em edifício residencial histórico. Trabalho que respeitou a arquitetura original do edifício.',
      images: [
        'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      ],
      type: 'Corte de Betão',
      duration: '6 dias',
      details: {
        shafts: '2 poços de elevador',
        depth: '4 pisos',
        heritage: 'Edifício classificado',
        precision: 'Corte milimétrico',
      },
    },
    {
      id: 6,
      title: 'Metro de Lisboa - Estação Rato',
      category: 'infrastructure',
      location: 'Lisboa, Portugal',
      date: '2022',
      description: 'Furação para sistemas de ventilação em infraestrutura de transporte público. Projeto executado durante horários de menor movimento.',
      images: [
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      videos: [
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      ],
      type: 'Furação Profissional',
      duration: '25 dias',
      details: {
        location: 'Túneis subterrâneos',
        ventilation: '50 pontos de ventilação',
        schedule: 'Trabalho noturno',
        safety: 'Ambiente confinado',
      },
    },
  ];
  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'commercial', name: 'Comercial' },
    { id: 'healthcare', name: 'Saúde' },
    { id: 'office', name: 'Escritórios' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'residential', name: 'Residencial' },
    { id: 'infrastructure', name: 'Infraestruturas' },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

  const openModal = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  const openMediaModal = (type: 'image' | 'video', src: string) => {
    setSelectedMedia({ type, src });
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nosso <span className="text-blue-300">Portfólio</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Conheça alguns dos projetos que realizámos com sucesso em diversos setores.
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
                alt={proj.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{proj.title}</h3>
                <p className="text-gray-500">{proj.location}</p>
                <p className="text-sm text-gray-400">{proj.date}</p>
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
              className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
            >
              <X size={20} />
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedProjectData.title}</h2>
              <p className="text-gray-500 flex items-center gap-2 mb-2">
                <MapPin size={16} /> {selectedProjectData.location}
              </p>
              <p className="text-gray-500 flex items-center gap-2 mb-2">
                <Calendar size={16} /> {selectedProjectData.date}
              </p>
              <p className="mb-4">{selectedProjectData.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {selectedProjectData.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openMediaModal('image', img)}
                    className="relative group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Imagem ${idx + 1}`}
                      className="w-full h-32 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <Eye size={24} color="white" />
                    </div>
                  </div>
                ))}
                {selectedProjectData.videos.map((vid, idx) => (
                  <div
                    key={idx}
                    onClick={() => openMediaModal('video', vid)}
                    className="relative group cursor-pointer bg-black rounded flex flex-col items-center justify-center w-full h-32 text-white"
                  >
                    <Video size={40} color="white" />
                    <span className="mt-2">Clique para ver o vídeo</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Detalhes do Projeto:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {Object.entries(selectedProjectData.details).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Media */}
      {selectedMedia && (
        <div
          onClick={closeMediaModal}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 cursor-pointer"
        >
          {selectedMedia.type === 'image' ? (
            <img src={selectedMedia.src} alt="Media" className="max-w-full max-h-[80vh] rounded" />
          ) : (
            <iframe
              src={selectedMedia.src}
              title="Vídeo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full max-w-3xl h-[450px] rounded"
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
