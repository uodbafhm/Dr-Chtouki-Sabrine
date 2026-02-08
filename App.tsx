
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import BackgroundBlobs from './components/BackgroundBlobs';
import { Language } from './types';
import { PHONE } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('FR');

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    document.documentElement.dir = newLang === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang.toLowerCase();
  };

  return (
    <Router>
      <div className="min-h-screen relative flex flex-col">
        <BackgroundBlobs />
        <Navbar currentLang={lang} onLangChange={handleLangChange} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home currentLang={lang} />} />
            <Route path="/about" element={<About currentLang={lang} />} />
            <Route path="/contact" element={<Contact currentLang={lang} />} />
          </Routes>
        </main>

        <Footer currentLang={lang} />
        
        {/* Quick Contact Floating Button - Now updated to Call Icon */}
        <a 
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(13,148,136,0.4)] hover:scale-110 active:scale-95 transition-all animate-bounce border-4 border-white"
          title="Appelez-nous"
        >
          <i className="fa-solid fa-phone text-2xl"></i>
        </a>
      </div>
    </Router>
  );
};

export default App;
