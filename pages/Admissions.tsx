import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, FileCheck, UserCheck, Send, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

const Admissions: React.FC = () => {
  const steps = [
    {
      icon: <UserCheck size={28} />,
      title: "1. Créez votre compte",
      desc: "Inscrivez-vous sur notre portail candidat pour commencer votre dossier."
    },
    {
      icon: <FileCheck size={28} />,
      title: "2. Soumettez vos documents",
      desc: "Relevés de notes, lettre de motivation et lettres de recommandation."
    },
    {
      icon: <Send size={28} />,
      title: "3. Payez les frais",
      desc: "Réglez les frais de dossier de 50€ (non remboursables) pour valider l'envoi."
    },
    {
      icon: <Calendar size={28} />,
      title: "4. Entretien",
      desc: "Les candidats admissibles seront conviés à un entretien de motivation."
    }
  ];

  const faqs = [
    {
      q: "Quel est le coût de la scolarité ?",
      a: "Les frais varient selon le programme. Pour une Licence, comptez environ 170€ par an pour les ressortissants UE, et 2770€ pour les étudiants internationaux."
    },
    {
      q: "Proposez-vous des bourses ?",
      a: "Oui, nous offrons des bourses au mérite et des aides sociales. Plus de 30% de nos étudiants bénéficient d'une aide financière."
    },
    {
      q: "Puis-je candidater à plusieurs programmes ?",
      a: "Oui, vous pouvez sélectionner jusqu'à 3 vœux dans votre dossier de candidature unique."
    },
    {
      q: "Les cours sont-ils en anglais ?",
      a: "La majorité des cours de Licence sont en français. Cependant, de nombreux Masters sont enseignés à 100% en anglais."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        title="Admissions" 
        subtitle="Rejoignez une communauté d'excellence. Votre avenir commence par un clic."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Processus de Candidature</h2>
        <p className="text-lg text-slate-600 mb-8">
          Nous recherchons des étudiants curieux, ambitieux et engagés. 
          La procédure est entièrement dématérialisée pour simplifier vos démarches.
        </p>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-serif text-7xl font-bold text-university-900 group-hover:opacity-10 transition-opacity">
                {index + 1}
              </div>
              <div className="w-16 h-16 bg-university-50 rounded-2xl flex items-center justify-center text-university-600 mb-6 group-hover:bg-university-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-university-500/30">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deadlines & Key Dates */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
             <div className="lg:w-1/2">
               <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Calendrier 2024-2025</h2>
               <div className="space-y-6">
                 <div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                   <div className="w-20 flex-shrink-0 text-center bg-university-50 rounded-xl p-3 border border-university-100">
                     <span className="block text-xs font-bold text-university-600 uppercase tracking-wider">Jan</span>
                     <span className="block text-3xl font-bold text-university-800">15</span>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-lg mb-1">Ouverture des candidatures</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">Le portail est accessible pour tous les niveaux (Licence, Master, Doctorat).</p>
                   </div>
                 </div>
                 <div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                   <div className="w-20 flex-shrink-0 text-center bg-amber-50 rounded-xl p-3 border border-amber-100">
                     <span className="block text-xs font-bold text-amber-600 uppercase tracking-wider">Avr</span>
                     <span className="block text-3xl font-bold text-amber-800">30</span>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-lg mb-1">Date limite - Session 1</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">Fermeture des vœux pour la première session d'admission.</p>
                   </div>
                 </div>
                 <div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                   <div className="w-20 flex-shrink-0 text-center bg-slate-100 rounded-xl p-3 border border-slate-200">
                     <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Juin</span>
                     <span className="block text-3xl font-bold text-slate-700">15</span>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-lg mb-1">Résultats d'admission</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">Communication des résultats par email et sur le portail.</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="lg:w-1/2 bg-university-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-university-900/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-university-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-university-800 rounded-full mix-blend-overlay filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                   <h3 className="text-3xl font-serif font-bold mb-6">Prêt à vous lancer ?</h3>
                   <p className="text-university-100 mb-8 leading-relaxed text-lg">
                     Ne manquez pas l'opportunité d'étudier dans l'une des meilleures universités d'Europe. 
                     Préparez vos documents dès maintenant.
                   </p>
                   <ul className="space-y-4 mb-10">
                     <li className="flex items-center gap-3 text-sm font-medium">
                       <CheckCircle size={20} className="text-green-400" /> 
                       <span>Pas de frais cachés</span>
                     </li>
                     <li className="flex items-center gap-3 text-sm font-medium">
                       <CheckCircle size={20} className="text-green-400" /> 
                       <span>Support disponible 7j/7</span>
                     </li>
                     <li className="flex items-center gap-3 text-sm font-medium">
                       <CheckCircle size={20} className="text-green-400" /> 
                       <span>Réponse sous 4 semaines</span>
                     </li>
                   </ul>
                   <button className="w-full bg-white text-university-900 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 flex justify-center items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                     Accéder au Portail Candidat <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-4 bg-university-50 text-university-700 rounded-full mb-6">
             <HelpCircle size={32} />
           </div>
           <h2 className="text-3xl font-serif font-bold text-slate-900">Questions Fréquentes</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admissions;