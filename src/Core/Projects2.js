import React from 'react'
// import Simon from './Image/Simon.png'
import Drum from './Image/Drum.jpg'
import Tindog from './Image/Tindog.jpg'
import Fest from './Image/Fest.jpg'
import Bootstrap from './Image/Bootstrap.jpg'
import Easybank from './Image/Easybank.jpg'
import Blogr from './Image/Blogr.jpg'
import Slider from "react-slick";
import { ImageLoader } from './ImageLoader';

export const Projects2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="padding">
      <div className="title text-center mb-5">Other notable projects</div>
      <Slider className="Slider" {...settings}>
        <ImageLoader title="Blogr landing page" src={Blogr} siteRoute="/project/Blogr/website" gitRoute="/project/Blogr/github" />
        <ImageLoader title="Tindog- A dating app for dogs" src={Tindog} siteRoute="/project/Tindog/website" gitRoute="/project/Tindog/github" />
        <ImageLoader title="EasyBank landing page" src={Easybank} siteRoute="/project/Easybank/website" gitRoute="/project/Easybank/github" />
        <ImageLoader title="A website on bootsrap" src={Bootstrap} siteRoute="/project/Bootstrap/website" gitRoute="/project/Bootstrap/github" />
        <ImageLoader title="Drums" src={Drum} siteRoute="/project/Drums/website" gitRoute="/project/Drums/github" />
        <ImageLoader title="College fest website" src={Fest} siteRoute="/project/Fest/website" gitRoute="/project/Fest/github" />
      </Slider>
      <hr />
    </div>
  )
}
