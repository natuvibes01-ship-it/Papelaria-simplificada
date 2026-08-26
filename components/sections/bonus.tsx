import { Rocket, Share2, Smartphone, Camera, CreditCard, DollarSign, Zap, Package } from "lucide-react"

export function BonusSection() {
  const checklist = [
    { text: "O que postar pra chamar atenção", icon: <Share2 size={16} /> },
    { text: "Como conseguir os primeiros pedidos usando só o seu celular", icon: <Smartphone size={16} /> },
    { text: "Como tirar fotos simples que vendem o produto por você", icon: <Camera size={16} /> },
    { text: "Como cobrar e entregar de um jeito fácil e seguro", icon: <CreditCard size={16} /> },
  ]

  const bonuses = [
    {
      icon: <DollarSign size={40} />,
      label: "🎁 BÔNUS 01",
      title: "ESTRÁTEGIAS DE VENDAS RECORRENTES",
      desc: "Aprenda estratégias simples para conseguir seus primeiros pedidos usando WhatsApp, Instagram, Facebook e divulgação local.",
      price: "R$ 97,00",
      gradient: "from-[#5B2A86] to-[#7B3DB8]",
      bg: "bg-[#5B2A86]",
      rotate: "rotate-3",
      shadow: "shadow-purple-500/30",
    },
    {
      icon: <Zap size={40} />,
      label: "🎁 BÔNUS 02",
      title: "GUIA SUA PRIMEIRA VENDA EM MENOS DE UMA SEMANA",
      desc: "Descubra exatamente o que postar, como divulgar, cobrar, entregar e transformar interesse em pedidos reais.",
      price: "R$ 67,00",
      gradient: "from-[#EC4899] to-[#F472B6]",
      bg: "bg-[#EC4899]",
      rotate: "-rotate-3",
      shadow: "shadow-pink-600/30",
    },
    {
      icon: <Package size={40} />,
      label: "🎁 BÔNUS 03",
      title: "LISTA DE MATERIAIS PARA COMEÇAR",
      desc: "Saiba exatamente o que comprar para fazer seus primeiros personalizados sem gastar dinheiro com itens desnecessários.",
      price: "R$ 37,00",
      gradient: "from-[#7B3DB8] to-[#5B2A86]",
      bg: "bg-[#7B3DB8]",
      rotate: "rotate-3",
      shadow: "shadow-purple-500/30",
    },
  ]

  return (
    <section className="py-12 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-12">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#5B2A86] to-[#EC4899] rounded-[3rem] blur-xl opacity-25" />
          <div className="relative bg-white border-4 border-[#5B2A86] rounded-[2.8rem] p-8 md:p-14 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#5B2A86] text-white rounded-full text-[13px] font-black uppercase tracking-[0.2em] mb-10 shadow-lg shadow-[#5B2A86]/20">
                <Rocket size={18} /> BÔNUS ESPECIAL: SUA PRIMEIRA VENDA AINDA ESSA SEMANA
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight italic leading-[1.1] text-balance">
                Montar os kits é simples. <br className="hidden md:block" />
                <span className="text-[#EC4899]">Agora você vai aprender a vender rápido</span>, mesmo começando do
                zero.
              </h3>
              <p className="text-slate-500 text-sm md:text-lg font-medium mb-12 max-w-2xl leading-relaxed">
                Nesse bônus exclusivo, você descobre o caminho mais curto para o dinheiro no bolso:
              </p>
              <div className="w-full grid md:grid-cols-1 gap-4 text-left max-w-xl mb-12">
                {checklist.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#5B2A86]/5 p-5 rounded-2xl border border-[#5B2A86]/10"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-[#5B2A86] text-white rounded-full flex items-center justify-center text-xs font-black">
                      {i + 1}
                    </span>
                    <p className="text-slate-800 text-sm md:text-base font-bold">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6 w-full items-center">
                <div className="bg-slate-950 text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
                  <span className="text-xl md:text-2xl">📲</span>
                  <p className="text-xs md:text-sm font-black uppercase tracking-widest leading-tight">
                    Tudo testado, direto ao ponto, <span className="text-[#EC4899]">sem enrolação.</span>
                  </p>
                </div>
                <div className="flex items-start md:items-center gap-3 bg-[#5B2A86]/5 p-6 rounded-[2rem] border border-purple-200">
                  <span className="text-2xl flex-shrink-0">👉</span>
                  <p className="text-slate-900 text-base md:text-xl font-black italic tracking-tight leading-tight">
                    Com esse bônus, você pode fazer sua primeira venda{" "}
                    <span className="text-[#EC4899] underline">ainda essa semana.</span> Literalmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((b, i) => (
            <div key={i} className="relative">
              <div className={`absolute -inset-1 bg-gradient-to-b ${b.gradient} rounded-[2.5rem] blur opacity-15`} />
              <div className="relative bg-white border border-slate-200/60 rounded-[2rem] p-8 shadow-md shadow-slate-100/50 flex flex-col items-center text-center">
                <div
                  className={`w-20 h-20 ${b.bg} rounded-3xl flex items-center justify-center text-white mb-8 ${b.rotate} shadow-lg ${b.shadow}`}
                >
                  {b.icon}
                </div>
                <div className="mb-6">
                  <span
                    className={`text-xs font-black ${b.bg === "bg-[#EC4899]" ? "text-[#EC4899] bg-[#EC4899]/10" : "text-[#7B3DB8] bg-[#7B3DB8]/10"} px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block`}
                  >
                    {b.label}
                  </span>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 italic">{b.title}</h4>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed px-4">{b.desc}</p>
                </div>
                <div className="mt-auto w-full pt-8 border-t border-slate-50">
                  <span className="text-[11px] font-black text-[#EC4899] px-6 py-2 bg-[#EC4899]/5 rounded-full uppercase tracking-[0.2em] italic border border-[#EC4899]/15 line-through decoration-slate-400">
                    VALE {b.price}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-3 font-black uppercase tracking-widest">
                    LIBERADO GRÁTIS HOJE
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
