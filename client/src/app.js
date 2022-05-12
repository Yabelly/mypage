import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";

export default function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Route>
                        <Header></Header>
                    </Route>
                </BrowserRouter>
                <h1>this is the mainpage</h1>
                <h3>
                    header component need following link:
                    <ul>
                        <li>main page</li>
                        <li>about me</li>
                        <li>resume route setting</li>
                        <li>blog post</li>
                        <li>resume programming</li>
                    </ul>
                </h3>

                <footer>Le Footer incoming</footer>
            </div>
        </>
    );
}
