import { useState } from "react";

interface UseClickHandlerReturn {
    message: string;
    handleClick: (timeDiff: number, key: string) => void;
}

const useClickHandler = (): UseClickHandlerReturn => {
    const [message, setMessage] = useState<string>("");

    const handleClick = async (timeDiff: number, key: string): Promise<void> => {
        try {
            if (key === "Backspace") {
                setMessage((prev) => prev.substring(0, prev.length - 1));
            } else {
                const response = await simulateMorseCodeInput(timeDiff, key);
                setMessage((prev) => prev + response);
            }
        } catch (error) {
            console.error("Error handling click:", error);
        }
    };

    const simulateMorseCodeInput = (timeDiff: number, key: string): Promise<string> =>
        new Promise((resolve) => {
            setTimeout(() => {
                if (timeDiff > 0 && timeDiff < 150) {
                    resolve(".");
                } else if (timeDiff > 150 && timeDiff < 400) {
                    resolve("_");
                } else if (key === "Enter") {
                    resolve(" ");
                }
            }, 300);
        });

    return { handleClick, message };
};

export default useClickHandler;
