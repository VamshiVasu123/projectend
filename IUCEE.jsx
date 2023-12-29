import React from 'react';
import '../App.css';
import CardItem from '../components/CardItem';
export default function IUCEE() {
  return <> <h1 className='iucee'>IUCEE</h1>;
 <div className="cards">
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/img-1.png'
              text='“Many of life’s failures are people who did not realize how close they were to success when they gave up.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/nss/38.jpg'
              text='“Keep your eyes on the stars, and your feet on the ground.”'
              label='Luxury'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/36.jpg'
              text='“The true meaning of life is to plant trees, under whose shade you do not expect to sit.”'
              label='Mystery'
              path=''
            />
            </ul>
            <ul className='cards__items'>

            <CardItem
              src='/images/sac/nss/39.jpg'
              text='“Action may not always bring happiness; but there is no happiness without action.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/img-4.png'
              text='“Be yourself; everyone else is already taken.”'
              label='Adrenaline'
              path=''
            />
           
          </ul>
        </div>
        </div></div> 
</>
}