import React from 'react';
import { ArrowRight, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToJourney = () => {
    const element = document.getElementById('journey-simulator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] bg-pink-600 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-pink-300 mb-6">
          <Palette size={16} />
          <span>Consultoria 360° em Pintura</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-purple-200">
          ColorBit – A Consultoria da Cor, da Escolha à Execução
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Unimos arte, técnica e logística para transformar seus ambientes. 
          Esqueça as dúvidas sobre tons e a dor de cabeça com a obra.
        </p>
        
        <button 
          onClick={scrollToJourney}
          className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-pink-500/25 transform hover:-translate-y-1"
        >
          Inicie Sua Jornada de Cor Agora
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;