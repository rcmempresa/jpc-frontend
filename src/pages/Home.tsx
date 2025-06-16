import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Clock, Users, Award, Phone, Plus, Minus } from 'lucide-react';
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';


const slides = [
  {
    title: 'Corte e Furação de Betão Profissional',
    description: 'Serviços especializados com tecnologia avançada e equipa experiente.',
    src: '/corte_furacao.jpg', // Certifique-se que esta imagem está otimizada
    alt: 'Trabalhadores da JPC Rodrigues a realizar corte em betão', // Alt text adicionado
  },
  {
    title: 'Demolição Controlada e Segura',
    description: 'Técnicas que garantem eficiência e segurança em cada projeto.',
    src: '/demolicao_controlada.webp', // Certifique-se que esta imagem está otimizada
    alt: 'Demolição controlada de estrutura de betão', // Alt text adicionado
  },
  {
    title: 'Equipamentos Modernos e Certificados',
    description: 'Garantia de qualidade e segurança em todos os trabalhos.',
    src: '/equipamento.jpg', // Certifique-se que esta imagem está otimizada
    alt: 'Equipamentos modernos de corte e furação de betão', // Alt text adicionado
  },
];


const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Equipamentos certificados e equipa com formação especializada.',
    },
    {
      icon: Clock,
      title: 'Rapidez na Execução',
      description: 'Cumprimos prazos rigorosamente com eficiência máxima.',
    },
    {
      icon: Users,
      title: 'Equipa Experiente',
      description: 'Mais de 8 anos de experiência no setor da construção.',
    },
    {
      icon: Award,
      title: 'Qualidade Superior',
      description: 'Trabalhos executados com a máxima precisão e acabamento.',
    },
  ];

  const services = [
    {
      title: 'Corte de Betão',
      description: 'Corte preciso com equipamentos profissionais para todas as espessuras.',
      image: '/corte_controlado.jpg', // Certifique-se que esta imagem está otimizada
    },
    {
      title: 'Furação Profissional',
      description: 'Furação de alta precisão para instalações e ancoragens.',
      image: 'funcionario_2.jpg', // Certifique-se que esta imagem está otimizada
    },
    {
      title: 'Demolição Controlada',
      description: 'Demolição seletiva com técnicas avançadas e seguras.',
      image: 'corte_furacao.jpg', // Certifique-se que esta imagem está otimizada
    },
  ];

  
const testimonials = [
  {
    quote:
      "A qualidade e o profissionalismo da equipa JPC Rodrigues foram fundamentais para o sucesso do nosso projeto. Recomendo sem hesitação!",
    name: "Maria Oliveira",
    role: "Arquitecta",
  },
  {
    quote:
      "Trabalhar com a JPC Rodrigues foi uma excelente decisão. Entregaram dentro do prazo com total segurança e precisão.",
    name: "Carlos Silva",
    role: "Gestor de Obras",
  },
  {
    quote:
      "Impressionado com a eficiência e atenção ao detalhe. O serviço de demolição foi limpo, rápido e sem surpresas.",
    name: "Ana Martins",
    role: "Engenheira Civil",
  },
];

const faqs = [
    {
      question: 'Quais são os vossos prazos de execução?',
      answer: 'Os nossos prazos variam consoante a complexidade e dimensão do projeto, mas estamos empenhados em cumprir sempre as datas acordadas com o cliente.',
    },
    {
      question: 'Trabalham em que tipo de obras?',
      answer: 'Atuamos em obras residenciais, comerciais e industriais, tanto em projetos de pequena como de grande dimensão.',
    },
    {
      question: 'Os vossos serviços são seguros?',
      answer: 'Sim, a segurança é a nossa prioridade. Utilizamos equipamentos certificados e a nossa equipa possui formação especializada e segue rigorosos protocolos de segurança.',
    },
    {
        question: 'Quais as zonas geográficas que abrangem?',
        answer: 'A JPC Rodrigues atua em toda a ilha da Madeira, incluindo o Porto Santo.',
      },
      {
        question: 'Oferecem orçamentos gratuitos?',
        answer: 'Sim, todos os nossos orçamentos são gratuitos e sem compromisso. Contacte-nos para agendar uma visita.',
      },
  ];


const [currentSlide, setCurrentSlide] = useState(0); // Hero section
const [currentTestimonial, setCurrentTestimonial] = useState(0); // Testemunhos
const [openFaq, setOpenFaq] = useState(null); // Estado para gerir qual FAQ está aberto


// Auto-slide Hero section
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 3000); // 3 segundos
  return () => clearInterval(interval);
}, [slides.length]); // Dependência adicionada para evitar warnings

// Auto-slide Testemunhos
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, 7000); // 7 segundos
  return () => clearInterval(interval);
}, [testimonials.length]); // Dependência adicionada para evitar warnings


// Variantes de animação para entrada da esquerda
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5, // Mais rápido
      ease: "easeOut",
      staggerChildren: 0.1, // Atraso entre os filhos
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
      duration: 0.5, // Mais rápido
      ease: "easeOut",
      staggerChildren: 0.1, // Atraso entre os filhos
    },
  },
};

// Variantes para itens individuais (rápido e suave)
const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }, // Mais rápido
};

// Novas variantes para a secção Hero
const heroContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre os elementos filhos (frases)
      delayChildren: 0.3, // Atraso antes do primeiro filho começar a animar
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, x: 100 }, // Começa da direita
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6, // Duração da animação individual
      ease: "easeOut",
    },
  },
};

// Nova variante para a imagem na seção de vídeos (vem da esquerda)
const imageSlideInLeft = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Nova variante para o conteúdo de texto e vídeos na seção de vídeos (vem da direita)
const contentSlideInRight = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1, // Atraso entre o título, parágrafo e grid de vídeos
    },
  },
};

const slideInTop = {
  hidden: { y: -50, opacity: 0 }, // Começa 50px acima e invisível
  visible: {
    y: 0, // Termina na posição original
    opacity: 1, // Torna-se visível
    transition: {
      type: "spring", // Use um tipo de transição de mola para um efeito mais suave
      stiffness: 100, // Rigidez da mola
      damping: 10, // Amortecimento da mola
      duration: 0.5, // Duração da animação
    },
  },
};


const rentalMachines = [
  {
    title: 'Geradora Trifásica SDMO R44C3 – 65 A',
    description: 'Oferece uma potência robusta de 44 kVA (35 kW), com uma tensão de saída de 400/230 V e frequência de 50 Hz.As suas dimensões são de 2,2 metros de comprimento, 1 metro de largura e 1,53 metros de altura. ',
    image: '/geradora_trifacica.png',
  }
];


  return (
    // Adicionado overflow-x-hidden para prevenir scroll horizontal indesejado
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900 pt-32 pb-32 sm:pt-20 sm:pb-20" // Ajuste de padding aqui
        style={{
          backgroundImage: `url(${slides[currentSlide].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Botões de navegação */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 p-3 rounded-full transition-colors z-10 hidden md:block" // hidden em mobile, block em md
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 p-3 rounded-full transition-colors z-10 hidden md:block" // hidden em mobile, block em md
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Indicadores de Slide (bolinhas) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-6' : 'bg-gray-400'
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Conteúdo com animação */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={heroContentVariants}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20" // Adicionado z-20 aqui
          >
            <motion.h1 variants={heroItemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p variants={heroItemVariants} className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto">
              {slides[currentSlide].description}
            </motion.p>
            <motion.p variants={heroItemVariants} className="text-2xl font-bold text-blue-300 mb-8">
              8 ANOS DE EXPERIÊNCIA
            </motion.p>
            <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center group"
              >
                Pedir Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/servicos"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Ver Serviços
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>


    {/* Sobre Nós Section (Slide In from Right) */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // amount reduzido para iniciar a animação mais cedo
      variants={slideInRight}
      className="bg-gray-50 py-16" id="sobre"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Texto principal (agora na primeira coluna para telas maiores) */}
        <motion.div className="md:col-span-1"> {/* Adicionado md:col-span-1 para garantir que o texto ocupe uma coluna em telas médias */}
          <motion.h3 variants={itemFadeIn} className="text-blue-700 font-bold uppercase tracking-wide mb-2">
            Sobre Nós
          </motion.h3>
          <motion.h2 variants={itemFadeIn} className="text-3xl font-extrabold text-gray-900 mb-4">
            Especialistas em Corte e Furação de Betão
          </motion.h2>
          <motion.p variants={itemFadeIn} className="text-gray-700 mb-4">
            Com mais de <strong>8 anos de experiência</strong>, a <strong>JPC Rodrigues</strong> oferece serviços de excelência
            em <strong>corte e furação de betão armado</strong>, com foco na segurança, precisão e cumprimento de prazos.
            Atuamos em obras residenciais, comerciais e industriais na Ilha da Madeira e Porto Santo.
          </motion.p>

          {/* Destaques */}
          <motion.div variants={slideInRight} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <motion.div variants={itemFadeIn} className="bg-blue-800 text-white text-center p-6 rounded-xl font-bold text-2xl">
              8+ <div className="text-base font-normal">Anos de Experiência</div>
            </motion.div>
            <motion.ul variants={itemFadeIn} className="text-gray-800 space-y-2 text-sm list-disc list-inside">
              <li>Corte e Furação em Betão</li>
              <li>Demolição Técnica</li>
              <li>Perfurações com Precisão</li>
              <li>Consultoria Técnica</li>
              <li>Serviços para Obras Públicas e Privadas</li>
            </motion.ul>
          </motion.div>

          {/* Contactos */}
          <motion.div variants={slideInRight} className="mt-6 space-y-2 text-sm">
            <motion.p variants={itemFadeIn} className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Email:</span> <a href="mailto:geral@jpcrodrigues.pt" className="font-semibold text-blue-700">geral@jpcrodrigues.pt</a>
            </motion.p>
            <motion.p variants={itemFadeIn} className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>Telefone:</span> <a href="tel:+351913823499" className="font-semibold text-blue-700">+351 913823499</a>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Imagem 1: Usando slideInTop para vir de cima */}
        <motion.img
          variants={slideInTop}
          src="equipamento.jpg"
          alt="Equipamento de corte e furação de betão profissional"
          className="w-full h-auto max-w-xs mx-auto md:col-span-1" /* Adicionado md:col-span-1 para que ocupe uma coluna */
          loading="lazy"
        />

        {/* Imagem de trabalho: Usando slideInTop para vir de cima */}
        <motion.img
          variants={slideInTop}
          src="jpc_funcionario_!.jpg"
          alt="Funcionário da JPC Rodrigues a trabalhar no local"
          className="w-full rounded-xl shadow-md object-cover h-[300px] md:col-span-1" /* Adicionado md:col-span-1 para que ocupe uma coluna */
          loading="lazy"
        />
      </div>
</motion.section>

      
      {/* Video Section - Agora com imagem à esquerda e vídeos à direita */}
      <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 lg:py-24 bg-blue-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Coluna da Esquerda: Múltiplas Imagens */}
          <motion.div
            variants={imageSlideInLeft}
            className="w-full md:w-2/5 flex flex-col items-center justify-center p-4 rounded-lg overflow-hidden" // Ajustado para 2/5
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 w-full"> {/* Grade para as imagens */}
              {[
                { src: "/equipa.jpeg", alt: "Outra imagem da equipa JPC Rodrigues em ação" },
                { src: "/corte_parede.jpeg", alt: "Mais uma imagem da equipa JPC Rodrigues no local" },
              ].map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  className="rounded-lg overflow-hidden shadow-xl" // Removido bg-blue-800 e p-4, alterado para shadow-xl
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg max-h-96 object-contain" // Adicionado max-h-96 e object-contain
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/805ad5/ffffff?text=${image.alt.replace(/ /g, '%20')}` }} // Fallback image
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna da Direita: Título, Descrição e Vídeos */}
          <motion.div
            variants={contentSlideInRight}
            className="w-full md:w-3/5 text-center md:text-left" // Ajustado para 3/5
          >
            <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Conheça o nosso Trabalho
            </motion.h2>
            <motion.p variants={itemFadeIn} className="text-xl text-blue-600 max-w-3xl mx-auto mb-12">
              Veja em ação como trabalhamos para entregar resultados de qualidade e confiança.
            </motion.p>

            <motion.div variants={itemFadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "xpxxDBrKJZA", // Substitua pelo ID real do seu vídeo 1
                "QN94myUflBc", // Substitua pelo ID real do seu vídeo 2
                "hV_n52ehTUQ", // Substitua pelo ID real do seu vídeo 3
                "URCU_7LEACo", // Substitua pelo ID real do seu vídeo 4
                "fHTaIUiKDGQ", // Substitua pelo ID real do seu vídeo 5
                "vGYitr6hZQs", // Substitua pelo ID real do seu vídeo 6
              ].map((videoId) => (
                <motion.div key={videoId} variants={itemFadeIn} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Vídeo de trabalho JPC Rodrigues - ${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={slideInLeft}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-blue-900 mb-8"> {/* Título em azul escuro */}
          Projetos em Destaque
        </motion.h2>
        <motion.p variants={itemFadeIn} className="text-lg text-blue-700 mb-12"> {/* Parágrafo em azul médio */}
          Explore alguns dos nossos projetos mais <strong>recentes</strong> e <strong>inovadores</strong>, demonstrando a nossa perícia em <strong>corte de lajes</strong>, <strong>furação de precisão</strong> e <strong>demolição controlada</strong>. Cada projeto reflete o nosso compromisso com a <strong>segurança eficiência e resultados de alta qualidade.</strong>
        </motion.p>
        <motion.div variants={slideInLeft} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Projeto de Corte de Lajes com Vídeo */}
          <motion.div variants={itemFadeIn} className="rounded-lg overflow-hidden shadow-lg bg-white"> {/* Fundo do cartão mantido em branco para contraste */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                src="corte_projeto.mp4" // **SUBSTITUA PELO ID REAL DO SEU VÍDEO DO YOUTUBE**
                title="Vídeo: Corte de Lajes de Betão - Projeto JPC Rodrigues"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-xl">Corte de Lajes de Betão em Edifício Residencial</h3>
              <p className="text-gray-600 mt-2">
                Utilizamos técnicas avançadas de corte para remover seções de lajes de betão armado num edifício residencial sem comprometer a estrutura. Um trabalho que exigiu precisão milimétrica e controlo rigoroso de poeiras e vibrações.
              </p>
            </div>
          </motion.div>


          {/* Projeto de Furação de Precisão com Vídeo/Imagem */}
          <motion.div variants={itemFadeIn} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              {/* Se for vídeo: */}
              <iframe
                src="https://www.youtube.com/embed/qDpRDDqWFNE"
                title="Vídeo: Furação de Precisão para Instalações"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
              {/* Se for imagem: */}
              {/* <img src="/caminho/para/sua/imagem-furacao.jpg" alt="Furação de Precisão" className="absolute top-0 left-0 w-full h-full object-cover" /> */}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-xl">Furacão para substituição de parafusos de fixação dos cabeços de atraco de navios</h3>
              <p className="text-gray-600 mt-2">
               Serviço especializado de furação para a substituição segura e eficaz dos parafusos de fixação em cabeços de atracação de navios. Garantimos a integridade estrutural e a segurança das operações portuárias.
              </p>
            </div>
          </motion.div>

          {/* Projeto de Demolição Controlada com Vídeo/Imagem */}
          <motion.div variants={itemFadeIn} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              {/* Se for vídeo: */}
              <iframe
                src="demolicao_controlada_projeto.mp4" // **SUBSTITUA PELO ID REAL DO SEU VÍDEO DO YOUTUBE**
                title="Vídeo: Demolição Controlada de Antigo Armazém"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
              {/* Se for imagem: */}
              {/* <img src="/caminho/para/sua/imagem-demolicao.jpg" alt="Demolição Controlada" className="absolute top-0 left-0 w-full h-full object-cover" /> */}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-xl">Demolição Segura na Choupana Hills</h3>
              <p className="text-gray-600 mt-2">
                Especializados em operações de demolição seguras e precisas na região de Choupana Hills. A nossa equipa utiliza técnicas avançadas e equipamento moderno para garantir a remoção controlada de estruturas, minimizando riscos e impacto ambiental. Priorizamos a segurança de pessoas e propriedades em cada projeto.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Botão de Chamada para Ação */}
        <motion.div variants={itemFadeIn} className="mt-16 flex justify-center space-x-4">
         <Link to="/portfolio" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Ver Todos os Projetos
          </Link>
          <Link to="/contacto" className="ml-6 px-7 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-xl hover:bg-yellow-300 hover:text-blue-900 hover:scale-105 transition-all duration-300 ease-in-out transform relative overflow-hidden group">
            Solicitar Orçamento
          </Link>
        </motion.div>
      </div>
    </motion.section>

  {/* Secção de Setores que Atendemos (Slide In from Right) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInRight}
        className="py-16 bg-blue-200"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex md:flex-row flex-col">
            <div className="md:w-1/2">
                <img src="/construcao_civil.jpg" alt="Construction Site" className="rounded-lg shadow-md" />
            </div>
            {/* Adicionado md:pl-8 para empurrar o conteúdo ligeiramente para a direita */}
            <div className="md:w-1/2 md:pl-8">
                <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Setores que Atendemos</motion.h2>
                <motion.div variants={slideInRight} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div variants={itemFadeIn} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <Users className="h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Construção Civil</h3>
                        <p className="text-gray-600">Serviços essenciais para grandes e pequenos projetos de construção na Madeira.</p>
                    </motion.div>
                    <motion.div variants={itemFadeIn} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <Award className="h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Remodelações</h3>
                        <p className="text-gray-600">Eficiência e segurança em trabalhos de remodelação e reestruturação de espaços.</p>
                    </motion.div>
                    <motion.div variants={itemFadeIn} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <Shield className="h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Obras Públicas</h3>
                        <p className="text-gray-600">Parceiro de confiança em projetos de infraestrutura pública na região.</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </motion.section>

    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={slideInLeft}
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Principal e Parágrafo de Introdução */}
        <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Os Nossos Serviços
        </motion.h2>
        <motion.p variants={itemFadeIn} className="text-xl text-blue-700 max-w-3xl mx-auto mb-12">
          Serviços especializados em <strong>betão</strong>: executamos <strong>furações</strong>, <strong>lajes</strong>, <strong>pavimentos industriais</strong> e <strong>muros de contenção</strong>, com foco em <strong>qualidade</strong>, <strong>segurança</strong> e <strong>cumprimento de prazos</strong>.
        </motion.p>




        {/* Grelha de Serviços */}
        <motion.div variants={slideInLeft} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemFadeIn}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Imagem do serviço: ${service.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vídeo da Equipa em Ação */}
        <motion.div
        variants={itemFadeIn}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-8"
      >
        {/* Vídeo 1 */}
        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-blue-200">
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover max-h-[600px]"
            poster="/placeholder-servicos.jpg"
          >
            <source src="/servicos.mp4" type="video/mp4" />
            O seu browser não suporta o vídeo.
          </video>
        </div>

        {/* Vídeo 2 */}
        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-blue-200">
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover max-h-[600px]"
            poster="/placeholder-equipa.jpg"
          >
            <source src="/demolicao_controlada.mp4" type="video/mp4" />
            O seu browser não suporta o vídeo.
          </video>
        </div>
      </motion.div>


        {/* Chamadas para Ação (Botões) */}
        <motion.div variants={itemFadeIn} className="flex flex-col sm:flex-row justify-center gap-6 mt-12 mb-16">
          <Link
            to="/servicos"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contacto"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Solicitar Orçamento
          </Link>
        </motion.div>
      </div>
    </motion.section>


      {/* Features Section (Slide In from Right) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInRight}
        className="py-16 lg:py-24 bg-blue-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemFadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Porque Escolher a JPC Rodrigues?
          </motion.h2>
          <motion.p variants={itemFadeIn} className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Combinamos experiência, tecnologia e dedicação para entregar resultados excepcionais.
          </motion.p>
          <motion.div variants={slideInRight} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemFadeIn}
                className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>




      {/* Testimonials (Slide In from Left) */}
      <section className="bg-white py-20 text-center" id="testemunhos"> {/* Fundo da seção alterado para azul claro */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideInLeft}
        className="mb-12"
      >
        <motion.h3 variants={itemFadeIn} className="text-blue-700 text-lg font-semibold tracking-wide">TESTEMUNHOS</motion.h3> {/* Texto alterado para azul */}
        <motion.h2 variants={itemFadeIn} className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">
          O que os nossos clientes dizem!
        </motion.h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto px-4 flex items-center justify-center">
        {/* Botão seta esquerda */}
        <button
          onClick={() =>
            setCurrentTestimonial(
              (prev) => (prev - 1 + testimonials.length) % testimonials.length
            )
          }
          className="p-2 hover:text-blue-500 transition-colors"
          aria-label="Testemunho anterior"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Testemunho */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }} 
            className="bg-white shadow-xl rounded-lg px-8 py-10 max-w-xl mx-6"
          >
            <p className="text-blue-800 text-xl md:text-2xl italic leading-relaxed"> {/* Texto da citação alterado para azul escuro */}
              “{testimonials[currentTestimonial].quote}”
            </p>
            <div className="mt-6">
              <p className="text-blue-900 font-bold text-lg">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-blue-600 text-sm italic">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botão seta direita */}
        <button
          onClick={() =>
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
          }
          className="p-2 hover:text-blue-500 transition-colors"
          aria-label="Próximo testemunho"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>


    <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  variants={slideInRight}
  className="py-16 bg-white" 
  id="contact-and-faq" 
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> {/* Grid for side-by-side layout */}

    {/* LEFT SIDE: FAQ Section */}
    <motion.div variants={itemFadeIn}> {/* Apply animation to the container of the FAQ */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemFadeIn} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex justify-between items-center p-5 text-lg font-semibold text-left text-gray-800 hover:bg-gray-50 transition-colors"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index ? "true" : "false"}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              {openFaq === index ? (
                <Minus className="h-6 w-6 text-blue-600" />
              ) : (
                <Plus className="h-6 w-6 text-blue-600" />
              )}
            </button>
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-5 text-gray-600"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT SIDE: Google Maps Section */}
    <motion.div variants={itemFadeIn}> {/* Apply animation to the container of the map */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">Onde Estamos</h2>
      <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg"> {/* Removed max-w-4xl and mx-auto as it's now in a grid column */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.8757049405626!2d-16.92097032349079!3d32.65089337365691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xcd62594a1b0660f%3A0xc34a64d1f56a31c!2sEstrada%20da%20Vit%C3%B3ria%2063%2C%209000-096%20Funchal!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da JPC Rodrigues em Gaula, Madeira"
        ></iframe>
      </div>
    </motion.div>

  </div>
</motion.section>


      {/* Final CTA (Slide In from Left) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInLeft}
        className="py-12 bg-blue-600 text-white text-center"
      >
        <motion.h2 variants={itemFadeIn} className="text-2xl md:text-3xl font-bold mb-6">
          Pronto para avançar com o seu projeto?
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
    
    </div>
  );
};

export default Home;