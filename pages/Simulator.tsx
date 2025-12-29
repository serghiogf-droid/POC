
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOAN_MIN_AMOUNT, LOAN_MAX_AMOUNT, LOAN_MIN_MONTHS, LOAN_MAX_MONTHS } from '../constants';
import { Page } from '../types';

const Simulator: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1000000);
  const [months, setMonths] = useState(24);

  const stats = useMemo(() => {
    const tasaMensual = 0.0099; // 0.99% fixed for simulation
    const pmt = (amount * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -months));
    const total = pmt * months;
    const cae = 12.5; // Fixed value for visual matching
    
    return {
      cuota: Math.round(pmt),
      total: Math.round(total),
      cae,
      tasa: 0.99
    };
  }, [amount, months]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="layout-container flex grow flex-col min-h-[calc(100vh-65px)] bg-background-light dark:bg-background-dark">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
        <div className="layout-content-container flex flex-col max-w-[1100px] flex-1 w-full gap-8">
          {/* Progress Bar */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-text-main dark:text-white text-sm font-semibold uppercase tracking-wide">Paso 2 de 3: Detalles del Préstamo</p>
              <p className="text-text-secondary dark:text-gray-400 text-sm font-medium hidden sm:block">Siguiente: Resumen</p>
            </div>
            <div className="rounded-full bg-[#ced7e8] dark:bg-gray-700 h-2 overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: '66%' }}></div>
            </div>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-text-main dark:text-white tracking-tight text-3xl md:text-4xl font-black">Simula tu Crédito de Consumo</h1>
            <p className="text-text-secondary dark:text-gray-400 text-base">Ajusta los valores para encontrar la cuota que mejor se adapte a ti.</p>
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-200">
                {/* Amount Section */}
                <div className="flex flex-col gap-6 mb-10">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex justify-between items-center">
                        <span className="text-text-main dark:text-white text-base font-semibold">Monto a solicitar ($)</span>
                        <span className="text-primary text-sm font-medium cursor-pointer hover:underline">Ver límites</span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary dark:text-gray-400 font-medium">$</span>
                        <input 
                          className="w-full rounded-lg border border-[#ced7e8] dark:border-gray-600 bg-gray-50 dark:bg-gray-800 h-14 pl-8 pr-4 text-xl font-bold text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                          type="text" 
                          value={amount.toLocaleString('es-CL')}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <input 
                      type="range"
                      min={LOAN_MIN_AMOUNT}
                      max={LOAN_MAX_AMOUNT}
                      step={500000}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-2 bg-[#ced7e8] dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs font-semibold text-text-secondary dark:text-gray-500">
                      <span>{formatCurrency(LOAN_MIN_AMOUNT)}</span>
                      <span>{formatCurrency(LOAN_MAX_AMOUNT)}</span>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100 dark:border-gray-800 mb-10"/>

                {/* Term Section */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-col gap-2 w-full">
                      <span className="text-text-main dark:text-white text-base font-semibold">Plazo (Meses)</span>
                      <div className="relative">
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary dark:text-gray-400 font-medium text-sm">meses</span>
                        <input 
                          className="w-full rounded-lg border border-[#ced7e8] dark:border-gray-600 bg-gray-50 dark:bg-gray-800 h-14 pl-4 pr-16 text-xl font-bold text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                          type="number" 
                          value={months}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <input 
                      type="range"
                      min={LOAN_MIN_MONTHS}
                      max={LOAN_MAX_MONTHS}
                      step={12}
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full h-2 bg-[#ced7e8] dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs font-semibold text-text-secondary dark:text-gray-500">
                      <span>{LOAN_MIN_MONTHS} meses</span>
                      <span>{LOAN_MAX_MONTHS} meses</span>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => navigate(-1)}
                className="hidden lg:flex items-center gap-2 mt-4 cursor-pointer text-text-secondary hover:text-primary transition-colors w-fit group"
              >
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="font-semibold">Volver al paso anterior</span>
              </div>
            </div>

            {/* Right Column: Summary Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-primary text-white rounded-2xl p-6 shadow-xl flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="relative z-10">
                  <p className="text-blue-100 text-sm font-medium mb-1">Cuota mensual estimada</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight">{formatCurrency(stats.cuota)}</span>
                  </div>
                  <p className="text-[10px] text-blue-200 mt-2 font-medium">*Valor referencial sujeto a evaluación.</p>
                </div>
                <div className="h-px bg-white/20 w-full"></div>
                <div className="flex flex-col gap-3 text-sm relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 font-medium">Monto Solicitado</span>
                    <span className="font-bold">{formatCurrency(amount)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 font-medium">Plazo</span>
                    <span className="font-bold">{months} meses</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 font-medium">Tasa Mensual</span>
                    <span className="font-bold">{stats.tasa}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 font-medium">CAE</span>
                    <span className="font-bold">{stats.cae}%</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-3 border-t border-white/20">
                    <span className="text-blue-50 font-bold">Costo Total</span>
                    <span className="font-black text-lg">{formatCurrency(stats.total)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate(Page.SelectLoan)}
                  className="w-full bg-white text-primary hover:bg-blue-50 active:scale-95 h-12 rounded-xl font-black text-base transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
                >
                  Continuar
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </button>
              </div>
              
              <div className="mt-4 flex gap-2 text-[10px] md:text-xs text-text-secondary dark:text-gray-500 px-2 leading-relaxed">
                <span className="material-symbols-outlined text-base shrink-0">info</span>
                <p>La simulación no constituye una aprobación del crédito. La tasa final puede variar según tu evaluación crediticia al momento de la solicitud.</p>
              </div>

              <div 
                onClick={() => navigate(-1)}
                className="lg:hidden flex justify-center mt-8 cursor-pointer text-text-secondary hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  <span className="font-semibold">Volver al paso anterior</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
