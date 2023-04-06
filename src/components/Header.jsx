import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header
        className="text-gray-900 body-font"
      >
        <div
          className="container mx-auto flex flex-wrap
          p-5 flex-col md:flex-row items-center text-gray-900"
        >
          <a
            href="main-section"
            className="flex title-font font-medium
            items-center text-gray-900 mb-4 md:mb-0 hover:text-orange-500"
          >
            <img
              src="../dist/images/obras/colher.png"
              alt="icone-colher"
              className="flex md:flex-row h-12 w-12"
            />
            <span
              className="ml-3 text-2xl font-bold dark:text-white"
            >
              Tassi Construções

            </span>
          </a>
          <nav
            className="md:ml-auto flex flex-wrap items-center text-base justify-center"
          >
            <a
              href="quem-somos"
              className="mr-5 text-gray-900 hover:text-orange-500"
            >
              Quem somos

            </a>
            <a
              href="cases-de-sucesso"
              className="mr-5  text-gray-900 hover:text-orange-500"
            >
              Cases de sucesso

            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
