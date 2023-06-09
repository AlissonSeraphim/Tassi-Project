import React from 'react';

class MainSection extends React.Component {
  render() {
    return (
      <div className="relative" id="main-section">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2
        -space-x-52 opacity-40 dark:opacity-20"
        >
          <div
            className="blur-[106px] h-56 bg-gradient-to-br
          from-orange-600 to-yellow-400 dark:from-blue-700"
          />
          <div
            className="blur-[106px] h-32 bg-gradient-to-r
          from-red-200 to-yellow-100 dark:to-indigo-600"
          />
        </div>

        <div className="relative pt-36 ml-auto container lg:w-2/3 text-center mx-auto">
          <h1
            className="text-gray-900 dark:text-white font-bold
            text-5xl md:text-6xl xl:text-7xl"
          >
            Referência em construções e reformas com
            {' '}
            <span className=" text-orange-400 dark:text-white">
              mais de 30 anos de experiência.
            </span>
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            Bem-vindo ao site da Tassi Construções e Reformas, uma empresa que
            atua há mais de 30 anos na área de construção civil, executando projetos de
            reformas e construções com alta qualidade e confiabilidade.
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="#talk-to-us"
              className="relative flex h-11 w-full items-center justify-center px-6
              before:absolute before:inset-0 before:rounded-full before:bg-orange-400
              before:transition before:duration-300 hover:before:scale-105
              active:duration-75 active:before:scale-95 sm:w-max text-gray-900"
            >
              <span
                className="relative text-base font-semibold text-white"
              >
                Fale conosco

              </span
              >
            </a>
          </div>
          <div
            className="hidden py-8 mt-16 border-y border-gray-100
             dark:border-gray-800 sm:flex justify-between"
          >
            <div className="text-left">
              <h6
                className="text-lg font-semibold text-gray-700
                 dark:text-white"
              >
                Qualidade
              </h6>
              <p className="mt-2 text-gray-500">
                Enfoque na Qualidade
              </p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                Atendimento
              </h6>
              <p className="mt-2 text-gray-500">
                Soluções personalizadas
              </p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                Satisfação
              </h6>
              <p className="mt-2 text-gray-500">
                Resolução das necessidades
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSection;
