import { Fragment, type ReactNode } from "react"
import { MousePointer2, Scissors, Share2 } from "lucide-react"

interface Step {
  icon: ReactNode
  title: string
  desc: ReactNode
}

export function ProcessSection() {
  const steps: Step[] = [
    {
      icon: <MousePointer2 size={28} className="transform rotate-90" />,
      title: "✅ 1. OS MOLDES PRONTOS VÊM DA PLATAFORMA DIRETO PRO SEU CELULAR",
      desc: (
        <Fragment>
          Nada de <strong className="font-extrabold text-slate-800">programas complicados ou computador</strong>. A
          cliente escolhe o tema, você pega o modelo na plataforma{" "}
          <strong className="font-extrabold text-slate-800">pronto para baixar, imprimir e usar</strong>.
        </Fragment>
      ),
    },
    {
      icon: <Scissors size={28} />,
      title: "✅ 2. IMPRIMA E MONTE COM O QUE VOCÊ TEM EM CASA",
      desc: (
        <Fragment>
          Você não precisa de impressora. Os moldes podem ser impressos em qualquer papelaria perto de casa. Com papel,
          tesoura e cola, você monta tudo à mão —{" "}
          <strong className="font-extrabold text-slate-800">simples acessível e sem equipamentos caros</strong>.
        </Fragment>
      ),
    },
    {
      icon: <Share2 size={28} />,
      title: "✅ 3. MOSTRE SEU TRABALHO E VEJA OS PEDIDOS CHEGAREM",
      desc: "Quando você compartilha o que faz, as pessoas veem valor. Festa infantil é o que mais vende — e os seus kits feitos à mão chamam atenção na hora.",
    },
  ]

  return (
    <section className="py-16 bg-[#F8F8F8] px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#5B2A86] font-black text-[12px] uppercase tracking-[0.4em] mb-3">O MÉTODO</p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic leading-tight">
            COMO FUNCIONA O PROCESSO:
          </h2>
          <div className="w-16 h-1 bg-[#5B2A86] mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2rem] shadow-[0_12px_30px_rgba(91,42,134,0.03)] border border-slate-200/60 flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-[#5B2A86]/10 rounded-2xl flex items-center justify-center text-[#5B2A86] mb-8 border border-[#5B2A86]/20">
                {step.icon}
              </div>
              <h4 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight mb-5 leading-[1.3] text-left">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed text-left">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
