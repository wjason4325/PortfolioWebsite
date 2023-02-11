
import {useState } from 'react';

import { linkedin, logo } from '../assets';

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-white">Jason Wu</span>{" "}
          </h1>
        </div>
      <ul className ="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key = {nav.id}
            className ={`font-poppins font-normal cursor-pointer text-[20px] text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jason-wu-125a77262/"
              >
                <img src={linkedin} alt="linkedin" className="px-8 py-4"/>
              </a>
            </li>
      </ul>

    </nav>
  )
}

export default Navbar