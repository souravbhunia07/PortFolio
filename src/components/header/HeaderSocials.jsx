import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sourav-kumar-bhunia-38408917a' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/souravbhunia07' target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials