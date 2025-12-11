import React from 'react';
import { Palette } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
              <Palette className="text-pink-500" />
              <span>ColorBit</span>
            </div>
            <p className="text-lg text-slate-300 mb-6 max-w-md">
              Sua Visão Colorida, Nossa Execução Precisa.
            </p>
            <p className="text-sm">
              A única consultoria que integra Design, Logística e Mão de Obra em um único fluxo.
            </p>
          </div>

          {/* Target Audience */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Público-Alvo</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></span>
                Pessoas Físicas (Residencial)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></span>
                Empresas de Médio Porte
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></span>
                Corporativo & Escritórios
              </li>
            </ul>
          </div>

          {/* Market Context */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contexto de Mercado</h4>
            <p className="text-sm mb-4">
              Diferente de grandes varejistas como <em>Leroy Merlin</em>, <em>Nortão</em> ou <em>CoreseCia</em>, nós não apenas vendemos tinta.
            </p>
            <p className="text-sm text-pink-400 font-medium">
              Nós garantimos a cor aplicada na parede.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-sm">
          &copy; {new Date().getFullYear()} ColorBit. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;