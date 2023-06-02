import React from 'react';
import cv from '../../assets/Sourav_Kumar_Bhunia_resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA