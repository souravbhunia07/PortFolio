import React from 'react';
import './about.css';
import ME from '../../assets/background2.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {BsFolder2Open} from 'react-icons/bs';

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {ME} alt='About_Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Freshers</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <BsFolder2Open className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Motivated and enthusiastic B.Tech Electronics and Communications Engineering(ECE) student with experience in software
          development. Seeking an internship position to utilize problem-solving and development skills effectively in a team
          environment. Possess excellent communication, time management, and problem-solving skills.
          </p>

          <a href='https://www.linkedin.com/in/sourav-kumar-bhunia-38408917a/'  target="_blank" rel="noreferrer" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default about