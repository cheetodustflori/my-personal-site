import StyleDemo from "../components/styledemo.jsx";

export default function Week3() {
    return (
        <>

        <div className="relative left-[200px] w-10 h-10 bg-red-300"></div>

        <button className="hover:cursor-pointer border p-2 rounded-4xl  hover:bg-gray-200 active:relative active:top-1">
            <img src="file.svg" width="200px" className="border hover:shadow"/>
        </button>

        <div className="bg-amber-500 shadow-gray-300 p-3 m-3 mt-10 border w-[500px] h-[500px]">hello there</div>
        {/* <div className="p-5 m-5">
            <p className="text-sm">paragraph</p>
            <h1 className="text-xl">header 3</h1>
            <h1 className="text-3xl">header 2</h1>
            <h1 className="text-4xl">header 1</h1>
            <a href="https://docs.google.com/presentation/d/1_YV4W05xP1RVIJcwFe4c2AWOFLS5coqGV9ki1vcm4Uw/edit?slide=id.g3ca66ab59fc_0_272#slide=id.g3ca66ab59fc_0_272" target="_blank">link to some website</a>
            <img src="window.svg" width="50px"/>
            <button className="border p-5 hover:shadow-2xs hover:bg-amber-50">hi</button>
        </div> */}

        {/* main axis (x) - justify content: flex-start, flex-end, center*/}
        {/* cross axis (y) -  align-items: flex-start, flex-end, center */}
            {/* justify content + align-items: space-around, between*/}
        {/* flex direction - row or column --> controls direction of main axis*/}


        {/* extra features: 
            body - flex wrap / nowrap / align, justify
            box:     
        */}
        {/* <div className="border m-5 p-5 flex">
            <StyleDemo/>
            <StyleDemo/>
            <StyleDemo/>
            <StyleDemo/>
            <StyleDemo/>
            <StyleDemo/>
            <StyleDemo/>
            <StyleDemo/>
            <StyleDemo/>
        </div>

         */}

        </>
    )
}