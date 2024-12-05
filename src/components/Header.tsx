import React from "react";
import MorseIcon from "../assets/morse-icon.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img
                    src={MorseIcon}
                    alt="Morse Code Icon"
                    style={{ height: "50px" }}
                />
            </div>
            <h1>Morse Code Interpreter</h1>
            <p>Try and click out a message!</p>
        </header>
    );
}

export default Header;
