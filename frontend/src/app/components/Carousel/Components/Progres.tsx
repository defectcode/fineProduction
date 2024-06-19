import React from 'react';
import Button from './Button';

const FundraisingProgress = ({ raisedAmount, goalAmount }) => {
    // Calculează progresul în procente
    const progressPercent = (raisedAmount / goalAmount) * 100;

    // Calculează poziția din stânga a cercului alb în funcție de progres
    const circleLeftPosition = `${progressPercent}%`;

    return (
        <div className="flex flex-col space-y-3 w-5/6">
            <h1 className="text-[#E50815] text-4xl font-bold">Series Concept</h1>
            <div className="flex justify-between text-xl">
                <p className="text-2xl">Current Fundraising</p>
                <div className="flex gap-2">
                    <p className="text-gray-400">Stage</p>
                    <p>1</p>
                </div>
            </div>
            <div className="relative">
                <div className="h-1.5 bg-[#6F6F6F] rounded-full">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#E50815] via-[#E50815] to-white" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <div className="absolute top-0 -translate-y-1/2 transform" style={{ left: circleLeftPosition }}>
                    <div className="w-3 h-3 rounded-full bg-white border-2 mt-1"></div>
                </div>
            </div>
            <p>${raisedAmount} raised of ${goalAmount} goal 4.7K supporters</p>
            <Button/>
        </div>
    );
};

export default FundraisingProgress;