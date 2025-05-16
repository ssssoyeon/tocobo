import React,{useState} from 'react'
import './styles/Footer.scss'
import {
  footerCenterMenu,
  footerCompany,
  footerInfoLinks,
  snsIcons,
  customerCenter
} from '../data/footerData'
const Footer = () => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <footer>
      <div className="inner">
        <div className="left">
          <h3>
            <img src={footerCompany.logo} alt="logo" />
          </h3>
          <p className="foot_txt1">
            주식회사 픽톤  대표 : {footerCompany.ceo} <br />
            주소:{footerCompany.address} <br />
            사업자등록번호: {footerCompany.bizNum}[사업자 정보확인] <br />

            통신판매업신고 :{footerCompany.salesReport}<br />
            개인정보보호책임자: {footerCompany.privacyOfficer}<br />
            Tel: {footerCompany.tel}, Email : {footerCompany.email}
          </p>
          <p className="foot_txt2">
            {footerCompany.copyright}
          </p>
        </div>
        <ul className="center">
          {/* map */}
          {footerCenterMenu.map((menu, idx) => (

            <li key={idx}>
              <a href="#">{menu.title}</a>
              <ul>
                {menu.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">
                      {link}
                    </a>
                  </li>

                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="right">
          <p 
          onClick={()=>setIsOpen(!isOpen)}
          className={`foot_txt3 ${isOpen? "open":""}`}>
            Customer Center <span></span>
          </p>
          <div className="hidden">

            <div className="tel">
              {customerCenter.tel}
            </div>
            <p className="foot_txt4">
              {customerCenter.time} <br />
              {customerCenter.off}
              {/* AM 10:00 - PM 5:00 (Lunch 12:00 - 13:00) */}
              {/* 토, 일요일 및 공휴일 휴무 */}
            </p>
            <a href="#" className="talk_btn">1 : 1 Talk</a>
          </div>

        </div>
      </div>
      <div className="inner">
        <div className="info">
          {footerInfoLinks.map((link, i) => (
            <a href={link.href} key={i}>{link.text}</a>

          ))}
          {/* footerInfoLinks */}
        </div>
        <p className="foot_txt2">
          {footerCompany.copyright}
        </p>
        <div className="sns">
          {snsIcons.map((icon, i) => (
            <a href='#' key={i}>
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
          {/* snsIcons */}
          {/* a>img */}
        </div>
      </div>
    </footer>
  )
}

export default Footer