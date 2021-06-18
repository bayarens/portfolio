import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props){
    return(
        <div id='navBar'>
            <Link to='/'> <button className='button'>Home</button> </Link>
            <Link to='/resume'> <button className='button'>Resume</button></Link>
            <Link to='/projects'> <button className='button'>Projects</button></Link>
        </div>
    )
}


