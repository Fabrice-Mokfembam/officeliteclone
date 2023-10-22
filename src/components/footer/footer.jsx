import React, { useState, useEffect } from 'react';
import './footer.css';

function Footer() {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetDate = new Date('December 30, 2023').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference >= 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='footer-main-container'>
      <div className="footer-wrapper">
        <div className="date-container">
          <p className="footer-text"> coming <span>30th December 2023</span></p>
          <div className="date-squares">
            <div className="days box">{countdown.days} <p>Days</p></div>
            <div className="hours box">{countdown.hours} <p>Hours</p></div>
            <div className="minutes box">{countdown.minutes} <p>Minutes</p></div>
            <div className="seconds box">{countdown.seconds} <p>Seconds</p></div>
          </div>
        </div>
        <button className='btn-getStarted modi'>Get Started</button>
      </div>
    </div>
  );
}

export default Footer;