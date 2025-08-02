
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../app/globals.css";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";

function Nav() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const tabs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Skills", href: "/Skills" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header className="w-full bg-black text-white px-6 py-3 flex justify-between items-center shadow-md z-50 relative">
      {/* Logo */}
      <h2 className="gre-Text text-2xl font-black font-serif italic">Portfolio</h2>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 font-serif">
        {tabs.map(({ name, href }) => {
          const isActive = pathName === href;
          return (
            <Link
              key={href}
              href={href}
              className={`hov-Text ${isActive ? "active" : ""}`}
            >
              {name}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu with navRef */}
      <div className="md:hidden z-50 relative" ref={navRef}>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <MdMenu className="text-white text-3xl cursor-pointer" />
        </div>

        {menuOpen && (
          <ul className="absolute top-full right-0 mt-2 bg-gray-800 text-white rounded-lg p-4 w-40 flex flex-col gap-4 font-serif">
            {tabs.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={`hov-Text ${pathName === href ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Nav;
