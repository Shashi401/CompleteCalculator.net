import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calculator, Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const calculators = [
    { name: 'Basic Calculator', path: '/basic-calculator' },
    { name: 'Scientific Calculator', path: '/scientific-calculator' },
    { name: 'BMI Calculator', path: '/bmi-calculator' },
    { name: 'Mortgage Calculator', path: '/mortgage-calculator' },
    { name: 'Unit Converter', path: '/unit-converter' },
    { name: 'Date Calculator', path: '/date-calculator' },
    { name: 'Grade Calculator', path: '/grade-calculator' },
    { name: 'Percentage Calculator', path: '/percentage-calculator' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = calculators.find(calc => 
      calc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (found) {
      navigate(found.path);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <Calculator className="w-8 h-8" />
            <span className="text-xl font-bold">Calculator.net</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search calculators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/basic-calculator" className="text-gray-700 hover:text-blue-600 transition-colors">Basic</Link>
            <Link to="/scientific-calculator" className="text-gray-700 hover:text-blue-600 transition-colors">Scientific</Link>
            <Link to="/bmi-calculator" className="text-gray-700 hover:text-blue-600 transition-colors">Health</Link>
            <Link to="/mortgage-calculator" className="text-gray-700 hover:text-blue-600 transition-colors">Finance</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="mb-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search calculators..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </form>
            </div>
            <nav className="space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/basic-calculator" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Basic Calculator</Link>
              <Link to="/scientific-calculator" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Scientific Calculator</Link>
              <Link to="/bmi-calculator" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">BMI Calculator</Link>
              <Link to="/mortgage-calculator" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Mortgage Calculator</Link>
              <Link to="/unit-converter" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Unit Converter</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;