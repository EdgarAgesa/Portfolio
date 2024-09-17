import React from 'react';
import '../css/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faPaintBrush, faServer, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className="skills-grid">
                <div className="skill-card">
                    <FontAwesomeIcon icon={faCode} className="skill-icon" />
                    <h2>Programming Languages</h2>
                    <p>Proficient in Python, JavaScript, HTML, and CSS. Experienced in writing clean, efficient, and maintainable code.</p>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                    <h2>Databases</h2>
                    <p>Experienced in working with SQL databases like MySQL and PostgreSQL. Skilled in designing, querying, and managing databases.</p>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faPaintBrush} className="skill-icon" />
                    <h2>Frontend Development</h2>
                    <p>Skilled in using React for building interactive and responsive web applications. Knowledgeable in modern frontend technologies and frameworks.</p>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faServer} className="skill-icon" />
                    <h2>Backend Development</h2>
                    <p>Experienced in building robust backends with Flask and Node.js. Proficient in creating RESTful APIs and handling server-side logic.</p>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faGithub} className="skill-icon" />
                    <h2>Version Control</h2>
                    <p>Proficient in using Git and GitHub for version control. Skilled in managing repositories, branching, and collaboration on projects.</p>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faLightbulb} className="skill-icon" />
                    <h2>Problem Solving</h2>
                    <p>Strong problem-solving skills with a track record of identifying issues and implementing effective solutions quickly and efficiently.</p>
                </div>
                <div className="skill-card">
                    <FontAwesomeIcon icon={faUsers} className="skill-icon" />
                    <h2>Team Player</h2>
                    <p>Excellent team player with experience collaborating on projects and communicating effectively to achieve common goals.</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
