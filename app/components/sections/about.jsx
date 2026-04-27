

export default function about() {
    return (
        <section className="font-bold w-full h-screen border-3 p-5 items-center justify-center flex flex-col gap-20 text-[#4B5659] bg-[#B0C4B2]">
            <div className="flex gap-10">
                <p className="text-4xl ">About</p>
                <p className="text-2xl max-w-[600px]">This is about our website. 
This is about our website. This is about our website. This is about our website. This is about our website. This is about our website.</p>
            </div>

            <div className="flex gap-10">
                <p className="text-4xl">Origins</p>
                <p className="text-2xl max-w-150">This is about our website. 
This is about our website. This is about our website. This is about our website. This is about our website. This is about our website.</p>
            </div>

        <img src="/fence.png" className="absolute left-3.75  -bottom-162.5"/>
        </section>
    )
}