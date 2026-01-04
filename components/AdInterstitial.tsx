
import React, { useState, useEffect } from 'react';
import { X, Sparkles, TrendingUp, Zap, ArrowRight, Globe, Star } from 'lucide-react';

interface AdInterstitialProps {
  onClose: () => void;
}

const AdInterstitial: React.FC<AdInterstitialProps> = ({ onClose }) => {
  const [canClose, setCanClose] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanClose(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/95 backdrop-blur-2xl animate-in fade-in duration-700">
      <div className="relative w-full max-w-5xl bg-gray-900 rounded-[56px] overflow-hidden shadow-[0_0_120px_rgba(79,70,229,0.4)] border border-white/10 flex flex-col md:flex-row">
        
        {/* Ad Image Content */}
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200" 
            alt="Artist 2026" 
            className="absolute inset-0 w-full h-full object-cover brightness-75 scale-110 hover:scale-100 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent"></div>
          <div className="absolute top-10 left-10">
             <div className="bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Oferta 2026</div>
          </div>
        </div>

        {/* Ad Copy Content */}
        <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-10 relative">
          {canClose ? (
            <button 
              onClick={onClose}
              className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>
          ) : (
            <div className="absolute top-10 right-10 bg-white/5 text-gray-500 px-5 py-2.5 rounded-full text-[11px] font-black tabular-nums border border-white/5">
              FECHAR EM {countdown}S
            </div>
          )}

          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
              Sua Vez de <br/><span className="text-indigo-500 italic">Brilhar</span> em 2026.
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              O mercado musical está explodindo este ano. O Audios On Pro 2026 te dá as chaves para os palcos mundiais.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center gap-5 group">
               <div className="bg-indigo-500/20 p-4 rounded-2xl group-hover:bg-indigo-500/30 transition-colors">
                  <Star className="text-indigo-400 w-6 h-6" />
               </div>
               <div>
                 <p className="text-white font-bold">Priority Support 2026</p>
                 <p className="text-gray-500 text-xs">Atendimento humano em Luanda e Lisboa.</p>
               </div>
            </div>
            <div className="flex items-center gap-5 group">
               <div className="bg-green-500/20 p-4 rounded-2xl group-hover:bg-green-500/30 transition-colors">
                  <TrendingUp className="text-green-400 w-6 h-6" />
               </div>
               <div>
                 <p className="text-white font-bold">Algoritmo de Impulso</p>
                 <p className="text-gray-500 text-xs">Apareça nas playlists "New 2026" automaticamente.</p>
               </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={onClose}
              className="w-full bg-white text-gray-900 py-6 rounded-[28px] font-black text-sm uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] active:scale-95 flex items-center justify-center gap-4 group"
            >
               Ativar Plano 2026 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-center text-[11px] text-gray-600 font-black uppercase tracking-[0.3em] mt-8">
               Limitado aos primeiros 100 artistas de 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdInterstitial;
