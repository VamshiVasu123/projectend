import React from 'react';
import '../App.css';
import '../components/Cards.css';
import CardItem from '../components/CardItem';
export default function ACM() {
  return (<>
  <h1 className='acm'>ACM</h1>
  <div className="cards">
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/60.jpg'
              text='“Only those who dare to fail greatly can ever achieve greatly.”'
              label='Achieve'
              path=''
            />
            <CardItem
              src='/images/sac/nss/58.jpg'
              text='“You need to battle with fear of failure to achieve your goals in life.”'
              label='Goals'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/59.jpg'
              text='“Every day, I like to wake up and remind myself to be grateful of the simple things.”'
              label='Mystery'
              path=''
            />
            </ul>
            <ul className='cards__items'>

            <CardItem
              src='/images/sac/nss/63.jpg'
              text='“If you change the way you look at things, the things you look at change.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/nss/64.jpg'
              text='“At any given moment you have the power to say: this is how the story is going to end.”'
              label='Achieve'
              path=''
            />
           
          </ul>
        </div>
        </div></div> 
  </>
  )
}