import React from 'react'
import { Carousel } from 'react-bootstrap';
import menuIcon from "./Image/icon-hamburger.svg"

export const Name = () => {
    return (
        <div>
            {/* <img src={menuIcon} className="offset-10 pt-5" alt="menuIcon"/> */}
            <Carousel indicators={false} className="name">
                <Carousel.Item>
                    <div className="subtitle text-center">HELLO, I'M</div>
                    <div className="title text-center">VINAYAKA D</div>
                </Carousel.Item>
                <Carousel.Item > 
                    <div className="subtitle text-center">I'M FROM BANGALORE</div>
                    <div className="title text-center">A WEB DEVELOPER</div>
                </Carousel.Item>
            </Carousel>
            <div className='scroll-down'>

            </div>
        </div>
            
    )  
}
