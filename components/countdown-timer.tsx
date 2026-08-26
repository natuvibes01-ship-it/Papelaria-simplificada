"use client"

import { useEffect, useState } from "react"
import { Timer } from "lucide-react"

export function CountdownTimer() {
  const [seconds, setSeconds] = useState(900)

  useEffect(() => {
    if (seconds <= 0) return
    const interval = setInterval(() => setSeconds((s) => s - 1), 1000)
    return () => clearInterval(interval)
  }, [seconds])

  const format = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center gap-2 text-pink-500 font-black text-sm md:text-base animate-pulse">
      <div className="flex items-center gap-2">
        <Timer size={18} />
        <span>OFERTA EXPIRA EM: {format(seconds)}</span>
      </div>
    </div>
  )
}
