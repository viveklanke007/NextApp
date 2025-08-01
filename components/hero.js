"use client";
import "../app/globals.css";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function hero() {
  return (
    <div className="relative top-[15vh]">
      <div className="hdo h-[60vh] w-[40vw] flex justify-center flex-col m-[3em] p-[1em]">
        <h2 className=" hdh text-[4em] font-bold font-sans">
          Hi, I'm <span className="gre-Text">Vivek</span>
        </h2>
        <h3 className="text-[2em] font-bold font-sans">Full-Stack Devoloper</h3>
        <p className="text-lg mt-3">
          I build exseptional digital experiences that are fast, accessable, And
          visually appering. Let's create something amazing togather !!!
        </p>

        {/* <div className='flex gap-[5rem] flex-row w-[70%] mt-[3em]'>
            <Hbtn name='Hire me'  className='mybtn'/>
            <Hbtn name='View Work' />
          </div> */}


        <div className="flex gap-[5rem] flex-row w-[70%] mt-[3em]">
          <button className="mybtn rounded-3xl w-[6em] h-[3em]"><Link href="/Contact">Hire Me</Link></button>
          <button className=" gre-Text outline-1 rounded-3xl w-[6em] h-[3em]">
            <Link prefetch={true} href='/Project'>VIew Work</Link>
          </button>
        </div>
        <div className="h-[3em] w-[70%] flex flex-row gap-[2em] mt-[3em]">
          <button className="">
            <a href="/">
              <FaGithub className="h-[2em] w-[2em]"></FaGithub>
            </a>
          </button>
          <button className="">
            <a href="/">
              <FaLinkedin className="h-[2em] w-[2em]"></FaLinkedin>
            </a>
          </button>
          <button className="">
            <a href="/">
              <FaTwitter className="h-[2em] w-[2em]"></FaTwitter>
            </a>
          </button>
          <button className="">
            <a href="/">
              <FaInstagram className="h-[2em] w-[2em]"></FaInstagram>
            </a>
          </button>
        </div>
      </div>
      <div className="hdt flex justify-center items-center relative bottom-[70vh] left-[50vw] mybtn h-[60vh] w-[40vw] rounded-[100%]">
        <div className="hdtc h-[99%] w-[99%] rounded-[100%] bg-white flex justify-center items-center">
          <Image
            src="..\photo.jpg"
            height={420}
            width={420}
            alt="photo"
            unoptimized
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default hero;
