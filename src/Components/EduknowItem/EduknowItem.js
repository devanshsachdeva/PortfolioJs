import React from 'react'
import './EduknowItem.css'

const EduknowItem = ( props ) => (

    <div className='timeline-item'>
        <div className='timeline-item-content'>
            <span className='tag' style={{ background: props.color }}>
                {props.tag}
            </span>
            <time>{props.date}</time>
            <p><b>{props.desc}</b></p>
            <p>{props.desct}</p>
            <a href={props.url} target="_blank" rel='noopener noreferrer'>
                {props.text}
            </a>
            <span className='circle'></span>
        </div>

    </div>
);

export default EduknowItem;