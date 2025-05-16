import React from 'react'
import './styles/Section4.scss'
const Section4 = () => {
  return (
    <section className="sc4">
      <div className="inner">
        <div className="t-wrap">
          <div className="star">
            <img src={`${import.meta.env.BASE_URL}/img/star.png`} alt="star" />
            <h2 className="con_tit">
              Customer Review
            </h2>
            <p className="txt_3">
              “ 사용 후 촉촉함과 피부 진정이 잘 되는 클렌징 폼 ”
            </p>

            <p className="txt_4">
              요즘 조금만 신경 써도 트러블이 나고 정말 스트레스가 많았는데 <br />
              저 같은 민감성인 피부에 정말 잘 맞네요~! 쫀쫀한 제형의 <br />
              미세 버블 거품으로 모공 케어까지 가능해서 너무 좋아요 ^^
            </p>

            <p className="txt_5">
              Coconut Clay Cleansing Foam / jy98***
            </p>
            <a href="#" className="con_btn">MEET TOCOBO</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4