import React, { useState, useEffect } from 'react';
import { X, Sparkles, TrendingUp, Zap, ArrowRight, Globe } from 'lucide-react';

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/90 backdrop-blur-xl animate-in fade-in duration-500">
      <div className="relative w-full max-w-5xl bg-gray-900 rounded-[48px] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.3)] border border-white/10 flex flex-col md:flex-row">
        
        {/* Ad Image Content */}
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200" 
            alt="Artist spotlight" 
            className="absolute inset-0 w-full h-full object-cover brightness-75 scale-110 hover:scale-100 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <div className="bg-indigo-600/30 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">
               <div className="w-12 h-12 rounded-full border-2 border-indigo-400 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100" alt="Success Story" />
               </div>
               <div>
                  <p className="text-white font-black text-sm">"Audios On mudou meu jogo em Luanda."</p>
                  <p className="text-indigo-300 text-[10px] font-black uppercase tracking-widest">Dax Vibe - 5M Streams</p>
               </div>
            </div>
          </div>
        </div>

        {/* Ad Copy Content */}
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-8 relative">
          {canClose ? (
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          ) : (
            <div className="absolute top-8 right-8 bg-white/5 text-gray-500 px-4 py-2 rounded-full text-[10px] font-black tabular-nums border border-white/5">
              FECHAR EM {countdown}S
            </div>
          )}

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Oportunidade Elite
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
              Voe Mais Alto com o <span className="text-indigo-500 italic">Plano Pro</span>.
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Junte-se à revolução da música Africana. Distribuição ilimitada, Marketing IA e proteção de direitos em nível mundial.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
               <div className="bg-indigo-500/10 p-3 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                  <TrendingUp className="text-indigo-400 w-5 h-5" />
               </div>
               <p className="text-white font-bold text-sm">Crescimento acelerado em 120+ territórios</p>
            </div>
            <div className="flex items-center gap-4 group">
               <div className="bg-green-500/10 p-3 rounded-2xl group-hover:bg-green-500/20 transition-colors">
                  <Zap className="text-green-400 w-5 h-5" />
               </div>
               <p className="text-white font-bold text-sm">Lançamentos ilimitados e ISRC imediato</p>
            </div>
          </div>

          <div className="pt-6">
            <button 
              onClick={onClose}
              className="w-full bg-white text-gray-900 py-5 rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3 group"
            >
               Começar Evolução Agora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[10px] text-gray-600 font-black uppercase tracking-widest mt-6">
               Oferta especial para talentos em ascensão.
            </p>
          </div>
        </div>

        {/* Decorative background flair */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[60px] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default AdInterstitial;
