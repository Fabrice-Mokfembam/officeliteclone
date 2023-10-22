import React from 'react'
import './hero.css'
import charts from '../../assets/images/jll.svg'

function Hero() {
  return (
      <div className='main-hero-container'>
          <div className="hero-text-part">
              <h1 className="head-text">
                  A simple solution to <br /> complex tasks is <br /> coming soon
              </h1>
              <div className="normal-text">
                  say goodbye to inefficient juggling of multiple tasks, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity
              </div>

              <button className='btn-getStarted'>Get Started</button>
          </div>
          <div className="svg-img-part">
              <img className='hero-img' src={charts} alt="charts" />
           </div>
    </div>
  )
}

export default Hero
