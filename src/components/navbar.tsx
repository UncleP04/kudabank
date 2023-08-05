"use client";
import Link from "next/link";
import React, { useState } from "react";
import '../styles/menu.css'
import Image from "next/image";
import Logo from '../../public/Images/Logo.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex md:flex-row flex-col w-[100%] bg-transparent justify-between align-middle py-[2%] px-[4%] relative shadow-sm">
        <Link href='/'>
            <Image 
                src={Logo}
                alt="logo.png"
                width={700}
                height={300}
                className="w-[100px]"
            />
        </Link>
        <button
        type="button"
        onClick={toggleMenu}
        className="flex-col justify-between align-middle w-20 z-50 fixed top-[20px] right-[15px] block md:hidden"
      >
        {isOpen ? (
          // "X" icon
          <>
            <div className="w-8 h-[5px] bg-white self-end m-1 border border-black transform rotate-45 translate-x-1 absolute"></div>
            <div className="w-8 h-[5px] bg-white self-end m-1 border border-black transform -rotate-45 translate-x-1 absolute"></div>
          </>
        ) : (
          // Burger icon
          <>
            <div className="w-7 h-[5px] hover:mb-2 bg-white self-end m-1 border border-black"></div>
            <div className="w-4 h-[5px] bg-white self-end m-1 border border-black"></div>
            <div className="w-7 h-[5px] hover:mt-2 bg-white self-end m-1 border border-black"></div>
          </>
        )}
      </button>
        <div className={`${isOpen ? "h-screen md:h-auto flex flex-col justify-evenly items-center top-[-6px] md:top-0 duration-100" : "top[-100%] md:top-0 h-0 hidden md:flex duration-100"} navbar left-0 fixed md:relative md:top-[25px] w-[100%] flex md:flex-row flex-col justify-between items-center gap-x-8 md:w-[70%] md:bg-transparent bg-primary z-40 duration-100 transition-all`}>
            <ul className="flex md:flex-row flex-col justify-center items-center gap-x-10">
                <li className={`${isOpen ? "text-white my-8" : "text-primary"}`}><Link href='' className="text-white md:text-primary font-semibold">Features</Link></li>
                <li className={`${isOpen ? "text-white my-8" : "text-primary"}`}><Link href='' className="text-white md:text-primary font-semibold">Business</Link></li>
                <li className={`${isOpen ? "text-white my-8" : "text-primary"}`}><Link href='' className="text-white md:text-primary font-semibold">Company</Link></li>
                <li className={`${isOpen ? "text-white my-8" : "text-primary"}`}><Link href='' className="text-white md:text-primary font-semibold">Help</Link></li>
            </ul>
            <div>
                <button className={`${isOpen ? "border-2 border-white" : " border-none"} text-white py-2 px-4 rounded-md bg-primary font-semibold`}>Join Kuda</button>
            </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
