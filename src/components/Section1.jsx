import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles/Section1.scss'
const Section1 = () => {

  useEffect(()=>{

    Aos.init({duration:1000})

  },[])



  return (
    <section className='sc1'>
      <div className="inner">
        <div className="img-wrap" data-aos="fade-right">
          <img src={`${import.meta.env.BASE_URL}/img/tocobo_intro_2021.gif`} alt="intro" />
        </div>
        <div className="t-wrap" data-aos="fade-left">
          <p className="txt_1">
            1 Hello❤️ We are TOCOBO!
          </p>
          <h2 className="con_tit">
            Follow
            Your Intuition
          </h2>
          <p className="txt">
            토코보는 본질을 중시하며 직관을 바탕으로 한 제품을 선보입니다. <br />
            당신의 직감이 YES를 외친다면 고민 없이 토코보를 선택하세요. <br />
            넥스트 더마 코스메틱, 토코보
          </p>
          <a href="#" className="con_btn">MEET TOCOBO</a>
        </div>
      </div>
    </section>
  )
}

export default Section1