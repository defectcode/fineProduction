
import React from 'react';

const NextButton = ({ onClick }) => {
    return (
        <button
            className="absolute right-0 p-2 bg-gray-800 text-white rounded-full m-10 z-10"
            onClick={onClick}
        >
            Next
        </button>
    );
};

export default NextButton;


