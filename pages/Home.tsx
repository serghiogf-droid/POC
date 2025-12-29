
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-6 lg:px-40 py-8 lg:py-12">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div 
            className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-center px-6 pb-10 pt-20 md:px-12 md:pb-20 md:pt-32"
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://picsum.photos/seed/andino-hero/1200/600")' 
            }}
          >
            <div className="flex flex-col gap-4 text-left max-w-2xl">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-wider w-fit">Nuevas Tasas 2024</span>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                Cumple tus sueños con Banco Andino
              </h1>
              <h2 className="text-gray-200 text-base font-medium leading-relaxed md:text-lg max-w-lg">
                Ya sea remodelar tu casa, ese viaje soñado o consolidar deudas. Tenemos una tasa preferencial esperando por ti.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link to={Page.Simulator} className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold shadow-lg">
                Ver ofertas
              </Link>
              <button className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white border border-white/50 text-base font-bold shadow-lg">
                Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="w-full max-w-[1440px] px-6 lg:px-40 py-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Nuestros Productos</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">Lo mejor para ti</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {/* Card 1 */}
          <div className="snap-start shrink-0 w-[280px] md:w-[380px] bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 relative overflow-hidden">
              <img src="https://picsum.photos/seed/phone/400/200" alt="Banking app" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary/90 px-2 py-1 rounded text-[10px] font-bold uppercase text-white">Popular</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Cuentas Personales</h3>
              <p className="text-text-secondary dark:text-gray-400 text-sm mb-4">Abre tu cuenta 100% digital en menos de 5 minutos y sin comisiones.</p>
              <button className="w-full py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary dark:text-blue-300 font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center gap-2">
                Empezar ahora <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="snap-start shrink-0 w-[280px] md:w-[380px] bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 relative overflow-hidden">
              <img src="https://picsum.photos/seed/loan/400/200" alt="Loans" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Préstamo de Consumo</h3>
              <p className="text-text-secondary dark:text-gray-400 text-sm mb-4">Tasas fijas y aprobación inmediata para lo que necesites hoy mismo.</p>
              <Link to={Page.Simulator} className="w-full py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary dark:text-blue-300 font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center gap-2">
                Simular crédito <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="snap-start shrink-0 w-[280px] md:w-[380px] bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 relative overflow-hidden">
              <img src="https://picsum.photos/seed/investment/400/200" alt="Investment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Inversiones Inteligentes</h3>
              <p className="text-text-secondary dark:text-gray-400 text-sm mb-4">Haz crecer tu dinero con nuestros fondos mutuos y depósitos a plazo.</p>
              <button className="w-full py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary dark:text-blue-300 font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center gap-2">
                Conoce más <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="w-full max-w-[1440px] px-6 lg:px-40 pb-20 mt-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Acciones Rápidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[
            { icon: 'swap_horiz', label: 'Transferencias' },
            { icon: 'receipt_long', label: 'Pagar Cuentas' },
            { icon: 'currency_exchange', label: 'Cambio de Moneda' },
            { icon: 'credit_card', label: 'Mis Tarjetas' },
            { icon: 'mobile_friendly', label: 'Recargas' },
            { icon: 'location_on', label: 'Buscar Cajeros', link: Page.Locator },
            { icon: 'shield_lock', label: 'Seguridad' },
            { icon: 'trending_up', label: 'Inversiones' },
            { icon: 'calendar_today', label: 'Turnos Online', link: Page.Appointments },
            { icon: 'help', label: 'Ayuda', link: Page.Help },
          ].map((action, i) => (
            <Link 
              key={i}
              to={action.link || '#'}
              className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary/30 hover:bg-accent/10 dark:hover:bg-blue-900/10 transition-all"
            >
              <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{action.icon}</span>
              </div>
              <span className="text-sm font-semibold text-center text-gray-900 dark:text-white">{action.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
