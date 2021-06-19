import React from 'react'


class ProjectView extends React.Component{

    state = {
        projects: [
            {
                title: 'Calculator',
                deployedURL: 'https://bayarens.github.io/Calculator/',
                desc: 'This is the first real project I worked on, it is a basic calculator I made from scratch using JavaScript and styled with HTML and CSS.',
                expanded: false
            },
            {
                title: 'DemonSlayer',
                deployedURL: 'https://bayarens.github.io/DemonSlayer-Game/',
                desc: 'this is a game I made in the canvas API in the JavaScript library',
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
                </div>)}
            </div>
        )
    }
}

export default ProjectView
