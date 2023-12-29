import React from 'react';
import '../App.css';
import CardItem from '../components/CardItem';
export default function IEEE() {
  return<> <h1 className='ieee'>IEEE</h1>;
 <div className="cards">
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/18.jpg'
              text='“The world breaks everyone, and afterward, some are strong at the broken places.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/nss/21.jpg'
              text='“We cannot solve our problems with the same thinking we used when we created them.”'
              label='Goals'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/22.jpg'
              text='“Kites rise highest against the wind – not with it.”'
              label='Mystery'
              path=''
            />
            </ul>
            <ul className='cards__items'>

            <CardItem
              src='/images/sac/nss/16.jpg'
              text='“No one has ever made a difference by being like everyone else.”'
              label='Achieve'
              path=''
            />
            <CardItem
              src='/images/sac/nss/61.jpg'
              text='“Life is either a daring adventure or nothing at all.”'
              label='Adrenaline'
              path=''
            />
           
          </ul>
        </div>
        </div></div> 
</>
}