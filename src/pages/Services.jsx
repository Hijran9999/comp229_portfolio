import React from 'react'

const services = [
  {title: 'Web Development', desc: 'Building modern, responsive websites and applications using React, HTML5, CSS3, and JavaScript.'},
  {title: 'Front-end Engineering', desc: 'Designing scalable component architectures, ensuring accessibility, and optimizing performance.'},
  {title: 'Consulting & Mentorship', desc: 'Helping teams with code reviews, project planning, and best practices in version control and agile workflows.'}
]

export default function Services(){
  return (
    <section className="page services">
      <h2>Services</h2>
      <p>I offer a range of services tailored to individuals, startups, and organizations looking to build impactful digital products.</p>
      <div className="services-grid">
        {services.map((s,i)=> (
          <div key={i} className="service-card">
            <div className="service-icon" aria-hidden>★</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}