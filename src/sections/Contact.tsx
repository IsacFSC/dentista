"use client";

import { motion, useReducedMotion } from "motion/react"; // Uso correto pós-desinstalação
import CTAButton from "@/components/CTAButton";
import { clinicHours } from "@/data/clinicHours";
import { getClinicStatus } from "@/lib/clinicStatus";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import ContactMap from "@/components/map/ContactMap";
import {
  buildCustomWhatsAppUrl,
  DENTIST_DEFAULT_MESSAGE,
  DENTIST_PHONE,
} from "@/lib/dataNumber";

export default function Contact() {
  const whatsAppLink = buildCustomWhatsAppUrl(
    DENTIST_PHONE,
    DENTIST_DEFAULT_MESSAGE,
  );
  const status = getClinicStatus();
  const shouldReduceMotion = useReducedMotion();

  // Definição de variantes físicas (Spring) para consistência visual com o restante do site
  const cardVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 18 },
    },
  } as const;

  const socialLinks = [
    { icon: <FaInstagram />, href: "#", label: "Instagram da Clínica" },
    { icon: <FaFacebookF />, href: "#", label: "Facebook da Clínica" },
    { icon: <FaTiktok />, href: "#", label: "TikTok da Clínica" },
  ];

  return (
    <section className="text-brand-deep bg-brand-bg w-full overflow-hidden px-4 py-20">
      {/* ── Cabeçalho da Seção (Acessível e Escaneável) ── */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-brand-dark font-quicksand text-3xl font-bold tracking-tight md:text-5xl">
          Contato & Localização
        </h2>
        <p className="text-brand-medium mt-3 font-sans text-base md:text-lg">
          Tratamentos de ponta e tecnologia avançada para o seu sorriso
        </p>
      </div>

      {/* ── Grid Principal (Consistência de proporções de tela) ── */}
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-12">
        {/* Bloco de Dados Clínicos (Ocupa 5 colunas no Desktop) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-brand-dark/10 bg-brand-bg2/40 flex flex-col justify-between rounded-3xl border p-6 shadow-xs backdrop-blur-md lg:col-span-5"
        >
          <div>
            {/* Status de Atendimento (Real-time Feedback Badge) */}
            <div className="mb-4 flex justify-start">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide shadow-2xs ${
                  status.isOpen
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-rose-200 bg-rose-50 text-rose-800"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${status.isOpen ? "animate-pulse bg-emerald-500" : "bg-rose-500"}`}
                />
                {status.message}
              </span>
            </div>

            {/* Painel de Horários (Tabela de Dados Limpa) */}
            <div className="space-y-1">
              {Object.values(clinicHours).map((day) => (
                <div
                  key={day.label}
                  className="border-brand-dark/10 flex items-center justify-between border-b py-2.5 text-sm last:border-none"
                >
                  <span className="text-brand-dark/90 font-sans font-medium">
                    {day.label}
                  </span>
                  <span className="text-brand-deep font-sans font-semibold">
                    {day.open ? `${day.open} - ${day.close}` : "Fechado"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Informações Estruturais de Contato */}
          <div className="border-brand-dark/10 mt-8 space-y-6 border-t pt-6">
            {/* Endereço */}
            <div className="flex items-start gap-3.5">
              <div className="bg-brand-light/10 text-brand-medium mt-0.5 shrink-0 rounded-lg p-2">
                <FaMapMarkerAlt className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-quicksand text-brand-dark text-sm font-bold">
                  Endereço
                </h3>
                <p className="text-brand-deep/80 mt-0.5 text-sm leading-relaxed">
                  Av. Cel Pôrto Carrero, 100 <br />
                  Campo Grande – MS
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-3.5">
              <div className="bg-brand-light/10 text-brand-medium mt-0.5 shrink-0 rounded-lg p-2">
                <FaPhoneAlt className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-quicksand text-brand-dark text-sm font-bold">
                  Telefone
                </h3>
                <a
                  href="tel:+5567999999999"
                  className="text-brand-medium hover:text-brand-dark mt-0.5 text-sm font-medium transition-colors focus:underline focus:outline-none"
                >
                  (67) 9 9999-9999
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start gap-3.5">
              <div className="bg-brand-light/10 text-brand-medium mt-0.5 shrink-0 rounded-lg p-2">
                <FaEnvelope className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-quicksand text-brand-dark text-sm font-bold">
                  E-mail
                </h3>
                <a
                  href="mailto:sorrisopremium@gmail.com"
                  className="text-brand-medium hover:text-brand-dark mt-0.5 text-sm font-medium transition-colors focus:underline focus:outline-none"
                >
                  sorrisopremium@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloco do Mapa (Ocupa 7 colunas no Desktop - Equilíbrio Espacial) */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="border-brand-dark/10 h-[350px] min-h-[400px] w-full overflow-hidden rounded-3xl border shadow-sm lg:col-span-7 lg:h-full"
        >
          <ContactMap />
        </motion.div>
      </div>

      {/* ── Rodapé de Conversão (Social + CTA Primário) ── */}
      <div className="border-brand-dark/10 mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
        {/* Redes Sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-quicksand text-brand-dark mb-3 text-sm font-bold tracking-wide">
            Siga nossas redes sociais
          </h3>
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:bg-brand-medium border-brand-dark/10 text-brand-medium focus:outline-brand-light flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-2xs transition-colors duration-300 hover:text-white focus:outline-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bloco de Ação Rápida (CTA) */}
        <div className="flex w-full justify-center md:w-auto">
          <CTAButton href={whatsAppLink} external>
            <FaWhatsapp className="mr-2 h-5 w-5 shrink-0" />
            Agendar uma Avaliação
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
