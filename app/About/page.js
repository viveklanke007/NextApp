
import React from "react";
import Image from "next/image";
import Link from "next/link";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 min-h-screen">
      {/* Heading */}
      <h2 className="text-4xl sm:text-4xl md:text-5xl text-center font-serif italic mb-20">
        About <span className="gre-Text">Me</span>
      </h2>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Image */}
        <div className="h-auto w-[80vw] sm:w-[300px] md:w-[350px] mybtn rounded-[30%] flex justify-center items-center ">
          <div className="w-[95%] h-[95%] ">
            <Image
            src="/photo.jpg"
            height={370}
            width={370}
            alt="photo"
            unoptimized
            className="abi rounded-[30%] w-full h-auto"
          />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 p-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl mb-4">Vivek Lanke</h4>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            I'm a Full Stack Web Developer with a BCA degree from D.Y. Patil University, Pune (Ambi). 
            I specialize in building responsive web applications using technologies like React, Node.js, and MongoDB.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base mb-6">
            <ul>
              <li className="p-1">Role: Full-Stack Web Developer</li>
              <li className="p-1">College: D.Y. Patil University</li>
              <li className="p-1">Degree: BCA (AI)</li>
            </ul>
            <ul>
              <li className="p-1">Blood Group: O+</li>
              <li className="p-1">Address: Talegaon Dabhade, Pune</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            <Link href="/resume.png" download>
              <button className="mybtn rounded-3xl px-5 py-2 text-white">
                Download CV
              </button>
            </Link>
            <Link prefetch={true} href="/Skills">
              <button className="gre-Text border border-gray-500 rounded-3xl px-5 py-2">
                View Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
