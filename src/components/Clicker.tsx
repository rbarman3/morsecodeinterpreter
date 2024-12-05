import React from "react";
import "./Clicker.css";
import morseCodeSheet from "../assets/morse-code-sheet.svg"
import InputHandler from "./inputHandler";

const Clicker: React.FC = () => {

    return (
        <div className="clicker-container">
            <div className="clicker-box">
                <h2>Clicker</h2>
                <p>There are three types of inputs that can be sent</p>
                <p>One is a dot (dah), the second is a dash, and the third is a space</p>
                <p>For a dot - tap the spacebar, for a dash - tap and hold the spacebar for a tiny bit, and for a space hit Enter</p>
                <InputHandler/>

            </div>
            <div className="clicker-box">
                <img
                    src={morseCodeSheet}
                    alt="Morse Code Icon"
                    className="morseCodeReference"
                />
            </div>

        </div>
    );
};

export default Clicker;
