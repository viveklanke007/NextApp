
"use client";
import React, { useState } from "react";



function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/formAPI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        
      } else {
        setStatus("Failed to send.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col bg-gray-900 items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-serif italic mb-10">
        Contact <span className="gre-Text">Me</span>
      </h2>

      <div className="rounded-2xl w-[90vw] sm:w-[70vw] md:w-[50vw] bg-black lg:w-[35vw] h-auto md:h-[60vh] py-6 px-4 flex justify-center items-center">
        <div className="rounded-2xl w-full h-full  flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="outline-1 w-full h-10 px-3 rounded-md"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" outline-1 w-full h-10 px-3 rounded-md"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className=" outline-1 w-full px-3 py-2 rounded-md resize-none"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="outline-1 w-[40%] h-[3em] mt-4 mx-auto rounded-3xl mybtn text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <p className="mt-4 text-white">{status}</p>
    </div>
  );
}

export default ContactPage;
