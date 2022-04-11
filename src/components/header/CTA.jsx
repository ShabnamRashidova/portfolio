import React from 'react'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div className="mt-4">
  <div className="btns">
  <a href={CV} download className='header-btn'>Dovnload CV </a>
    <a href="#contact" className='header-btn ms-3'>Let' s talk</a>
  </div>
  </div>
  )
}

export default CTA