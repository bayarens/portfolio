import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props){
    return(
        <div id='navBar'>
            <Link to='/'> <button className='button'>Home</button> </Link>
            <a href='BayleyArensResume-postNebula-unfinished.pdf' target='_blank'> <button className='button'>Resume</button></a>
            <Link to='/projects'> <button className='button'>Projects</button></Link>
        </div>
    )
}


