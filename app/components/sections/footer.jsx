import Link from "next/link"

export default function footer(){
    return (
        <div className="text-white flex justify-between pl-5 pr-5 h-30 bg-[#4B5659] w-full">
            
            <div className="flex items-center h-full gap-5">
                <p className="font-bold">Let's build great things.</p>
            <p>Built by Zeel and Flori.</p>
            <Link href="#"><img src="/github.svg"/></Link>
            <p className="italic">est. 2024</p>
            </div>
            

            <img src="/fence.png" className=""/>
            <img src="/rabbit.png" className=""/>
        </div>
    )
}