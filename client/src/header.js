import { Link } from "react-router-dom";
import Logo from "./logo";

export default function Header() {
    return (
        <>
            <div className="Header">
                <Logo></Logo>
                <div className="links bg-teal-600 content-evenly w-full">
                    <Link
                        className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text- mr-4"
                        to="/about"
                    >
                        ABOUT
                    </Link>
                    <Link
                        className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        to="/resume"
                    >
                        RESUME
                    </Link>
                    <Link
                        className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        to="blog"
                    >
                        BLOG
                    </Link>
                    <Link
                        className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        to="contact"
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </>
    );
}
