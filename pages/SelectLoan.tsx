
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';

const SelectLoan: React.FC = () => {
  const navigate = useNavigate();

  const plans = [
    { title: 'Plan 12 Cuotas', cuota: '$58.300', total: '$699.600', tna: '82%', tea: '115%', cft: '138.5%' },
    { title: 'Plan 24 Cuotas', cuota: '$32.500', total: '$780.000', tna: '85%', tea: '120%', cft: '144.2%', recommended: true },
    { title: 'Plan 36 Cuotas', cuota: '$24.100', total: '$867.600', tna: '88%', tea: '125%', cft: '151.8%' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-end justify-between">
              <h1 className="text-2xl font-black text-text-main dark:text-white leading-tight">Elegí tu préstamo</h1>
              <span className="text-sm font-black text-text-secondary dark:text-gray-400 uppercase tracking-widest">Paso 3 de 4</span>
            </div>
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4 rounded-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-800">
            <div className="space-y-1">
              <h2 className="text-3xl font-black tracking-tight text-text-main dark:text-white">Las mejores opciones para vos</h2>
              <p className="text-text-secondary dark:text-gray-400 text-base font-medium">Resultados para tu solicitud de <span className="font-black text-text-main dark:text-white">$1.000.000</span></p>
            </div>
            <button 
              onClick={() => navigate(Page.Simulator)}
              className="text-primary font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
              Simular otro monto
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <article 
              key={i}
              className={`group relative flex flex-col bg-white dark:bg-surface-dark rounded-2xl border p-7 shadow-sm transition-all duration-300 ${
                plan.recommended 
                ? 'border-primary border-2 shadow-xl md:-translate-y-2' 
                : 'border-gray-100 dark:border-gray-800 hover:shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                  Recomendado
                </div>
              )}
              <div className="mb-6 mt-2">
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">{plan.title}</h3>
                <div className="flex flex-col">
                  <span className={`font-black tracking-tight text-primary dark:text-blue-400 ${plan.recommended ? 'text-5xl' : 'text-4xl'}`}>
                    {plan.cuota}
                  </span>
                  <span className="text-xs font-black text-text-secondary dark:text-gray-500 uppercase tracking-widest mt-1">Cuota Mensual</span>
                </div>
                <div className="mt-4 text-sm font-black text-text-main dark:text-gray-200">
                  Total a devolver: {plan.total}
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300 font-bold">
                  <span className="material-symbols-outlined text-green-600 text-[22px] filled">check_circle</span>
                  <span>Tasa Fija Garantizada</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300 font-bold">
                  <span className="material-symbols-outlined text-text-secondary text-[22px]">percent</span>
                  <span>TNA {plan.tna}</span>
                </div>
                {plan.recommended && (
                  <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300 font-bold">
                    <span className="material-symbols-outlined text-primary text-[22px] filled">bolt</span>
                    <span>Acreditación inmediata</span>
                  </div>
                )}
              </div>
              <button className={`w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 ${
                plan.recommended 
                ? 'bg-primary text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white border border-gray-200 dark:border-gray-700'
              }`}>
                {plan.recommended ? 'Iniciá solicitud' : 'Ver detalle'}
              </button>
            </article>
          ))}
        </section>

        {/* Detailed Table */}
        <section className="mt-8 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 flex justify-between items-center">
            <h3 className="text-lg font-black text-text-main dark:text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-primary font-bold">analytics</span>
              Comparativa detallada
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/30 text-[10px] uppercase tracking-widest text-text-secondary font-black">
                  <th className="p-5 border-b border-gray-100 dark:border-gray-800 w-1/4">Detalle</th>
                  <th className="p-5 border-b border-gray-100 dark:border-gray-800 w-1/4">12 Cuotas</th>
                  <th className="p-5 border-b border-gray-100 dark:border-gray-800 w-1/4 bg-primary/5 text-primary">24 Cuotas</th>
                  <th className="p-5 border-b border-gray-100 dark:border-gray-800 w-1/4">36 Cuotas</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold tabular-nums">
                {['Monto', 'TNA', 'TEA', 'CFT'].map(metric => (
                  <tr key={metric} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-5 border-b border-gray-100 dark:border-gray-800 text-text-secondary font-black uppercase text-xs tracking-widest">{metric}</td>
                    <td className="p-5 border-b border-gray-100 dark:border-gray-800">
                      {metric === 'Monto' ? '$1.000.000' : plans[0][metric.toLowerCase() as keyof typeof plans[0]] || '-'}
                    </td>
                    <td className="p-5 border-b border-gray-100 dark:border-gray-800 bg-primary/5 font-black text-primary">
                      {metric === 'Monto' ? '$1.000.000' : plans[1][metric.toLowerCase() as keyof typeof plans[1]] || '-'}
                    </td>
                    <td className="p-5 border-b border-gray-100 dark:border-gray-800">
                      {metric === 'Monto' ? '$1.000.000' : plans[2][metric.toLowerCase() as keyof typeof plans[2]] || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-8 mb-12">
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 text-[10px] md:text-xs text-text-secondary dark:text-gray-500 leading-relaxed border border-gray-200 dark:border-gray-800">
            <p className="font-black uppercase tracking-widest mb-2 text-gray-900 dark:text-gray-400">Información Legal</p>
            <p className="font-medium">
              Los valores expresados son referenciales y pueden variar al momento de la confirmación del préstamo. El otorgamiento efectivo del préstamo se encuentra sujeto a evaluación crediticia y condiciones de contratación de Banco Andino. CFT (Costo Financiero Total) expresado en Tasa Efectiva Anual. Las tasas informadas no incluyen IVA sobre los intereses. TNA (Tasa Nominal Anual) fija para operaciones en pesos. Para más información consulte nuestra sección de <a className="underline hover:text-primary transition-colors" href="#">Términos y Condiciones</a>.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SelectLoan;
