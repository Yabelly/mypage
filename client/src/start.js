import ReactDOM from "react-dom";
import app from "./app.js";

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

function HelloWorld() {
    return <div>Hello, start page</div>;
    
}
