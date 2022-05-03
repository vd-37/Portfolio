import React from 'react'
import Loopstudios from "./Image/Loopstudios.webp"
import Todo from "./Image/Todo.webp"
import Tshirt from "./Image/Tshirt.webp"
import Fest from './Image/Fest.webp'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';



export const Projects1 = () => {
    AOS.init({
        offset: 300,
        delay: 0,
        duration: 300
    });
    return (
        <div className="portfolio padding">
            <div className="subtitle text-center">PORTFOLIO</div>
            <div className="title text-center portfolio-heading">Checkout few of my works</div>
            <main class="container">
                <section class="card" data-aos="fade-left">
                    <div className="img">
                        <Link to="/project/Tshirt/website">
                            <img src={Tshirt} alt="" />
                        </Link>
                    </div>
                    <div>
                        <h3 className="project-heading">T-shirt Store</h3>
                        <p>
                            This is a fullstack web app made for an online T-shirt selling website.
                            In this website, user can create a new account and add
                            items to cart and then checkout. Payment gateway is handled by Braintree.
                            <br />
                            <br />
                            P.S This is still a work in progress
                            <br />
                            <br />
                            <span>Technologies used:</span> ReactJS, Django, DjangoREST, PostgreSQL
                            <br />
                            <span>Deployment:</span> Heroku for backend, Netlify for frontend.
                        </p>
                        <Link className="project-link" to="/project/Tshirt/github">Source code</Link>
                        <br />
                        <Link className="project-link" to="/project/Tshirt/website">Website</Link>
                    </div>
                </section>

                <section class="card" data-aos="fade-right">
                    <div className="img">
                        <Link to="/project/Loopstudios/website">
                            <img src={Loopstudios} alt="" />
                        </Link>
                    </div>

                    <div>
                        <h3 className="project-heading">LoopStudios</h3>
                        <p>
                            A website made for a Virtual-Reality company "LoopStudios". This is just a static website
                            which gives a brief introduction about the company.
                            <br />
                            <br />
                            <span>Technologies used:</span> JavaScript, HTML, CSS.
                            <br />
                            <span>Deployment:</span> Github.
                        </p>
                        <Link className="project-link" to="/project/Loopstudios/github">Source code</Link>
                        <br />
                        <Link className="project-link" to="/project/Loopstudios/website">Website</Link>
                    </div>
                </section>

                <section class="card" data-aos="fade-left">
                    <div className="img">
                        <Link to="/project/Fest/website">
                            <img src={Fest} alt="" />
                        </Link>
                    </div>

                    <div>
                        <h3 className="project-heading">Varchasva</h3>
                        <p>
                            "Varchasva" is the annual fest of the college. The website gives all the 
                            information about the fest. Students can register to various events 
                            listed in the website.
                            <br />
                            <br />
                            <span>Technologies used:</span> jQuery, HTML, CSS.
                            <br />
                            <span>Deployment:</span> Github.
                        </p>
                        <Link className="project-link" to="/project/Fest/github">Source code</Link>
                        <br />
                        <Link className="project-link" to="/project/Fest/website">Website</Link>
                    </div>
                </section>

                <section class="card" data-aos="fade-right">
                    <div className="img">
                        <Link to="/project/Todo/website">
                            <img src={Todo} alt="" />
                        </Link>
                    </div>

                    <div>
                        <h3 className="project-heading">TODO List</h3>
                        <p>
                            A TODO list app to keep track of your daily TODOs. It is easy to use and
                            can make your life a tad bit easier.

                            <br />
                            <br />
                            <span>Technologies used:</span> Node.js, Express.
                            <br />
                            <span>Deployment:</span> Heroku.

                        </p>
                        <Link className="project-link" to="/project/Todo/github">Source code</Link>
                        <br />
                        <Link className="project-link" to="/project/Todo/website">Website</Link>
                    </div>
                </section>
            </main>

        </div>
    )
}
