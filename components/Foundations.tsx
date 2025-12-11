import React from 'react';
import { MessageCircle, UserCheck, PackageCheck, AlertCircle } from 'lucide-react';
import { PILLARS } from '../constants';

const Foundations: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'message-circle': return <MessageCircle className="w-8 h-8 text-pink-500" />;
      case 'user-check': return <UserCheck className="w-8 h-8 text-purple-500" />;
      case 'package-check': return <PackageCheck className="w-8 h-8 text-indigo-500" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Purpose */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-pink-600 font-semibold uppercase tracking-wider text-sm">
            <AlertCircle size={18} />
            <span>Nosso Propósito</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Soluções reais para problemas comuns
          </h2>
          <p className="text-lg text-slate-600">
            Nascemos para eliminar a escolha incorreta de cores, a insegurança com a qualidade da mão de obra e os pesadelos logísticos de materiais.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                {getIcon(pillar.iconName)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundations;