import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Resume from "./resume";
import Blog from "./blog";
import Contact from "./contact";

export default function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Route>
                        <Header></Header>
                    </Route>
                    <div id="content">
                        <div id="sidebar-left"></div>
                        <section id="middle">
                            <Route path="/about">
                                <About></About>
                            </Route>
                            <Route path="/resume">
                                <Resume></Resume>
                            </Route>
                            <Route path="/blog">
                                <Blog></Blog>
                            </Route>
                            <Route path="/contact">
                                <Contact></Contact>
                            </Route>
                        </section>

                        <div id="sidebar-right"></div>
                    </div>
                </BrowserRouter>

                <footer>Concept Setting</footer>
            </div>
        </>
    );
}
