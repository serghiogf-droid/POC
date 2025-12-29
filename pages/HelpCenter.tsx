
import React from 'react';

const HelpCenter: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark min-h-screen">
      <div className="w-full max-w-[960px] mx-auto p-4 sm:p-6 lg:p-10 flex flex-col gap-8">
        {/* Breadcrumbs & Header */}
        <div className="flex flex-col gap-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <a className="hover:text-primary transition-colors" href="#">Inicio</a>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-gray-900 dark:text-white font-bold">Centro de Ayuda</span>
          </nav>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">Centro de Ayuda</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Encuentra respuestas rápidas y guías paso a paso para tus operaciones.</p>
          </div>
        </div>

        {/* Hero Search */}
        <div className="bg-white dark:bg-surface-dark p-2 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 flex items-center focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
          <div className="pl-4 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[28px] font-bold">search</span>
          </div>
          <input 
            className="w-full h-12 md:h-14 px-4 bg-transparent border-none focus:ring-0 text-base md:text-lg text-gray-900 dark:text-white placeholder:text-gray-400 font-medium" 
            placeholder="¿En qué podemos ayudarte hoy? (ej. cambiar clave, token...)" 
            type="text"
          />
          <button className="hidden sm:block bg-primary hover:bg-primary-dark text-white font-black h-12 px-8 rounded-xl transition-all shadow-md active:scale-95">
            Buscar
          </button>
        </div>

        {/* Quick Access Articles */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black text-gray-900 dark:text-white">Lo más consultado</h2>
            <a className="text-sm font-bold text-primary hover:underline" href="#">Ver todo</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'move_up', title: 'Transferencias Inmediatas', desc: 'Aprende cómo realizar transferencias a otros bancos sin demora.' },
              { icon: 'lock_reset', title: 'Recuperar Clave', desc: 'Pasos sencillos para restablecer tu clave de acceso si la has olvidado.' },
              { icon: 'phonelink_ring', title: 'Activar Token Digital', desc: 'Configura tu token digital en la app móvil para transacciones seguras.' },
              { icon: 'credit_score', title: 'Aumentar Límite', desc: 'Solicita un aumento de límite transitorio o permanente para tus tarjetas.' },
              { icon: 'report_problem', title: 'Reportar Extravío', desc: 'Bloquea tus productos inmediatamente en caso de robo o pérdida.' },
              { icon: 'description', title: 'Descargar Extractos', desc: 'Accede a tu historial de movimientos y descarga tus extractos en PDF.' },
            ].map((card, i) => (
              <a key={i} className="group flex flex-col bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300" href="#">
                <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined font-bold">{card.icon}</span>
                </div>
                <h3 className="font-black text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">{card.desc}</p>
                <div className="mt-6 flex items-center text-primary text-xs font-black uppercase tracking-wider">
                  <span>Leer artículo</span>
                  <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-xl font-black text-gray-900 dark:text-white">¿No encontraste lo que buscabas?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-md">Nuestro centro de atención al cliente está listo para ayudarte con tus dudas más complejas.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-black py-3 px-6 rounded-xl transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined font-bold text-[20px]">call</span>
              <span>Llamar</span>
            </button>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-black py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              <span className="material-symbols-outlined font-bold text-[20px]">chat</span>
              <span>Chat en vivo</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HelpCenter;
