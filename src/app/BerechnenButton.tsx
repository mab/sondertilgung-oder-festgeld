"use client"
import {useState} from "react";
import Ergebnis from "@/app/Ergebnis";

export default function BerechnenButton() {
    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setMessage("Das Ergebnis");
        setClicked(true);
    }

    return (
        <div>
            <button className="btn btn-blue m-3" onClick={handleClick}>
                Berechnen
            </button>
            {clicked && <Ergebnis message={message}/>}
        </div>
    )
}
