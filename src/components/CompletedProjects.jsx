/* eslint-disable react/jsx-max-depth */
import React from 'react';

class CompletedProjects extends React.Component {
  render() {
    return (
      <section className="text-gray-600 body-font" id="completed-projects">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1
                className="sm:text-3xl text-2xl font-medium
              title-font mb-2 text-gray-900"
              >
                Cases de Sucesso
              </h1>
              <div className="h-1 w-20 bg-secondary rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Alguns trabalhos realizados ao longo de 30 anos de atuação
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="../dist/images/obras/deck.jpg"
                  alt="content"
                />
                <h3
                  className="tracking-widest text-secondary text-xs font-medium
                title-font"
                >
                  CONSTRUÇÃO
                </h3>
                <h2
                  className="text-lg text-gray-900 font-medium title-font
                mb-4"
                >
                  Deck para Piscina
                </h2>
                <p className="leading-relaxed text-base">
                  Construção de deck para piscina.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="../dist/images/obras/predio.jpg"
                  alt="content"
                />
                <h3
                  className="tracking-widest text-secondary text-xs font-medium
                title-font"
                >
                  CONSTRUÇÃO
                </h3>
                <h2
                  className="text-lg text-gray-900 font-medium title-font
                mb-4"
                >
                  Prédio com 5 Apartamentos
                </h2>
                <p className="leading-relaxed text-base">
                  Construção de prédio de 2 andares com 5 apartamentos construido em 2010.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="../dist/images/obras/reforma.jpg"
                  alt="content"
                />
                <h3
                  className="tracking-widest text-secondary text-xs
                font-medium title-font"
                >
                  REFORMA
                </h3>
                <h2
                  className="text-lg text-gray-900 font-medium
                title-font mb-4"
                >
                  Sala de Jogos
                </h2>
                <p className="leading-relaxed text-base">
                  Reforma de sala de jogos.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="../dist/images/obras/pisovitrificado.jpg"
                  alt="content"
                />
                <h3
                  className="tracking-widest text-secondary text-xs
                font-medium title-font"
                >
                  IMPLEMENTAÇÃO
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Piso Vitrificado 3D
                </h2>
                <p className="leading-relaxed text-base">
                  Implementação de piso vitrificado 3D (Porcelanato Liquido),
                  produto inovador de alta resistência e excelente
                  acabamento altamente personalizavel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompletedProjects;
