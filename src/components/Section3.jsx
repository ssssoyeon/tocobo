import React from 'react'
import './styles/Section3.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const Section3 = () => {

  const slideClasses=[
    's3_sl_1',
    's3_sl_2',
    's3_sl_3',
    's3_sl_4'
  ]
  return (
    <section className='sc3'>
      <div className="inner">
        <div className="t-wrap">
          <h2 className="con_tit">
            Vegan Skincare
          </h2>
          <p className="txt">
            피부에 건강한 영향력을 전달하고 꼭 필요한 성분만을 담아 <br />
            놀라운 변화를 선사하는 비건 스킨케어 브랜드 토코보
          </p>
          <a href="#" className="con_btn blue">
            MEET TOCOBO
          </a>
        </div>
        <div className="s3_sl_wrap">
          <div className="in">
            <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              1111:{
                slidesPerView:2,
                spaceBetween:30
              }
            }}
            >
              {slideClasses.map((slide,index)=>(
                <SwiperSlide key={index}>
                  <div className={slide}></div>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3