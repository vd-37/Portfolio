import React from 'react'
import Loopstudios from "./Image/Loopstudios.jpg"
import Keeper from "./Image/Keeper.jpg"
import Todo from "./Image/Todo.jpg"
import Tshirt from "./Image/Tshirt.jpg"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';



export const Projects1 = () => {
    AOS.init({
        offset: 300,
        delay: 0,
        duration: 400
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
                            In this web app, user can create a new account and add
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
                        <Link to="/project/Keeper/website">
                            <img src={Keeper} alt="" />
                        </Link>
                    </div>

                    <div>
                        <h3 className="project-heading">Keeper App</h3>
                        <p>
                            Keeper App helps you make short/quick notes when needed. You can add/ delete
                            as many quick notes you can with this app.
                            <br />
                            <br />
                            <span>Technologies used:</span> ReactJS, HTML, CSS.
                            <br />
                            <span>Deployment:</span> CodeSandbox.
                        </p>
                        <Link className="project-link" to="/project/Keeper/github">Source code</Link>
                        <br />
                        <Link className="project-link" to="/project/Keeper/website">Website</Link>
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
