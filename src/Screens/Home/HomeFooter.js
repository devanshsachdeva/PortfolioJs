import React from 'react'
import Home from './Home'
import "./HomeFooter.css";
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import AboutMe from '../AboutMe/AboutMe';
import Eduknow from '../Eduknow/Eduknow';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import FooterLayout from '../FooterLayout/FooterLayout';

export default function HomeFooter() {
    return (
        <div className='home-container'>
            <Home />
            <AboutMe />
            <Eduknow />
            <Projects />
            <Contact />
        </div>
    )
}
