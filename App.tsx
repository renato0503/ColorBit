import React from 'react';
import Hero from './components/Hero';
import Foundations from './components/Foundations';
import Differentiators from './components/Differentiators';
import JourneySimulator from './components/JourneySimulator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-white text-xl tracking-tight">ColorBit</div>
          <button 
            onClick={() => document.getElementById('journey-simulator')?.scrollIntoView({behavior: 'smooth'})}
            className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
          >
            Começar Jornada
          </button>
        </div>
      </header>
      
      <main className="flex-grow pt-16">
        <Hero />
        <Foundations />
        <Differentiators />
        <JourneySimulator />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;