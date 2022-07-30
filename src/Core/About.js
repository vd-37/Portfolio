import React from 'react'
import VDimage from "./Image/VD.webp"
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
        duration: 200 
      });
      var date = new Date();
      var curYear = date.getFullYear();
      var age = curYear - 2001;
    return (
        <div  className="container-fluid">
            <div className="padding row bio" data-aos="fade-up">
                <img src={VDimage} className="VDimage col-md-6 center" alt="" />
                <div className="col-md-6 about">
                    <h5 className="pt-5 about-text">Hi, I'm Vinayaka</h5> <br />
                    <p className="details">
                        I am a Computer Science student at SJB Institute of technology.
                        I am a {age} year old from Bangalore. I enjoy solving problems and building websites.
                        I like exploring new fields in tech and I am actively seeking internships in the field of web
                        development.
                    </p>
                    <a className="resume about-text" href="https://drive.google.com/file/d/1E_2Nb9xEDMRW1JUVAzdyxXrBkbXDYeJ5/view?usp=sharing">Check out my resume</a>
                    <div className="Icons-tab">
                        <div className="social-icons"><Link to="/twitter" className="icon-link"><TwitterIcon /></Link></div>
                        <div className="social-icons"><Link to="/instagram" className="icon-link"><InstagramIcon /></Link></div>
                        <div className="social-icons"><Link to="/linkedin" className="icon-link"><LinkedInIcon /></Link></div>
                        <div className="social-icons"><Link to="/github" className="icon-link"><GitHubIcon /></Link></div>
                    </div>
                    <div className="contact mt-4">
                        <h5>Contact me here!</h5>
                        <h6><a  className='contactMail' href="mailto:vinayakadayanand007@gmail.com">Send Email</a></h6>   
                    </div>
                </div>
            </div>
        </div>

    )
}
