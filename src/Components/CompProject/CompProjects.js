import React from 'react'
import './CompProject.css'

const CompProjects = (props) => {
    return (
        <div className='cpr-parent'>
            <div className='cpr-details'>
                <div className='cpr-details-name'>
                    <span className='priamry-text'>
                        <span className='highlighted-title'> {props.title} </span>
                    </span>
                </div>
                <div className='min-read'>
                    <span>{props.time} min read</span>
                </div>
                <div className='cpr-details-role'>
                    <span className='cpr-role-tagline'>
                        {props.desc}
                    </span>

                </div>
                <div className='colzp'>
                    <div className='colzp-icon'>
                        <a href='https://github.com/devanshsachdeva'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a className='cpr-contact'>
                            Contributions are always accepted :)
                        </a>
                    </div>


                </div>

            </div>


            <div className='cpr-picture'>
                <div className='cpr-picture-background'>

                </div>

            </div>

        </div>
    )
}


export default CompProjects;