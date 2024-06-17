import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from "react-icons/fa";


export default function Navbar () {
   return (
        <nav className="bg-gray-900 bg-opacity-40">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
                <div>
                    <Image src="/imgs/logo.png" alt='logo' className='w-24 h-auto' width={96} height={1}/>
                </div>
                <ul className="flex gap-10 text-lg text-gray-400">
                    <li><Link legacyBehavior href="/interactive"><a className="hover:text-gray-300">Interactive</a></Link></li>
                    <li><Link legacyBehavior href="/about"><a className="hover:text-gray-300">About</a></Link></li>
                    <li><Link legacyBehavior href="/crowdfunding"><a className="hover:text-gray-300">Crowdfunding</a></Link></li>
                    <li><Link legacyBehavior href="/contact"><a className="hover:text-gray-300">Contact Us</a></Link></li>
                </ul>
                <div className='flex gap-5'>
                    <Link href="/"><FaUser className='flex w-8'/></Link>
                </div>
            </div>
        </nav>
   )
}