import React from 'react'
import VDimage from "./Image/VD.png"
import { Link,Redirect } from "react-router-dom"
import { Twitter as TwitterIcon } from "@material-ui/icons";
import { LinkedIn as LinkedInIcon } from "@material-ui/icons";
import { Instagram as InstagramIcon } from "@material-ui/icons";
import { GitHub as GitHubIcon } from "@material-ui/icons";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export const About = () => {
    AOS.init({
        offset: 300,
        delay: 0, 
        duration: 400 
      });
    return (
        <div  className="container-fluid">
            <div className="padding row" data-aos="fade-up">
                <img src={VDimage} className="VDimage col-md-6" alt="" />
                <div className="col-md-6 about">
                    <h5 className="pt-5 about-text">Hi, I'm Vinayaka</h5> <br />
                    <p className="details">
                        I am a Computer Science student at SJB Institute of technology.
                        I am a 20 year old from Bangalore. I enjoy solving problems and building websites.
                        I like exploring new fields in tech and I am actively looking for internships which match
                        my skills.
                    </p>
                    <a className="resume about-text" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:d50bcd7c-b846-4fab-8fc0-0194028b2f9b" download="Vinayaka.D Resume">Check out my resume</a>
                    <div className="Icons-tab">
                        <div className="social-icons"><Link to="/twitter" className="icon-link"><TwitterIcon /></Link></div>
                        <div className="social-icons"><Link to="/instagram" className="icon-link"><InstagramIcon /></Link></div>
                        <div className="social-icons"><Link to="/linkedin" className="icon-link"><LinkedInIcon /></Link></div>
                        <div className="social-icons"><Link to="/github" className="icon-link"><GitHubIcon /></Link></div>
                    </div>
                    <div className="contact mt-4">
                        <h5>Contact me here!</h5>
                        <h6>Email : <span className="email">vinayakadayanand007@gmail.com</span></h6>
                    </div>
                </div>
            </div>
        </div>

    )
}
