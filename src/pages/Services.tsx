import React, { useEffect, useState } from 'react';
import { Drill, Hammer, Shield, CheckCircle, Award, ArrowRight, PlayCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer'; // Importar useInView
import { motion } from 'framer-motion'; // Importar motion

const iconMap = {
  Drill,
  Hammer,
  Shield,
};

const Services = () => {
  const [mainServices, setMainServices] = useState([]);
  const [additionalServices, setAdditionalServices] = useState([]);
  const [certifications, setCertifications] = useState([]);
  // --- Dados de Vídeos e Equipamentos carregados diretamente no ficheiro ---
  const [videos] = useState([
    {
      id: 1,
      title: "Corte de Betão com Precisão",
      description: "Demonstração do nosso serviço de corte de betão, utilizando técnicas avançadas para resultados perfeitos.",
      video_url: "https://www.youtube.com/embed/5hH7jS1McCg"
    },
    {
      id: 2,
      title: "Furação em Estruturas Complexas",
      description: "Veja como realizamos furações em locais de difícil acesso, com segurança e eficiência.",
      video_url: "https://www.youtube.com/embed/hV_n52ehTUQ"
    },
    {
      id: 3,
      title: "Aplicações de Demolição Controlada",
      description: "Um olhar sobre as nossas operações de demolição controlada com robôs e ferramentas especializadas.",
      video_url: "https://www.youtube.com/embed/V8Roj_cIJm8"
    }
  ]);

  const [selectedVideoUrls, setSelectedVideoUrls] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWithVideos = (urls) => {
    setSelectedVideoUrls(urls);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideoUrls([]);
    setIsModalOpen(false);
  };

  const [equipment] = useState([
    {
      id: 101,
      name: "Máquina de Furação Diamantada HILTI DLP 15",
      description: "Equipamento robusto e de alta performance para furação diamantada precisa em diversos materiais de construção.",
      image_url: "/cortadora_1_servicos.png",
      video_url: null,
      features: [
        "Tensão Nominal: Corrente Trifásica 380 a 400 V",
        "Corrente Nominal - proteção de rede: 32 A",
        "Velocidade Nominal: 400 rpm a 940 rpm",
        "Frequência da rede: 50 Hz a 60 Hz",
        "Ligação a rede: 3 ~ + PE",
        "Debito de água de arrefecimento: 2 lt / min",
        "Pressão da água de arrefecimento: 2 a 6 bar",
        "Temperatura da água de arrefecimento: de 4º a 25º",
        "Profundidade máxima de corte: 53 cm"
      ],
      example_video_urls: [
        "https://www.youtube.com/embed/a7GFmOdnYB0", // Exemplo de vídeo de trabalho 1 para HILTI DLP 15
        "https://www.youtube.com/embed/gJHYkDIoV9Y",
        "https://www.youtube.com/embed/xopnVEbP6Dk",
        "https://www.youtube.com/embed/SwLshY8n1Qs" // Exemplo de vídeo de trabalho 2 para HILTI DLP 15
      ]
    },
    {
      id: 102,
      name: "Cortadora de Muro WSE 1621P Tyrolit / Hidrostress",
      description: "Serra de parede de alta frequência, ideal para cortes precisos em betão e alvenaria, com grande profundidade e eficiência.",
      image_url: "/cortadora_muro_servicos.webp",
      video_url: null,
      features: [
        "Tensão Nominal: Corrente Trifásica 380 a 400 V",
        "Corrente Nominal - proteção de rede: 32 A",
        "Velocidade Nominal: 400 rpm a 940 rpm",
        "Frequência da rede: 50 Hz a 60 Hz",
        "Ligação a rede: 3 ~ + PE",
        "Debito de água de arrefecimento: 4 lt / min",
        "Pressão da água de arrefecimento: 2 a 6 bar",
        "Temperatura da água de arrefecimento: de 4º a 25º",
        "Profundidade máxima de corte: 73 cm"
      ],
      example_video_urls: [
        "https://www.youtube.com/embed/xpxxDBrKJZA", // Exemplo de vídeo de trabalho 1 para Tyrolit
        "https://www.youtube.com/embed/fHTaIUiKDGQ",
        "https://www.youtube.com/embed/ViLAQOFa2sc",
        "https://www.youtube.com/embed/URCU_7LEACo"
        
      ]
    },
    {
     id: 103,
      name: "Cortadora de Betão Mikasa MCD-218",
      description: "Cortadora de pavimento robusta e fácil de manusear, perfeita para cortes em asfalto e betão, garantindo precisão e eficiência.",
      image_url: "/cortadora_mikasa_servicos.png",
      video_url: null,
      features: [
        "Profundidade de corte: 20 cm",
        "Motor: A Gasolina",
        "Ajuste para profundidade de corte: Sistema de parafuso de elevação manual",
        "Tanque de água: 45 Litros"
      ],
      example_video_urls: [
        "https://www.youtube.com/embed/QN94myUflBc"
      ]
    },
    {
      id: 104,
      name: "Perfurador Diamantado",
      description: "Perfurador versátil e potente para furações em betão e outros materiais, com capacidade para diferentes diâmetros e profundidades.",
      image_url: "/perfurador_diamantado_dd.avif",
      video_url: null,
      features: [
        "Corrente Elétrica: Monofásica 220 V",
        "Furação: Vertical, horizontal e oblíqua até 45º",
        "Furação com coroas: 18 mm a 350 mm",
        "Capacidade de furação em profundidade: Até 3,00 ml"
      ],
      example_video_urls: [
        "https://www.youtube.com/embed/hV_n52ehTUQ", 
        "https://www.youtube.com/embed/xpxxDBrKJZA"
      ]
    },
  ]);
  // --- Fim dos Dados de Vídeos e Equipamentos ---

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Apenas chamadas API para mainServices, additionalServices e certifications
        const [mainRes, additionalRes, certRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_BACKEND_URL}/api/servicos/main`),
          fetch(`${import.meta.env.VITE_BACKEND_URL}/api/servicos/additional`),
          fetch(`${import.meta.env.VITE_BACKEND_URL}/certifications`),
        ]);

        if (!mainRes.ok || !additionalRes.ok || !certRes.ok) {
          throw new Error('Erro ao carregar dados dos serviços principais/adicionais/certificações');
        }

        const mainData = await mainRes.json();
        const additionalData = await additionalRes.json();
        const certData = await certRes.json();

        setMainServices(mainData);
        setAdditionalServices(additionalData);
        setCertifications(certData);

      } catch (error) {
        console.error("Erro ao buscar dados da API para serviços:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Variantes de animação para entrada da esquerda
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

  // Variantes de animação para entrada da direita
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

  // Variantes para itens individuais (rápido e suave)
  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  // Hooks para cada seção que queremos animar
  // O 'ref' é a referência para o elemento, 'inView' é um booleano que indica se o elemento está visível
  // 'triggerOnce: true' faz com que a animação ocorra apenas uma vez
  // 'threshold: 0.1' significa que 10% do elemento precisa estar visível para disparar
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: mainServicesRef, inView: mainServicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: videosRef, inView: videosInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: equipmentRef, inView: equipmentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: additionalServicesRef, inView: additionalServicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  if (loading) return <p className="text-center py-10">Carregando serviços...</p>;

  return (
    // Adicionado overflow-x-hidden para evitar rolagem horizontal indesejada devido às animações iniciais
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef} // Atribuímos a ref aqui
        initial="hidden" // Estado inicial da animação
        animate={heroInView ? "visible" : "hidden"} // Anima quando em vista
        variants={slideInLeft} // Usamos a variante slideInLeft para a seção Hero
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 variants={itemFadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Os Nossos <span className="text-blue-300">Serviços</span>
            </motion.h1>
            <motion.p variants={itemFadeIn} className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Soluções completas em corte e furação de betão com equipamentos de última geração e equipa especializada.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Services */}
      <motion.section
        ref={mainServicesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              // Alternar animação da esquerda para a direita
              const animationVariant = index % 2 === 0 ? slideInLeft : slideInRight;
              return (
                <motion.div
                  key={service.id}
                  variants={animationVariant} // Aplica a variante de animação
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <motion.div variants={itemFadeIn} className="flex-1">
                    <h3 className="text-3xl font-bold text-blue-700 mb-4">{service.title}</h3>
                    <p className="text-lg text-blue-500 mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(service.features || []).map((feature, i) => (
                        <motion.li key={i} variants={itemFadeIn} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-blue-800">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div variants={itemFadeIn} className="flex-1">
                    <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={service.image_url || service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* --- Seção de Vídeos --- */}
      {videos.length > 0 && (
        <motion.section
          ref={videosRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 lg:py-24 bg-blue-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={slideInLeft} className="text-center mb-12">
              <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Os Nossos Trabalhos em Vídeo
              </motion.h2>
              <motion.p variants={itemFadeIn} className="text-xl text-blue-700 max-w-3xl mx-auto">
                Veja a <strong>JPC Rodrigues</strong> em ação, demonstrando a nossa <strong>perícia</strong> e os <strong>resultados</strong> dos nossos serviços.
              </motion.p>
            </motion.div>
            <motion.div variants={slideInRight} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <motion.div key={video.id} variants={itemFadeIn} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                      src={video.video_url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
      {/* --- Fim da Seção de Vídeos --- */}

      {/* --- Seção de Equipamentos --- */}
      {equipment.length > 0 && (
        <motion.section
          ref={equipmentRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={slideInRight} className="text-center mb-12">
              <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Os Nossos Equipamentos
              </motion.h2>
              <motion.p variants={itemFadeIn} className="text-xl text-blue-700 max-w-3xl mx-auto">
                Utilizamos tecnologia de ponta para garantir <strong>precisão</strong>, <strong>eficiência</strong> e <strong>segurança</strong> em todos os trabalhos.
              </motion.p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {equipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight} // Alternar animação
                  className={`flex flex-col sm:flex-row items-center gap-6 p-6 bg-blue-50 rounded-xl shadow-sm ${
                    index % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <motion.div variants={itemFadeIn} className="flex-shrink-0 w-full sm:w-1/2 relative">
                    {item.image_url && (
                      <>
                        <img
                          src={item.image_url}
                          alt={item.name}
                          onClick={() => item.example_video_urls && item.example_video_urls.length > 0 && openModalWithVideos(item.example_video_urls)}
                          className={`rounded-lg object-cover w-full h-48 sm:h-auto ${item.example_video_urls && item.example_video_urls.length > 0 ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                        />
                        {item.example_video_urls && item.example_video_urls.length > 0 && (
                          <div
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg cursor-pointer transition-opacity opacity-0 hover:opacity-100"
                            onClick={() => openModalWithVideos(item.example_video_urls)}
                          >
                            <PlayCircle className="h-16 w-16 text-white" />
                          </div>
                        )}
                      </>
                    )}
                     {item.video_url && !item.image_url && (
                        <div className="aspect-w-16 aspect-h-9 w-full relative">
                          <iframe
                            src={item.video_url}
                            title={item.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                          ></iframe>
                          {item.example_video_urls && item.example_video_urls.length > 0 && (
                            <div
                              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg cursor-pointer transition-opacity opacity-0 hover:opacity-100"
                              onClick={() => openModalWithVideos(item.example_video_urls)}
                            >
                              <PlayCircle className="h-16 w-16 text-white" />
                            </div>
                          )}
                        </div>
                    )}
                  </motion.div>
                  <motion.div variants={itemFadeIn} className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    {item.example_video_urls && item.example_video_urls.length > 0 && (
                      <p className="text-sm text-blue-600 font-semibold mb-4">
                        Clique na imagem para ver vídeos de trabalho!
                      </p>
                    )}
                    {item.features && item.features.length > 0 && (
                      <ul className="space-y-2">
                        {item.features.map((feature, i) => (
                          <motion.li key={i} variants={itemFadeIn} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
      {/* --- Fim da Seção de Equipamentos --- */}

      {/* Additional Services */}
      <motion.section
        ref={additionalServicesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 lg:py-24 bg-blue-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideInLeft} className="text-center mb-12">
            <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Serviços Complementares
            </motion.h2>
            <motion.p variants={itemFadeIn} className="text-xl text-blue-700 max-w-3xl mx-auto">
              Uma gama completa de serviços especializados para todas as suas necessidades.
            </motion.p>
          </motion.div>
          <motion.div variants={slideInRight} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemFadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{typeof service === 'string' ? service : service.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        ref={certificationsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideInRight} className="text-center mb-12">
            <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Qualificações
            </motion.h2>
            <motion.p variants={itemFadeIn} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reconhecimento oficial da nossa qualidade e competência técnica.
            </motion.p>
          </motion.div>
          <motion.div variants={slideInLeft} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemFadeIn}
                className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors"
              >
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInLeft}
        className="py-16 lg:py-24 bg-blue-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa dos Nossos Serviços?
          </motion.h2>
          <motion.p variants={itemFadeIn} className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Entre em contacto connosco para discutir o seu projeto e receber um orçamento personalizado.
          </motion.p>
          <motion.div variants={itemFadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
            >
              Pedir Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal para Vídeos de Exemplo */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative bg-white rounded-lg p-6 max-w-4xl w-full mx-auto shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-3xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Vídeos de Exemplo de Trabalho</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedVideoUrls.map((videoUrl, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    src={videoUrl}
                    title={`Vídeo de Exemplo ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              ))}
            </div>
            {selectedVideoUrls.length === 0 && (
              <p className="text-center text-gray-600">Nenhum vídeo de exemplo disponível para este equipamento.</p>
            )}
          </div>
        </div>
      )}
      {/* Fim do Modal */}
    </div>
  );
};

export default Services;