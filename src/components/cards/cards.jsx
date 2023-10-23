import React from 'react'
import './cards.css'

function Cards() {
  return (
    <div className='cards-main-container'>
      <div className="card-wrapper">
        <div data-aos="zoom-in" data-aos-duration="2000"  style={{ zIndex: 9 }} className="card-box">
          <div className="box-type">Basic</div>
          <div className="box-price">free</div>
          <div className="box-nUsers">Up to 5 users for free</div>
          <div className="box-collabo same">Basic document collaboration</div>
          <div className="box-storage-cap same">2 Gb Storage</div>
          <div className="box-security same">Great security and support</div>
          <button className='btn-getStarted-card'>try for free</button>
        </div>
        <div data-aos="zoom-in" data-aos-duration="3000"  style={{ zIndex: 9 }} className="card-box bbg">
          <div className="box-type">Basic</div>
          <div className="box-price">free</div>
          <div className="box-nUsers">Up to 5 users for free</div>
          <div className="box-collabo same">Basic document collaboration</div>
          <div className="box-storage-cap same">2 Gb Storage</div>
          <div className="box-security same ">Great security and support</div>
          <button className='btn-getStarted-card'>try for free</button>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000"  style={{ zIndex: 9 }} className="card-box">
          <div className="box-type">Basic</div>
          <div className="box-price">free</div>
          <div className="box-nUsers">Up to 5 users for free</div>
          <div className="box-collabo same">Basic document collaboration</div>
          <div className="box-storage-cap same">2 Gb Storage</div>
          <div className="box-security same">Great security and support</div>
          <button className='btn-getStarted-card'>try for free</button>
        </div>
        
        </div>
    </div>
  )
}

export default Cards
