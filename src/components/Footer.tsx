import BubbleBackground from "@/effects/BubbleBackground";
import {
  buildCustomWhatsAppUrl,
  DENTIST_DEFAULT_MESSAGE,
  DENTIST_PHONE,
} from "@/lib/dataNumber";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const whatsAppLink = buildCustomWhatsAppUrl(
    DENTIST_PHONE,
    DENTIST_DEFAULT_MESSAGE,
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-bg/90 border-brand-medium/20 relative border-t px-4 pt-8 pb-4 font-sans md:pb-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Coluna 1: Sobre / Identidade */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-medium text-white">
            SorrisoPremium
          </h3>
          <p className="text-brand-bg/70 max-w-sm text-sm leading-relaxed">
            Referência em tratamentos odontológicos estéticos e integrativos.
            Tecnologia avançada com o acolhimento que você merece.
          </p>
          <p className="text-brand-light text-xs font-semibold italic">
            CRO-PR 12345 / Dr. João Silva & Dra. Maria Silva
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-white">Links Rápidos</h4>
          <ul className="flex flex-col space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-brand-light transition-colors"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-brand-light transition-colors"
              >
                Nossos Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-brand-light transition-colors"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-brand-light transition-colors"
              >
                Contato e Localização
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais e Atendimento */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-white">Redes Sociais</h4>
          <div className="text-brand-light flex gap-4 text-2xl">
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="text-brand-bg/60 space-y-1 text-xs">
            <p>Segunda a Sexta: 08h às 18h</p>
            <p>Sábado: 08h às 12h (Apenas com agendamento)</p>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="border-brand-medium/10 text-brand-bg/50 mx-auto mt-8 max-w-6xl border-t pt-8 text-center text-xs">
        <p>
          &copy; {currentYear} SorrisoPremium. Todos os direitos reservados.
        </p>
      </div>
      <BubbleBackground />
    </footer>
  );
}
