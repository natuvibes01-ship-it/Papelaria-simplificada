"use client"

import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .kit-carousel .swiper {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 48px;
  }
  .kit-carousel .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 260px;
  }
  .kit-carousel .swiper-slide img {
    display: block;
    width: 100%;
  }
  .kit-carousel .swiper-3d .swiper-slide-shadow-left,
  .kit-carousel .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
  }
  .kit-carousel .swiper-pagination-bullet {
    background: #5B2A86;
    opacity: 0.35;
  }
  .kit-carousel .swiper-pagination-bullet-active {
    background: #EC4899;
    opacity: 1;
  }
  .kit-carousel .swiper-button-next,
  .kit-carousel .swiper-button-prev {
    color: #5B2A86;
  }
  `
  return (
    <section className="kit-carousel w-full">
      <style>{css}</style>
      <Swiper
        spaceBetween={40}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={showPagination}
        navigation={showNavigation}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <img
                src={image.src || "/placeholder.svg"}
                className="h-full w-full object-cover"
                alt={image.alt}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
