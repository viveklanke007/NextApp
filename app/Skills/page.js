
import React from "react";
import { FaCode, FaDatabase } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

function SkillsPage() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen px-4 pt-8">
      {/* Heading */}
      <h2 className="text-[8vw] sm:text-[5vw] md:text-[3vw] italic text-center mb-10 md:mb-20">
        My <span className="gre-Text">Skills</span>
      </h2>

      {/* Skill Cards */}
      <div className=" flex flex-wrap justify-center items-center w-full max-w-[1200px] gap-8">
        {/* Frontend */}
        <div className="mwd mydiv w-[80vw] sm:w-[45vw] md:w-[30%] p-[3vmax] rounded-[3vmax] text-center">
          <FaCode className="h-[3vmax] w-[3vmax] mx-auto mb-2" />
          <h3 className="font-bold text-[4vw] md:text-[1.5vw]">FrontEnd Development</h3>
          <p className="text-gray-500 text-[3vw] md:text-[0.9vw]">
            React, Html, Css, Vue, Js, Tailwind, NextJs
          </p>
        </div>

        {/* Backend */}
        <div className="mwd mydiv w-[80vw] sm:w-[45vw] md:w-[30%] p-[3vmax] rounded-[3vmax] text-center">
          <FaDatabase className="h-[3vmax] w-[3vmax] mx-auto mb-2" />
          <h3 className="font-bold text-[4vw] md:text-[1.5vw]">BackEnd Development</h3>
          <p className="text-gray-500 text-[3vw] md:text-[0.9vw]">
            NodeJs, Express, NextJs, MongoDB, MySQL, SQL
          </p>
        </div>

        {/* DSA */}
        <div className="mwd mydiv w-[80vw] sm:w-[45vw] md:w-[30%] p-[3vmax] rounded-[3vmax] text-center">
          <TbBinaryTree className="h-[3vmax] w-[3vmax] mx-auto mb-2" />
          <h3 className="font-bold text-[4vw] md:text-[1.5vw]">Data Structures</h3>
          <p className="text-gray-500 text-[3vw] md:text-[0.9vw]">
            Array, String, Linked-List, Trees, Graphs, Hashing
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 w-full">
        
      </div>
    </div>
  );
}

export default SkillsPage;
