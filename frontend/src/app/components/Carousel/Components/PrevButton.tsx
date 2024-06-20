// PrevButton.js

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const PrevButton = ({ onClick }) => {
    return (
        <button
            className="absolute left-0 p-2 bg-gray-800 text-white rounded-full m-10 z-10"
            onClick={onClick}
        >
            <FaArrowLeft />
        </button>
    );
};

export default PrevButton;
