
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState<'personas' | 'empresas'>('personas');

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white min-h-screen flex flex-col">
      {/* Mini Navbar */}
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <div onClick={() => navigate(Page.Home)} className="flex items-center gap-3 text-primary cursor-pointer group">
            <div className="size-8 bg-primary text-white rounded flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-black tracking-tight">Banco Andino</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary dark:text-slate-300 transition-colors" href="#">Ayuda</a>
            <a className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary dark:text-slate-300 transition-colors" href="#">Cajeros</a>
            <a className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary dark:text-slate-300 transition-colors" href="#">Seguridad</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full overflow-hidden">
        {/* Left Side: Marketing */}
        <div className="hidden lg:flex w-[45%] relative bg-primary overflow-hidden flex-col justify-end p-16 text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent z-10"></div>
            <img 
              src="https://picsum.photos/seed/banking/800/1200" 
              className="w-full h-full object-cover grayscale opacity-40"
              alt="Banking"
            />
          </div>
          <div className="relative z-20 max-w-lg mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-[10px] font-black uppercase mb-6 tracking-widest">
              <span className="material-symbols-outlined text-sm font-bold">security</span>
              Sitio Seguro
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">Tu banco, donde estés.</h1>
            <p className="text-xl text-blue-100 font-medium mb-8 leading-relaxed">
              Realiza transferencias, pagos y consultas las 24 horas con total seguridad.
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-80">
                <span className="material-symbols-outlined font-bold">verified_user</span>
                Protección
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-80">
                <span className="material-symbols-outlined font-bold">lock_clock</span>
                Monitoreo 24/7
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-[55%] flex flex-col items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-[480px] space-y-8">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-gray-900/50">
                <button 
                  onClick={() => setTab('personas')}
                  className={`flex-1 flex flex-col items-center justify-center border-b-[3px] py-5 transition-all ${
                    tab === 'personas' ? 'border-primary bg-white dark:bg-surface-dark' : 'border-transparent text-gray-400 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${tab === 'personas' ? 'text-primary' : ''}`}>person</span>
                    <span className="text-sm font-black tracking-wide">Personas</span>
                  </div>
                </button>
                <button 
                  onClick={() => setTab('empresas')}
                  className={`flex-1 flex flex-col items-center justify-center border-b-[3px] py-5 transition-all ${
                    tab === 'empresas' ? 'border-primary bg-white dark:bg-surface-dark' : 'border-transparent text-gray-400 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${tab === 'empresas' ? 'text-primary' : ''}`}>business</span>
                    <span className="text-sm font-black tracking-wide">Empresas</span>
                  </div>
                </button>
              </div>

              <div className="p-8 space-y-6">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Ingreso a {tab === 'personas' ? 'Personas' : 'Empresas'}</h2>
                
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 md:col-span-3">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Tipo</label>
                    <select className="w-full rounded-xl border-slate-200 bg-slate-50 dark:bg-gray-900 dark:border-slate-700 text-slate-900 dark:text-white h-12 text-sm font-bold focus:border-primary focus:ring-primary">
                      <option>DNI</option>
                      <option>CE</option>
                      <option>PAS</option>
                    </select>
                  </div>
                  <div className="col-span-8 md:col-span-9">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Número de documento</label>
                    <input className="w-full rounded-xl border-slate-200 bg-slate-50 dark:bg-gray-900 dark:border-slate-700 text-slate-900 dark:text-white h-12 px-4 text-base font-bold focus:border-primary focus:ring-primary" placeholder="Ingresa tu número" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Clave de acceso</label>
                    <button className="text-[10px] font-black text-primary uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">keyboard</span>
                      Teclado Virtual
                    </button>
                  </div>
                  <div className="relative">
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      className="w-full rounded-xl border-slate-200 bg-slate-50 dark:bg-gray-900 dark:border-slate-700 text-slate-900 dark:text-white h-12 px-4 pr-10 text-base font-bold tracking-widest focus:border-primary focus:ring-primary" 
                      placeholder="••••••" 
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => navigate(Page.Home)}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-black h-14 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-widest"
                  >
                    Ingresar
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-bold uppercase tracking-wider">
                  <a className="text-slate-500 hover:text-primary transition-colors" href="#">¿Olvidaste tu clave?</a>
                  <a className="text-primary hover:text-primary-dark transition-colors" href="#">Hazte Cliente</a>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-gray-900/50 px-8 py-5 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-[20px] mt-0.5">lock</span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 leading-relaxed font-bold uppercase tracking-wide">
                    Nunca compartas tu clave con terceros. Banco Andino nunca te pedirá contraseñas por correo ni SMS.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <a className="hover:text-primary" href="#">Privacidad</a>
              <a className="hover:text-primary" href="#">Términos</a>
              <a className="hover:text-primary" href="#">Soporte</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
