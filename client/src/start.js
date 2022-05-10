import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./app";
ReactDOM.render(<Start />, document.querySelector("main"));

function Start() {
    return (
        <>
            <BrowserRouter>
                <Route>
                    <App> </App>
                </Route>
            </BrowserRouter>
        </>
    );
}
