export default function cohorts() {
    return (
        <section className="h-screen mt-15 flex flex-col gap-10 items-center">
            <h1 className="font-bold text-4xl text-[#BB868E]">PAST COHORTS</h1>
            <div>
                <ul  className="flex gap-5 font-bold">
                    <li><button className="cursor-pointer rounded-4xl text-sm w-fit p-3 bg-[#B0C4B2] border-2 border-[#4B5659]">SPRING 2026</button></li>
                    <li><button className="cursor-pointer rounded-4xl text-sm  w-fit p-3 bg-[#B0B6C4] border-2 border-[#4F8BA1]">SPRING 2026</button></li>
                    <li><button className="cursor-pointer rounded-4xl text-sm  w-fit p-3 bg-[#F6B9BA] border-2 border-[#E65F6C]">SPRING 2026</button></li>
                    <li><button className="cursor-pointer rounded-4xl text-sm  w-fit p-3 bg-[#FFE9AD] border-2 border-[#D3B76C]">SPRING 2026</button></li>
                </ul>
            </div>
        </section>
    )
}