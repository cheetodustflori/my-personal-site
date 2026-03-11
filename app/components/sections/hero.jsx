import Welcome from "../welcome.jsx"
import Header from "../header.jsx"
export default function hero() {
    return (
        <section className="relative flex flex-col h-150 w-full bg-linear-to-t align-middle from-[#F4919B] to-[#F8E0D8]">
        <Header/>
        <Welcome/>
        <img src="../rabbit.png" width="200px" className="absolute bottom-0 left-75"/>
        </section>
    )
}