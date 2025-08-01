import React from "react";

function page() {
  return (
    <div>
      <h2 className=" text-4xl m-[1em] text-center font-serif italic ">
        Contact <span className="gre-Text">Me</span>
      </h2>
      <div className="rounded-2xl mybtn w-[30vw] h-[40vh] outline-1 flex justify-center items-center relative left-[35vw]">
        <div className=" rounded-2xl w-[99%] h-[98%] outline-1 flex justify-center items-center bg-black">
          <form className="flex flex-col w-[90%] p-[1em]">
            <input
              type="email"
              placeholder="Email"
              className="outline-1 w-[80%] h-[1.7em] m-[1em]"
            ></input>

            <input
              type="phone"
              placeholder="Contact no"
              className="outline-1 w-[80%] h-[1.7em] m-[1em]"
            ></input>
            <textarea
              placeholder="message"
              className="outline-1 w-[80%]  m-[1em]"
            ></textarea>
            <button className="outline-1 w-[30%] h-[3em] m-[1em] rounded-3xl mybtn relative left-[6.5vw]">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
