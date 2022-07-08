import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Resume from "./resume";
import Blog from "./blog";
import Contact from "./contact";

export default function App() {
    return (
        <>
            <div className="App container mx-auto px-4">
                <BrowserRouter>
                    <Route>
                        <Header></Header>
                    </Route>
                    <div
                        id="content"
                        className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow  h-screen"
                    >
                        <section
                            id="middle"
                            className="w-full flex-grow pt-1 px-3 max-w-4xl my-0 mx-auto flex-col"
                        >
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
                    </div>
                </BrowserRouter>

                <footer className="fixed bottom-0">Concept Setting</footer>
            </div>
        </>
    );
}
