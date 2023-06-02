import React from 'react';
import './testimonials.css';
// import AVTR1 from '';
// import AVTR2 from '';
// import AVTR3 from '';
// import AVTR4 from '';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  // {
  //   avatar: AVTR1,
  //   name: 'Tina Show',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda, cum cumque possimus pariatur illo ea repudiandae labore nemo fugit reiciendis voluptate vel veniam fugiat at saepe recusandae exercitationem cupiditate.'
  // },
  // {
  //   avatar: AVTR2,
  //   name: 'Tina Show',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda, cum cumque possimus pariatur illo ea repudiandae labore nemo fugit reiciendis voluptate vel veniam fugiat at saepe recusandae exercitationem cupiditate.'
  // },
  // {
  //   avatar: AVTR3,
  //   name: 'Tina Show',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda, cum cumque possimus pariatur illo ea repudiandae labore nemo fugit reiciendis voluptate vel veniam fugiat at saepe recusandae exercitationem cupiditate.'
  // },
  // {
  //   avatar: AVTR4,
  //   name: 'Tina Show',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda, cum cumque possimus pariatur illo ea repudiandae labore nemo fugit reiciendis voluptate vel veniam fugiat at saepe recusandae exercitationem cupiditate.'
  // },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="Client__avatar">
                <img src={avatar} alt='Avatar' />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review} 
              </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials