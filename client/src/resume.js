import { Link } from "react-router-dom";
export default function Resume() {
    return (
        <>
            <h1>resume</h1>
            <section className="projects">
                <ul>
                    <li>
                        <Link to="https://github.com/Yabelly/socialnetwork">
                            github
                        </Link>
                        <h4>Social Nework Project</h4>
                        <p>
                            React/Redux, Node.js / Express, AWS, PostgreSQL,
                            Sockets.IO
                        </p>
                    </li>
                    <li>
                        <h5>estimated finishing date: 21 May 2022</h5>
                        <Link to="https://github.com/Yabelly/socialnetwork">
                            github
                        </Link>
                        <h4>Penta-Game</h4>
                        <p>
                            React/Redux, Node.js / Express, AWS, PostgreSQL,
                            Sockets.IO
                        </p>
                    </li>
                    <li></li>
                </ul>
            </section>
            <section className="work-experience">
                <ul>
                    <li></li>
                </ul>
            </section>
            <section className="projects">
                <p>some shit</p>
            </section>
        </>
    );
}
