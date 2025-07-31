import React from "react";
import "./index.css";

export default function App() {
  const handleDownload = () => {
    window.location.href = "/downloads/crypto-starter-pack.pdf";
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white flex flex-col justify-center items-center p-8">
      <div className="max-w-xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold leading-tight">
          📘 Get Your <span className="text-green-400">FREE Crypto Starter Pack</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Learn how to get started in crypto safely and confidently — no hype, no jargon.
        </p>
        <button
          onClick={handleDownload}
          className="bg-green-500 text-black text-lg px-6 py-3 hover:bg-green-400 rounded-xl shadow"
        >
          🚀 Download Starter Pack (PDF)
        </button>
        <p className="text-sm text-gray-500">
          Includes risk warnings. Educational only. Not financial advice.
        </p>
        <div className="mt-10">
          <p className="text-sm text-gray-400">
            Want more? 👉{" "}
            <a href="/premium" className="text-blue-400 underline">
              View Premium Courses
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}