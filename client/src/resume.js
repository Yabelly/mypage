import { projects, experience, skills, languages } from "./cv-data";
export default function Resume() {
    return (
        <>
            <secion id="projects">
                {projects.map((rows, idx) => (
                    <div className={rows.project} key={idx}>
                        <h3>{rows.project.name}</h3>
                        <h4>{rows.project.tech}</h4>
                        <a href={rows.project.github}>github</a>
                    </div>
                ))}
            </secion>
            <br></br>
            <secion id="experience">
                {experience.map((rows, idx) => (
                    <div className={rows.time} key={idx}>
                        <h3>{rows.job}</h3>
                        <h4>time: {rows.time}</h4>
                        <h4>description: {rows.description}</h4>
                    </div>
                ))}
            </secion>
            <br></br>
            <secion id="skillset">
                {skills.map((rows, idx) => (
                    <div key={idx}>
                        <h3>languages: {rows.programming}</h3>
                        <h4>frameworks: {rows.frameworks}</h4>
                        <h4>databases: {rows.databases}</h4>
                        <h4>tools: {rows.tools}</h4>
                    </div>
                ))}
            </secion>
            <br></br>
            <secion id="languages">
                {languages.map((rows, idx) => (
                    <div key={idx}>
                        <h3>{rows.language}</h3>
                        <h4>{rows.level}</h4>
                    </div>
                ))}
            </secion>
        </>
    );
}
