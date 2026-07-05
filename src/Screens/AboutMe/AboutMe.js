import React from 'react'
import "./AboutMe.css"
import Github from '../../Components/Github/Github';

export default function AboutMe() {
    return (
        <div>
            <Github />

            <div className='stack-use-text'>
                <h1>Stack I Use</h1>
            </div>

            <div className='profile-container-aboutone'>
                <div className='profile-parent-about'>
                    <div className='profile-picture-angular'>
                        <div className='profile-picture-background-angular'>

                        </div>

                    </div>
                    <div className='profile-picture-react'>
                        <div className='profile-picture-background-react'>

                        </div>

                    </div>
                    <div className='profile-picture-asp'>
                        <div className='profile-picture-background-asp'>


                        </div>

                    </div>


                </div>


            </div>



            <div className='profile-container-abouttwo'>
                <div className='profile-parent-about'>
                    <div className='profile-picture-sql'>
                        <div className='profile-picture-background-sql'>

                        </div>

                    </div>
                    <div className='profile-picture-cpp'>
                        <div className='profile-picture-background-cpp'>

                        </div>

                    </div>
                    <div className='profile-picture-python'>
                        <div className='profile-picture-background-python'>

                        </div>

                    </div>


                </div>



            </div>
        </div>


    )
}
