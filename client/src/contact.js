import { useState } from "react";
const secrets = require("/secrets.json");

export default function Contact() {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [err, setErr] = useState(false);
    const [send, setSend] = useState(false);
    var Recaptcha = require("react-recaptcha");

    function emailInput({ target }) {
        setEmail(target.value);
        console.log("email: ", email);
    }

    function messageInput({ target }) {
        setMessage(target.value);
        console.log("message: ", message);
    }

    function sendMessage(e) {
        e.preventDefault();

        fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, message }),
        })
            .then((resp) => resp.json())
            .then((succesStatus) => {
                console.log("succesStatus: ", succesStatus);
                if (succesStatus === false) {
                    setErr(true);
                } else {
                    setSend(true);
                    setErr(false);
                }
            });
    }
    var verifyCallback = function (response) {
        console.log(response);
    };

    var callback = function () {
        console.log("all good");
    };
    return (
        <>
            <section>
                <div>Send message to me</div>
                <br></br>
                <div>enter your email so I write you back</div>
                {err && (
                    <h2 style={{ color: "red" }}>
                        Something went wrong, try again
                    </h2>
                )}
                {send && (
                    <h2 style={{ color: "black" }}>
                        your message has been send! I will get back to you
                        shortly
                    </h2>
                )}
                <input
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    onChange={(e) => emailInput(e)}
                    className="border-2 w-80"
                ></input>
                <br></br>
                <input
                    id="message-field"
                    name="message"
                    type="text"
                    placeholder="Add your question here, keep it short ;)"
                    onChange={(e) => messageInput(e)}
                    className="border-2 w-80 h-60"
                ></input>
                <br></br>
                <button onClick={(e) => sendMessage(e)}>send message</button>
                <Recaptcha
                    sitekey={secrets.private_key_id}
                    render="explicit"
                    verifyCallback={verifyCallback}
                    onloadCallback={callback}
                />
            </section>
        </>
    );
}
