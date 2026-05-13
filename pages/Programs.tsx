import React from 'react';
import PageHeader from '../components/PageHeader';
import { Program } from '../types';
import { Search, Filter, Clock, Award, ArrowRight } from 'lucide-react';

const programs: Program[] = [
  {
    id: '1',
    title: "Licence en Droit Privé",
    degree: 'Licence',
    faculty: 'Droit Privé',
    duration: '3 ans',
    description: 'Une base solide en droit civil, droit des obligations, droit commercial et droit du travail. Idéal pour les futures carrières d\'avocat ou de conseil juridique.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: "Licence en Droit Public",
    degree: 'Licence',
    faculty: 'Droit Public',
    duration: '3 ans',
    description: 'Étudiez les relations entre l\'État, les institutions et les citoyens. Spécialisez-vous en droit constitutionnel et administratif.',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: "Master en Droit des Affaires (OHADA)",
    degree: 'Master',
    faculty: 'Droit Privé',
    duration: '2 ans',
    description: 'Une spécialisation de pointe sur le droit uniforme africain, essentielle pour les juristes d\'entreprise dans l\'espace OHADA.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: "Master en Droit International",
    degree: 'Master',
    faculty: 'Droit Public',
    duration: '2 ans',
    description: 'Enjeux géopolitiques, diplomatie et régulations internationales. Préparez-vous aux carrières dans les organisations internationales.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: "Master en Sciences Criminelles",
    degree: 'Master',
    faculty: 'Droit Privé',
    duration: '2 ans',
    description: 'Approfondissez vos connaissances en droit pénal, procédure pénale et criminologie pour les carrières judiciaires.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: "Doctorat en Droit",
    degree: 'Doctorat',
    faculty: 'Recherche',
    duration: '3-5 ans',
    description: 'Recherche doctorale avancée sous la supervision de nos professeurs titulaires pour devenir enseignant-chercheur.',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        title="Nos Formations" 
        subtitle="Des programmes adaptés aux réalités juridiques du Togo et de l'OHADA"
        image="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un programme, un mot-clé..." 
              className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-university-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
            />
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-medium transition-all w-1/2 md:w-auto">
              <Filter size={18} />
              Filtres
            </button>
            <button className="px-8 py-3.5 bg-university-700 text-white rounded-xl font-bold hover:bg-university-800 transition-all shadow-lg hover:shadow-university-500/30 hover:-translate-y-0.5 w-1/2 md:w-auto">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 flex flex-col h-full group">
              <div className="h-52 overflow-hidden relative">
                 <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-university-800 shadow-sm border border-white/50">
                   {program.faculty}
                 </div>
              </div>
              <div className="p-7 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                    program.degree === 'Licence' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                    program.degree === 'Master' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
                    'bg-amber-50 text-amber-700 border border-amber-100'
                  }`}>
                    {program.degree}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-university-700 transition-colors">{program.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{program.description}</p>
                
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-university-400" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award size={16} className="text-university-400" />
                    <span>Diplôme d'État</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-3 border border-university-200 text-university-700 rounded-xl font-bold hover:bg-university-50 hover:border-university-300 transition-all flex items-center justify-center group/btn">
                  Voir le programme
                  <ArrowRight size={18} className="ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;