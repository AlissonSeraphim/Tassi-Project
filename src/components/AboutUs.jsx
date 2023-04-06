/* eslint-disable react/jsx-max-depth */
import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <section className="text-gray-600 body-font" id="aboutUs">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center
              h-full w-full"
                src="../dist/images/obras/pai.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div
                  className="w-20 h-20 rounded-full inline-flex
                items-center justify-center bg-gray-200 text-gray-400"
                >
                  <img
                    alt="content"
                    className="object-cover object-center
                  h-full w-full rounded-lg"
                    src="../dist/images/obras/pai2.png"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Adilson Tassi
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base">
                    Técnico em Construção Cívil e CEO da Tassi Construções.
                  </p>
                </div>
              </div>
              <div
                className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200
              sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
              >
                <p className="leading-relaxed text-lg mb-4">
                  Dono de uma empresa de construção civil com 30 anos de experiência
                  no mercado, iniciei minha carreira como servente de pedreiro e,
                  ao longo dos anos, adquiri conhecimentos e habilidades que me levaram
                  a criar a Tassi Construções.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Ao longo do tempo, observei que a construção civil é uma área em que os
                  clientes muitas vezes enfrentam problemas com prazos,
                  orçamentos e qualidade.Ainda que, a construção de uma casa ou de um
                  prédio é um sonho para muitas pessoas onde os clientes colocam em
                  nossas mãos a responsabilidade de tornar esse sonho realidade.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Visto isso, faço questão de estar presente e incluir o
                  cliente em todas as etapas do processo, desde o projeto até a entrega
                  da obra.Se você está pensando em construir ou reformar sua
                  casa ou seu prédio, não deixe de conhecer o
                  trabalho da Tassi Construções e nossa equipe.
                  Você certamente não se arrependerá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
