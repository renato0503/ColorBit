import React, { useState } from 'react';
import { Lightbulb, Palette, Users, Truck, PaintBucket, ChevronRight, CheckCircle2 } from 'lucide-react';
import { JOURNEY_STEPS } from '../constants';

const JourneySimulator: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);

  const activeStep = JOURNEY_STEPS.find(s => s.id === activeStepId) || JOURNEY_STEPS[0];

  const getIcon = (name: string, isActive: boolean) => {
    const className = `w-6 h-6 ${isActive ? 'text-white' : 'text-slate-500'}`;
    switch (name) {
      case 'lightbulb': return <Lightbulb className={className} />;
      case 'palette': return <Palette className={className} />;
      case 'users': return <Users className={className} />;
      case 'truck': return <Truck className={className} />;
      case 'paint-bucket': return <PaintBucket className={className} />;
      default: return null;
    }
  };

  return (
    <section id="journey-simulator" className="py-20 bg-gradient-to-b from-slate-50 to-pink-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            Simulação Interativa
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            A Jornada do Cliente ColorBit
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Clique nos passos abaixo para entender como transformamos sua visão em realidade, fase por fase.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Stepper Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {JOURNEY_STEPS.map((step) => {
                const isActive = activeStepId === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border-2 ${
                      isActive 
                        ? 'bg-white border-pink-500 shadow-lg scale-105 z-10' 
                        : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-pink-500' : 'bg-slate-200'
                    }`}>
                      {getIcon(step.iconName, isActive)}
                    </div>
                    <div>
                      <div className={`text-sm font-bold uppercase tracking-wider mb-0.5 ${isActive ? 'text-pink-600' : 'text-slate-400'}`}>
                        Fase {step.id}
                      </div>
                      <h3 className={`font-semibold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {step.title}
                      </h3>
                    </div>
                    {isActive && <ChevronRight className="ml-auto text-pink-500 w-5 h-5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 h-full relative overflow-hidden">
              
              {/* Decorative background circle */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 animate-fade-in key={activeStep.id}">
                <div className="inline-block px-4 py-2 rounded-lg bg-pink-100 text-pink-700 font-bold text-sm mb-6">
                  Fase {activeStep.id} de 5
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {activeStep.title}
                </h3>
                <p className="text-xl text-slate-500 mb-10 font-light italic">
                  "{activeStep.shortDesc}"
                </p>

                <div className="space-y-8">
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">1</span>
                      Ação (O que acontece)
                    </h4>
                    <p className="text-slate-700 leading-relaxed ml-10">
                      {activeStep.fullDesc.action}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-2">
                      <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 size={18} />
                      </span>
                      Resultado ColorBit
                    </h4>
                    <p className="text-slate-700 leading-relaxed ml-10">
                      {activeStep.fullDesc.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySimulator;