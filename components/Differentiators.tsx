import React from 'react';
import { Eye, TrendingDown, Crosshair, ShieldCheck } from 'lucide-react';
import { DIFFERENTIALS } from '../constants';

const Differentiators: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'eye': return <Eye className="w-6 h-6 text-white" />;
      case 'trending-down': return <TrendingDown className="w-6 h-6 text-white" />;
      case 'crosshair': return <Crosshair className="w-6 h-6 text-white" />;
      case 'shield-check': return <ShieldCheck className="w-6 h-6 text-white" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que a ColorBit?</h2>
          <p className="text-slate-400">Nossos diferenciais competitivos no mercado.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;