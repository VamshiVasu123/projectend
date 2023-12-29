import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-5.jpeg'
              text='“Keep your eyes on the stars, and your feet on the ground.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/img-2.jpeg'
              text='“Be yourself; everyone else is already taken.”'
              label='Luxury'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpeg'
              text='“Many of life’s failures are people who did not realize how close they were to success when they gave up.”'
              label='Mystery'
              path=''
            />
            <CardItem
              src='/images/img-4.jpeg'
              text='“The true meaning of life is to plant trees, under whose shade you do not expect to sit.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/img-8.jpeg'
              text='“Action may not always bring happiness; but there is no happiness without action.”'
              label='Adrenaline'
              path=''
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;