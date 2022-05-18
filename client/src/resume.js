import { Link } from "react-router-dom";
import
export default function Resume() {
    return (
        <>
            <h1>resume</h1>
            <section className="projects">
                <ul>
                    <li>
                        <h4>Social Nework Project</h4>
                        <Link to="https://github.com/Yabelly/socialnetwork">
                            github
                        </Link>
                        <p>
                            React/Redux, Node.js / Express, AWS, PostgreSQL,
                            Sockets.IO
                        </p>
                    </li>
                    <li>
                        <h5>estimated finishing date: 21 May 2022</h5>

                        <h4>Penta-Game</h4>
                        <Link to="https://github.com/Yabelly/socialnetwork">
                            github
                        </Link>
                        <p>
                            React/Redux, Node.js / Express, AWS, PostgreSQL,
                            Sockets.IO
                        </p>
                    </li>
                </ul>
            </section>
            <section className="work-experience">
                <ul>
                    <li></li>
                </ul>
            </section>
            <section className="skills">
                <ul>
                    <li>
                        <h4>Javascript</h4>
                        <p></p>
                    </li>
                </ul>
            </section>
        </>
    );
}
