import { projects, experience, skills, languages } from "./cv-data";
export default function Resume() {
    return (
        <>
            <div className="resume-item" id="projects">
                {projects.map((rows, idx) => (
                    <div className={rows} key={idx}>
                        <h3>{rows.name}</h3>
                        <h4>{rows.tech}</h4>
                        <a href={rows.github}>github</a>
                    </div>
                ))}
            </div>
            <br></br>
            <div className="resume-item" id="experience">
                {experience.map((rows, idx) => (
                    <div className={rows.time} key={idx}>
                        <h3>{rows.job}</h3>
                        <h4>time: {rows.time}</h4>
                        <h4>description: {rows.description}</h4>
                    </div>
                ))}
            </div>
            <br></br>
            <div className="resume-item" id="skillset">
                {skills.map((rows, idx) => (
                    <div key={idx}>
                        <h3>languages: {rows.programming}</h3>
                        <h4>frameworks: {rows.frameworks}</h4>
                        <h4>databases: {rows.databases}</h4>
                        <h4>tools: {rows.tools}</h4>
                    </div>
                ))}
            </div>
            <br></br>
            <div className="resume-item" id="languages">
                {languages.map((rows, idx) => (
                    <div key={idx}>
                        <h3>{rows.language}</h3>
                        <h4>{rows.level}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}
