import React from 'react';
import '../App.css';
import CardItem from"../components/CardItem";
export default function SAME() {
  return(<> <h1 className='same'>SAME</h1>;
 <div className="cards">
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/51.jpg'
              text='“Only those who dare to fail greatly can ever achieve greatly.”'
              label='Achivement'
              path=''
            />
            <CardItem
              src='/images/sac/nss/53.jpg'
              text='“Be yourself; everyone else is already taken.”'
              label='Luxury'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/54.jpg'
              text='“Action may not always bring happiness; but there is no happiness without action.”'
              label='Mystery'
              path=''
            />
            </ul>
            <ul className='cards__items'>

            <CardItem
              src='/images/sac/nss/56.jpg'
              text='“The true meaning of life is to plant trees, under whose shade you do not expect to sit.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/nss/52.jpg'
              text='“Keep your eyes on the stars, and your feet on the ground.”'
              label='Adrenaline'
              path=''
                          />
           
          </ul>
        </div>
        </div></div> 
  </>);
}