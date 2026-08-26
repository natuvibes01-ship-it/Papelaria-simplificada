import type { ReactNode } from "react"
import { Gift, Rocket, DollarSign, Scissors, Volume2, Layers, Package, MoveRight } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

const SCREENSHOTS = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc01-1T5p9cVQuPv8dPDrQuNHkODReLpfJj.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topo%20safari-DpQFOZwK2Jus70M9JTzhbbyCGKI7VX.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc03-roDaouI5QlHhbqs5Xjp9cLBQ90P3u7.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Caixa%20Milk%20patrulha-GXftFK5BP2TmMrL9CxKxSuGN0ITlWb.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc05-9hHOabDVkZmFQL55sNspxUzgh6dZqy.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caixa%20milk%20batman-uIuaJmEfXLZNtJwjTj9xiTsrJDeLMi.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc07-4yCmU2bS8qju8iiIRWKYWnWcW7Zfft.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caixa%20milk%20spiderman-A6CicpF36nxfMTIWS5jsimOaoGDeuz.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc08888-kVdW5LHiashtfee8TbVZ9RViUsYaTe.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc09-Mx9hV2P9dLAosDgaBfnNakYqirBsRB.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caixa%20milk%20safari-CCpopCwtdfqjjef3oqIlJ7KBEra1D0.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc11-T4uymYDTwkvSUZYzl3dMmdZg9HNAE4.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topo%20bluey-e447cu6l6spF5M1S32I7pwkpkC2FG3.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc13-YbhOP1jSM1EMOkCdzYDPnGHY70XpSc.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc14-w3viPtG5IWFKclnI0e6OQg5JNSLIQO.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abc15-sfr2Q58xrmXHVXS0V5bDIhX4Se5YYt.webp",
]

interface Feature {
  icon: ReactNode
  title: string
  desc: string
}

export function AppShowcaseSection() {
  const features: Feature[] = [
    {
      icon: <Gift size={28} />,
      title: "🎁 BIBLIOTECA DE MOLDES PRONTOS",
      desc: "Mais de 2.000 moldes organizados para imprimir, personalizar e vender.",
    },
    {
      icon: <Rocket size={28} />,
      title: "🚀 COMECE COM MENOS DE R$50",
      desc: "Receba um plano simples para fazer sua primeira venda mesmo começando com pouco dinheiro e sem impressora.",
    },
    {
      icon: <DollarSign size={28} />,
      title: "💰 DESCUBRA QUANTO COBRAR",
      desc: "Calcule preços e lucros automaticamente para vender com mais confiança.",
    },
    {
      icon: <Scissors size={28} />,
      title: "✂️ APRENDA COMO MONTAR",
      desc: "Veja os materiais necessários e siga tutoriais simples de produção.",
    },
    {
      icon: <Volume2 size={28} />,
      title: "📢 TEXTOS PRONTOS PARA VENDER",
      desc: "Mensagens prontas para WhatsApp e Instagram para divulgar seus produtos.",
    },
    {
      icon: <Layers size={28} />,
      title: "🏪 ONDE COMPRAR MATERIAIS",
      desc: "Descubra fornecedores confiáveis e economize tempo procurando tudo sozinha.",
    },
    {
      icon: <Package size={28} />,
      title: "📦 KIT INICIAL PARA COMEÇAR",
      desc: "Saiba exatamente o que comprar para iniciar sem desperdícios.",
    },
  ]

  return (
    <section className="py-12 bg-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#5B2A86] font-black text-[12px] uppercase tracking-[0.4em] mb-3">TECNOLOGIA EXCLUSIVA</p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">
            O SEU ATELIÊ NA PALMA DA MÃO
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed text-pretty">
            Tudo o que você precisa para começar a vender em um único lugar: moldes prontos, curso passo a passo
            ensinando montagem, divulgação e vendas.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mb-10 text-center opacity-80">
          <p className="text-[13px] md:text-sm font-black text-slate-900 leading-relaxed max-w-md">
            Deslize para o lado e descubra tudo o que você encontra dentro da plataforma.
          </p>
          <div className="mt-2 text-[#5B2A86]">
            <MoveRight size={16} />
          </div>
        </div>
        <div className="mb-12">
          <ImageCarousel
            images={SCREENSHOTS}
            aspectRatio="aspect-[9/16]"
            maxWidth="max-w-[360px]"
            autoplay
            interval={3500}
            width={360}
            height={640}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-[#F8F8F8] p-8 rounded-2xl border border-slate-200/50"
            >
              <div className="w-14 h-14 bg-[#5B2A86]/10 rounded-2xl flex items-center justify-center text-[#5B2A86] mb-6 shadow-sm">
                {f.icon}
              </div>
              <h4 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight mb-3 leading-tight">
                {f.title}
              </h4>
              <p className="text-slate-500 text-[12px] md:text-sm font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
