import React from 'react';
import arrowSvg from "../images/arrow.svg";
import profile from "../images/profile-pic.png"
import './home.css';


function Home({name, title}) {
  return (
    <section id='home' className='home-section'>
      <div className='profile-container'>
      <div className='profile-text'>
          <h1 className='profile-name'>{name}</h1>
          <h2 className='profile-title'>{title}</h2>
        </div>
        <img src={profile} alt="Profile" className='profile-pic' />
        
      </div>
      <div className='arrow-container'>
        <img src={arrowSvg} alt="Scroll Down Arrow" className='scroll-arrow' />
      </div>
    </section>
  )

}
Home.defaultProps ={
    name :"",
    title: "",
}

export default Home