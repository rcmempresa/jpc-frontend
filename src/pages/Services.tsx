import React, { useEffect, useState } from 'react';
import { Drill, Hammer, Shield, CheckCircle, Award, ArrowRight } from 'lucide-react';

const iconMap = {
  Drill,
  Hammer,
  Shield,
};

const Services = () => {
  const [mainServices, setMainServices] = useState([]);
  const [additionalServices, setAdditionalServices] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Ajusta as URLs para as tuas rotas reais da API
        const [mainRes, additionalRes, certRes] = await Promise.all([
          fetch('http://localhost:3000/api/servicos/main'),         // retorna os serviços principais (category='principal')
          fetch('http://localhost:3000/api/servicos/additional'),   // retorna os serviços complementares (category='complementar')
          fetch('http://localhost:3000/api/servicos/certifications'), // retorna certificações
        ]);

        if (!mainRes.ok || !additionalRes.ok || !certRes.ok) {
          throw new Error('Erro ao carregar dados');
        }

        const mainData = await mainRes.json();
        const additionalData = await additionalRes.json();
        const certData = await certRes.json();

        setMainServices(mainData);
        setAdditionalServices(additionalData);
        setCertifications(certData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="text-center py-10">Carregando serviços...</p>;

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Os Nossos <span className="text-blue-300">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Soluções completas em corte e furação de betão com equipamentos de última geração e equipa especializada.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especializamo-nos nos trabalhos mais exigentes com tecnologia avançada e know-how técnico.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Drill; // Ícone padrão se não encontrar
              return (
                <div
                  key={service.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(service.features || []).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={service.image_url || service.image} // Ajusta o nome do campo conforme o que o backend envia
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Complementares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma gama completa de serviços especializados para todas as suas necessidades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{typeof service === 'string' ? service : service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Qualificações
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reconhecimento oficial da nossa qualidade e competência técnica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors"
              >
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa dos Nossos Serviços?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Entre em contacto connosco para discutir o seu projeto e receber um orçamento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
            >
              Pedir Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/sobre-nos"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center group"
            >
              Saiba Mais
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
