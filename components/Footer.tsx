import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="text-university-400" size={32} />
              <span className="font-serif text-2xl font-bold">Université Horizon</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Former les leaders de demain grâce à une excellence académique, une recherche innovante et une communauté inclusive.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-university-600 hover:text-white transition-all duration-300 hover:-translate-y-1"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-university-600 hover:text-white transition-all duration-300 hover:-translate-y-1"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-university-600 hover:text-white transition-all duration-300 hover:-translate-y-1"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-university-600 hover:text-white transition-all duration-300 hover:-translate-y-1"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-university-100">Navigation</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-university-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-university-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Accueil</Link></li>
              <li><Link to="/formations" className="hover:text-university-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-university-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Nos Formations</Link></li>
              <li><Link to="/campus" className="hover:text-university-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-university-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Vie Étudiante</Link></li>
              <li><Link to="/recherche" className="hover:text-university-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-university-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Recherche & Innovation</Link></li>
              <li><a href="#" className="hover:text-university-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-university-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Admissions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-university-100">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start space-x-3 group">
                <MapPin size={18} className="text-university-400 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">123 Avenue du Savoir<br />75000 Paris, France</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone size={18} className="text-university-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={18} className="text-university-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">contact@univ-horizon.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-university-100">Restez informé</h3>
            <p className="text-slate-400 text-sm mb-4">Abonnez-vous à notre newsletter pour les dernières nouvelles.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-university-500 focus:ring-1 focus:ring-university-500 transition-all text-sm"
              />
              <button className="bg-university-600 hover:bg-university-500 text-white px-4 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-university-500/20 text-sm">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Université Horizon. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;