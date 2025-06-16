import React from 'react';

const TermoseCondicoes = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Termos e Condições</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. Âmbito e Objeto</h2>
        <p className="text-gray-700 mb-4">
          Os presentes Termos e Condições de Utilização (doravante “Termos”) regulam o acesso e a utilização do website da JPC Rodrigues (doravante “Website”), disponível em [O SEU DOMÍNIO AQUI]. Ao aceder ou utilizar o Website, o utilizador concorda em ficar vinculado pelos presentes Termos. Caso não concorde com alguma disposição, não deverá utilizar o Website.
        </p>
        <p className="text-gray-700">
          Este Website destina-se a fornecer informações sobre os serviços de corte e furação de betão da JPC Rodrigues, bem como a facilitar pedidos de contacto e de aluguer de máquinas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Direitos de Propriedade Intelectual</h2>
        <p className="text-gray-700 mb-4">
          Todo o conteúdo presente no Website, incluindo textos, gráficos, logótipos, ícones, imagens, vídeos, clips de áudio, compilações de dados e software, é propriedade da JPC Rodrigues ou dos seus fornecedores de conteúdo, e é protegido pelas leis de direitos de autor e outras leis de propriedade intelectual.
        </p>
        <p className="text-gray-700">
          A reprodução, modificação, distribuição, transmissão, republicação, exibição ou execução de qualquer conteúdo do Website é estritamente proibida sem o consentimento prévio por escrito da JPC Rodrigues.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. Utilização do Website</h2>
        <p className="text-gray-700 mb-4">
          O utilizador compromete-se a fazer um uso adequado e lícito do Website e dos seus conteúdos, em conformidade com a legislação aplicável, os presentes Termos, a moral e os bons costumes geralmente aceites e a ordem pública.
        </p>
        <p className="text-gray-700">
          É proibido:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Utilizar o Website para fins ilegais ou não autorizados.</li>
          <li>Introduzir ou difundir vírus informáticos ou quaisquer outros sistemas físicos ou lógicos que sejam suscetíveis de causar danos aos sistemas informáticos da JPC Rodrigues ou de terceiros.</li>
          <li>Tentar aceder, utilizar e/ou manipular os dados da JPC Rodrigues, de terceiros ou de outros utilizadores.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Pedidos de Contacto e Aluguer</h2>
        <p className="text-gray-700 mb-4">
          Ao submeter um formulário de contacto ou de pedido de aluguer de máquina através do Website, o utilizador garante que todas as informações fornecidas são verdadeiras, precisas, atuais e completas.
        </p>
        <p className="text-gray-700">
          Os pedidos de aluguer de máquinas estão sujeitos à disponibilidade e a um contrato formal de aluguer a ser estabelecido separadamente entre a JPC Rodrigues e o cliente. A submissão do formulário online não constitui um contrato de aluguer vinculativo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. Limitação de Responsabilidade</h2>
        <p className="text-gray-700 mb-4">
          A JPC Rodrigues envida os seus melhores esforços para garantir que a informação no Website é precisa e atualizada, mas não garante a sua total exatidão ou completude.
        </p>
        <p className="text-gray-700">
          A JPC Rodrigues não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes da utilização ou da incapacidade de utilizar o Website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">6. Links para Websites de Terceiros</h2>
        <p className="text-gray-700">
          O Website pode conter links para websites de terceiros. A JPC Rodrigues não tem controlo sobre o conteúdo ou as práticas de privacidade desses websites e não aceita qualquer responsabilidade ou obrigação por eles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">7. Alterações aos Termos</h2>
        <p className="text-gray-700">
          A JPC Rodrigues reserva-se o direito de alterar os presentes Termos a qualquer momento. Quaisquer alterações serão publicadas nesta página. A sua utilização continuada do Website após a publicação de alterações constitui aceitação das mesmas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">8. Lei Aplicável e Jurisdição</h2>
        <p className="text-gray-700">
          Os presentes Termos serão regidos e interpretados de acordo com as leis de Portugal. Quaisquer litígios decorrentes dos presentes Termos serão submetidos à jurisdição exclusiva dos tribunais de Portugal.
        </p>
      </section>
    </div>
  );
};

export default TermoseCondicoes;