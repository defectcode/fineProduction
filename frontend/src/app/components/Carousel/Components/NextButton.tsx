
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const NextButton = ({ onClick }) => {
    return (
        <button
            className="absolute right-0 p-2 bg-gray-800 text-white rounded-full m-10 z-10"
            onClick={onClick}
        >
            <FaArrowRight />

        </button>
    );
};

export default NextButton;


