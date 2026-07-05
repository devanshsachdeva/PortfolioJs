import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Github.css'

const Github = () => {
    return (
        <div className='github-profile'>
            <h1>
                Github Contributions Heatmap
            </h1>
            <GitHubCalendar username="devanshsachdeva" />
        </div>
    )
}

export default Github;