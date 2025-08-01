"use client";
import React from "react";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import Footer from "@/components/footer";

function page() {
  return (
    // <div className="flex flex-col justify-center">
    //   <h2 className="text-[5vw] text-center italic m-[1em]">
    //     My <span className="gre-Text">Skills</span>
    //   </h2>
    //   <div className="mmt flex h-auto max-w-[90vw] justify-between relative left-[10vh] flex-wrap">
    //     <div className="chmmt rounded-[1.5em] h-auto w-[90%]  p-[1em] mydiv">
    //       <FaCode className="h-[2em] w-[2em] my-[1em]"></FaCode>
    //       <h3 className="text-[2em] font-bold">FrontEnd Devolopment</h3>
    //       <p className="text-[1em] text-gray-500 mt-1">React, Html, Css, Vue, Js, Tailwind, NextJs</p>
    //     </div>
    //     <div className="chmmt rounded-2xl h-auto w-auto px-[2em] p-[1em] mydiv">
    //       <FaDatabase className="h-[2em] w-[2em] my-[1em]"></FaDatabase>
    //       <h3 className="text-[2em] font-bold">BackEnd Devolopment</h3>
    //       <p className="text-[1em] text-gray-500 mt-1">NodeJs, Express, NextJs, MongoDB, MySQL, SQL</p>
    //     </div>
    //     <div className=" chmmt rounded-2xl h-auto w-auto  p-[1em] mydiv">
    //       <TbBinaryTree className="h-[2em] w-[2em] my-[1em]"></TbBinaryTree>
    //       <h3 className="text-[2em] font-bold">Data Structures</h3>
    //       <p className="text-[1em] text-gray-500 mt-1">Array, String, Linked-List, Trees, Graphs, Hashing</p>
    //     </div>
    //   </div>
    //   <Footer></Footer>
    // </div>

    <div className="flex justify-center items-center flex-col h-[80vh] ">
      <h2 className="text-[4vmax] italic" >
        My <span className="gre-Text">Skills</span>
      </h2>
      <div className="flex justify-center items-center w-[90vw] h-[70vh] flex-wrap">
        <div className="mwd mydiv w-[25%] h-auto p-[3vmax] rounded-[3vmax] m-[3vmax]">
          <FaCode className="h-[3vmax] w-[3vmax]"></FaCode>
          <h3 className="font-bold text-[3vmax]">FrontEnd Devolopment</h3>
          <p className="text-gray-500 text-[1vmax]">
            React, Html, Css, Vue, Js, Tailwind, NextJs
          </p>
        </div>
        <div className=" mwd mydiv w-[25%] h-auto p-[3vmax]  rounded-[3vmax] m-[3vmax]">
          <FaDatabase className="h-[3vmax] w-[3vmax]"></FaDatabase>
          <h3 className="font-bold text-[3vmax]">BackEnd Devolopment</h3>
          <p className="text-gray-500 text-[1vmax]">
            NodeJs, Express, NextJs, MongoDB, MySQL, SQL
          </p>
        </div>
        <div className=" mwd w-[25%] mydiv h-auto p-[3vmax] rounded-[3vmax] m-[3vmax]">
          <TbBinaryTree className="h-[3vmax] w-[3vmax]"></TbBinaryTree>
          <h3 className="font-bold text-[3vmax]">Data Structures</h3>
          <p className="text-gray-500 text-[1vmax]">
            Array, String, Linked-List, Trees, Graphs, Hashing
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default page;
