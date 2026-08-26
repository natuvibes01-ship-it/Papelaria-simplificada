"use client"

import { Fragment, useState } from "react"
import {
  Mail,
  ArrowRight,
  LoaderCircle,
  CreditCard,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"

declare global {
  interface Window {
    fbq?: (event: string, eventName: string) => void
  }
}

interface OfferFeature {
  type: "whatsapp" | "check" | "bonus"
  text: string
}

const FEATURES: OfferFeature[] = [
  { type: "whatsapp", text: "Entrega Imediata e Acesso Direto no E-mail." },
  { type: "check", text: "Acesso Completo a Plataforma" },
  { type: "check", text: "Biblioteca com +2.000 Moldes Prontos" },
  { type: "check", text: "Plano para Começar com Apenas R$50" },
  { type: "check", text: "Tutoriais de Montagem Passo a Passo" },
  { type: "check", text: "Textos Prontos para WhatsApp e Instagram" },
  { type: "check", text: "Lista de Fornecedores Recomendados" },
  { type: "check", text: "Garantia de 7 Dias" },
  { type: "bonus", text: "BÔNUS: Estratégias de Vendas Recorrentes" },
  { type: "bonus", text: "BÔNUS: Guia Sua Primeira Venda em Menos de Uma Semana" },
  { type: "bonus", text: "BÔNUS: Lista de Materiais" },
]

export function OfferSection() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    if (loading) return
    setLoading(true)
    window.fbq?.("trackCustom", "SubscribedButtonClick")
    const url = "https://payfast.greenn.com.br/redirect/309651"
    const params = window.location.search
    setTimeout(() => {
      window.location.href = url + params
    }, 500)
    setTimeout(() => setLoading(false), 8000)
  }

  return (
    <section id="offer" className="py-12 bg-white px-6">
      <div className="max-w-lg mx-auto">
        <div className="bg-[#0e071c] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(91,42,134,0.15)] border border-white/5 relative">
          <div className="bg-[#5B2A86] py-4 text-center text-white text-[12px] font-black uppercase tracking-[0.3em]">
            OFERTA EXCLUSIVA • VAGAS LIMITADAS
          </div>
          <div className="p-10 md:p-12 text-center">
            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter italic">
              ACESSO COMPLETO AO MÉTODO PERSONALIZADOS POR ENCOMENDA
            </h3>
            <p className="text-sm font-medium text-slate-400 mb-6 max-w-sm mx-auto">
              Moldes, precificação, montagem, divulgação e vendas.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3.5 mb-8 flex items-center justify-center gap-3 text-left max-w-md mx-auto">
              <div className="w-9 h-9 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-white text-xs md:text-sm font-bold">Entrega automática via e-mail</p>
                <p className="text-slate-300 text-[11px] font-medium mt-0.5">
                  Receba seu acesso a plataforma direto no seu e-mail logo após a compra.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-10">
              <CountdownTimer />
              <p className="text-[#EC4899] text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                O preço subirá para R$ 197,00 após o cronômetro zerar
              </p>
            </div>
            <div className="mb-10 px-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-white text-[10px] font-black uppercase tracking-widest">Vagas Preenchidas:</span>
                <span className="text-[#EC4899] text-sm font-black">71%</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#5B2A86] to-[#EC4899] rounded-full w-[71%] animate-pulse" />
              </div>
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-2">
9 vagas disponíveis com desconto
              </p>
            </div>
            <div className="mb-12">
              <div className="flex flex-col items-center justify-center text-white">
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">
                  Aproveite a oferta de lançamento
                </p>
                <div className="h-px w-16 bg-[#EC4899] mb-6" />
                <div className="flex flex-col items-center">
                  <span className="text-slate-500 text-xs line-through font-bold mb-2">DE R$ 197,00</span>
                  <div className="flex items-baseline gap-1 text-[#EC4899]">
                    <span className="text-white text-xl font-black">R$</span>
                    <span className="text-[#EC4899] text-7xl font-black tracking-tighter">37</span>
                    <span className="text-[#EC4899] text-xl font-black">,00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-12 text-left">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 text-xs md:text-sm font-bold border-b border-white/5 pb-4 last:border-0 ${
                    f.type === "bonus"
                      ? "text-[#F472B6] font-extrabold"
                      : f.type === "whatsapp"
                        ? "text-green-400 font-extrabold"
                        : "text-slate-400"
                  }`}
                >
                  <span className="text-[14px] flex-shrink-0 leading-none">
                    {f.type === "bonus" ? "🎁" : f.type === "whatsapp" ? "📲" : "✅"}
                  </span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleClick}
              disabled={loading}
              className={`w-full ${loading ? "bg-[#5B2A86]/70 cursor-not-allowed" : "bg-[#5B2A86] hover:bg-[#EC4899] active:scale-95"} text-white text-base font-black py-6 rounded-2xl transition-all uppercase tracking-tight shadow-xl shadow-[#5B2A86]/45 mb-10 group relative overflow-hidden`}
            >
              <span className="flex items-center justify-center gap-2">
                {loading ? (
                  <Fragment>
                    <LoaderCircle size={20} className="animate-spin" />
                    PROCESSANDO...
                  </Fragment>
                ) : (
                  <Fragment>
                    LIBERAR MEU ACESSO AGORA
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Fragment>
                )}
              </span>
              {!loading && (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              )}
            </button>
            <div className="flex items-center justify-center gap-5 opacity-55 grayscale brightness-200">
              <CreditCard size={20} className="text-white" />
              <span className="text-white text-[10px] font-black uppercase tracking-widest italic">
                PIX • CARTÃO
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-[#F8F8F8] p-8 rounded-[2.5rem] border-2 border-[#5B2A86]/10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-24 h-24 flex-shrink-0 bg-white rounded-full border-4 border-[#5B2A86] flex items-center justify-center text-[#5B2A86] shadow-inner shadow-[#5B2A86]/5">
            <ShieldAlert size={48} strokeWidth={2.5} />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-base font-black text-slate-900 uppercase tracking-tighter mb-2">
              SATISFAÇÃO GARANTIDA OU SEU DINHEIRO DE VOLTA
            </h4>
            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
              Você tem <span className="text-[#EC4899] font-black">7 DIAS INTEIROS</span> para testar nosso app. Se não
              gostar, devolvemos 100% do seu investimento na hora. Sem perguntas, sem estresse.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mt-8">
          <ShieldCheck size={18} className="text-green-500" /> COMPRA TOTALMENTE SEGURA E CRIPTOGRAFADA
        </div>
      </div>
    </section>
  )
}
