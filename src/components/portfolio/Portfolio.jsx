import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/keeper.png';
import IMG2 from '../../assets/to_do_list.png';
import IMG3 from '../../assets/geekstore.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    img: IMG1,
    title: 'Keeper',
    github: 'https://github.com/souravbhunia07/keeper_Webapp.git',
    demo: 'https://magical-starburst-a22038.netlify.app/',
  },
  {
    id: 2,
    img: IMG2,
    title: 'To DO List',
    github: 'https://github.com/souravbhunia07/ToDoList.git',
    demo: 'https://to-do-list-14s0.onrender.com',
  },
  {
    id: 3,
    img: IMG3,
    title: 'Geek-store',
    github: 'https://github.com/souravbhunia07/Geeks_store',
    demo: 'https://geeks-store-37b1f.web.app/',
  },
  // {
  //   id: 4,
  //   img: IMG4,
  //   title: 'Crypto Currency Dashboard',
  //   github: 'https://github.com',
  //   demo: 'https://github.com',
  // },
  // {
  //   id: 5,
  //   img: IMG5,
  //   title: 'Crypto Currency Dashboard',
  //   github: 'https://github.com',
  //   demo: 'https://github.com',
  // },
  // {
  //   id: 6,
  //   img: IMG6,
  //   title: 'Crypto Currency Dashboard',
  //   github: 'https://github.com',
  //   demo: 'https://github.com',
  // },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio