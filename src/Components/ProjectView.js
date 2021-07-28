import React from 'react'
import AntSwitch from './Switch' 


class ProjectView extends React.Component {

    state = {
        projects: [
            {
                title: 'Our Future Genreration, Raffle Page',
                deployedURL: 'https://ofg-raffle.herokuapp.com/',
                desc: 'Took a leadership role in a group project to injected a React component into a WordPress website.  Created a full CRUD application that creates and runs raffles on a website of a non-profit organization.  Set up the API that allowed the front end of our site to communicate with the database, designed and styled the front end pages for the raffles, added administrative functionality to the site, and wrote the function that chooses the winner of the raffle and notifies the winner and site admins with an email.',
                link: 'https://ofg-raffle.herokuapp.com/',
                github: 'https://github.com/Nebula-Academy/OFG-Raffle',
                expanded: false
            },
            {
                title: 'Music Playlist App',
                deployedURL: 'https://master.d37fvqqdh284tz.amplifyapp.com/',
                desc: 'This is a full CRUD application I created that allows the user to create, update, and delete items from a playlist. It was made using React, JSX, PSQL and is fully deployed on an Amazon EC2 instance.',
                link: 'https://master.d37fvqqdh284tz.amplifyapp.com/',
                github: 'https://github.com/bayarens/Music-App',
                expanded: false
            },
            {
                title: 'Netflix Replica App',
                deployedURL: 'https://master.dpw13rchrrnv6.amplifyapp.com/',
                desc: 'This is a Netflix replica React App that I created using an API.',
                link: 'https://master.dpw13rchrrnv6.amplifyapp.com/',
                github: 'https://github.com/bayarens/nexflix-replica',
                expanded: false
            },
            {
                title: 'DemonSlayer Game',
                deployedURL: 'https://bayarens.github.io/DemonSlayer-Game/',
                desc: 'This is a game I made in the canvas API in the JavaScript library, and was styled with HTML & CSS. It is deployed via GitHub',
                link: 'https://bayarens.github.io/DemonSlayer-Game/',
                github: 'https://github.com/bayarens/DemonSlayer-Game',
                expanded: false
            },
            {
                title: 'Calculator',
                deployedURL: 'https://bayarens.github.io/Calculator/',
                desc: 'This is the first real project I worked on, it is a basic calculator I made from scratch using JavaScript and styled with HTML and CSS.',
                link: 'https://bayarens.github.io/Calculator/',
                github: 'https://github.com/bayarens/Calculator',
                expanded: false
            }
        ],

    }

    toggleExpanded = (project) => {
        let projects = [...this.state.projects];
        let index = projects.findIndex(element => element == project)
        projects[index].expanded = !projects[index].expanded;
        this.setState({ projects })
    }

    toggleExpandedButton = (e) => {
        
    }

    render() {
        return (
            <div id='projectViews'>
                {this.state.projects.map(project => <div key={project.title}>
                    <h3 className='projectTitle'>{project.title}</h3>
                    <iframe className={project.expanded ? 'largeview' : 'minview'} src={project.deployedURL}></iframe>
                    {/* <button className='expandButton' onClick={() => this.toggleExpanded(project)}><img src="https://img.icons8.com/material-outlined/24/000000/expand--v2.png"/></button> */}
                    <AntSwitch onChange={() => this.toggleExpanded(project)}/>
                    <div className='infoBox'>
                        <p className='projectDescription'>{project.desc}</p>
                        <p className='link'>Link: {project.link}</p>
                        <p className='githubLink'>GitHub: {project.github}</p>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default ProjectView
