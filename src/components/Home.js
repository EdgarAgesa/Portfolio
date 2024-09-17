import '../css/home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <div className="intro">
                <h1>Hi, I'm Edgar Agesa</h1>
                <p>
                    I am a recent graduate from Moringa School with a strong foundation in full-stack development. 
                    Passionate about software engineering, I have hands-on experience in JavaScript, Python, React, 
                    and Flask. My skills include developing dynamic web applications, implementing secure authentication 
                    systems, and integrating payment gateways. I am eager to contribute to innovative projects and 
                    grow as a developer.
                </p>
                <div className="contact-info">
                    <p>Email: <a href="mailto:asigeedgar@gmail.com">asigeedgar@gmail.com</a></p>
                    <p>Phone: <a href="tel:+254104166093">0104166093</a></p>
                    <p>Location: Nairobi, Kenya</p>
                    <p>GitHub: <a href="https://github.com/EdgarAgesa">GitHub</a></p>
                </div>
                <Link to='projects' className="cta-button">View My Work</Link>
            </div>
            <div className="accomplishments">
                <h2>Accomplishments</h2>
                <ul>
                    <li>Developed a Full-Stack Web Application integrating React and Flask with MPESA payment processing.</li>
                    <li>Implemented JWT-based authentication and role-based access control for secure user management.</li>
                    <li>Achieved high academic performance in software development at Moringa School.</li>
                    <li>Demonstrated quick learning and adaptability by mastering React and Flask for real-world projects.</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
