
import React, { useState } from 'react';
import { MOCK_BRANCHES } from '../constants';
import { Branch } from '../types';

const Locator: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(MOCK_BRANCHES[0]);
  const [filter, setFilter] = useState<'all' | 'open' | 'atm'>('all');

  const filteredBranches = MOCK_BRANCHES.filter(b => {
    if (filter === 'open') return b.status === 'open' || b.status === '24hrs';
    if (filter === 'atm') return b.type.includes('atm');
    return true;
  });

  return (
    <div className="flex flex-1 overflow-hidden relative h-[calc(100vh-100px)]">
      {/* Sidebar */}
      <aside className="w-full md:w-[400px] lg:w-[450px] flex flex-col bg-white dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 z-10 shadow-xl md:shadow-none absolute md:relative h-full transform transition-transform duration-300 ease-in-out">
        <div className="p-5 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 bg-white dark:bg-surface-dark">
          <h1 className="text-2xl font-black text-text-main dark:text-white mb-1">Cajeros y Sucursales</h1>
          <p className="text-text-secondary dark:text-gray-400 text-sm mb-4">Encuentra tu punto de atención más cercano.</p>
          
          <div className="mb-4">
            <div className="flex w-full items-stretch rounded-xl h-11 ring-1 ring-gray-200 dark:ring-gray-700 focus-within:ring-2 focus-within:ring-primary overflow-hidden transition-all">
              <div className="text-text-secondary dark:text-gray-400 flex items-center justify-center pl-3 pr-2 bg-gray-50 dark:bg-gray-800">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input 
                className="flex w-full bg-gray-50 dark:bg-gray-800 text-text-main dark:text-white placeholder:text-text-secondary dark:placeholder:text-gray-500 px-2 text-sm font-medium focus:outline-none border-none ring-0" 
                placeholder="Buscar por ciudad, código postal..." 
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'open', label: 'Abierto ahora' },
              { id: 'atm', label: 'Solo Cajeros' }
            ].map(btn => (
              <button 
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`flex h-8 shrink-0 items-center justify-center rounded-full px-4 transition-all text-xs font-bold ${
                  filter === btn.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          {filteredBranches.map(branch => (
            <div 
              key={branch.id}
              onClick={() => setSelectedBranch(branch)}
              className={`p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer transition-all border-l-4 ${
                selectedBranch?.id === branch.id 
                ? 'bg-blue-50/50 dark:bg-blue-900/10 border-l-primary' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 border-l-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-text-main dark:text-white">{branch.name}</h3>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide ${
                  branch.status === 'open' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                  branch.status === '24hrs' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                  'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {branch.status === 'open' ? 'Abierto' : branch.status === '24hrs' ? '24 Hrs' : 'Cerrado'}
                </span>
              </div>
              <p className="text-sm text-text-secondary dark:text-gray-400 mb-2">{branch.address}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500 font-semibold">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">directions_walk</span> {branch.distance}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                <span>{branch.status === 'open' ? `Cierra ${branch.closingTime}` : branch.status === '24hrs' ? 'Siempre abierto' : `Abre ${branch.openingTime}`}</span>
              </div>
              <div className="flex gap-2 mt-3">
                {branch.type.map(t => (
                  <span key={t} className="px-2 py-1 rounded bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-[10px] text-gray-600 dark:text-gray-400 font-black uppercase">
                    {t === 'branch' ? 'Sucursal' : 'ATM'}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Map Area */}
      <main className="flex-1 relative bg-gray-100 dark:bg-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            alt="City Map" 
            className="w-full h-full object-cover opacity-60 dark:opacity-20 transition-all duration-1000"
            src="https://picsum.photos/seed/map/1200/800" 
          />
        </div>

        {/* Floating Branch Card */}
        {selectedBranch && (
          <div className="absolute top-6 left-6 z-20 w-[320px] animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-primary to-blue-600 relative">
                <button 
                  onClick={() => setSelectedBranch(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
                <div className="absolute -bottom-6 left-6">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-primary p-2 border border-gray-100 dark:border-gray-700">
                    <span className="material-symbols-outlined text-[28px]">{selectedBranch.type.includes('branch') ? 'apartment' : 'atm'}</span>
                  </div>
                </div>
              </div>
              <div className="pt-8 px-6 pb-6">
                <h2 className="text-xl font-black text-text-main dark:text-white leading-tight">{selectedBranch.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-600 dark:text-green-400 text-xs font-bold">Abierto ahora</span>
                  <span className="text-gray-400 text-xs">•</span>
                  <span className="text-gray-500 dark:text-gray-500 text-xs font-medium">Cierra a las {selectedBranch.closingTime || '20:00'}</span>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-gray-400 mt-0.5">location_on</span>
                    <div>
                      <p className="text-sm text-text-main dark:text-gray-200 font-medium">{selectedBranch.address}</p>
                      <p className="text-xs text-primary mt-1 cursor-pointer font-bold hover:underline">Ver en Google Maps</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-3">
                  <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">directions</span>
                    Cómo llegar
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-primary dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pins */}
        {MOCK_BRANCHES.map(b => (
          <div 
            key={b.id}
            onClick={() => setSelectedBranch(b)}
            className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 group`}
            style={{ top: `${b.lat}%`, left: `${b.lng}%` }}
          >
            <div className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 shadow-xl flex items-center justify-center text-white relative ${
              selectedBranch?.id === b.id ? 'bg-primary scale-125 z-20' : 'bg-gray-500'
            }`}>
              <span className="material-symbols-outlined text-[18px]">{b.type.includes('branch') ? 'apartment' : 'atm'}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Locator;
