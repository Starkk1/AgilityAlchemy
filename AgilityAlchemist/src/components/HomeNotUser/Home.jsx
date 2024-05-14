import "./Home.css";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import MenuIcon from "../../../images/Menu.png"
import SignUpIcon from "../../../images/SignUpIcon.png"
import WomanTraining from "../../../images/mr-lee-f4RBYsY2hxA-unsplash.jpg"
import ManTraining from '../../../images/Man-Training.jpg'
import CustomizedTraining from "../../../images/Customized-Training.jpg"
import HealthyFood from "../../../images/Healthy-Food.jpg"
import FocusedWorkout from "../../../images/Focused-WorkOut.jpg"
import DataCenter from '../../../images/DataCenter.jpg'
import InstagramIcon from "../../../images/instagram.png"
import LinkedInIcon from "../../../images/linkedin.png"
import GithubIcon from "../../../images/github.png"
import Review1 from "../../../images/review1.jpg"
import Review2 from "../../../images/review2.png"
import Review3 from "../../../images/review3.png"
import Review4 from "../../../images/review4.png"





export default function Home() {

    const images = [
        {
            original: Review1,
            thumbnail: Review1,
        },
        {
            original: Review2,
            thumbnail: Review2,
        },
        {
            original: Review3,
            thumbnail: Review3,
        },
        {
            original: Review4,
            thumbnail: Review4,
        },
    ];

    return (
        <>
            <div className="container">
                {/*   -------------------------------------- NAVIGATION BAR FOR HOME PAGE --------------------------------------  */}
                <nav>
                    <div className="nav--menu">
                        <ul>
                            <li><img src={MenuIcon} alt="menu icon" /></li>
                            <li> <h3>AGility Alchemist</h3></li>
                        </ul>
                    </div>
                    <div className="nav--main">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <a href="#">  <div className="nav--signUp">
                                <img src={SignUpIcon} alt="Sign up Icon" />
                                <li>Sign Up</li>
                            </div></a>
                        </ul>
                    </div>
                </nav>

                <section className="mainSection">
                    <article className="mainSection--hero">
                        <img src={WomanTraining} alt="Agility Alchemist" />
                        <h1>AGILITY ALCHEMIST</h1>
                        <h4>*slogan goes here*</h4>
                        <div className="signUp-btn">
                            <button >SIGN UP NOW</button>
                        </div>
                    </article>
                    <article className="mainSection--aboutUs" id='about'>
                        <img src={ManTraining} alt="Picture of a man training" />
                        <div className="aboutUs--desc">
                            <h2>ABOUT US</h2>
                            <p>Welcome to Agility Alchemist, where online training meets convenience. Founded by four ambitious college students, we're dedicated to making fitness and skill development accessible from the comfort of your home. Our platform offers personalized training programs designed to fit your schedule and goals. Join us and discover a new way to achieve greatness, wherever you are.</p>
                        </div>
                    </article>

                    <article>

                        <div className="mainSection--services" id='services'>
                            <h2>OUR SERVICES </h2>
                            <div className="service">
                                <img src={CustomizedTraining} alt="customized training picture" />
                                <div className="service--desc">
                                    <h3>Customized Training Programs</h3>
                                    <p>Personalized training programs tailored to individual fitness levels, goals, and preferences. Users can access a wide range of workout routines, exercises, and progress tracking tools to achieve their desired results.
                                    </p>
                                </div>
                            </div>
                            <div className="service">
                                <img src={HealthyFood} alt="Healthy food" />
                                <div className="service--desc">
                                    <h3>Nutrition and wellness Resources</h3>
                                    <p>Comprehensive resources and guidance on nutrition, meal planning, and general wellness to support overall health and fitness goals. Users can access articles, recipes, meal plans, and nutritional tips to complement their training regimen and optimize their results.</p>
                                </div>
                            </div>
                            <div className="service">
                                <img src={FocusedWorkout} alt="Focused Workout" />
                                <div className="service--desc">
                                    <h3>Focused Training Programs</h3>
                                    <p>Targeted training videos focusing on specific fitness goals, such as fat loss, muscle gain, endurance, or rehabilitation. Each program is designed to address specific needs and objectives, providing users with structured guidance and support to achieve their desired outcomes.</p>
                                </div>
                            </div>
                            <div className="service">
                                <img src={DataCenter} alt="Our data center" />
                                <div className="service--desc">
                                    <h3>Extensive Workout Library</h3>
                                    <p> Access to our vast database of workout videos, tutorials, and tips covering a wide range of fitness disciplines and skill levels. Users can explore and choose from a variety of workouts tailored to their preferences and goals, providing endless options for effective and enjoyable home training.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="mainSection--whyUs" >
                        <h2>WHY US</h2>
                        <p>Some reviews from our <bold>PRECIOUS</bold> clients.</p>
                        <div className="container-slider">
                            <ImageGallery
                                classNames="ImageGallery"
                                orginalClass="ImageGallery"
                                items={images}
                                lazyLoad={true}
                                showIndex={true}
                                autoPlay={true} />
                        </div>
                    </article>

                </section >

                {/* -------------------------------------- Footer --------------------------------------  */}
                <footer id="contact">
                    <div className="footer--container">
                        <div className="footer--links">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">SignUp</a></li>
                            </ul>
                        </div>
                        <div className="footer--socialMedia">
                            <a href="#"><img src={InstagramIcon} alt="Instagram Icon" /></a>
                            <a href="#"><img src={LinkedInIcon} alt="LinkedInIcon" /></a>
                            <a href="#"><img src={GithubIcon} alt="GitHub Icon" /></a>
                        </div>
                        <div className="footer--copyRight">
                            <p>Copyright © 2024 Agility Alchemist. All rights reserved.

                                All content, including text, graphics, logos, images, videos, and audio files, on the Agility Alchemist website is the property of Agility Alchemist and is protected by copyright laws. Any unauthorized reproduction, distribution, or modification of the content is strictly prohibited without prior written consent from Agility Alchemist.

                                Agility Alchemist and its logo are trademarks of Agility Alchemist. All other trademarks, service marks, and trade names mentioned on the website are the property of their respective owners.

                                For inquiries regarding the use of content or trademarks, please contact us at adelashrafmuhammed@gmail.com.</p>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    )
}
