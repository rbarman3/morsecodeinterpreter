import React, { useState } from "react";
import useClickHandler from "../hooks/useClickerHandler";
import "./inputHandler.css";

const InputHandler: React.FC = () => {
    const [startTime, setStartTime] = useState<number>(0);
    const [timeDiff, setTimeDiff] = useState<number>(0);
    const { handleClick, message } = useClickHandler();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === " ") {
            setStartTime(performance.now());
        }
        if (event.key === "Backspace") {
            handleClick(0, "Backspace")
        }
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (startTime !== null && event.key === " ") {
            const endTime = performance.now();
            const updatedTimeDifference = endTime - startTime;
            setTimeDiff(endTime - startTime);
            handleClick(updatedTimeDifference, " ")
        }
        if (event.key === "Enter") {
            handleClick(0, event.key)
        }
    };

    return (
        <div className="input-handler-container">
            <input
                className="styled-input"
                type="text"
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                value={message}
                placeholder="Click Here!"
            />
            <div className="message-output">
                <h3>Decoded Message:</h3>
                <p>{convertString(message)}</p>
            </div>
        </div>
    );
};

function convertString(message: string) {
    const mappings = {
        'A': "._", 'B': "_...", 'C': "_._.", 'D': "_..",
        'E': ".", 'F': ".._.", 'G': "__.", 'H': "....",
        'I': "..", 'J': ".___", 'K': "_._.", 'L': "._..",
        'M': "__", 'N': "_.", 'O': "___", 'P': ".__.",
        'Q': "__._", 'R': "._.", 'S': "...", 'T': "_",
        'U': ".._", 'V': "..._", 'W': ".__", 'X': "_.._",
        'Y': "_.__", 'Z': "__.."
    }
    const flippedMappings = Object.fromEntries(
        Object.entries(mappings).map(([key, value]) => [value, key])
    );
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let morseWord = '';
        while (message[i] !== ' ' && i < message.length) {
            morseWord += message[i]
            i += 1
            console.log(morseWord)
        }
        if (flippedMappings.hasOwnProperty(morseWord)) {
            result += flippedMappings[morseWord]
        }
    }
    return result
}




export default InputHandler;
