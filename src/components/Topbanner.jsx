import React from 'react'
import './styles/Topbanner.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
const Topbanner = ({ onClick }) => {
    return (
        <div className='top_banner'>
            <Swiper
                direction='vertical'
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}
                className='tb_slider'
            >
                <SwiperSlide>
                    <a href="#">새로운 소식이 있습니다!</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">업데이트 안내</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">이벤트 진행중</a>
                </SwiperSlide>
            </Swiper>
            <div className="close" onClick={onClick}>click</div>
        </div>
    )
}

export default Topbanner