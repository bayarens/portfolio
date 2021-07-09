import React from 'react'

export default function Home(){
    return(
    <div>
        <div id='mainContainer'>
            <img id='profilePic' src="./Profilepic.jpeg"/>
            <p id='introBox'>Thank you for taking the time to come take a look at my Portfolio! My name is Bayley Arens, I am a New York City native, a Miami University Alum, and I am on my journey to become a fullstack developer. This is a website I made to house all my contact info, my resume, and to show off all my previous projects, I hope you enjoy!</p>
            <div id='contactInfo'>
            <ul>
                <li>Email: bay.arens@gmail.com</li>
                <li>Phone: 646-413-1666</li>
                <li>GitHub: https://github.com/bayarens</li> 
                <li>LinkedIn: https://www.linkedin.com/in/bayley-arens/</li>
            </ul>
        </div>
        </div>
    </div>
    )
}