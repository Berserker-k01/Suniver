import React from 'react';
import PageHeader from '../components/PageHeader';
import { Microscope, Globe, Cpu, ArrowRight } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        title="Recherche & Innovation" 
        subtitle="Repousser les frontières de la connaissance pour un monde meilleur"
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Notre Mission Scientifique</h2>
             <p className="text-lg text-slate-700 leading-relaxed mb-6">
               L'Université Horizon est un pôle de recherche de renommée internationale. Nos chercheurs travaillent 
               sur les défis les plus pressants de notre époque, du changement climatique à l'intelligence artificielle 
               éthique, en passant par les nouvelles thérapies médicales.
             </p>
             <p className="text-lg text-slate-700 leading-relaxed mb-8">
               Avec plus de 40 laboratoires et 1500 publications par an, nous contribuons activement à façonner 
               la société de demain.
             </p>
             <div className="flex gap-4">
               <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 flex-1">
                 <div className="text-3xl font-bold text-university-700">40+</div>
                 <div className="text-sm text-slate-500">Laboratoires</div>
               </div>
               <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 flex-1">
                 <div className="text-3xl font-bold text-university-700">120M€</div>
                 <div className="text-sm text-slate-500">Budget Annuel</div>
               </div>
               <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 flex-1">
                 <div className="text-3xl font-bold text-university-700">5</div>
                 <div className="text-sm text-slate-500">Prix Nobel (Alumni)</div>
               </div>
             </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-university-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Chercheuse en droit" className="rounded-2xl shadow-2xl relative z-10 w-full" />
          </div>
        </div>
      </section>

      {/* Research Axes */}
      <section className="mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Axes Prioritaires</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-university-500 hover:-translate-y-2 transition-transform duration-300">
               <Microscope className="text-university-600 mb-6" size={40} />
               <h3 className="text-xl font-bold text-slate-900 mb-3">Santé & Biotechnologies</h3>
               <p className="text-slate-600 mb-6">
                 Développement de nouvelles thérapies géniques, recherche sur le cancer et médecine personnalisée.
               </p>
               <a href="#" className="text-university-600 font-semibold flex items-center hover:text-university-800">
                 En savoir plus <ArrowRight size={16} className="ml-1" />
               </a>
             </div>

             <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-500 hover:-translate-y-2 transition-transform duration-300">
               <Globe className="text-emerald-600 mb-6" size={40} />
               <h3 className="text-xl font-bold text-slate-900 mb-3">Environnement & Climat</h3>
               <p className="text-slate-600 mb-6">
                 Étude des écosystèmes, énergies renouvelables et solutions durables pour les villes de demain.
               </p>
               <a href="#" className="text-emerald-600 font-semibold flex items-center hover:text-emerald-800">
                 En savoir plus <ArrowRight size={16} className="ml-1" />
               </a>
             </div>

             <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-violet-500 hover:-translate-y-2 transition-transform duration-300">
               <Cpu className="text-violet-600 mb-6" size={40} />
               <h3 className="text-xl font-bold text-slate-900 mb-3">Numérique & IA</h3>
               <p className="text-slate-600 mb-6">
                 Intelligence artificielle, cybersécurité, informatique quantique et leurs impacts sociétaux.
               </p>
               <a href="#" className="text-violet-600 font-semibold flex items-center hover:text-violet-800">
                 En savoir plus <ArrowRight size={16} className="ml-1" />
               </a>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Research;