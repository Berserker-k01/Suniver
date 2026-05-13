import React from 'react';
import PageHeader from '../components/PageHeader';
import { Coffee, Wifi, Home as HomeIcon, Dumbbell, Book, Music } from 'lucide-react';

const Campus: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Vie sur le Campus" 
        subtitle="Un environnement dynamique au cœur de Lomé"
        image="https://upload.wikimedia.org/wikipedia/commons/b/b5/Monument_de_l%27ind%C3%A9pendance_du_Togo_%C3%A0_Lom%C3%A9_17.jpg"
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Bien plus qu'un lieu d'étude</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Le campus de l'Université de Lomé est le cœur battant de la jeunesse togolaise. Situé sur un vaste domaine verdoyant, 
          il offre toutes les infrastructures gérées par le COUL (Centre des Œuvres Universitaires de Lomé) pour étudier, se détendre et s'épanouir.
        </p>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-university-100 rounded-full flex items-center justify-center text-university-700 mb-6">
                <HomeIcon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Logement Étudiant</h3>
              <p className="text-slate-600">
                3 résidences modernes situées au cœur du campus, offrant des studios et des appartements partagés entièrement équipés.
              </p>
            </div>

            {/* Facility 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-university-100 rounded-full flex items-center justify-center text-university-700 mb-6">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bibliothèque Connectée</h3>
              <p className="text-slate-600">
                Ouverte 24/7 pendant les périodes d'examens. Plus de 500 000 ouvrages et des espaces de travail collaboratifs insonorisés.
              </p>
            </div>

            {/* Facility 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-university-100 rounded-full flex items-center justify-center text-university-700 mb-6">
                <Dumbbell size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Centre Sportif</h3>
              <p className="text-slate-600">
                Piscine olympique, salle de fitness, terrains de tennis et gymnase multisports accessibles gratuitement aux étudiants.
              </p>
            </div>

            {/* Facility 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-university-100 rounded-full flex items-center justify-center text-university-700 mb-6">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Restaurants (COUL)</h3>
              <p className="text-slate-600">
                Plusieurs restaurants universitaires proposant des plats locaux (Akoumé, Fufu, Riz) à des prix subventionnés pour les étudiants.
              </p>
            </div>

             {/* Facility 5 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-university-100 rounded-full flex items-center justify-center text-university-700 mb-6">
                <Music size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Culture & Arts</h3>
              <p className="text-slate-600">
                Théâtre de 400 places, salle d'exposition et studios de musique. Une programmation culturelle riche tout au long de l'année.
              </p>
            </div>

            {/* Facility 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-university-100 rounded-full flex items-center justify-center text-university-700 mb-6">
                <Wifi size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Campus Numérique</h3>
              <p className="text-slate-600">
                Wifi très haut débit sur tout le campus, application mobile dédiée et salles informatiques équipées des derniers logiciels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Le Campus en Images</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
             <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Graduates" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
             </div>
             <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Students" />
             </div>
             <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Architecture" />
             </div>
             <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Collaboration" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;