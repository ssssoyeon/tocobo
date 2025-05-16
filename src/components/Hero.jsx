import React from 'react'
import './styles/Hero.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import heroData from '../data/heroData'

const Hero = () => {
  return (
    <section className='hero'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className='swiper hero_slider'
        navigation={{
          nextEl: '.arr_next',
          prevEl: '.arr_prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction'
        }}
        loop={true}
      // autoplay={{delay:5000}}
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id} className={slide.className}>
            <div className="inner">
              <div className="t-wrap">

                <h2
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                  className="con_tit large" />
                <p className="txt">{slide.description}</p>
                <a href="#" className={`con_btn ${slide.btnColor}`}>
                  {slide.btnText}
                </a>
              </div>
            </div>

          </SwiperSlide>
        ))}

        <div className="hero_nav">
          <div className="arr_prev"></div>
          <div className="swiper-pagination swiper-pagination-fraction"></div>
          <div className="arr_next"></div>
        </div>
      </Swiper>
    </section>
  )
}

export default Hero