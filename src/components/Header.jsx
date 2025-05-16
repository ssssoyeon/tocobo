import React, { useEffect, useState } from 'react'
import './styles/Header.scss'
import Nav from './Nav'
import Util from './Util'
// import logo from '../public/img/logo.svg';
const Header = ({ isScrolled, modalOpenClick }) => {



  return (
    <header className={isScrolled ? 'scroll' : ''}>
      <div className="inner">
        <div className="mob_btn" onClick={modalOpenClick}>
          <img src={`${import.meta.env.BASE_URL}img/icon_ham.svg`} />
        </div>
        <Nav />
        <h1 className="logo">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}img/logo.svg`} />
          </a>
        </h1>
        <Util />
      </div>
    </header>
  )
}

export default Header