"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook para identificar a rota atual
import { FaBars, FaTimes } from "react-icons/fa";
import {
  buildCustomWhatsAppUrl,
  DENTIST_DEFAULT_MESSAGE,
  DENTIST_PHONE,
} from "@/lib/dataNumber";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Captura a rota atual (ex: "/" ou "/services")
  const whatsAppLink = buildCustomWhatsAppUrl(
    DENTIST_PHONE,
    DENTIST_DEFAULT_MESSAGE,
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Nossos Serviços", href: "/services" },
    { label: "Sobre Nós", href: "/about" },
    { label: "Contato e Localização", href: "/contact" },
  ];

  return (
    <header className="bg-brand-dark/95 fixed top-0 right-0 left-0 z-50 text-white shadow-md backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo / Nome da Clínica */}
        <Link
          href="/"
          className="text-brand-bg font-serif text-xl font-semibold tracking-wide"
        >
          Sorriso<span className="text-brand-light italic">Premium</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-8 font-sans text-sm font-medium md:flex">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors duration-300 ${isActive ? "text-brand-light" : "text-slate-300 hover:text-white"} /* Efeito de Borda Incomum (Pseudo-elemento) */ after:bg-brand-light /* Estado Ativo: Linha fixa cobrindo metade (w-1/2) */ after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${isActive ? "after:w-1/2" : "after:w-0"} /* Estado Hover: Linha expande totalmente ao passar o mouse */ hover:after:w-full`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={whatsAppLink}
            className="bg-brand-light hover:bg-brand-light/90 text-brand-dark rounded-lg px-4 py-2 text-xs font-bold tracking-wider uppercase shadow-sm transition-all active:scale-95"
          >
            Agendar
          </Link>
        </nav>

        {/* Botão Menu Hamburguer (Mobile) */}
        <button
          onClick={toggleMenu}
          className="text-brand-bg p-1 text-2xl focus:outline-none md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Cortina Mobile */}
      {isOpen && (
        <nav className="bg-brand-dark border-brand-medium/30 flex flex-col gap-2 border-t px-6 py-4 font-sans shadow-xl md:hidden">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-base transition-all ${
                  isActive
                    ? "bg-brand-medium/20 text-brand-light border-brand-light border-l-4 font-semibold"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                } `}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="bg-brand-light h-1.5 w-1.5 rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href={whatsAppLink}
            onClick={() => setIsOpen(false)}
            className="bg-brand-light text-brand-dark mt-4 rounded-lg py-3 text-center font-bold shadow-md transition-all active:scale-[0.98]"
          >
            Agendar Consulta
          </Link>
        </nav>
      )}
    </header>
  );
}
