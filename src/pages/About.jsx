import React from 'react'

export default function About(){
  return (
    <section className="page about">
      <h2>About Me</h2>
      <div className="about-grid">
        <img src="/logo.png" alt="Headshot of Hijran Hajiyeva" className="profile-img" 
        width={150} height={150}
        />
        <div>
          <p><strong>Legal name:</strong> Hijran Hajiyeva</p>
          <p>I am currently a student in Centennial College Software Engineering Technology, pursuing expertise in web application development. Over the years, I've developed skills in React, Node.js, and databases. I enjoy contributing to open-source projects and working on collaborative software initiatives.</p>
          <p>Outside of coding, I love reading tech blogs, mentoring peers, and exploring UI/UX design principles. I aim to become a versatile full-stack developer ready for professional challenges.</p>
          <p><a href="/Hijran_Hajiyeva_Resume.pdf" target="_blank" rel="noreferrer" className="btn">Download Resume (PDF)</a></p>
        </div>
      </div>
    </section>
  )
}