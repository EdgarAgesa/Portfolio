import '../css/projects.css';

function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project-card">
                <h2>Hostel Booking System</h2>
                <p>
                    Developed a full-stack web application integrating React on the frontend and Flask on the backend. 
                    This system includes secure payment processing via MPESA and robust user authentication mechanisms. 
                    It allows users to book and manage hostel reservations seamlessly.
                </p>
                <a href="https://moringahostels.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
                <h2>A space Blog news site</h2>
                <p>
                    Created a full-stack blog application which enable a user to post a blog on space matters.
                    It allows users to read, create, update, and delete blog posts.

                </p>
                <a href="https://tecspaceflightblog.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
                <h2>Cocktail Explorer</h2>
                <p>
                    Created a JavaScript-based application that allows users to search for cocktails. 
                    This project demonstrates the use of APIs and dynamic data fetching to provide users with a variety 
                    of cocktail recipes and details.
                </p>
                <a href="https://cocktailmaker-app.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
                <h2>Business Promotion Website</h2>
                <p>
                    Designed and developed a professional website to enhance the online presence of a local business. 
                    The site features a modern design, engaging content, and clear calls-to-action, helping the business 
                    attract more customers and effectively showcase its products and services. The website is optimized 
                    for both desktop and mobile users, ensuring a seamless experience across all devices.
                </p>
                <a href="alineed-solution.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default Projects;
