import React from 'react';
import '../App.css';
import CardItem from '../components/CardItem';

export default function SAC() {
  return (<>
  <h1 className='sac'>SAC</h1>
  <div className="cards">
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/21.jpg'
              text='“Be yourself; everyone else is already taken.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/img-1.png'
              text='“Action may not always bring happiness; but there is no happiness without action.”'
              label='Luxury'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/20.jpg'
              text='“The true meaning of life is to plant trees, under whose shade you do not expect to sit.”'
              label='Mystery'
              path=''
            />
            </ul>
            <ul className='cards__items'>

            <CardItem
              src='/images/img-8.jpeg'
              text='“Keep your eyes on the stars, and your feet on the ground.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/img-2.jpeg'
              text='“Many of life’s failures are people who did not realize how close they were to success when they gave up.”'
              label='Adrenaline'
              path=''
            />
           
          </ul>
        </div>
        </div></div>  </>
  )
}