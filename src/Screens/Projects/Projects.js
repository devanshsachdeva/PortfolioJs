import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import CompProjects from '../../Components/CompProject/CompProjects'
import FooterLayout from '../FooterLayout/FooterLayout'
import './Projects.css'

export default function Projects() {
    return (
        <div className='prj-parent-container'>
            <div className='prj-title'>
                <h1>
                    Projects
                </h1>
                <h6>
                    A Brief on what projects i have worked upon, single handedly !!
                </h6>
            </div>
            <div className='prj-container'>

                <CompProjects desc="You are Already here ! :p" title="Portfolio" time="1" />

                <CompProjects desc="A Hotel Booking Web Application" title="TraveLust" time="1" />


            </div>
            <div className='prj-container'>

                <CompProjects desc="Tableau view of Covid data" title="Covid 19 Dashboard" time="1" />

                <CompProjects desc="Admin Controller website for Airport Authority of India (Intern)" title="Admin Website for A.A.I." time="1" />


            </div>
            <div className='prj-container'>

                <CompProjects desc="An Android App for informations based on a product" title="Informatix Android App" time="1" />

                <CompProjects desc="A To-Do Application with reminders and note keeping" title="Alacrit" time="1" />

            </div>
        </div>
    )
}
