
import React from 'react';
import { Release } from '../types';
import { Music, Calendar, ShieldCheck, Share2, Clock, CheckCircle2, FileEdit } from 'lucide-react';

interface ReleaseCardProps {
  release: Release;
  onSelect: (release: Release) => void;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ release, onSelect }) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Publicado':
        return { 
          color: 'bg-green-100 text-green-700 border-green-200', 
          icon: CheckCircle2, 
          label: 'Publicado' 
        };
      case 'Agendado':
        return { 
          color: 'bg-indigo-100 text-indigo-700 border-indigo-200', 
          icon: Clock, 
          label: 'Agendado' 
        };
      default:
        return { 
          color: 'bg-gray-100 text-gray-700 border-gray-200', 
          icon: FileEdit, 
          label: 'Rascunho' 
        };
    }
  };

  const statusConfig = getStatusConfig(release.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div 
      onClick={() => onSelect(release)}
      className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={release.coverUrl || "https://picsum.photos/400/400?music"} 
          alt={release.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <Share2 className="text-white w-8 h-8" />
        </div>
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border flex items-center shadow-sm ${statusConfig.color}`}>
          <StatusIcon className="w-3 h-3 mr-1" />
          {statusConfig.label}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-black text-gray-900 truncate leading-tight group-hover:text-indigo-600 transition-colors">{release.title}</h3>
        <p className="text-indigo-600 font-bold text-sm mt-0.5">{release.artist}</p>
        
        <div className="mt-auto pt-4 space-y-2">
          <div className="flex items-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 mr-2" />
            <span>{release.releaseDate}</span>
          </div>
          <div className="flex items-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 mr-2 text-green-500" />
            <span>ISRC: {release.isrc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
