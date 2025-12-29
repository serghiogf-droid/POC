
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';

const Appointments: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    { id: 'loans', icon: 'currency_exchange', label: 'Préstamos Personales', desc: 'Obtén los fondos que necesitas para tus proyectos.' },
    { id: 'account', icon: 'account_circle', label: 'Abrir una Cuenta', desc: 'Cuentas corrientes, de ahorro y sueldo.' },
    { id: 'cards', icon: 'credit_card', label: 'Tarjetas de Crédito', desc: 'Solicita una nueva tarjeta o gestiona tus límites.' },
    { id: 'mortgages', icon: 'real_estate_agent', label: 'Hipotecarios', desc: 'Opciones de financiación para tu vivienda.' },
    { id: 'support', icon: 'support_agent', label: 'Soporte al Cliente', desc: 'Habla con un agente sobre consultas generales.' },
    { id: 'insurance', icon: 'verified_user', label: 'Seguros', desc: 'Pólizas de vida, hogar y automotriz.' },
  ];

  return (
    <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
      <div className="flex flex-col max-w-[960px] w-full flex-1 gap-6">
        {/* Progress Bar */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-6 justify-between items-end">
            <p className="text-[#0d121c] dark:text-gray-200 text-sm font-black uppercase tracking-wide">Paso {step} de 4</p>
            <p className="text-text-secondary dark:text-gray-400 text-sm font-bold">Seleccionar Servicio</p>
          </div>
          <div className="rounded-full bg-[#ced7e8] dark:bg-[#2d3748] overflow-hidden h-2">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(step/4)*100}%` }}></div>
          </div>
        </div>

        {/* Page Heading */}
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="text-[#0d121c] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">Turnos Online</h1>
          <p className="text-text-secondary dark:text-gray-400 text-lg">
            Selecciona el servicio por el cual deseas agendar una cita presencial.
          </p>
        </div>

        {/* Service Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {services.map(svc => (
            <label 
              key={svc.id}
              className={`group relative flex cursor-pointer flex-col gap-4 rounded-2xl border-2 p-6 transition-all hover:shadow-xl ${
                selectedService === svc.id 
                ? 'border-primary bg-blue-50/10 dark:bg-blue-900/10' 
                : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark hover:border-primary/30'
              }`}
            >
              <input 
                className="sr-only" 
                name="service" 
                type="radio" 
                checked={selectedService === svc.id}
                onChange={() => setSelectedService(svc.id)}
              />
              <div className={`absolute right-4 top-4 text-primary transition-all duration-300 ${selectedService === svc.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <span className="material-symbols-outlined text-2xl filled">check_circle</span>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all ${
                selectedService === svc.id ? 'bg-primary text-white' : 'bg-blue-50 dark:bg-blue-900/30 text-primary group-hover:bg-primary group-hover:text-white'
              }`}>
                <span className="material-symbols-outlined text-[28px]">{svc.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0d121c] dark:text-white text-lg font-black leading-tight">{svc.label}</h3>
                <p className="text-text-secondary dark:text-gray-400 text-sm font-medium leading-relaxed">{svc.desc}</p>
              </div>
            </label>
          ))}
        </div>

        {/* Info Banner */}
        <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-5 border border-blue-100 dark:border-blue-800/50 flex gap-4 items-start mt-4 shadow-sm">
          <span className="material-symbols-outlined text-primary font-bold">info</span>
          <p className="text-sm text-text-main dark:text-blue-100 leading-relaxed font-medium">
            <span className="font-black">Nota:</span> Para apertura de cuentas y préstamos, podrías necesitar traer identificación vigente y comprobante de ingresos a tu cita.
          </p>
        </div>

        {/* Action Footer */}
        <div className="flex justify-end pt-6 pb-12 gap-4">
           <button 
            onClick={() => navigate(Page.Home)}
            className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white text-base font-black transition-all hover:bg-gray-200"
          >
            Cancelar
          </button>
          <button 
            disabled={!selectedService}
            onClick={() => { if(step < 4) setStep(s => s + 1) }}
            className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary hover:bg-primary-dark text-white text-base font-black transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:shadow-none active:scale-95 group"
          >
            Siguiente
            <span className="material-symbols-outlined ml-2 text-sm font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
