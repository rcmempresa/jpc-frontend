import React from 'react';

const Privacidade = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Política de Privacidade</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. Introdução</h2>
        <p className="text-gray-700 mb-4">
          A JPC Rodrigues valoriza a sua privacidade. Esta política explica como recolhemos, usamos e protegemos as suas informações pessoais quando utiliza o nosso website.
        </p>
        <p className="text-gray-700">
          Ao utilizar o nosso website, concorda com a recolha e uso das informações de acordo com esta política.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Recolha de Informações</h2>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">2.1 Informações Pessoais</h3>
        <p className="text-gray-700 mb-4">
          Recolhemos informações pessoais que nos fornece voluntariamente, como nome, email, telefone e empresa, quando preenche os nossos formulários de contacto ou de pedido de aluguer de máquinas.
        </p>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">2.2 Dados de Utilização</h3>
        <p className="text-gray-700">
          Podemos recolher informações sobre como o website é acedido e utilizado ("Dados de Utilização"). Estes dados podem incluir o endereço IP do seu computador, tipo de navegador, páginas visitadas, hora e data da visita, tempo gasto nessas páginas e outros dados de diagnóstico.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. Uso das Informações</h2>
        <p className="text-gray-700 mb-4">
          As informações recolhidas são usadas para diversas finalidades, incluindo:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fornecer e manter o nosso website</li>
          <li>Notificá-lo sobre alterações nos nossos serviços</li>
          <li>Permitir que participe em funcionalidades interativas quando as escolher fazer</li>
          <li>Fornecer suporte ao cliente</li>
          <li>Analisar dados para melhorar o nosso website</li>
          <li>Monitorizar o uso do website</li>
          <li>Detetar, prevenir e resolver problemas técnicos</li>
          <li>Processar os seus pedidos de aluguer de máquinas e responder às suas questões</li>
          <li>Enviar comunicações de marketing, se tiver dado o seu consentimento</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Partilha de Informações</h2>
        <p className="text-gray-700">
          Não vendemos, trocamos ou alugamos as suas informações de identificação pessoal a terceiros. Podemos partilhar informações demográficas agregadas não vinculadas a qualquer informação de identificação pessoal sobre visitantes e utilizadores com os nossos parceiros de negócios, afiliados de confiança e anunciantes para os fins descritos acima.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. Segurança dos Dados</h2>
        <p className="text-gray-700">
          A segurança dos seus dados é importante para nós, mas lembre-se que nenhum método de transmissão pela Internet, ou método de armazenamento eletrónico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger os seus dados pessoais, não podemos garantir a sua segurança absoluta.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">6. Os Seus Direitos</h2>
        <p className="text-gray-700">
          De acordo com o Regulamento Geral de Proteção de Dados (RGPD), tem o direito de aceder, retificar, apagar e opor-se ao tratamento dos seus dados pessoais. Para exercer estes direitos, por favor, contacte-nos através de geral@jpcrodrigues.pt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">7. Alterações a Esta Política</h2>
        <p className="text-gray-700">
          Podemos atualizar a nossa Política de Privacidade periodicamente. Iremos notificá-lo de quaisquer alterações, publicando a nova Política de Privacidade nesta página. Aconselhamos a rever esta Política de Privacidade periodicamente para quaisquer alterações.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">8. Contacte-nos</h2>
        <p className="text-gray-700">
          Se tiver alguma questão sobre esta Política de Privacidade, por favor, contacte-nos:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Por email: geral@jpcrodrigues.pt</li>
          <li>Por telefone: +351 913 823 499</li>
        </ul>
      </section>
    </div>
  );
};

export default Privacidade;