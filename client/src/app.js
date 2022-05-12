import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Resume from "./resume";
import Blog from "./blog";

export default function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Route>
                        <Header>Header test</Header>
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
                </BrowserRouter>

                <footer>Le Footer incoming</footer>
            </div>
        </>
    );
}
