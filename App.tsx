import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Campus from './pages/Campus';
import Research from './pages/Research';
import Admissions from './pages/Admissions';
import AiAssistant from './components/AiAssistant';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Programs />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/recherche" element={<Research />} />
            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </HashRouter>
  );
};

export default App;