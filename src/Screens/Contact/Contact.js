import React from 'react';
import FooterLayout from '../FooterLayout/FooterLayout';
import "./Contact.css"

export default function Contact() {
    return (
        <div>
            <div className='contact-container'>
                <div className='contact-parent'>
                    <div className='contact-details'>
                        <div className='contact-details-name'>
                            <span className='contact-text'>
                                {" "}
                                <span className='highlighted-text'>How to Contact Me? </span>

                            </span>

                        </div>
                        <div className='contact-details-role'>
                            <span className='priamry-text'>
                                {" "}
                                <span className='contact-role-tagline'>
                                    Email Address: sachdevansh@outlook.com<br />
                                    Phone Number : +91-9968008005<br />
                                </span>

                            </span>

                        </div>

                        <div className='contact-options'>
                            <a className='btn priamry-btn' href="mailto:contact@test.com">
                                {" "} Email Me {" "}
                            </a>
                        </div>
                    </div>

                    <div className='contact-picture'>
                        <div className='contact-picture-background'>

                        </div>

                    </div>

                </div>

            </div>
            <FooterLayout />
        </div>


    )
}
