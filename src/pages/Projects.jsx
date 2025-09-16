import React from 'react'

const projects = [
  {
    title: 'Project Alpha',
    img: '/projecta.jpg',
    desc: 'A web app that allows users to track daily habits with interactive charts and notifications. My role: front-end developer, implemented dynamic UI with React.'
  },
  {
    title: 'Project Beta',
    img: '/projectb.jpg',
    desc: 'A mobile-friendly website for local businesses to showcase their products online. My role: full-stack developer, set up API and database integration.'
  },
  {
    title: 'Project Gamma',
    img: '/projectc.jpg',
    desc: 'A real-time data dashboard for monitoring environmental sensors. My role: UI engineer, designed intuitive dashboards with data visualization libraries.'
  }
]

export default function Projects(){
  return (
    <section className="page projects">
      <h2>Highlighted Projects</h2>
      <p>Here are some projects I have worked on, demonstrating my skills across different technologies and problem domains.</p>
      <div className="projects-grid">
        {projects.map((p, i)=> (
          <article key={i} className="project-card">
            <img src={p.img} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}