import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, Award, Phone } from 'lucide-react';

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
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Furação Profissional',
      description: 'Furação de alta precisão para instalações e ancoragens.',
      image: 'https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Demolição Controlada',
      description: 'Demolição seletiva com técnicas avançadas e seguras.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Engenheiro Civil',
      text: 'A JPC Rodrigues entregou o projeto dentro do prazo e com uma qualidade que superou as expectativas.',
    },
    {
      name: 'Ana Martins',
      role: 'Cliente Residencial',
      text: 'Profissionalismo e atenção ao detalhe. Recomendo vivamente para qualquer obra de betão.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Especialistas em Corte e
            <span className="text-blue-300"> Furação de Betão</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Equipamentos profissionais, equipa experiente e resultados garantidos para todos os tipos de obras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça o Nosso Trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Veja em ação como trabalhamos para entregar resultados de qualidade e confiança.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto h-[500px]">
            <iframe
              src="https://www.youtube.com/embed/xpxxDBrKJZA"
              title="Vídeo Institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
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
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Preview */}
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
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            O Que Dizem os Nossos Clientes
          </h2>
          <div className="space-y-8">
            {testimonials.map(({ name, role, text }, i) => (
              <blockquote
                key={i}
                className="bg-white rounded-xl shadow p-8 text-gray-800 italic relative before:content-['“'] before:absolute before:-top-8 before:left-6 before:text-6xl before:text-blue-600"
              >
                <p className="mb-4">"{text}"</p>
                <footer className="font-semibold text-blue-700">
                  — {name}, <span className="font-normal text-gray-500">{role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a JPC Rodrigues
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Fundada em 2008, a JPC Rodrigues é uma empresa dedicada ao corte e furação de betão com
            uma equipa experiente e equipamentos de última geração. Estamos comprometidos em
            oferecer soluções eficientes, seguras e de alta qualidade para projetos residenciais e comerciais.
          </p>

          <div className="flex flex-col items-center mb-8">
            {/* Foto a meio */}
            <img
              src="/caminho/para-a-foto.jpg"
              alt="José António de Ornelas Rodrigues e José Pedro"
              className="w-64 h-64 object-cover rounded-full shadow-md mb-4"
            />
            <p className="text-md md:text-lg text-gray-700 max-w-2xl">
              Com 8 anos de mercado, a empresa foi fundada a 2 de janeiro de 2017 por José António de
              Ornelas Rodrigues, com o seu filho José Pedro. Desde então, têm trabalhado juntos para
              oferecer serviços de excelência.
            </p>
          </div>

          <Link
            to="/contacto"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Contacte-nos
          </Link>
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
    </div>
  );
};

export default Home;
