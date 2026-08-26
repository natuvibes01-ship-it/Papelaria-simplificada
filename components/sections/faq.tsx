"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "Por quanto tempo terei acesso?",
    a: "Seu acesso é vitalício. Você terá acesso imediato a plataforma e a todas as futuras atualizações para garantir que seus moldes estejam sempre prontos para venda",
  },
  {
    q: "Preciso de um computador?",
    a: "Absolutamente não. Nossa plataforma foi desenvolvida para ser usada 100% via celular.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a aprovação do pagamento. A plataforma e os dados de acesso são entregues 100% de forma automática diretamente no seu e-mail cadastrado.",
  },
  {
    q: "Não tenho impressora, posso vender?",
    a: "Com certeza! Você pode imprimir os moldes em gráficas rápidas sempre que precisar. O processo continua simples, acessível e com ótimo potencial de lucro.",
  },
  {
    q: "O suporte é via WhatsApp?",
    a: "Sim! Oferecemos suporte humanizado diretamente pelo WhatsApp para garantir que você tire todas as suas dúvidas rapidamente e comece a lucrar o quanto antes.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-12 bg-white px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-black text-center mb-10 uppercase tracking-tighter text-slate-900 italic">
          DÚVIDAS FREQUENTES
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-[#5B2A86]/10 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white"
                aria-expanded={open === i}
              >
                <span className="font-black text-slate-800 uppercase tracking-tight text-xs md:text-sm leading-relaxed pr-6">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[#EC4899] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              {open === i && (
                <div className="p-8 pt-0 text-xs md:text-sm text-slate-500 leading-relaxed font-medium bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
