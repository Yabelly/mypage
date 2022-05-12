import { Link } from "react-router-dom";
import Logo from "./logo";

export default function Header() {
    return (
        <>
            <div className="Header">
                <Logo></Logo>
                <div className="links">
                    <Link to="/about">ABOUT</Link>
                    <Link to="/resume">RESUME</Link>
                    <Link to="blog">BLOG</Link>
                </div>
            </div>
        </>
    );
}
