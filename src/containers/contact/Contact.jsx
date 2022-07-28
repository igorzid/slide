import React from 'react'
import './contact.css'
import { facebook, linkedin, gplus, twitter, whatsapp } from '../../assets/index'

const Contact = () => {
  return (
    <div className="slide__contacts">
        <a href="#0"><img src={facebook} alt="contacts"/></a>
        <a href="#0"><img src={linkedin} alt="contacts"/></a>
        <a href="#0"><img src={gplus} alt="contacts"/></a>
        <a href="#0"><img src={twitter} alt="contacts"/></a>
        <a href="#0"><img src={whatsapp} alt="contacts"/></a>
    </div>
  )
}

export default Contact