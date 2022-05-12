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
                </BrowserRouter>

                <footer>Concept Setting</footer>
            </div>
        </>
    );
}
