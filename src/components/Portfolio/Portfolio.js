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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        sagittis tristique arcu ac faucibus. Cras mattis, orci ac consequat
        tempus, nisi est porttitor purus, quis bibendum dolor velit at nisi.
        Aliquam vitae ipsum sed risus lobortis tincidunt. Aliquam erat volutpat.
        Fusce volutpat est libero, non commodo nisl pharetra eu. Pellentesque
        vestibulum, orci ut cursus aliquet, sapien felis efficitur neque, id
        porttitor orci erat nec risus. Pellentesque neque magna, facilisis in
        malesuada nec, gravida ac sem. Nunc vitae purus vitae est tristique
        facilisis sit amet quis sapien.
      </p>
    </section>
  );
});

export default Portfolio;
