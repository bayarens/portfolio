import React from 'react'


class ProjectView extends React.Component{

    state = {
        projects: [
            {
                title: 'Music Playlist App', 
                deployedURL: 'https://master.d37fvqqdh284tz.amplifyapp.com/',
                desc: 'This is a full CRUD application I created that allows the user to create, update, and delete items from a playlist. It was made using React, JSX, PSQL and is fully deployed on an Amazon EC2 instance.',
                link: 'https://master.d37fvqqdh284tz.amplifyapp.com/',
                expanded: false
            },
            {
                title: 'Netflix Replica App',
                deployedURL: 'placeholder',
                desc: 'This is a Netflix replica React App that I created using an API.',
                expanded: false
            },
            {
                title: 'DemonSlayer',
                deployedURL: 'https://bayarens.github.io/DemonSlayer-Game/',
                desc: 'This is a game I made in the canvas API in the JavaScript library, and was styled with HTML & CSS. It is deployed via GitHub',
                link: 'https://bayarens.github.io/DemonSlayer-Game/',
                expanded: false
            },
            {
                title: 'Calculator',
                deployedURL: 'https://bayarens.github.io/Calculator/',
                desc: 'This is the first real project I worked on, it is a basic calculator I made from scratch using JavaScript and styled with HTML and CSS.',
                link: 'https://bayarens.github.io/Calculator/',
                expanded: false
            }
        ],
        
    }

    toggleExpanded = (project) => {
        let projects = [...this.state.projects];
        let index = projects.findIndex(element => element == project)
        projects[index].expanded = !projects[index].expanded;
        this.setState({projects})
    }

    render(){
        return(
            <div>
                {this.state.projects.map(project => <div key={project.title}>
                   <h3 className='projectTitle'>{project.title}</h3> 
                   <iframe className={project.expanded ? 'largeview' : 'minview'} src={project.deployedURL}></iframe>
                   <button onClick={() => this.toggleExpanded(project)}>Expand</button>
                   <p className='projectDescription'>{project.desc}</p>
                   <p className='link'>Link: {project.link}</p>
                </div>)}
            </div>
        )
    }
}

export default ProjectView
