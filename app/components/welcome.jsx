"use client";
import React, { useState, useEffect, useRef } from "react";
import "./typewriter.css";

export default function Welcome() {
  // Start the box at a reasonable default position
  const [position, setPosition] = useState({ x: 500, y: 75 });
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    isDragging.current = true;
    const rect = containerRef.current.getBoundingClientRect();

    // Calculate where inside the box the user clicked
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current || !containerRef.current) return;

      const container = containerRef.current;
      const parent = container.offsetParent; // This finds the 'relative' Hero section
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();

      // Calculate new position relative to the Hero section
      let newX = e.clientX - parentRect.left - offset.current.x;
      let newY = e.clientY - parentRect.top - offset.current.y;

      // Boundary Checks: Keep it inside the Hero section
      newX = Math.max(
        0,
        Math.min(newX, parentRect.width - container.offsetWidth),
      );
      newY = Math.max(
        0,
        Math.min(newY, parentRect.height - container.offsetHeight),
      );

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      // Uses 'absolute' so it floats over the Header and Hero content
      className="absolute w-[700px] h-[500px] rounded-md bg-[#FBF2D8] select-none border-2 shadow-2xl z-50"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: isDragging.current ? "grabbing" : "grab",
        transition: isDragging.current ? "none" : "top 0.1s, left 0.1s", // Smooths out the stop
      }}
    >
      <div className="flex border-b bg-[#B0C4B2] h-10 gap-2 p-1 items-center">
        <div className="w-5 h-5 border-2 border-white rounded-full bg-[#BB868E]"></div>
        <div className="w-5 h-5 border-2 border-white rounded-full bg-[#FBF2D8]"></div>
        <div className="w-5 h-5 border-2 border-white rounded-full bg-[#BBEAB8]"></div>
      </div>

      <div className="p-8 ">
        <h1 className="text-4xl text-[#ECB0B9] font-bold leading-none">
          WiCS Wired:
        </h1>
        <h2 className="text-6xl text-[#4B5659] font-bold mb-4">Dev Project</h2>
        <div className="space-y-1 text-lg text-gray-700">
          <div className="typewriter">
            <h1>Building projects that matter.</h1>
          </div>

          <h1>Bringing together students that care.</h1>
          <p className="font-mono text-sm mt-4 opacity-60">est. 2024</p>
        </div>
      </div>
    </div>
  );
}
