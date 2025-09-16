import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
  const [form, setForm] = useState({first:'', last:'', phone:'', email:'', message:''})
  const [saved, setSaved] = useState(null)
  const navigate = useNavigate()

  function handleChange(e){
    const {name, value} = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    setSaved(form)
    console.log('Captured contact form:', form)
    setTimeout(()=> navigate('/'), 1000)
  }

  return (
    <section className="page contact">
      <h2>Contact Me</h2>
      <p>If you would like to reach out, please use the form below. I am always open to discussing projects, collaborations, or opportunities.</p>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>First Name<input name="first" value={form.first} onChange={handleChange} required/></label>
          <label>Last Name<input name="last" value={form.last} onChange={handleChange} required/></label>
          <label>Contact Number<input name="phone" value={form.phone} onChange={handleChange} /></label>
          <label>Email Address<input name="email" type="email" value={form.email} onChange={handleChange} required/></label>
          <label>Message<textarea name="message" value={form.message} onChange={handleChange} rows="5"/></label>
          <div className="form-actions">
            <button type="submit" className="btn">Send Message</button>
            <button type="button" className="btn ghost" onClick={()=> setForm({first:'',last:'',phone:'',email:'',message:''})}>Reset</button>
          </div>
        </form>
        <aside className="contact-panel">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:hajiyevahijran@gmail.com">hajiyevahijran@gmail.com</a></p>
          <p>Phone: +1 (647) 572-5555</p>
          <p>Location: Durham, Canada</p>
        </aside>
      </div>
      {saved && (
        <div className="contact-saved"><strong>Thanks — your message was captured.</strong></div>
      )}
    </section>
  )
}