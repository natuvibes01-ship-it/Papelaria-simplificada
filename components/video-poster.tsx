"use client"

import { Fragment, useMemo, useRef, useState } from "react"
import { Play } from "lucide-react"
import { convertVideoUrl } from "@/lib/video"

interface VideoPosterProps {
  posterUrl: string
  videoUrl: string
  label?: string
  isVertical?: boolean
  priority?: boolean
  revealAtSeconds?: number
  onReveal?: () => void
}

export function VideoPoster({
  posterUrl,
  videoUrl,
  label,
  isVertical = false,
  priority = false,
  revealAtSeconds,
  onReveal,
}: VideoPosterProps) {
  const [playing, setPlaying] = useState(false)
  const revealedRef = useRef(false)

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (!onReveal || revealedRef.current || revealAtSeconds == null) return
    if (e.currentTarget.currentTime >= revealAtSeconds) {
      revealedRef.current = true
      onReveal()
    }
  }
  const isFileVideo = useMemo(() => /\.(mp4|webm|ogg|mov)(\?|$)/i.test(videoUrl), [videoUrl])
  const embedUrl = useMemo(() => (videoUrl ? convertVideoUrl(videoUrl) : ""), [videoUrl])
  const playerSrc = useMemo(() => {
    if (!embedUrl) return ""
    if (embedUrl.includes("vimeo.com")) {
      return `${embedUrl}?autoplay=1&muted=0&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`
    }
    return `${embedUrl}?autoplay=1&mute=0&playsinline=1&rel=0&modestbranding=1&controls=1`
  }, [embedUrl])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute -inset-4 bg-pink-600/20 blur-3xl rounded-full opacity-50 pointer-events-none group-hover:opacity-75 transition-opacity" />
      <div
        className={`w-full ${isVertical ? "aspect-[9/16] max-w-[320px] mx-auto" : "aspect-video"} rounded-3xl overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] group cursor-pointer transition-all duration-500 bg-slate-900 border-4 border-white/10 ring-1 ring-white/5`}
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <div className="absolute inset-0 bg-black">
            {isFileVideo ? (
              <video
                className="w-full h-full object-cover"
                src={videoUrl}
                autoPlay
                controls
                playsInline
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={playerSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Vídeo de apresentação"
              />
            )}
          </div>
        ) : (
          <Fragment>
            <img
              src={posterUrl || "/placeholder.svg"}
              alt="Prévia do vídeo de apresentação"
              className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-110"
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? "eager" : "lazy"}
              width={isVertical ? 320 : 1280}
              height={isVertical ? 568 : 720}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg transform rotate-[-2deg] z-20">
              VEJA COMO FUNCIONA
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-600 rounded-full animate-ping opacity-30 scale-150" />
                <div className="w-20 h-20 md:w-28 md:h-28 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300 border-4 border-white/30 backdrop-blur-sm relative z-10">
                  <Play size={44} fill="currentColor" className="ml-2" />
                </div>
              </div>
              {label && (
                <div className="mt-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 transform group-hover:-translate-y-1 transition-transform">
                  <p className="text-white text-[12px] font-black uppercase tracking-[0.2em]">{label}</p>
                </div>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}
