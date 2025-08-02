
"use client";
import "../app/globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 md:py-24 gap-10">
      
      {/* Left Section: Text */}
      <div className="flex flex-col justify-center w-full md:w-1/2 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
          Hi, I'm <span className="gre-Text">Vivek</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mt-2 font-sans">Full-Stack Developer</h3>
        <p className="text-base md:text-lg mt-4 text-gray-600 dark:text-gray-300">
          I build exceptional digital experiences that are fast, accessible, and
          visually appealing. Let's create something amazing together !!!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/Contact">
            <button className="mybtn text-white rounded-3xl px-5 py-2">Hire Me</button>
          </Link>
          <Link href="/Skills">
            <button className="gre-Text border border-gray-500 rounded-3xl px-5 py-2">
              View Work
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6">
          <a href="https://www.github.com/viveklanke007" aria-label="GitHub">
            <FaGithub className="h-6 w-6 hover:text-gray-500" />
          </a>
          <a href="https://www.linkedin.com/in/vivek-lanke-87a1a628a" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 hover:text-blue-500" />
          </a>
          <a href="/NoApp" aria-label="Twitter">
            <FaTwitter className="h-6 w-6 hover:text-sky-400" />
          </a>
          <a href="/NoApp" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 hover:text-pink-500" />
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative h-64 w-64 md:h-[28rem] md:w-[28rem] rounded-full mybtn flex items-center justify-center">
          <div className="h-[95%] w-[95%] rounded-full bg-white flex items-center justify-center">
            <Image
              src="/photo.jpg"
              height={420}
              width={420}
              alt="photo"
              unoptimized
              className="rounded-full object-cover h-[90%] w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
