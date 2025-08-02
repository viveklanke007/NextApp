
import React from "react";
import Footer from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl mb-4 gre-Text">Sorry</h1>
        <h1 className="text-5xl mb-4 ">Mai use nahi karata....</h1>
        <Link href='/' className="text-center mt-3 text-3xl">go back</Link>
        
      </main>
      
    </div>
  );
}
5