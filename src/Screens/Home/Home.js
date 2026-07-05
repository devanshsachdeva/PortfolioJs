import React from 'react';
import Typical from 'react-typical';
import './Home.css';

export default function Home() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                            <a href='https://www.facebook.com/sachdeva.devansh/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/thedevanshsachdeva/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://github.com/devanshsachdeva'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/sachdevansh/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>


                    </div>


                    <div className='profile-details-name'>
                        <span className='priamry-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'> Devansh Sachdeva </span>

                        </span>

                    </div>
                    <div className='profile-details-role'>
                        <span className='priamry-text'>
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 💻",
                                        3000,
                                        "👨‍💻Full Stack Developer",
                                        3000,
                                        "Cross Platform 🪢",
                                        3000,

                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Exploring and Learning, from Backend to Frontend !<br />
                                Working in the day, following passion at night❤️<br />
                            </span>

                        </span>

                    </div>

                    <div className='profile-options'>
                        <button className='btn priamry-btn'>
                            {" "} Hire Me {" "}
                        </button>
                        <a href='Devansh.pdf' download='Devansh Resume.pdf'>
                            <button className='btn highlighted-btn'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>

                </div>

            </div>

        </div>
    )
}
