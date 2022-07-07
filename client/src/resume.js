import { projects, experience, skills, languages } from "./cv-data";
export default function Resume() {
    return (
        <>
            <details
                className="resume-item container bg-gray-200 rounded-xl shadow border p-8 m-10bg-gray-300 open:bg-amber-200 duration-300"
                id="projects"
            >
                <summary className="text-3xl bg-inherit px-5 py-3 text-3xl cursor-pointer">
                    recent projects
                </summary>
                <br></br>
                {projects.map((rows, idx) => (
                    <div className={rows} key={idx}>
                        <h3 className="text-xl">{rows.name}</h3>
                        <h4>{rows.tech}</h4>
                        <a href={rows.github}>github</a>
                        <br></br>
                    </div>
                ))}
            </details>
            <br></br>
            <details
                className="resume-item container bg-gray-200 rounded-xl shadow border p-8 m-10bg-gray-300 open:bg-amber-200 duration-300"
                id="experience"
            >
                <summary className=" bg-inherit px-5 py-3 text-3xl cursor-pointer">
                    experience
                </summary>
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
            </details>

            <details
                className="resume-item container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
                id="skillset"
            >
                <summary className="bg-inherit px-5 py-3 text-3xl cursor-pointer">
                    skills
                </summary>
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
            </details>

            <details
                className="resume-item container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
                id="languages"
            >
                <summary className="bg-inherit px-5 py-3 text-3xl cursor-pointer">
                    languages
                </summary>
                <br></br>
                {languages.map((rows, idx) => (
                    <div key={idx}>
                        <div className="text-xl">{rows.language}: </div>
                        <div>{rows.level}</div>
                        <br></br>
                    </div>
                ))}
            </details>
        </>
    );
}
