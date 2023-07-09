import React, { useState } from "react";

const Instruction = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="flex flex-column justify-center items-center mt4">
            <button onClick={toggleVisibility} className="outline-0 bn h2 w5 bg-light-red fw5 white-90 br4" >{isVisible ? "Hide" : "Show"} Instructions</button>
            {isVisible && (
                <ul className="bg-washed-red pt2 pl4 pb2">
                    <li>You can enjoy these cool images to appreciate the developer's work.</li>
                    <li>These are randomly generated images and are not intended to offend or hurt anyone's feelings.</li>
                    <li>The provided email ID is completely fictitious.</li>
                </ul>
            )}
        </div>
    );
};

export default Instruction;
