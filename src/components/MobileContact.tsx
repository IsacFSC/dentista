"use client";

import {
  buildCustomWhatsAppUrl,
  DENTIST_DEFAULT_MESSAGE,
  DENTIST_PHONE,
} from "@/lib/dataNumber";
import { useState, useEffect } from "react";

export default function MobileContact() {
  const whatsAppLink = buildCustomWhatsAppUrl(
    DENTIST_PHONE,
    DENTIST_DEFAULT_MESSAGE,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    // Carregamento suave após 1.5 segundos
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="group pointer-events-auto fixed right-6 bottom-6 z-50 flex items-center gap-3">
      {/* Balão de Mensagem Estilo TOTVS com botão de fechar */}
      {showBubble && (
        <div className="relative hidden max-w-xs animate-[fadeIn_0.4s_ease-out] flex-col rounded-2xl border border-slate-100 bg-white px-4 py-2.5 text-left text-slate-800 shadow-xl transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-2xl sm:flex">
          {/* Botão Fechar (X) nativo e leve */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowBubble(false);
            }}
            className="absolute top-1.5 right-2 cursor-pointer p-1 font-sans text-[10px] font-bold text-slate-400 select-none hover:text-slate-600"
            aria-label="Fechar mensagem"
          >
            ✕
          </button>

          <p className="text-brand-medium pr-4 font-sans text-[11px] font-bold tracking-wider uppercase">
            Agendamento
          </p>
          <p className="mt-0.5 pr-4 font-sans text-xs leading-tight text-slate-600">
            Garanta seu horário com nossos especialistas agora!
          </p>

          {/* Setinha lateral do balão */}
          <div className="absolute top-1/2 right-14 h-0 w-0 translate-x-full -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-white" />
        </div>
      )}

      {/* Botão Flutuante Principal de Agendamento (SVG Nativo) */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta no WhatsApp"
        className="bg-brand-dark hover:bg-brand-medium relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Efeito de Pulsação Ondular */}
        <span className="bg-brand-dark absolute inset-0 -z-10 animate-[ping_2s_infinite] rounded-full opacity-30" />

        {/* Ícone de Calendário/Agendamento em SVG Nativo (Super Leve) */}
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 animate-[bounce_3s_infinite] [animation-delay:1s]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      </a>
    </div>
  );
}
