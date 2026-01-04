
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Header from './components/Header';
import ReleaseCard from './components/ReleaseCard';
import AdInterstitial from './components/AdInterstitial';
import { Release, MarketingContent, PricingPlan, RoyaltyReport } from './types';
import { generateMarketingContent } from './services/geminiService';
import { 
  Plus, Search, ExternalLink, Copy, CheckCircle, Facebook, Youtube, Instagram, Music, Disc, Info, 
  ChevronLeft, Loader2, Sparkles, ShieldAlert, Shield, LayoutDashboard, Music2, Cloud, Layers, 
  Phone, CreditCard, UserCheck, TrendingUp, ShoppingBag, Target, Rocket, Scale, Calendar, 
  DollarSign, PieChart, Globe, Link2, Radio, Video, AlertTriangle, ArrowUpRight, Filter, 
  SlidersHorizontal, ChevronDown, Upload, X, Zap, Award, Users, Activity, Star, MapPin, 
  Flame, Newspaper, Crown
} from 'lucide-react';

const BACKSTAGE_INSTAGRAM = "https://www.instagram.com/backstage_concept.ao?igsh=MXNkcWZodDlwcHVueQ==";

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [userPlan] = useState('starter');
  const [releases, setReleases] = useState<Release[]>([]);
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [marketing, setMarketing] = useState<MarketingContent | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showAd, setShowAd] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [sortBy, setSortBy] = useState('Data');

  const [newRelease, setNewRelease] = useState<Partial<Release>>({
    links: {},
    status: 'Rascunho'
  });

  useEffect(() => {
    setShowAd(true);
    const mockReleases: Release[] = [
      {
        id: 'feat-1',
        title: 'Voz das Ruas',
        artist: 'Nova Geração Rap',
        releaseDate: '2024-06-15',
        genre: 'Rap/Hip-Hop',
        isrc: 'BR-NG-24-00001',
        status: 'Publicado',
        coverUrl: 'https://images.unsplash.com/photo-1571607388263-1044f9ee0c89?auto=format&fit=crop&q=80&w=800', 
        links: {
          spotify: 'https://spotify.com',
          youtube: 'https://youtube.com',
          instagram: 'https://instagram.com',
          tiktok: 'https://tiktok.com',
          smartLink: 'https://audios.on/novageracao/voz-das-ruas'
        },
        copyrightInfo: 'Todos os direitos reservados à Nova Geração Rap.',
        stats: { streams: 114200, saves: 5200, shares: 2540 }
      }
    ];
    setReleases(mockReleases);
  }, []);

  const handleCreateRelease = (e: React.FormEvent) => {
    e.preventDefault();
    const releaseToAdd: Release = {
      id: Date.now().toString(),
      title: newRelease.title || 'Sem Título',
      artist: newRelease.artist || 'Artista Desconhecido',
      releaseDate: newRelease.releaseDate || new Date().toISOString().split('T')[0],
      genre: newRelease.genre || 'Gênero',
      isrc: newRelease.isrc || 'PENDENTE',
      status: newRelease.status as any || 'Rascunho',
      coverUrl: previewImage || `https://picsum.photos/id/10/400/400`,
      links: newRelease.links || {},
      copyrightInfo: 'Direitos reservados.',
    };
    setReleases([releaseToAdd, ...releases]);
    setCurrentTab('dashboard');
  };

  const filteredReleases = useMemo(() => {
    return releases.filter(r => 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      r.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [releases, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd]">
      {showAd && <AdInterstitial onClose={() => setShowAd(false)} />}
      <Header currentTab={currentTab} setTab={setCurrentTab} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'dashboard' && !selectedRelease && (
          <div className="space-y-12 animate-in fade-in duration-500">
            {/* HERO ARTIST */}
            <div className="relative h-[400px] rounded-[48px] overflow-hidden shadow-2xl group border border-white/20">
               <img src="https://images.unsplash.com/photo-1571607388263-1044f9ee0c89?auto=format&fit=crop&q=80&w=1400" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
               <div className="absolute bottom-12 left-12 right-12">
                  <h1 className="text-6xl font-black text-white tracking-tighter mb-2">Nova Geração Rap</h1>
                  <p className="text-white/80 text-lg font-medium">Dominando as paradas com <span className="text-white font-black italic">"Voz das Ruas"</span>.</p>
               </div>
            </div>

            {/* MARQUEE NEWS - BACKSTAGE */}
            <div className="bg-white border-y border-gray-100 py-6 overflow-hidden relative">
               <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 px-4">
                      <a href={BACKSTAGE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded">NEWS</span>
                        <p className="text-gray-900 font-black text-sm uppercase tracking-widest">
                          <span className="text-indigo-600">Backstage:</span> A escolha certa para elevar sua imagem no mercado angolano. Parceria estratégica Audios On.
                        </p>
                      </a>
                      <span className="text-gray-200">•</span>
                    </div>
                  ))}
               </div>
               <style>{`
                 @keyframes marquee {
                   0% { transform: translateX(0); }
                   100% { transform: translateX(-50%); }
                 }
                 .animate-marquee {
                   display: flex;
                   width: fit-content;
                   animation: marquee 30s linear infinite;
                 }
               `}</style>
            </div>

            {/* BACKSTAGE FEATURE CARD */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 bg-gradient-to-r from-gray-900 to-indigo-950 rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                     <a href={BACKSTAGE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="bg-black p-4 rounded-[40px] border border-white/10 shrink-0 w-40 h-40 flex items-center justify-center">
                        <img 
                          src="https://raw.githubusercontent.com/ai-images/logos/main/backstage_gold.png" 
                          alt="Backstage Logo" 
                          className="w-full h-full object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span className="text-amber-500 font-black text-4xl tracking-tighter">BKS</span>
                     </a>
                     <div className="space-y-6">
                        <div className="flex items-center gap-3">
                           <Newspaper className="text-indigo-400 w-5 h-5" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Notícia em Destaque</span>
                        </div>
                        <h3 className="text-4xl font-black tracking-tighter leading-tight">
                           Eleve sua Carreira em <span className="text-indigo-400">Angola</span> com a Backstage Concept.
                        </h3>
                        <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-xl">
                           A agência líder em Luanda para gestão de imagem e PR. Através da Audios On, conecte-se com a elite da música angolana.
                        </p>
                        <a href={BACKSTAGE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-indigo-900 transition-all shadow-xl">
                           Visitar Página Oficial
                        </a>
                     </div>
                  </div>
                  <Crown className="absolute right-[-40px] bottom-[-40px] w-80 h-80 text-white/5 pointer-events-none" />
               </div>

               <div className="lg:col-span-4 bg-indigo-50 rounded-[48px] p-10 flex flex-col justify-center border border-indigo-100 shadow-sm group">
                  <div className="space-y-6">
                     <div className="bg-white p-4 rounded-2xl w-fit shadow-sm group-hover:rotate-6 transition-transform">
                        <TrendingUp className="text-indigo-600 w-8 h-8" />
                     </div>
                     <h4 className="text-2xl font-black text-gray-900 tracking-tight">Crescimento Viral</h4>
                     <p className="text-gray-500 font-bold text-sm leading-relaxed">
                        Transforme rimas em números com as ferramentas de carreira da <span className="text-indigo-600">Audios On</span>.
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-[40px] border border-gray-50 p-10 shadow-sm">
               <div className="flex items-center justify-between mb-10">
                 <h3 className="text-2xl font-black tracking-tighter">Seu Catálogo</h3>
                 <button onClick={() => setCurrentTab('new')} className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-xs font-black">Adicionar Lançamento</button>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {filteredReleases.map(release => (
                   <ReleaseCard key={release.id} release={release} onSelect={setSelectedRelease} />
                 ))}
               </div>
            </div>
          </div>
        )}

        {/* NEW RELEASE TAB */}
        {currentTab === 'new' && (
          <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100 mt-10">
            <h2 className="text-3xl font-black mb-8 text-gray-900 tracking-tighter">Criar Novo Master</h2>
            <form onSubmit={handleCreateRelease} className="space-y-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Título</label>
                 <input placeholder="Ex: Batida Perfeita" className="w-full p-4 bg-gray-50 rounded-2xl outline-none font-bold" onChange={e => setNewRelease({...newRelease, title: e.target.value})} />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Artista</label>
                 <input placeholder="Seu Nome Artístico" className="w-full p-4 bg-gray-50 rounded-2xl outline-none font-bold" onChange={e => setNewRelease({...newRelease, artist: e.target.value})} />
               </div>
               <button type="submit" className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl">Sincronizar Lançamento</button>
            </form>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-[10px] text-gray-300 font-black tracking-[0.4em] uppercase">
             &copy; 2024 Audios On Music Group. Parceira Oficial Backstage Concept Angola.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
