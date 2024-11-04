import React from 'react';
import "./about.css"
// import image from "";
const imageAltText ="";
const description = "I'm a passionate Web Developer with a B.Sc. in Information Technology. I enjoy creating clean, responsive, and user-friendly interfaces that make a positive impact. With hands-on experience from internships and a strong foundation in HTML, CSS, JavaScript, and MySQL, I’m always looking for creative ways to bring ideas to life through code.";
const skillsList =[
  "Web Development",
  "Frontend Development",
  "Responsive Design",
  "JavaScript & React",
  "Problem Solving",
  "Team Collaboration",
];
const detailorQuote ="I'm committed to continuous learning and improving my skills to keep up with the latest trends and technologies. My goal is to build digital experiences that are both functional and aesthetically pleasing, making the web more accessible and engaging for all.";
function About() {
  return (
    <section id='about' className=''>
        <img src="" alt={imageAltText} />
        <div style={
            {
                backgroundColor:"white",
                width:"50%",
                padding:"4rem",
                margin:"3rem auto",
                textAlign :"center",
            }
        }>
            <h2> About MySelf</h2>
            <p className='large'>{description}</p>
            <hr />
            <ul 
            style={
              {
                textAlign:"left",
                columns:2,
                fontSize:"1.25rem",
                margin:"2rem 3rem",
                gap :"3rem",
              }
            }>{skillsList.map((skill)=>(<li key={skill}>{skill}</li>))}</ul>
            <hr />
            <p style={{ padding:"1rem 3rem 0"}}>{detailorQuote}</p>
        </div>
    </section>
  )
}

export default About