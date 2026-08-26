import Image from "next/image"
import { Zap } from "lucide-react"
import { VideoPoster } from "@/components/video-poster"

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#E91E8C]/95 backdrop-blur-xl border-b border-[#c41574]">
      <div className="w-full max-w-full mx-auto px-4 h-16 sm:h-14 flex items-center justify-center">
        <Image
          src="/logo-metodo-wide.png"
          alt="Método Personalizados por Encomenda"
          width={640}
          height={218}
          priority
          className="h-9 w-auto max-w-[calc(100vw-2rem)] origin-center scale-100 sm:h-10 sm:scale-[1.7] object-contain"
        />
      </div>
    </nav>
  )
}

export function HeroSection({ onReveal }: { onReveal?: () => void }) {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 bg-slate-950 text-white flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#5B2A86]/20 to-[#7B3DB8]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] bg-[#EC4899]/5 blur-[100px] rounded-full -z-10" />
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex max-w-full items-center gap-2 px-4 py-3 sm:gap-3 sm:px-8 bg-[#5B2A86]/10 text-[#F472B6] rounded-full border border-[#5B2A86]/30 mb-10 shadow-[0_0_30px_rgba(91,42,134,0.25)]">
          <Zap size={16} />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] italic">
            OPORTUNIDADE DE RENDA EXTRA
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-[900] mb-8 leading-[1.2] tracking-tight uppercase max-w-4xl mx-auto text-balance">
          GANHE ATÉ <span className="text-[#EC4899]">R$ 1.000,00 POR SEMANA</span> COM PAPELARIA PERSONALIZADA —{" "}
          <span className="text-white">MESMO COMEÇANDO DO ZERO.</span>
        </h1>
        <p className="text-xs md:text-lg text-slate-400 mb-4 font-black max-w-2xl mx-auto leading-relaxed text-pretty">
          Assista ao vídeo abaixo e descubra como transformar moldes em vendas usando uma plataforma simples e fácil de
          usar.
        </p>
        <p className="inline-flex max-w-full items-center justify-center text-center text-[9px] sm:text-[10px] md:text-xs text-black bg-gradient-to-r from-[#E91E8C] via-[#f472b6] to-[#E91E8C] px-3 py-2 sm:px-4 mb-12 font-black uppercase tracking-wide rounded-full shadow-[0_6px_18px_rgba(233,30,140,0.28)]">
          OBS: precisa apenas de celular e tesoura — sem impressora ou equipamentos.
        </p>
        <div className="w-full max-w-3xl transform hover:scale-[1.01] transition-transform duration-500">
          <VideoPoster
            posterUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_metodo-FXnvce43ZEMkceKoRqvZRqP7Kk5Rmn.webp"
            label="CLIQUE PARA ATIVAR O SOM"
            videoUrl="/mini-vsl.mp4"
            isVertical
            priority
            revealAtSeconds={45}
            onReveal={onReveal}
          />
        </div>
      </div>
    </section>
  )
}
