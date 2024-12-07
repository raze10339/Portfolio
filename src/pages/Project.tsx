
import { Link } from "react-router-dom";
import workItems from "../data";


function Project() {
    return (
        <main>
            <h4 className="text-center">Portfolio</h4>

            <section id="project" className="project-output">
                {workItems.map((workObj) => (
                   
                    <article style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${workObj.backgroundImage})` }}>
                        <h5>{workObj.title}</h5>
                        <p>{workObj.description}</p>
                        {workObj.repoURL && <Link to={workObj.repoURL}> View Code</Link>}
                        {workObj.repoURL && workObj.demoURL && <span> | </span>}
                        {workObj.demoURL && <Link to={workObj.demoURL}>View Demo</Link>}
                    </article>
                 
                  
                ))}


            </section>

        </main>
    );
}

export default Project;