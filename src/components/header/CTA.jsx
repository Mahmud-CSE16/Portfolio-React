import React from 'react'
import CV from '../../assets/Mahmud-CSE-16-KUET.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download</a>
        <a className='btn btn-primary' href="#contact" download>Let's Talk</a>
    </div>
  )
}

export default CTA