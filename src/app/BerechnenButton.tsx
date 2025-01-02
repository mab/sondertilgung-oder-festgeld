"use client"
import {useState} from "react";

export default function BerechnenButton() {
    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setMessage("Das Ergebnis");
        setClicked(true);
    }

    return (
        <div>
            <button className="btn btn-blue m-3 " onClick={handleClick}>
                Berechnen
            </button>
            {clicked && <h2>{message}</h2>}
        </div>
    )
}
