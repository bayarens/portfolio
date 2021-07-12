import React from 'react'
import {Link} from 'react-router-dom'
import resume from './Resume.pdf';  

export default function NavBar(props){
    return(
        <div id='navBar'>
            <Link to='/'> <button className='navButton'>Home</button> </Link>
            <a href={resume} target='_blank'> <button className='navButton'>Resume</button></a>
            <Link to='/projects'> <button className='navButton'>Projects</button></Link>
        </div>
    )
}


