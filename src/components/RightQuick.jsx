import React from 'react'
import './styles/RightQuick.scss'
const RightQuick = ({isScrolled, onClick}) => {
  return (
    <div id='right_quick' className={isScrolled? "up":""}>
      <a href="#" className='top_btn' onClick={onClick}>
        <img src={`${import.meta.env.BASE_URL}/img/icon_top.svg`} alt="icon" />
      </a>
      <div className="talk">
        <a href="#">TCB</a>
        <p className='point'>1:1 talk</p>
      </div>
    </div>
  )
}

export default RightQuick