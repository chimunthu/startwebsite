import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Start Space</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre Nós</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#community" className="text-gray-700 hover:text-blue-600">Comunidade</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Começar Agora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre Nós</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Serviços</a>
              <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Comunidade</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</a>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
