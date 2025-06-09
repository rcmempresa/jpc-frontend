import { Link } from 'react-router-dom';
import { ArrowRight,ChevronLeft, ChevronRight,Shield, Clock, Users, Award, Phone } from 'lucide-react';
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';


const slides = [
  {
    title: 'Corte e Furação de Betão Profissional',
    description: 'Serviços especializados com tecnologia avançada e equipa experiente.',
    src: '/corte_furacao.jpg',
  },
  {
    title: 'Demolição Controlada e Segura',
    description: 'Técnicas que garantem eficiência e segurança em cada projeto.',
    src: '/demolicao_controlada.webp',
  },
  {
    title: 'Equipamentos Modernos e Certificados',
    description: 'Garantia de qualidade e segurança em todos os trabalhos.',
    src: '/equipamento.jpg',
  },
]


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
      image: '/corte_controlado.jpg',
    },
    {
      title: 'Furação Profissional',
      description: 'Furação de alta precisão para instalações e ancoragens.',
      image: 'funcionario_2.jpg',
    },
    {
      title: 'Demolição Controlada',
      description: 'Demolição seletiva com técnicas avançadas e seguras.',
      image: 'corte_furacao.jpg',
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

const [currentSlide, setCurrentSlide] = useState(0); // Hero section
const [currentTestimonial, setCurrentTestimonial] = useState(0); // Testemunhos


// Auto-slide Hero section
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);

// Auto-slide Testemunhos
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, 7000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 p-3 rounded-full transition-colors z-10 hidden md:block"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-800 p-3 rounded-full transition-colors z-10 md:right-4"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto">
          {slides[currentSlide].description}
        </p>
        <p className="text-2xl font-bold text-white mb-8">
          8 ANOS DE EXPERIÊNCIA
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Conheça o Nosso Trabalho
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Veja em ação como trabalhamos para entregar resultados de qualidade e confiança.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            "xpxxDBrKJZA",
            "QN94myUflBc",
            "ViLAQOFa2sc",
            "URCU_7LEACo",
            "fHTaIUiKDGQ",
            "vGYitr6hZQs",
          ].map((videoId) => (
            <div key={videoId} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Vídeo ${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-16 px-6 md:px-12" id="sobre">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <img
          src="equipamento.jpg"
          alt="Logo JPC Rodrigues"
          className="w-full h-auto max-w-xs mx-auto"
        />

        {/* Imagem de trabalho */}
        <img
          src="jpc_funcionario_!.jpg"
          alt="Trabalhador em ação"
          className="w-full rounded-xl shadow-md object-cover h-[300px]"
        />

        {/* Texto principal */}
        <div>
          <h3 className="text-blue-700 font-bold uppercase tracking-wide mb-2">
            Sobre Nós
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Especialistas em Corte e Furação de Betão
          </h2>
          <p className="text-gray-700 mb-4">
            Com mais de <strong>8 anos de experiência</strong>, a <strong>JPC Rodrigues</strong> oferece serviços de excelência
            em <strong>corte e furação de betão armado</strong>, com foco na segurança, precisão e cumprimento de prazos.
            Atuamos em obras residenciais, comerciais e industriais.
          </p>

          {/* Destaques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-800 text-white text-center p-6 rounded-xl font-bold text-2xl">
              8+ <div className="text-base font-normal">Anos de Experiência</div>
            </div>
            <ul className="text-gray-800 space-y-2 text-sm list-disc list-inside">
              <li>Corte e Furação em Betão</li>
              <li>Demolição Técnica</li>
              <li>Perfurações com Precisão</li>
              <li>Consultoria Técnica</li>
              <li>Serviços para Obras Públicas e Privadas</li>
            </ul>
          </div>

          {/* Contactos */}
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Email:</span> <a href="mailto:geral@jpcrodrigues.pt" className="font-semibold text-blue-700">geral@jpcrodrigues.pt</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>Telefone:</span> <a href="tel:+351912345678" className="font-semibold text-blue-700">+351 912 345 678</a>
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Os Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Oferecemos uma gama completa de serviços especializados em trabalhos de betão.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/servicos"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Porque Escolher a JPC Rodrigues?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Combinamos experiência, tecnologia e dedicação para entregar resultados excepcionais.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-[#f9f9f9] py-20 text-center" id="testemunhos">
      <div className="mb-12">
        <h3 className="text-yellow-500 text-lg font-semibold tracking-wide">TESTEMUNHOS</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">
          O que os nossos clientes dizem!
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 flex items-center justify-center">
        {/* Botão seta esquerda */}
        <button
          onClick={() =>
            setCurrentTestimonial(
              (prev) => (prev - 1 + testimonials.length) % testimonials.length
            )
          }
          className="p-2 hover:text-yellow-500 transition-colors"
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
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-lg px-8 py-10 max-w-xl mx-6"
          >
            <p className="text-gray-800 text-xl md:text-2xl italic leading-relaxed">
              “{testimonials[currentTestimonial].quote}”
            </p>
            <div className="mt-6">
              <p className="text-blue-900 font-bold text-lg">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-gray-600 text-sm italic">
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
          className="p-2 hover:text-yellow-500 transition-colors"
          aria-label="Próximo testemunho"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>



      {/* Final CTA */}
      <section className="py-12 bg-blue-900 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Pronto para avançar com o seu projeto?
        </h2>
        <Link
          to="/contacto"
          className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Peça um Orçamento Agora
        </Link>
      </section>
    

    {/* Google Maps Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Onde Estamos</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.8153766492824!2d-16.964397784830415!3d32.65103867986256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605f752e138c8b%3A0x6a9ee7992313a68d!2sEstr.%20da%20Vit%C3%B3ria%2C%20Funchal!5e0!3m2!1spt-PT!2spt!4v1685918755505!5m2!1spt-PT!2spt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização JPC Rodrigues"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
