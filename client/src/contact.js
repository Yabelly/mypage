import { useState } from "react";
export default function Contact() {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

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
            });
    }

    return (
        <>
            <section>
                <div>Send message to me</div>
                <br></br>
                <div>enter your email so I write you back</div>
                <input
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    onChange={(e) => emailInput(e)}
                ></input>
                <br></br>
                <input
                    name="message"
                    type="text"
                    placeholder="Add your question here"
                    onChange={(e) => messageInput(e)}
                ></input>
                <button onClick={(e) => sendMessage(e)}>send message</button>
            </section>
        </>
    );
}
