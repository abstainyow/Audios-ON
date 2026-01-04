
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Header from './components/Header';
import ReleaseCard from './components/ReleaseCard';
import AdInterstitial from './components/AdInterstitial';
import { Release, MarketingContent, PricingPlan, RoyaltyReport } from './types';
import { 
  Plus, Search, ExternalLink, Copy, CheckCircle, Facebook, Youtube, Instagram, Music, Disc, Info, 
  ChevronLeft, Loader2, Sparkles, ShieldAlert, Shield, LayoutDashboard, Music2, Cloud, Layers, 
  Phone, CreditCard, UserCheck, TrendingUp, ShoppingBag, Target, Rocket, Scale, Calendar, 
  DollarSign, PieChart, Globe, Link2, Radio, Video, AlertTriangle, ArrowUpRight, Filter, 
  SlidersHorizontal, ChevronDown, Upload, X, Zap, Award, Users, Activity, Star, MapPin, 
  Flame, Newspaper, Crown, Lightbulb, ZapOff
} from 'lucide-react';

const BACKSTAGE_INSTAGRAM = "https://www.instagram.com/backstage_concept.ao?igsh=MXNkcWZodDlwcHVueQ==";

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [userPlan] = useState('starter');
  const [releases, setReleases] = useState<Release[]>([]);
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showAd, setShowAd] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const [newRelease, setNewRelease] = useState<Partial<Release>>({
    links: {},
    status: 'Rascunho'
  });

  useEffect(() => {
    setShowAd(true);
    const mockReleases: Release[] = [
      {
        id: 'feat-1',
        title: 'Futuro da Batida',
        artist: 'Dax Vibe',
        releaseDate: '2026-01-20',
        genre: 'Afro-Futurism',
        isrc: 'AO-ON-26-00001',
        status: 'Publicado',
        coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800', 
        links: {
          spotify: 'https://spotify.com',
          youtube: 'https://youtube.com',
          instagram: 'https://instagram.com',
          tiktok: 'https://tiktok.com',
          smartLink: 'https://audios.on/daxvibe/futuro'
        },
        copyrightInfo: 'Copyright © 2026 Audios On Music Group.',
        stats: { streams: 250400, saves: 12200, shares: 8540 }
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
      status: 'Rascunho',
      coverUrl: previewImage || `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/400/400`,
      links: newRelease.links || {},
      copyrightInfo: 'Direitos reservados 2026.',
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
    <div className="min-h-screen flex flex-col bg-[#f8f9fc]">
      {showAd && <AdInterstitial onClose={() => setShowAd(false)} />}
      <Header currentTab={currentTab} setTab={setCurrentTab} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'dashboard' && !selectedRelease && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* 2026 HERO SECTION */}
            <div className="relative h-[500px] rounded-[56px] overflow-hidden shadow-2xl group">
               <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[10s]" />
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950 via-indigo-900/60 to-transparent"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
               
               <div className="absolute bottom-16 left-16 right-16">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
                    <Sparkles className="text-yellow-400 w-4 h-4" />
                    <span className="text-white text-xs font-black uppercase tracking-widest">A Nova Era Musical 2026</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight mb-4">
                    O Futuro é <span className="text-indigo-400 italic">Agora</span>.
                  </h1>
                  <p className="text-white/70 text-xl font-medium max-w-2xl">
                    Em 2026, a Audios On conecta você às maiores oportunidades globais. Distribuição em 150+ plataformas com tecnologia de ponta.
                  </p>
               </div>
            </div>

            {/* OPPORTUNITIES 2026 GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="text-indigo-600 w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-black mb-2">Expansão Asiática</h4>
                  <p className="text-gray-500 text-sm font-medium">Novos acordos de licenciamento em 2026 para o mercado da China e Coreia do Sul.</p>
               </div>
               <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="text-green-600 w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-black mb-2">Royalties Instantâneos</h4>
                  <p className="text-gray-500 text-sm font-medium">Receba seus ganhos em tempo real com nossa nova tecnologia de micro-pagamentos.</p>
               </div>
               <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <Layers className="text-purple-600 w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-black mb-2">Proteção 2026</h4>
                  <p className="text-gray-500 text-sm font-medium">Rastreamento avançado de direitos autorais contra reproduções não autorizadas em IA.</p>
               </div>
            </div>

            {/* BACKSTAGE & 2026 PARTNERSHIP */}
            <div className="relative bg-black rounded-[56px] p-12 overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full">
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50 grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
               </div>
               
               <div className="relative z-10 max-w-xl space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-2xl">
                      <img 
                        src="https://raw.githubusercontent.com/ai-images/logos/main/backstage_gold.png" 
                        alt="BKS" className="h-10 w-10 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <span className="text-black font-black text-xl tracking-tighter">BKS</span>
                    </div>
                    <X className="text-white/30 w-4 h-4" />
                    <div className="bg-indigo-600 p-3 rounded-2xl">
                       <Music2 className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <h2 className="text-5xl font-black text-white leading-tight">
                    Oportunidades em Angola: <br/><span className="text-indigo-500">Temporada 2026</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    A Backstage Concept e a Audios On abriram 50 novas vagas de gestão para artistas angolanos em ascensão este ano. Não perca a chance de ser agenciado pela maior de Luanda.
                  </p>
                  <a href={BACKSTAGE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all shadow-xl active:scale-95">
                    Quero Candidatar-me <ArrowUpRight className="w-5 h-5" />
                  </a>
               </div>
            </div>

            {/* CATALOGUE */}
            <div className="bg-white rounded-[48px] border border-gray-100 p-12 shadow-sm">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                 <div>
                    <h3 className="text-3xl font-black tracking-tighter">Lançamentos de 2026</h3>
                    <p className="text-gray-400 font-medium">Seu portfólio musical atualizado.</p>
                 </div>
                 <button onClick={() => setCurrentTab('new')} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-3">
                   <Plus className="w-5 h-5" /> Novo Lançamento
                 </button>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                 {filteredReleases.map(release => (
                   <ReleaseCard key={release.id} release={release} onSelect={setSelectedRelease} />
                 ))}
                 {filteredReleases.length === 0 && (
                   <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-100 rounded-[32px]">
                      <Disc className="w-12 h-12 text-gray-200 mx-auto mb-4 animate-spin-slow" />
                      <p className="text-gray-400 font-bold">Nenhum lançamento encontrado em 2026.</p>
                   </div>
                 )}
               </div>
            </div>
          </div>
        )}

        {/* NEW RELEASE TAB */}
        {currentTab === 'new' && (
          <div className="max-w-2xl mx-auto bg-white rounded-[48px] shadow-2xl p-12 border border-gray-100 mt-10">
            <h2 className="text-4xl font-black mb-4 text-gray-900 tracking-tighter leading-none">Novo Master <span className="text-indigo-600">2026</span></h2>
            <p className="text-gray-400 mb-10 font-medium">Preencha os dados e deixe nossa tecnologia distribuir para o mundo.</p>
            <form onSubmit={handleCreateRelease} className="space-y-8">
               <div className="space-y-3">
                 <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Título da Obra</label>
                 <input placeholder="Ex: Batida de Luanda 2026" className="w-full p-5 bg-gray-50 border border-gray-100 rounded-[24px] outline-none font-bold focus:border-indigo-500 focus:bg-white transition-all" onChange={e => setNewRelease({...newRelease, title: e.target.value})} />
               </div>
               <div className="space-y-3">
                 <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Artista Principal</label>
                 <input placeholder="Seu Nome Artístico" className="w-full p-5 bg-gray-50 border border-gray-100 rounded-[24px] outline-none font-bold focus:border-indigo-500 focus:bg-white transition-all" onChange={e => setNewRelease({...newRelease, artist: e.target.value})} />
               </div>
               <button type="submit" className="w-full py-6 bg-indigo-600 text-white rounded-[24px] font-black uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 active:scale-[0.98]">
                 Sincronizar Lançamento 2026
               </button>
            </form>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="flex justify-center gap-6 mb-10 opacity-30">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" className="h-6 w-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-6 w-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="h-6 w-12" />
           </div>
           <p className="text-[10px] text-gray-300 font-black tracking-[0.5em] uppercase">
             &copy; 2026 Audios On Music Group. Powered by Backstage Concept Angola.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
