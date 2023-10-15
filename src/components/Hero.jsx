import React from "react";
import "../css_for_components/hero.css";

export default function Hero() {
  return (
    <>
      <main>
        <div className='container-hero'>
          <div className='hero'>
            <img src='../src/assets/hero_img_jpg.jpg' alt='' />
            <div className='hero-text'>
              <h1>Empowering Schools in Conservation Education</h1>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
