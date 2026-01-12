import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Formations', path: '/formations' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Vie sur le Campus', path: '/campus' },
    { name: 'Recherche', path: '/recherche' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <div className={`p-2 rounded-lg transition-colors ${isScrolled || isOpen ? 'bg-university-700 text-white' : 'bg-white text-university-900'}`}>
              <GraduationCap size={28} />
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled || isOpen ? 'text-slate-900' : 'text-white'}`}>
              Université <span className={isScrolled || isOpen ? 'text-university-700' : 'text-university-300'}>Horizon</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 relative group ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-slate-600 hover:text-university-700'
                    : 'text-slate-200 hover:text-white'
                } ${location.pathname === link.path ? (isScrolled ? 'text-university-700 font-semibold' : 'text-white font-semibold') : ''}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-university-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link to="/admissions" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${
                isScrolled 
                ? 'bg-gradient-to-r from-university-600 to-university-800 text-white shadow-university-500/30' 
                : 'bg-white text-university-900 hover:bg-slate-50 shadow-black/10'
            }`}>
              Candidater
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled || isOpen ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-4 rounded-md text-base font-medium border-b border-slate-100 ${
                  location.pathname === link.path
                    ? 'text-university-700 bg-university-50'
                    : 'text-slate-700 hover:text-university-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/admissions" onClick={closeMenu} className="block w-full text-center px-5 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-university-600 to-university-800 shadow-lg shadow-university-500/30">
                Candidater maintenant
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;