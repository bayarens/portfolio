import React from 'react'
import resume from './Resume.pdf';  


export default function Resume() {
    return (
        <div id='resume-box'>
            <embed width='800px' height='500px' src={resume}/>
        </div>
    )
}