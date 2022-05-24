import { Link } from "react-router-dom";
import { projects, experience, skills, languages } from "./cv-data";
export default function Resume() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <secion id="projects">
                {projects.map((rows, idx) => (
                    <div className={rows.project} key={idx}>
                        <h3>{rows.project.name}</h3>
                        <h4>{rows.project.tech}</h4>
                        <h4>{rows.project.github}</h4>
                    </div>
                ))}
            </secion>
            <secion id="experience">
                {experience.map((rows, idx) => (
                    <div className={rows.time} key={idx}>
                        <h3>{rows.job}</h3>
                        <h4>{rows.time}</h4>
                        <h4>{rows.description}</h4>
                    </div>
                ))}
            </secion>
            <secion id="skillset">
                {skills.map((rows, idx) => (
                    <div key={idx}>
                        <h3>{rows.programming}</h3>
                        <h4>{rows.frameworks}</h4>
                        <h4>{rows.databases}</h4>
                        <h4>{rows.tools}</h4>
                    </div>
                ))}
            </secion>
            <secion id="languages">
                {languages.map((rows, idx) => (
                    <div key={idx}>
                        <h4>{rows.language}</h4>
                        <h3>{rows.level}</h3>
                        <br></br>
                    </div>
                ))}
            </secion>
        </>
    );
}
