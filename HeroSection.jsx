// // import React  from "react";
// // import "./HeroSection.css";
// // import { Swiper, SwiperSlide } from "swiper/react"
// // import "swiper/css";
// // import Sidebar from "../images/img-2.jpeg";
// // import Ecommerce from "../images/img-8.jpeg";
// // import HOC from "../images/img-6.jpg";
// // import MusicApp from "../images/img-3.jpeg";
// // const Portfolio = () => {
// //   return (
// //     <div className="portfolio" id="portfolio">
// //       {/* heading */}
// //       {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
// //       <span>Portfolio</span>

// //       {/* slider */}
// //       <Swiper
// //         spaceBetween={30}
// //         slidesPerView={3}
// //         grabCursor={true}
// //         className="portfolio-slider"
// //       >
// //         <SwiperSlide>
// //           <img src={Sidebar} alt="" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <img src={Ecommerce} alt="" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <img src={MusicApp} alt="" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <img src={HOC} alt="" />
// //         </SwiperSlide>
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default Portfolio;

// // // import React from 'react'
// // // import '../App.css';
// // // import './HeroSection.css';

// // // function HeroSection() {
// // //   return (
// // //     <div className='hero-container'>
// //       // {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
// //       // {/* <h1>ADVENTURE AWAITS</h1>
// //       // <p>What are you waiting for?</p>  */}
// //       // //  <div className='hero-btns'>
// //       //   {/* <Button
// //         //   className='btns'
// //         //   buttonStyle='btn--primary'
// //         //   buttonSize='btn--large'
// //         // >
// //         //   GET STARTED
// //         // </Button>
// //         // <Button
// //         //   className='btns'
// //         //   buttonStyle='btn--primary'
// //         //   buttonSize='btn--large'
// //         //   onClick={console.log('hey')}
// //         // >
// //         //   WATCH TRAILER <i className='far fa-play-circle' />
// //         // </Button> */}
// function App(){
//   return(
//     <div>

// <h2>Automatic Slideshow</h2>
// <p>Change image every 2 seconds:</p>

// <div class="slideshow-container">

// <div class="mySlides fade">
//   <div class="numbertext">1 / 3</div>
//   <img src="img_nature_wide.jpg" style="width:100%"></img>
//   <div class="text">Caption Text</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">2 / 3</div>
//   <img src="img_snow_wide.jpg" style="width:100%"></img>
//   <div class="text">Caption Two</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">3 / 3</div>
//   <img src="img_mountains_wide.jpg" style="width:100%"></img>
//   <div class="text">Caption Three</div>
// </div>

// </div>
// <br></br>

// <div style="text-align:center">
//   <span class="dot"></span> 
//   <span class="dot"></span> 
//   <span class="dot"></span> 
// </div>

// <script>
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// </script>
// </div>
//   );
// }
// export default App;

// Slideshow.js
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './HeroSection.css'; // Import the custom styles

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'First Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Second Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img src={fadeImage.url} alt={`Slide ${index + 1}`} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
