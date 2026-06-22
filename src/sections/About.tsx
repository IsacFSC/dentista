"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "motion/react"; // Padrão recomendado na v12 (mais leve)

export default function About() {
  // UX fundamental: Verifica se o usuário prefere acessibilidade sem movimentos bruscos
  const shouldReduceMotion = useReducedMotion();

  // Orquestração de micro-interações para os textos (Fade-in sequencial)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Atraso fluido entre cada linha de texto
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 px-4 py-24">
      {/* Container estrutural em Grid Descentralizado (Tendência High-End) */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Bloco de Imagens: Composição de Profundidade Visual (Lado Esquerdo - 5 Colunas) */}
        <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center lg:col-span-5 lg:mx-0">
          {/* Imagem 1: Os Doutores (Âncora de Confiança) */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.93,
              x: shouldReduceMotion ? 0 : -30,
            }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Dispara o efeito de forma sutil durante a rolagem
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 22,
              delay: 0.2,
            }}
            className="absolute top-0 left-0 z-10 aspect-[4/5] w-[85%] overflow-hidden rounded-2xl border border-white/40 shadow-xl"
          >
            <Image
              src="/hero/doutores.webp"
              alt="Cirurgiões Dentistas da Clínica"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 40vw"
            />
          </motion.div>

          {/* Imagem 2: Arca Dentária (Foco na Tecnologia/Arte) */}
          {/* Posicionada de forma sobreposta (Overlap) para criar tridimensionalidade na interface */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.85,
              y: shouldReduceMotion ? 0 : 40,
            }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 18,
              delay: 0.4,
            }} // Entra logo após os doutores
            className="absolute right-0 bottom-0 z-20 aspect-square w-[55%] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-transform duration-500 ease-out hover:scale-105" // Micro-interação ao passar o mouse
          >
            <Image
              src="/hero/arca-dentaria.webp"
              alt="Modelagem digital da arca dentária"
              fill
              className="object-cover"
              sizes="(max-w-768px) 50vw, 20vw"
            />
          </motion.div>

          {/* Elemento de Fundo Abstrato (Vetor de Luz) */}
          <div className="bg-brand-light/10 absolute inset-0 -z-10 scale-75 rounded-full blur-3xl" />
        </div>

        {/* Bloco Narrativo de Textos (Lado Direito - 7 Colunas) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="mx-auto flex max-w-2xl flex-col space-y-6 text-left lg:col-span-7 lg:mx-0"
        >
          <motion.span
            variants={itemVariants}
            className="text-brand-medium font-sans text-xs font-bold tracking-[0.25em] uppercase"
          >
            Nossa Trajetória
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-brand-dark after:bg-brand-light relative pb-4 font-serif text-3xl leading-tight font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-16 md:text-5xl"
          >
            Ciência e Sensibilidade Moldando o Seu Melhor Sorriso
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-brand-deep/80 pt-2 font-sans text-base leading-relaxed md:text-lg"
          >
            Na Sorriso Premium, entendemos que a odontologia moderna caminha
            lado a lado com o acolhimento humano. Unimos doutores altamente
            qualificados a laboratórios digitais de ponta para garantir precisão
            cirúrgica absoluta, desde o escaneamento da sua arcada até a
            finalização estética.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-brand-medium/90 font-sans text-sm leading-relaxed md:text-base"
          >
            Cada detalhe da nossa estrutura foi pensado para eliminar a
            ansiedade clínica convencional, transformando seu tratamento em uma
            jornada segura, previsível e focada no seu bem-estar global.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
