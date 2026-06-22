"use client";

import { motion } from "framer-motion";
import { FaTooth, FaHandSparkles } from "react-icons/fa";

export default function Services() {
  const specializedServices = [
    {
      icon: <FaTooth className="text-2xl" />,
      title: "Implantes Guiados",
      desc: "Tecnologia digital para o planejamento de implantes sem cortes complexos, garantindo rápida recuperação.",
    },
    {
      icon: <FaHandSparkles className="text-2xl" />,
      title: "Lentes de Contato",
      desc: "Transformação estética personalizada para harmonizar o formato, cor e alinhamento do seu sorriso.",
    },
  ];

  return (
    <section id="servicos" className="text-brand-deep bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-brand-medium font-sans text-xs font-bold tracking-[0.2em] uppercase">
            Especialidades
          </span>
          <h2 className="text-brand-dark mt-2 font-serif text-3xl font-medium md:text-4xl">
            Tratamentos de Alta Performance
          </h2>
          <div className="bg-brand-light/60 mx-auto mt-4 h-[1px] w-12" />
        </motion.div>

        {/* Grid de Conteúdo: Destaque com Vídeo + Outros Serviços */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {/* CARD DE DESTAQUE PREMIUM COM O VÍDEO .WEBM */}
          {/* Mobile-First: Ocupa 1 coluna. Desktop: Ocupa 2 colunas da grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-lg md:p-10 lg:col-span-2 lg:min-h-full"
          >
            {/* Tag do caminho público no Next.js: não precisa escrever 'public', inicia direto em '/' */}
            <video
              src="/services/atedimento-doutor.webm"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Escuro Gradiente: Garante a leitura do texto por cima do vídeo */}
            <div className="from-brand-dark/90 via-brand-dark/40 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />

            {/* Conteúdo sobre o vídeo */}
            <div className="relative z-20 max-w-xl space-y-3 text-white">
              <span className="bg-brand-light/30 border-brand-light/40 inline-block rounded-md border px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase backdrop-blur-xs">
                Experiência Premium
              </span>
              <h3 className="text-brand-bg font-serif text-2xl font-light tracking-wide md:text-3xl">
                Atendimento Humanizado & Personalizado
              </h3>
              <p className="text-brand-bg/80 font-sans text-sm leading-relaxed md:text-base">
                Cada consulta é planejada individualmente em um ambiente
                acolhedor, utilizando diagnósticos 3D e tecnologia avançada para
                que você se sinta seguro e confortável do início ao fim.
              </p>
            </div>
          </motion.div>

          {/* OUTROS SERVIÇOS (COLUNA DA DIREITA NO DESKTOP) */}
          <div className="flex flex-col justify-between gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-brand-bg/20 border-brand-light/10 group flex flex-1 flex-col justify-between rounded-2xl border p-6 transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="bg-brand-dark text-brand-light group-hover:bg-brand-medium mb-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-brand-dark mb-2 font-serif text-xl font-medium tracking-wide">
                    {service.title}
                  </h4>
                  <p className="text-brand-deep/80 font-sans text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="border-brand-light/10 mt-4 border-t pt-4">
                  <a
                    href="#contato"
                    className="text-brand-medium hover:text-brand-dark inline-flex items-center gap-1 font-sans text-xs font-bold tracking-wider uppercase transition-colors"
                  >
                    Saber mais &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
