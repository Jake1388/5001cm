import React from "react";
import "../css_for_components/hero.css";

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero-main'>
          <div className='hero-content'>
            <div className='hero-left'>
              <div className='hero-items'>
                <h1>
                  Empowering Schools in{" "}
                  <span className='purple'>Conservation Education</span>
                </h1>
                <a href=''>Sing In</a>
              </div>
            </div>
            <div className='hero-right'>
              <div className='hero-items'>
                <img src='../src/assets/hero_img_jpg.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
