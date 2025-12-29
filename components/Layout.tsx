
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Page } from '../types';
import AndinoChat from './AndinoChat';

const Layout: React.FC = () => {
  const location = useLocation();
  const isDark = location.pathname === '/locator'; // Some pages might prefer dark map context, but keeping it simple.

  return (
    <div className="min-h-screen flex flex-col">
      {/* Utility Bar */}
      <div className="bg-background-dark text-white text-[10px] md:text-xs py-2 px-4 md:px-10 lg:px-40 flex justify-end gap-4 md:gap-6 items-center border-b border-gray-700 shrink-0">
        <a className="hover:text-accent transition-colors" href="#">Business</a>
        <a className="hover:text-accent transition-colors" href="#">Private Banking</a>
        <div className="w-px h-3 bg-gray-600 hidden sm:block"></div>
        <a className="hover:text-accent transition-colors flex items-center gap-1" href="#">
          <span className="material-symbols-outlined text-[16px]">language</span> EN
        </a>
        <a className="hover:text-accent transition-colors" href="#">Contact Us</a>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
        <div className="px-4 md:px-10 lg:px-40 py-3 md:py-4 flex items-center justify-between">
          <Link to={Page.Home} className="flex items-center gap-3 text-primary dark:text-white group">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Banco Andino</h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to={Page.Home} className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}>Personal</Link>
            <Link to={Page.Simulator} className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/simulator' ? 'text-primary' : ''}`}>Simulador</Link>
            <Link to={Page.Locator} className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/locator' ? 'text-primary' : ''}`}>Sucursales</Link>
            <Link to={Page.Help} className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/help' ? 'text-primary' : ''}`}>Ayuda</Link>
          </nav>

          <div className="flex gap-2 md:gap-3 items-center">
            <Link to={Page.Login} className="hidden sm:flex h-9 md:h-10 px-4 md:px-5 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-transparent text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Ingresar
            </Link>
            <button className="h-9 md:h-10 px-4 md:px-5 flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-xs md:text-sm font-semibold shadow-md transition-colors">
              Hacerse Cliente
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 pt-10 md:pt-16 pb-8 transition-colors duration-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Nosotros</h4>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Nuestra Historia</a>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Carreras</a>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Sostenibilidad</a>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Inversionistas</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Productos</h4>
              <Link to={Page.Simulator} className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm">Préstamos</Link>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Cuentas</a>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Tarjetas</a>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Seguros</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Soporte</h4>
              <Link to={Page.Help} className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm">Centro de Ayuda</Link>
              <Link to={Page.Locator} className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm">Sucursales</Link>
              <Link to={Page.Appointments} className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm">Turnos Online</Link>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Seguridad</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Legal</h4>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Privacidad</a>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Términos</a>
              <a className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm" href="#">Accesibilidad</a>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary dark:text-white">
              <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">account_balance</span>
              </div>
              <span className="font-bold text-sm">Banco Andino</span>
            </div>
            <p className="text-[10px] md:text-xs text-text-secondary dark:text-gray-500 text-center">
              © 2024 Banco Andino S.A. Todos los derechos reservados. Entidad regulada por el Banco Central.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <span className="font-bold text-[10px]">FB</span>
              </div>
              <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <span className="font-bold text-[10px]">LI</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat */}
      <AndinoChat />
    </div>
  );
};

export default Layout;
