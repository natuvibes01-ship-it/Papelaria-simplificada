"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface ImageCarouselProps {
  images: string[]
  aspectRatio?: string
  maxWidth?: string
  autoplay?: boolean
  interval?: number
  width?: number
  height?: number
}

export function ImageCarousel({
  images,
  aspectRatio = "aspect-video",
  maxWidth = "max-w-6xl",
  autoplay = true,
  interval = 3500,
  width = 800,
  height = 450,
}: ImageCarouselProps) {
  return (
    <div className={`relative group ${maxWidth} mx-auto atelie-carousel`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={images.length > 1}
        speed={600}
        grabCursor
        touchAngle={35}
        autoplay={
          autoplay && images.length > 1
            ? { delay: interval, disableOnInteraction: false, pauseOnMouseEnter: true }
            : false
        }
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{ nextEl: ".atelie-next", prevEl: ".atelie-prev" }}
        className="rounded-[2.5rem] shadow-2xl border border-slate-100 bg-slate-100"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className={`w-full ${aspectRatio} relative overflow-hidden`}>
              <img
                src={img || "/placeholder.svg"}
                alt={`Imagem ${i + 1}`}
                className="absolute inset-0 w-full h-full object-contain select-none"
                loading="lazy"
                draggable={false}
                width={width}
                height={height}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <>
          <button
            className="atelie-prev absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-pink-600 hover:text-white z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="atelie-next absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-pink-600 hover:text-white z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  )
}
