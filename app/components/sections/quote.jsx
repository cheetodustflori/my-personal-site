"use client"
import { motion } from "framer-motion";
import ProjectCard from "../projectCard.jsx";
import {useState} from "react";

export default function quote() {
    const images = [
        "../card.png",
        "../card-2.png",
        "../card-3.png",
    ]

    const [nextIndex, setNextIndex] = useState(0);
    const arrayLength = images.length;

    function handleForwardClick () {
        if(nextIndex < arrayLength - 1){
            setNextIndex(nextIndex + 1);
        } else {
            setNextIndex(0);
        }
    }

    function handleBackwardClick(){
        if(nextIndex > 0){
            setNextIndex(nextIndex - 1);
        } else {
            setNextIndex(arrayLength - 1);
        }
    }


    return (
        <section className="bg-[#F8E0D8] gap-10 flex items-center justify-center w-full h-screen">
            <div className="text-6xl">
                <p>
                    “The <span className="text-[#E65F6C]f font-bold">best</span> way to<br/>
                    <span className="text-[#B0C4B2] font-bold">predict</span> <span className="underline">the future</span><br/>
                    is to <span className="text-[#4F8BA1] font-bold italic">create</span> it.”</p>
                <p>Alan Kay</p>
            </div>

            <div id="slideshow-container">
                <div id="slideshow-image">
                    
                        <ProjectCard color={images[nextIndex]}/>
                    
                    
                </div>
                <div>
                    <button onClick={handleBackwardClick}>back</button>
                    <button onClick={handleForwardClick}>forward</button>
                </div>
            </div>
            
        </section>
    )
}