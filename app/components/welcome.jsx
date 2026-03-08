"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Welcome() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    isDragging.current = true;

    const rect = e.currentTarget.getBoundingClientRect();

    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
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
    <div className="relative overflow-hidden">
      <div
        id="movable-container"
        onMouseDown={handleMouseDown}
        className="w-150 h-100 rounded-md bg-[#FBF2D8] select-none fixed border-2"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          cursor: isDragging.current ? "grabbing" : "grab",
          zIndex: 50,
        }}
      >
        <div className="flex border-b bg-[#B0C4B2] h-10 gap-2 p-1 items-center">
          <div className="w-8 h-8 border-2 border-white rounded-4xl bg-[#BB868E]"></div>
          <div className="w-8 h-8 border-2 border-white rounded-4xl bg-[#FBF2D8]"></div>
          <div className="w-8 h-8 border-2 border-white rounded-4xl bg-[#BBEAB8]"></div>
        </div>
        <div className="p-4">
          <div className="text-4xl text-[#ECB0B9] w-full font-bold">
            WiCS Wired:
          </div>
          <div className="text-6xl text-[#4B5659] font-bold w-full">
            Dev Project
          </div>
          <p>
            Building projects that matter.
            Bringing together students that care.
          </p>
          <p>est. 2024</p>
        </div>
      </div>
    </div>
  );
}
