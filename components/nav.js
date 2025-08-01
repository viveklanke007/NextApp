"use client";
import React from "react";
import Link from "next/link";
import "../app/globals.css";
import { usePathname } from "next/navigation";
import {MdMenu} from 'react-icons/md'

function nav() {
  const pathName = usePathname();
  const tabs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Skills", href: "/Skills" },
   // { name: "Project", href: "/Project" },
    { name: "Contact", href: "/Contact" },
  ];
  return (
    <div className="flex justify-between items-center bg-black h-[3rem] w-[100vw] ">
      <h2 className="gre-Text h-full w-[5em] ml-[1em] text-center font-black text-[2em] font-serif italic">
        Portfolio
      </h2>
      <ol className=" navbr flex gap-[2em] relative right-[3em] font-serif">
        {/* <Link className='hov-Text' href='/'>Home</Link>
            <Link className='hov-Text' href='/About'>About</Link>
            <Link className='hov-Text' href='/Skills'>Skills</Link>
            <Link className='hov-Text' href='/Project'>Project</Link>
            <Link className='hov-Text' href='/Contact'>Contact</Link> */}

        {tabs.map(({ name, href }) => {
          const isActive = pathName === href;
          return (
            <Link
              key={href}
              href={href}
              prefetch={true}
              className={`hov-Text ${isActive ? "active" : ""}`}
            >
              {name}
            </Link>
          );
        })}
        
      </ol>
      <MdMenu className="menu-icn" />
    </div>
  );
}

export default nav;
