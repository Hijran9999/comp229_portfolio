import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="page home">
      <h1>Welcome to My Portfolio</h1>
      <p className="lead">Hi — I'm <strong>Hijran Hajiyeva</strong>. I'm passionate about software engineering and web development. This site showcases my journey, skills, and work.</p>
      <p>I enjoy solving challenging problems, building responsive web applications, and continuously improving my craft. My philosophy is to deliver value through clean code and user-centered design.</p>
      <div className="home-actions">
        <Link to="/about" className="btn">About Me</Link>
        <Link to="/projects" className="btn ghost">See Projects</Link>
      </div>
    </section>
  )
}