import { projects, experience, skills, languages } from "./cv-data";
export default function Resume() {
    return (
        <>
            <div
                className=" resume-item container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
                id="projects"
            >
                <div className="text-3xl"> recent projects</div>
                <br></br>
                {projects.map((rows, idx) => (
                    <div className={rows} key={idx}>
                        <h3 className="text-xl">{rows.name}</h3>
                        <h4>{rows.tech}</h4>
                        <a href={rows.github}>github</a>
                        <br></br>
                    </div>
                ))}
            </div>
            <br></br>
            <div
                className="resume-item container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
                id="experience"
            >
                <div className="text-3xl">experience</div>
                <br></br>
                {experience.map((rows, idx) => (
                    <div className={rows.time} key={idx}>
                        <h3 className="text-2xl">{rows.job}</h3>
                        <h4 className="text-xl">time: </h4>
                        <div>{rows.time}</div>
                        <h4 className="text-xl">description: </h4>
                        <div>{rows.description}</div>
                        <br></br>
                    </div>
                ))}
            </div>
            <br></br>
            <div
                className="resume-item container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
                id="skillset"
            >
                <div className="text-3xl">skills</div>
                <br></br>
                {skills.map((rows, idx) => (
                    <div key={idx}>
                        <h3 className="text-2xl">languages:</h3>
                        <div>{rows.programming}</div>
                        <br></br>
                        <h3 className="text-2xl">frameworks:</h3>
                        <h4>{rows.frameworks}</h4>
                        <br></br>
                        <h3 className="text-2xl">databases:</h3>
                        <h4>{rows.databases}</h4>
                        <br></br>
                        <h3 className="text-2xl">tools:</h3>
                        <h4>{rows.tools}</h4>
                    </div>
                ))}
            </div>
            <br></br>
            <div
                className="resume-item container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
                id="languages"
            >
                <div className="text-3xl">languages</div>
                <br></br>
                {languages.map((rows, idx) => (
                    <div key={idx}>
                        <div className="text-xl">{rows.language}: </div>
                        <div>{rows.level}</div>
                        <br></br>
                    </div>
                ))}
            </div>
        </>
    );
}
