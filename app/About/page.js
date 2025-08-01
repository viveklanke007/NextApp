import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="abDiv">
      <h2 className=" abh text-4xl m-[1em] text-center font-serif italic">
        About <span className="gre-Text">Me</span>
      </h2>
      <div className="abf h-[100vh] w-[400px] m-[3em]">
        <Image
          src="..\photo.jpg"
          height={400}
          width={400}
          alt="photo"
          unoptimized
          className="abi rounded-[20%]"
        ></Image>
      </div>
      <div className="abt relative bottom-[105vh] left-[40vw] h-[60vh] w-[50vw] p-[1em]">
        <h4 className="text-[4vmax] m-[1vmax]">Vivek Lanke</h4>
        <p className="m-[1vmax] text-gray-500">
          I'm a Full Stack Web Devoloper with a degree BCA from D.Y.Patil
          University Pune Ambi. I specialized in building responsive web
          applications using technologies like react, nodeJs ans momgoDB.
        </p>
        <ul className="flex justify-between m-[1em]">
          <div>
            <li className="p-1">Role : Full-Stack Web Devoloper</li>
            <li className="p-1">College : D.Y.Patil University</li>
            <li className="p-1">Degree : BCA (Artificial Intelligence)</li>
          </div>
          <div>
            <li className="p-1">Blood G : O+</li>
            <li className="p-1">Address : Talegoan Dhabhade, Pune</li>
          </div>
        </ul>
        <div className="flex gap-[5rem] flex-row w-[70%] mt-[3em]">
          <button className="mybtn rounded-3xl w-[8em] h-[3em]">
            <Link href="../resume.png" download={true}>
              Download CV
            </Link>
          </button>
          <button className=" gre-Text outline-1 rounded-3xl w-[8em] h-[3em]">
            <Link href="/Skills">View work</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
