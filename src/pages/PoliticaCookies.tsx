import React from 'react';

const PoliticaCookies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Política de Cookies</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. O Que São Cookies?</h2>
        <p className="text-gray-700 mb-4">
          Cookies são pequenos ficheiros de texto que são armazenados no seu computador ou dispositivo móvel quando visita um website. Eles são amplamente utilizados para fazer os websites funcionarem, ou funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
        </p>
        <p className="text-gray-700">
          Os cookies podem ser "persistentes" ou "de sessão". Cookies persistentes permanecem no seu dispositivo quando está offline, enquanto os cookies de sessão são eliminados assim que fecha o seu navegador web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Como Utilizamos os Cookies</h2>
        <p className="text-gray-700 mb-4">
          O nosso website utiliza cookies por várias razões, nomeadamente para:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Garantir o funcionamento correto do website.</li>
          <li>Compreender como os utilizadores interagem com o nosso website (cookies analíticos).</li>
          <li>Melhorar a sua experiência de navegação.</li>
          <li>Processar os seus pedidos e formulários (ex: guardar temporariamente dados de um formulário antes do envio).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. Tipos de Cookies Utilizados</h2>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">3.1. Cookies Essenciais/Estritamente Necessários</h3>
        <p className="text-gray-700 mb-4">
          Estes cookies são estritamente necessários para o funcionamento do website e não podem ser desativados nos nossos sistemas. Geralmente, são definidos apenas em resposta a ações feitas por si que equivalem a um pedido de serviços, como definir as suas preferências de privacidade, iniciar sessão ou preencher formulários. Pode configurar o seu navegador para bloquear ou alertá-lo sobre estes cookies, mas algumas partes do site não funcionarão.
        </p>

        <h3 className="text-xl font-semibold text-blue-600 mb-2">3.2. Cookies de Desempenho e Análise</h3>
        <p className="text-gray-700 mb-4">
          Estes cookies permitem-nos contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso website. Eles ajudam-nos a saber quais as páginas mais e menos populares e ver como os visitantes se movem pelo site. Todas as informações que estes cookies recolhem são agregadas e, portanto, anónimas.
        </p>
        <p className="text-gray-700">
          Exemplos: Cookies do Google Analytics (se estiver a usar).
        </p>

        <h3 className="text-xl font-semibold text-blue-600 mb-2">3.3. Cookies de Funcionalidade</h3>
        <p className="text-gray-700 mb-4">
          Estes cookies permitem que o website forneça funcionalidades e personalização melhoradas. Podem ser definidos por nós ou por fornecedores de serviços terceiros cujos serviços adicionámos às nossas páginas. Se não permitir estes cookies, alguns ou todos estes serviços podem não funcionar corretamente.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Gestão de Cookies</h2>
        <p className="text-gray-700 mb-4">
          A maioria dos navegadores web permite algum controlo da maioria dos cookies através das configurações do navegador. No entanto, se limitar a capacidade de websites para definir cookies, poderá prejudicar a sua experiência geral de utilizador, uma vez que não será mais personalizado para si. Também poderá impedi-lo de guardar configurações personalizadas, como credenciais de login.
        </p>
        <p className="text-gray-700">
          Pode gerir as suas preferências de cookies diretamente no seu navegador. Consulte a documentação do seu navegador para saber como.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. Alterações à Política de Cookies</h2>
        <p className="text-gray-700">
          Podemos atualizar a nossa Política de Cookies periodicamente. Quaisquer alterações serão publicadas nesta página. Aconselhamos a rever esta Política periodicamente para quaisquer alterações.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">6. Contacte-nos</h2>
        <p className="text-gray-700">
          Se tiver alguma questão sobre esta Política de Cookies, por favor, contacte-nos:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Por email: geral@jpcrodrigues.pt</li>
          <li>Por telefone: +351 913 823 499</li>
        </ul>
      </section>
    </div>
  );
};

export default PoliticaCookies;