import React, { forwardRef } from 'react';
import stringResource from '../../resources/strings';
import imageResource from '../../resources/images';
import './Portfolio.scss';

const Portfolio = forwardRef((props, ref) => {
  return (
    <section className='portfolioSection' ref={ref}>
      <h1>Portfolio</h1>
      <div className='portfolioSection__spotify'>
        <a
          className='portfolioSection__spotify__image'
          target='_blank'
          rel='noreferrer'
          href={stringResource.portfolio.media.spotify}
        >
          <img
            className='img-fluid album-art'
            src={imageResource.portfolio.media.spotify}
            alt='artistlogo'
            target='_blank'
            rel='noreferrer'
          ></img>
        </a>
        <div className='portfolioSection__spotify__widget'>
          <iframe
            src={stringResource.portfolio.media.spotify}
            width='300'
            height='380'
            frameBorder='0'
            allowtransparency='true'
            allow='encrypted-media'
            title='Amit Anand Spotify'
          ></iframe>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
