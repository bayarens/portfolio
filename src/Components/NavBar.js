import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props){
    return(
        <div id='navBar'>
            <Link to='/'> <button className='navButton'>Home</button> </Link>
            <a href='./Resume.V3.pdf' target='_blank'> <button className='navButton'>Resume</button></a>
            <Link to='/projects'> <button className='navButton'>Projects</button></Link>
        </div>
    )
}


