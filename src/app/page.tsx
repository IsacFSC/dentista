import PageHero from "@/app/hero/page";
import MobileContactButton from "@/components/MobileContact";

export default function Home() {
  return (
    // 'min-h-screen' garante que o conteúdo ocupe toda a tela
    // 'bg-brand-bg' define o fundo off-white padrão da clínica
    // 'overflow-x-hidden' evita barras de rolagem horizontais indesejadas no mobile
    <main className="bg-brand-bg text-brand-deep min-h-screen overflow-x-hidden">
      <PageHero />
      {/* Botão flutuante de contato fixo no rodapé (Apenas para celulares) */}
      <MobileContactButton />
    </main>
  );
}
