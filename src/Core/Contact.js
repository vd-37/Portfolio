import React from 'react'
import { Link,Redirect } from "react-router-dom"
import { Twitter as TwitterIcon } from "@material-ui/icons";
import { LinkedIn as LinkedInIcon } from "@material-ui/icons";
import { Instagram as InstagramIcon } from "@material-ui/icons";
import { GitHub as GitHubIcon } from "@material-ui/icons";

export const Contact = () => {
    return (
        <footer>
        <div className="Icons-tab">
                        <div className="social-icons"><Link to="/twitter" className="icon-link"><TwitterIcon /></Link></div>
                        <div className="social-icons"><Link to="/instagram" className="icon-link"><InstagramIcon /></Link></div>
                        <div className="social-icons"><Link to="/linkedin" className="icon-link"><LinkedInIcon /></Link></div>
                        <div className="social-icons"><Link to="/github" className="icon-link"><GitHubIcon /></Link></div>

                    </div>
            <div className="contactTitle text-center">
            <p className="title ">Contact Me</p>
            
            <h6><a  className='contactMail' href="mailto:vinayakadayanand007@gmail.com">Send Email</a></h6>   

            </div>
            
        </footer>
    )
}
