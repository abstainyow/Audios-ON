
import React from 'react';
import { PlusCircle, Shield, LayoutDashboard, CreditCard, UserCheck, DollarSign } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 transition-transform hover:scale-105 duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4f46e5" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <circle cx="50" cy="50" r="46" stroke="url(#logoGradient)" strokeWidth="1" strokeDasharray="4 8" opacity="0.2" />
    <circle cx="50" cy="50" r="42" stroke="url(#logoGradient)" strokeWidth="0.5" opacity="0.1" />
    
    <path d="M38 35V65L58 50L38 35Z" fill="url(#logoGradient)" filter="url(#glow)" />
    
    <rect x="64" y="45" width="6" height="20" rx="3" fill="url(#logoGradient)" />
    <rect x="76" y="30" width="6" height="35" rx="3" fill="url(#logoGradient)" />
    
    <circle cx="79" cy="22" r="4" fill="#10b981" className="animate-pulse" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ currentTab, setTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'new', label: 'Lançar', icon: PlusCircle },
    { id: 'financials', label: 'Financeiro', icon: DollarSign },
    { id: 'career', label: 'Carreira', icon: UserCheck },
    { id: 'copyright', label: 'Direitos', icon: Shield },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => setTab('dashboard')}
          >
            <Logo />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black leading-tight tracking-tighter text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Audios<span className="text-indigo-600">On</span>
                </span>
                <span className="bg-indigo-600 text-white text-[8px] px-1.5 py-0.5 rounded font-black tracking-tighter">2026</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 -mt-1">
                Next-Gen Music
              </span>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex items-center px-1 pt-1 text-xs font-bold border-b-2 transition-all ${
                  currentTab === item.id 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-200'
                }`}
              >
                <item.icon className={`w-3.5 h-3.5 mr-1.5 ${currentTab === item.id ? 'text-indigo-600' : 'text-gray-400'}`} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <button className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">Entrar</button>
             <button 
               onClick={() => setTab('plans')}
               className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200 active:scale-95"
             >
               Assinar 2026 Pro
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
