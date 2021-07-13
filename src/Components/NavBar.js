import React from 'react'
import {Link} from 'react-router-dom'


export default function NavBar(props){
    return(
        <div id='navBar'>
            <Link to='/'> <button className='navButton'>Home</button> </Link>
            <Link to='/resume'><button className='navButton'>Resume</button> </Link>
            {/* <a href='https://bayleyarens.com/Resume.pdf' target='_blank'> <button className='navButton'>Resume</button></a> */}
            <Link to='/projects'> <button className='navButton'>Projects</button></Link>
        </div>
    )
}


