import { useState } from "react";
import Recaptcha from "react-recaptcha";

export default function Contact() {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [err, setErr] = useState(false);
    const [send, setSend] = useState(false);
    const [verified, setVerified] = useState(false);

    //secret from Heroku config vars below
    let sessionSecret;

    if (process.env.NODE_ENV == "production") {
        sessionSecret = process.env.SESSION_SECRET;
    } else {
        //test key for production, doesn't work when live
        sessionSecret = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    }

    //secret from Heroku config vars above

    //choosing site key for Recaptcha production and development

    function emailInput({ target }) {
        setEmail(target.value);
    }

    function messageInput({ target }) {
        setMessage(target.value);
    }

    function sendMessage(e) {
        e.preventDefault();

        if (verified === true) {
            alert(
                "Message send, I will be in contact with you as soon as I can"
            );
        } else {
            alert(
                "Your message has not been send, you have not clicked the verification button "
            );
        }

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

    function recaptchaLoaded() {
        console.log("reCaptcha is loaded");
    }

    function verifyCallback(response) {
        if (response) {
            setVerified(true);
        } else setErr(true);
    }
    return (
        <>
            <section>
                <div>Send message to me</div>
                <br></br>
                <div>enter your email so I can write you back</div>
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

                <Recaptcha
                    sitekey={sessionSecret}
                    render="explicit"
                    verifyCallback={verifyCallback}
                    onloadCallback={recaptchaLoaded}
                />
                <button
                    className="bg-slate-400"
                    onClick={(e) => sendMessage(e)}
                >
                    send message
                </button>
            </section>
        </>
    );
}
