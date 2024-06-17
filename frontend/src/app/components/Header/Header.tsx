import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Navbar from './components/Navbar';

export default function Header() {
    return (
        <div className="bg-cover bg-center bg-no-repeat h-screen" style={{backgroundImage: `url('/imgs/background.png')`}}>
            <div className="max-w-screen mx-auto h-full flex flex-col justify-start text-white">
                <Navbar/>
                <div className='flex mt-28 ml-28 text-7xl font-bold'>
                    <h1>CITY OF LOVE</h1>
                </div>
            </div>
        </div>
    );
}
