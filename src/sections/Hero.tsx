import CTAButton from "@/components/CTAButton";
import {
  buildCustomWhatsAppUrl,
  DENTIST_DEFAULT_MESSAGE,
  DENTIST_PHONE,
} from "@/lib/dataNumber";
import Image from "next/image";
import { JSX } from "react";
import { BiStar } from "react-icons/bi";
import { FaHandSparkles, FaTooth, FaUserMd, FaWhatsapp } from "react-icons/fa";
import { FaPeopleRoof, FaUserDoctor } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

interface BadgeItem {
  icon: JSX.Element;
  title: string;
  desc: string;
  position: string;
}

export default function Hero() {
  const whatsAppLink = buildCustomWhatsAppUrl(
    DENTIST_PHONE,
    DENTIST_DEFAULT_MESSAGE,
  );

  const badges: BadgeItem[] = [
    {
      icon: <FaTooth />,
      title: "Implantes",
      desc: "Sua mastigação de volta.",
      position: "top-[42%] top-[20%] left-[1%] sm:left-[5%]",
    },
    {
      icon: <FaHandSparkles />,
      title: "Estética",
      desc: "Lentes e Clareamento.",
      position: "top-[50%] right-[1%] sm:right-[5%]",
    },
    {
      icon: <FaUserMd />,
      title: "Ortodontia",
      desc: "Alinhadores invisíveis.",
      position: "bottom-[7%] sm:bottom-[15%] left-[10%]",
    },
  ];

  return (
    <section className="bg-brand-bg2/50 relative min-h-screen w-full pt-18 text-center">
      <div className="border-brand-light/30 animate-slide-down bg-brand-bg2/50 inline-flex flex-col items-center justify-center rounded-xs border p-6 tracking-widest uppercase backdrop-blur-xs md:p-10">
        <span className="text-brand-medium mb-2 font-sans text-xs tracking-[0.3em]">
          Clínica Odontológica
        </span>

        <h1 className="text-brand-dark flex flex-col items-center gap-2 pb-6 font-serif text-2xl font-light sm:flex-row sm:text-4xl md:gap-4 md:text-6xl">
          <span className="tracking-wide">Sorriso</span>
          <span className="text-brand-light font-serif font-normal tracking-normal lowercase italic first-letter:uppercase">
            Premium
          </span>
        </h1>

        <div className="bg-brand-light/60 h-px w-12" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center lg:grid-cols-2 lg:gap-12">
        {/* Bloco de Textos (Corrigido: Visível em todas as telas) */}
        <div className="bg-brand-bg2 md:bg-brand-bg order-3 mx-auto flex max-w-xl flex-col space-y-6 text-center sm:rounded-t-3xl sm:pb-8 sm:shadow-[-1px_-15px_30px_-5px_var(--color-brand-deep)] md:rounded-none md:border-none md:border-white/10 md:shadow-none lg:order-1 lg:mx-0 lg:text-left">
          {/* Elemento 1: Entra imediatamente */}
          <h3 className="text-brand-dark animate-slide-left-fast after:from-brand-light relative mx-auto inline-block pb-3 font-serif text-2xl font-medium tracking-wide after:absolute after:bottom-0 after:left-1/4 after:h-[3px] after:w-1/2 after:bg-gradient-to-r after:to-transparent sm:text-4xl lg:mx-0 lg:text-[44px] lg:after:left-0">
            Excelência em Cada Detalhe
          </h3>

          {/* Elemento 2: Atraso de 150ms */}
          <p className="font-quicksand animate-slide-left text-brand-medium text-xl font-semibold tracking-tight md:text-2xl">
            Dr. João Silva & Dra. Maria Silva
          </p>

          {/* Elemento 3: Atraso de 300ms */}
          <p className="text-brand-deep/80 animate-slide-left-mid px-1.5 font-sans text-base leading-relaxed font-normal md:text-lg">
            Implantes, Ortodontia e Estética Dental com tecnologia digital,
            atendimento humanizado e resultados naturais para toda a família.
          </p>

          {/* Elemento 4: Atraso de 450ms */}
          <div className="animate-slide-left-slow hidden w-full pt-4 sm:block sm:w-auto">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark hover:bg-brand-dark/90 inline-block w-full rounded-lg border border-white/20 px-8 py-4 text-center font-sans text-xs font-bold tracking-wider text-white uppercase shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              Agendar uma avaliação
            </a>
          </div>
        </div>

        {/* Bloco da Imagem com os Badges */}
        <div className="animate-fade-in relative order-1 mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-visible md:max-w-md lg:order-2 lg:max-w-lg">
          {/* Círculos de Fundo */}
          <div className="bg-brand-medium absolute top-[5%] z-0 aspect-square w-[85%] rounded-full opacity-25 blur-xs" />
          <div className="absolute top-[15%] left-[15%] z-0 aspect-square w-[70%] rounded-full bg-blue-400/50 blur-sm" />

          {/* Imagem Principal */}
          <Image
            src="/hero/doutores.webp"
            alt="Cirurgiões Dentistas da Clínica"
            width={600}
            height={600}
            className="animate-slide-in-right relative z-10 h-full w-full object-contain"
            priority
          />

          {/* Mapeamento dos Badges Corrigido */}
          {badges.map((item, index) => (
            <div
              key={index}
              className={`group absolute z-20 flex w-32 cursor-pointer flex-col rounded-xl border border-white/50 bg-white/70 p-2.5 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out hover:w-44 active:w-44 ${item.position}`}
            >
              <div className="text-brand-dark flex items-center gap-2">
                <div className="bg-brand-dark/5 text-brand-medium shrink-0 rounded-lg p-1.5 text-sm">
                  {item.icon}
                </div>
                <span className="font-sans text-[10px] font-bold tracking-wider whitespace-nowrap uppercase">
                  {item.title}
                </span>
              </div>

              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:mt-2 group-hover:max-h-16 group-hover:opacity-100 group-active:mt-2 group-active:max-h-16 group-active:opacity-100">
                <p className="text-brand-deep/90 border-brand-dark/10 border-t pt-1 font-sans text-[11px] leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Botão: vira 'order-2' no mobile, ficando abaixo de tudo (inclusive da imagem no fluxo global) */}
        <div className="bg-brand-bg2 animate-slide-up order-1 block w-full px-2 pb-6 sm:hidden sm:w-auto lg:order-0">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark hover:bg-brand-dark/90 inline-block w-full rounded-lg border border-white/20 px-8 py-4 text-center font-sans text-xs font-bold tracking-wider text-white uppercase shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:w-auto"
          >
            Agendar uma avaliação
          </a>
        </div>
      </div>

      {/* textos informativos */}
      <div className="animate-slide-up bg-brand-bg2 w-full px-6 py-10 delay-300 lg:rounded-t-3xl lg:border-t lg:border-white/10 lg:shadow-[-1px_-15px_30px_-5px_var(--color-brand-deep)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-brand-dark font-serif text-3xl leading-tight font-medium md:text-5xl">
            Transforme seu sorriso com{" "}
            <span className="text-brand-light italic">tecnologia</span> e
            conforto.
          </h2>
          <p className="text-brand-medium mt-4 font-sans text-base md:text-lg">
            Agende uma consulta com nossos especialistas hoje mesmo.
          </p>
        </div>
      </div>

      {/* Prova social */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center justify-center gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Google Recomendações */}
        <div className="bg-brand-bg2/40 border-brand-light/10 animate-slide-up flex items-center gap-3 rounded-xl border p-4 shadow-xs [animation-delay:100ms]">
          <div className="bg-brand-light/10 text-brand-medium shrink-0 rounded-lg p-2">
            <BiStar className="h-5 w-5 fill-amber-500 text-amber-500" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-baloo2 text-brand-dark text-base leading-none font-bold">
              4.9 / 5.0
            </span>
            <span className="text-brand-deep/70 mt-0.5 font-sans text-xs">
              Avaliações no Google
            </span>
          </div>
        </div>

        {/* Card 2: Volume de Pacientes */}
        <div className="bg-brand-bg2/40 border-brand-light/10 animate-slide-up flex items-center gap-3 rounded-xl border p-4 shadow-xs [animation-delay:200ms]">
          <div className="bg-brand-light/10 text-brand-medium shrink-0 rounded-lg p-2">
            <FaPeopleRoof className="text-brand-medium h-5 w-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-baloo2 text-brand-dark text-base leading-none font-bold">
              +2.000
            </span>
            <span className="text-brand-deep/70 mt-0.5 font-sans text-xs">
              Sorrisos transformados
            </span>
          </div>
        </div>

        {/* Card 3: Tempo de Mercado */}
        <div className="bg-brand-bg2/40 border-brand-light/10 animate-slide-up flex items-center gap-3 rounded-xl border p-4 shadow-xs [animation-delay:300ms]">
          <div className="bg-brand-light/10 text-brand-medium shrink-0 rounded-lg p-2">
            <FaUserDoctor className="text-brand-medium h-5 w-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-baloo2 text-brand-dark text-base leading-none font-bold">
              +10 Anos
            </span>
            <span className="text-brand-deep/70 mt-0.5 font-sans text-xs">
              De experiência clínica
            </span>
          </div>
        </div>

        {/* Card 4: Diferencial Tecnológico (Substituindo a repetição) */}
        <div className="bg-brand-bg2/40 border-brand-light/10 animate-slide-up flex items-center gap-3 rounded-xl border p-4 shadow-xs [animation-delay:400ms]">
          <div className="bg-brand-light/10 text-brand-medium shrink-0 rounded-lg p-2">
            {/* SVG Nativo de raio/tecnologia para manter leve */}
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="text-brand-medium h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-baloo2 text-brand-dark text-base leading-none font-bold">
              100% Digital
            </span>
            <span className="text-brand-deep/70 mt-0.5 font-sans text-xs">
              Planejamento avançado
            </span>
          </div>
        </div>
      </div>

      {/* Localização e CTA */}
      <div>
        <p className="text-sm">📍 Campo Grande - MS</p>
        <p className="px-4">
          Atendemos pacientes de toda Campo Grande e região.
        </p>
        <div className="m-8 mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={whatsAppLink} external>
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Agendar uma Avaliação
          </CTAButton>

          <CTAButton href="/contact" variant="secondary">
            <HiOutlineBuildingOffice2 className="mr-2 h-5 w-5" />
            Conheça a Clínica
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
