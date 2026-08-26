"use client"

import { useEffect, useState } from "react"
import { CircleCheck } from "lucide-react"

const NAMES = [
  "Ana Paula",
  "Julia S.",
  "Renata M.",
  "Cláudia",
  "Beatriz",
  "Fernanda R.",
  "Carla T.",
  "Priscila",
  "Sandra",
  "Mônica",
  "Patrícia",
  "Daniela",
]

export function PurchaseNotification() {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [name, setName] = useState("Mariana")

  useEffect(() => {
    const onScroll = () => window.scrollY > 300 && setScrolled(true)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!scrolled) return
    const trigger = () => {
      setName(NAMES[Math.floor(NAMES.length * Math.random())])
      setVisible(true)
      setTimeout(() => setVisible(false), 6000)
    }
    const interval = setInterval(trigger, 15000)
    const timeout = setTimeout(trigger, 2000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [scrolled])

  return (
    <div
      className={`fixed bottom-6 left-6 z-[100] transition-all duration-700 transform ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-gray-200 p-4 rounded-2xl flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/20">
          <CircleCheck size={20} />
        </div>
        <div>
          <p className="text-slate-900 text-sm font-bold leading-tight">{name} acabou de garantir o acesso!</p>
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black mt-1">Pagamento Confirmado</p>
        </div>
      </div>
    </div>
  )
}
