import React, { forwardRef } from 'react';
import imageResource from '../../resources/images';
import { Link } from 'react-router-dom';
import './About.scss';

const About = forwardRef((props, ref) => {
  return (
    <section className='aboutSection' ref={ref}>
      <div className='aboutSection__container'>
        <div className='aboutSection__avatar'>
          <img
            src={imageResource.portfolio.contactMe.avatar}
            alt='Graduation'
            className='aboutSection__avatar__image'
          ></img>
        </div>
        <div className='aboutSection__introduction'>
          <div className='spacer'></div>
          <h2> Hello and welcome to my website. </h2>
          <div className='spacer-large'></div>
          <p>
            Thank you so much for taking the time to visit this space to learn
            about me and my works. I am a music composer (film, indie,
            classical, electronic, ensemble), pianist (quasi-classical),
            educator (composition and piano pedagogy), sound engineer (recording
            and mixing) and music producer. I am currently based in Glasgow,
            Scotland and living here for the last 6 years. I came here to study
            music composition at the Royal Conservatoire of Scotland in 2015. I
            was born in Hassan, India and raised in Bengaluru, the IT capital of
            India. To learn more about my journey please click
            <strong>
              &nbsp;<Link to='/about'>About me</Link>&nbsp;
            </strong>
            which contains my biography. Over the last 12 years, I have been
            consistently engaging in music-making at a professional level both
            in India and in Scotland, UK.
            <strong>
              &nbsp;<Link to='/portfolio'>The portfolio</Link>&nbsp;
            </strong>
            contains all the works associated with each of my skillset mentioned
            above.
          </p>
          <p>
            I am hoping that this website paints a detailed picture of my
            professional life, gives you the information you want and I look
            forward to collaborating with you for your Audio needs. Please do
            get in touch with me through any of the social media platforms of
            your preference. I will aim to get back to you at the earliest.
          </p>
          <p>Best wishes,</p>
          <p>
            <strong>Amit Anand</strong>
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
