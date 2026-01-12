import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Trophy, Globe, PlayCircle } from 'lucide-react';
import { NewsItem } from '../types';

const newsData: NewsItem[] = [
  {
    id: '1',
    title: "L'Université Horizon classée dans le top 10 européen",
    date: '12 Mars 2024',
    category: 'Excellence',
    summary: "Notre engagement envers une recherche de qualité et un enseignement innovant a été récompensé par le dernier classement international.",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: "Inauguration du nouveau centre de biotechnologie",
    date: '08 Mars 2024',
    category: 'Campus',
    summary: "Un espace de 5000m² dédié à l'innovation médicale et aux sciences du vivant ouvre ses portes aux étudiants.",
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: "Semaine de l'art et de la culture : programme dévoilé",
    date: '01 Mars 2024',
    category: 'Vie Étudiante',
    summary: "Expositions, concerts et théâtre : découvrez les talents de notre communauté universitaire la semaine prochaine.",
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800'
  }
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] -mt-20 flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920" 
            alt="University Campus Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-university-500/20 text-university-200 border border-university-500/30 text-xs font-bold tracking-widest mb-6 backdrop-blur-sm shadow-lg shadow-black/10">
              ADMISSIONS OUVERTES 2024-2025
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-sm">
              L'excellence à <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-university-300 to-university-100">portée de main.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Rejoignez une communauté mondiale de penseurs et d'innovateurs. Construisez votre avenir dans un environnement qui valorise le savoir et l'audace.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/formations" className="group relative inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-university-600 to-university-700 hover:from-university-500 hover:to-university-600 text-white rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-university-500/40 shadow-lg shadow-university-900/20 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Découvrir nos programmes
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              </Link>
              
              <button className="group inline-flex justify-center items-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:-translate-y-1 hover:shadow-lg shadow-black/10">
                <PlayCircle className="mr-2 opacity-80 group-hover:text-university-300 transition-colors" size={20} />
                Visite virtuelle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-16 relative z-20 mx-4 sm:mx-8 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 max-w-7xl lg:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center group cursor-default">
            <div className="text-university-600 mb-3 flex justify-center transform group-hover:scale-110 transition-transform duration-300"><Users size={32} /></div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900">15k+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Étudiants</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-university-600 mb-3 flex justify-center transform group-hover:scale-110 transition-transform duration-300"><BookOpen size={32} /></div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900">200+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Programmes</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-university-600 mb-3 flex justify-center transform group-hover:scale-110 transition-transform duration-300"><Trophy size={32} /></div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900">Top 50</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Classement Mondial</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-university-600 mb-3 flex justify-center transform group-hover:scale-110 transition-transform duration-300"><Globe size={32} /></div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900">98%</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Taux d'insertion</div>
          </div>
        </div>
      </section>

      {/* Academic Areas Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Domaines d'Étude</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-university-400 to-university-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Explorez nos facultés et trouvez la voie qui correspond à vos ambitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" alt="Sciences" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">Sciences & Technologies</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Ingénierie, Informatique, Biologie, Physique
                </p>
              </div>
            </div>
            
            <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 mt-0 md:-mt-8">
              <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800" alt="Arts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">Arts & Humanités</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Littérature, Histoire, Philosophie, Langues
                </p>
              </div>
            </div>

            <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" alt="Business" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">Économie & Gestion</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Management, Finance, Marketing, Droit
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/formations" className="inline-block px-8 py-3.5 bg-transparent border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Voir tous les programmes
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Actualités</h2>
              <div className="w-16 h-1.5 bg-university-500 mt-4 rounded-full"></div>
            </div>
            <a href="#" className="hidden md:flex items-center text-university-700 font-bold hover:text-university-900 transition-colors group">
              Toutes les actualités <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:border-university-100 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-university-800 uppercase tracking-wide shadow-sm">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-slate-400 text-sm mb-2 font-medium">{news.date}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-university-700 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-5 leading-relaxed">
                    {news.summary}
                  </p>
                  <a href="#" className="inline-flex items-center text-university-600 text-sm font-bold hover:text-university-800 transition-colors group/link">
                    Lire la suite <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-university-900 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-university-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-university-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Prêt à façonner votre avenir ?</h2>
          <p className="text-lg text-university-100 mb-12 max-w-2xl mx-auto">
            Les candidatures pour la rentrée de septembre sont ouvertes. Rejoignez l'Université Horizon et commencez votre parcours vers l'excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/admissions" className="px-8 py-4 bg-white text-university-900 rounded-xl font-bold hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg flex items-center justify-center">
              Candidater maintenant
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <button className="px-8 py-4 bg-transparent border-2 border-university-400 text-university-100 rounded-xl font-bold hover:bg-university-800/50 hover:border-university-300 hover:text-white transition-all duration-300 flex items-center justify-center">
              Télécharger la brochure
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;