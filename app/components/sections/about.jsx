

export default function about() {
    return (
        <section className="font-bold w-full h-screen border-3 p-5 items-center justify-center flex flex-col gap-20 text-[#4B5659] bg-[#B0C4B2]">
            <div className="flex gap-10">
                <p className="text-4xl ">About</p>
                <p className="text-xl max-w-150">
                    The WiCS Dev Project selects 15 - 25 students each semester to build a project that will grow their technical skills in a collaborative workspace. Students meet for one hour weekly and complete individual work on their own outside of school. Unlike the classroom setting, students are given the autonomy to provide feedback to the final product and reiterate as needed. They also get the experience of working under mentors with technical expertise.
                   

</p>
            </div>

            <div className="flex gap-10">
                <p className="text-4xl">Origins</p>
                <p className="text-xl max-w-150"> 
                    The WiCS Dev Project was initiated in Fall 2024 under the leadership of the Women in Computer Science Club at the University of Illinois Chicago. This initiative was part of a larger movement to bring more technical skills and exposure to real-world industry tools to campus. Our team believes that education is the most powerful tool to empower students into making meaningful differences in the world after they graduate.
                </p>
            </div>

        <img src="../fence.png" className="absolute left-3.75  -bottom-162.5"/>
        </section>
    )
}