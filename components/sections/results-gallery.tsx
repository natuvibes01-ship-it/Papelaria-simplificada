"use client"

import { MoveRight } from "lucide-react"
import { CardCarousel } from "@/components/ui/card-carousel"

const PRODUCTS = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Caixas%20personalizadas%20tema%20Gamer%20para%20encantar%20sua%20festa%21%20%F0%9F%98%8D%F0%9F%A6%8B__As%20caixas%20personalizadas%20para%20festa%20possuem%20duas%20funcionalidades__-%20Comp%C3%B5em%20a%20decora%C3%A7%C3%A3o%20da%20mesa%3B_-%20Ser%C3%A3o%20entregues%20como%20lembran%C3%A7a%20aos%20convidados%20-JL78sIYQ3ijwxs12dcfce0iia6x91d.webp",
    alt: "Kit de caixas personalizadas tema Gamer",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ea230edb-ec85-4ce8-aa85-fc3e6b270ca3-ZRvKLydHqzvF5T1ZbVrgnEnh6k1TBH.webp",
    alt: "Topo de bolo personalizado tema Toy Story",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/O%20amor%20deve%20ser%20lembrado%20todos%20os%20dias%20%F0%9F%92%96%20_Aqui%20voc%C3%AA%20encontra%20o%20presente%20ideal%20e%20personalizado%20do%20seu%20jeitinho%20%E2%9C%A8%20__Para%20pedidos%20temos%20link%20na%20nossa%20bio%20%E2%9C%A8%F0%9F%92%96-fdJ8cxxd9oyz2MG3Dasaon7ABjJIbw.webp",
    alt: "Chaveiro personalizado com calendário e foto de casal",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Photo%20Booth-VLpiUVg4dQNYJ4yjIkGp3u9dtmsOp4.webp",
    alt: "Tira de fotos estilo photo booth I love you",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-wgSNzsVzS2ubpZkXWqEi1dvG7GfoMr.webp",
    alt: "Caixas personalizadas tema Minnie",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20photostrips%20at%20the%20beach%20%F0%9F%8C%8A-g295hF1eT3bwtIceETDGN6e1QRYiqG.webp",
    alt: "Tiras de fotos personalizadas na praia",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/76f80e09-e2e6-4178-a3c5-7af368bce851-OittHk3U9sYNUvzvudFlBZ6slOGkza.webp",
    alt: "Topo de bolo personalizado tema Matheus Carrara",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20cutest%20photo%20strips%20%F0%9F%98%8D%20Get%20yours%20now%20by%20clicking%20the%20link%20in%20bio-mfm9Tv5K7pRedecoPTkKsARbZMsTy5.webp",
    alt: "Tiras de fotos personalizadas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOTOS%20EM%20TITINHA%20IDEIAS-uJR1VpG92k2hivo0sZhJyuY00pVums.webp",
    alt: "Tiras de fotos personalizadas em titinha",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%9C%A8%20Personalize%20sua%20festa%20com%20nossos%20Topos%20de%20Bolo%20exclusivos%20%F0%9F%8E%82%F0%9F%92%96_Temas%20para%20todas%20as%20ocasi%C3%B5es_%20anivers...%C3%A1rsonalizadosparafesta%20_personalizadoscriativos%20_personalizadospresentes%20_personalizadosdefesta%20_personaliza-xIhDNEgqXmvzAU7l03Mlc8mFIVVaf5.webp",
    alt: "Topo de bolo personalizado Nao tenho dinheiro",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-tT3sLDpx0uIlnQ5v3ZDeZriqz0WU02.webp",
    alt: "Caixas personalizadas tema Homem-Aranha",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/318ef7ab-9ac0-47ee-8436-79788e1a197a-Cw4HgTsPYCcfM0SUyDx2LITzPx4PZ2.webp",
    alt: "Topo de bolo personalizado Melhor Pai",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Os%20chaveirinhos%20%F0%9F%A5%B9%F0%9F%98%BB%F0%9F%94%A5-tuWG2H1Cc4yhe39VQ1zqHU35spw8NJ.webp",
    alt: "Chaveiros polaroid de acrilico com fotos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chaveiros%20Personalizados%20dia%20dos%20Pais-Hl4z95ONAb7HGjVvkzqOFhPI1NKEEP.webp",
    alt: "Chaveiros personalizados dia dos pais",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chaveiro%20Personalizado%20com%20Foto%20%E2%80%93%20Estilo%20Polaroid-IEmBOFUdnaha64x53jyE0OCXSdeaGs.webp",
    alt: "Chaveiro personalizado com foto estilo polaroid",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20-%20Kit%2016%20fotos%20-%20Qualidade%20Profissional%20-%20Com%20suas%20fotos%20-%20Sem%20Legendas%20_%20Shopee%20Brasil-CsDBhsDNwyKPax4E0MLBBIDbzk71tL.webp",
    alt: "Kit de 16 fotos polaroid personalizadas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mini%20Polaroid%20%E2%9D%A4%EF%B8%8F%20__Uma%20linda%20op%C3%A7%C3%A3o%20para%20presentear%20ou%20decorar%20seu%20espa%C3%A7o%20%F0%9F%A5%B0__Enviamos%20para%20todo%20Brasil%20__Garanta%20j%C3%A1%20as%20suas%20%21__Mais%20informa%C3%A7%C3%B5es%2C%20link%20na%20Bio____CaxiasDoSul%20_fotos%20_lembran%C3%A7aspersonalizadas-0JqWYfjYJdAbkB0grYQFnpaQ5NpyBt.webp",
    alt: "Mini polaroids personalizadas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e2103c13-d831-451b-901b-3f50353a447b-LxfjLrimoICC8jqHOP8oOJpQ8JgEvx.webp",
    alt: "Topo de bolo personalizado tema Bluey",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caixa%20cen%C3%A1rio%20dia%20dos%20pais-oGVaKnSCvyzkvbYK7xGanZeJbCH7Ao.webp",
    alt: "Caixa cenario personalizada Dia dos Pais",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Caixa%20personalizada%20Milk%20bluey%20__festabluey%20_festainfantilmenina%20_festaemcasaoficial%20_festaluxo%20_festacriativas%20_manausam%20_amazonasmeuorgulho%20_artesanatocomamor%F0%9F%92%9E-XY7u5SNXoH41otbLWGjCDzCsoeiuzT.webp",
    alt: "Caixas milk personalizadas tema Bluey",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cesta%20personalizada%20para%20presente_-5Po6wOax0RBDYxOuzWojdh69KtloZC.webp",
    alt: "Cesta personalizada para presente com fotos",
  },
]

export function ResultsGallerySection() {
  return (
    <section className="py-12 bg-[#F8F8F8] px-6 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter italic">
            O RESULTADO QUE VOCÊ VAI ENTREGAR
          </h2>
          <p className="text-[#5B2A86] font-black text-xs tracking-[0.3em] uppercase">Kits de alta lucratividade</p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8 text-center opacity-80">
          <p className="text-[13px] md:text-sm font-black text-slate-900 uppercase tracking-widest">
            Deslize para o lado
          </p>
          <span className="text-[#5B2A86]">
            <MoveRight size={16} />
          </span>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <CardCarousel images={PRODUCTS} autoplayDelay={2000} showPagination showNavigation />
        </div>
      </div>
    </section>
  )
}
