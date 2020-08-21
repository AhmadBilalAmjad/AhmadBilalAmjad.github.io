import React from 'react';
import { Card, Layout, Tag, Typography, Button } from 'antd';

import Header from './partials/Header';
import '../styles/home.css';

const Projects = () => {
    const { Meta } = Card;
    const { Title } = Typography;

    const projects = [
        {
            image: 'https://i.ibb.co/LRGQ3Hy/Event-Ray-Online-registration-and-real-time-reporting.png',
            name: 'Eventray',
            types: ['javscript', 'react'],
            technologies: ['HTML 5', 'CSS 3', 'React JS', 'Redux', 'Redux-Thunk', 'Bootstrap'],
            link: 'https://eventray.com/',
            isUp: true
        },
        {
            image: 'https://i.ibb.co/jyXffrD/fish-store.png',
            name: 'Fish Selling Store',
            types: ['javscript', 'react'],
            technologies: ['HTML 5', 'CSS 3', 'Firebase', 'React JS'],
            link: 'https://github.com/AhmadBilalAmjad/Fishes-Store/',
            isGithubRepo: true
        },
        {
            image: 'https://i.ibb.co/qBFxhz6/converter.png',
            name: 'Online Calculators',
            types: ['javscript', 'php'],
            technologies: ['PHP', 'Laravel', 'MySql', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 4*', 'JQuery'],
            link: 'https://www.onlineconverter4u.com/',
            isUp: true
        },
        {
            image: 'https://i.ibb.co/qrfYHpy/Find-Github-Users.png',
            name: 'Github User Finder',
            types: ['javscript'],
            technologies: ['javscript', 'HTML5', 'CSS3' ,'Bootstrap 4*'],
            link: 'https://githubfinder-app.netlify.app/',
            isUp: true
        }
    ]

    return (
        <Layout>
            <Header />
            <Layout className='projects-wrapper'>
            {projects.map(project => (
                <Card
                    key={project.name}
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt={project.name} src={project.image} />}
                >
                    <Meta title={project.name} description="www.instagram.com" />
                    <div style={{ marginTop: 10 }}>
                        <Title level={4}>Technologies Used</Title>    
                        {project.technologies.map(tech => (
                            <Tag key={tech} color="purple" style={{ margin: 5 }}>{tech}</Tag>
                        ))}
                    </div>
                    <div className='project-link-wrapper'> 
                        <Button block>
                            <a href={project.link} alt={project.name} target="_blank" rel="noopener noreferrer">
                                View {project.isUp ? 'Live' : 'On Github'}
                            </a>
                        </Button>
                    </div>
                </Card>
            ))}
            </Layout>
        </Layout>
    );
}

export default Projects;
