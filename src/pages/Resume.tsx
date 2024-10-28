const Resume = () => {
    return (
        <main className= "resume-main">
            <h2>Resume</h2>

            <p>
                Download my:
                <a href="/Resume.pdf" download="Razieh_Zarrabi_Resume.pdf">
                     Resume
                </a>
            </p>
            <section>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </section>

            <section>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL / Sequelize</li>
                </ul>
            </section>

        </main>
    );
}

export default Resume;
