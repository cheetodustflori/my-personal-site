export default function NavBar() {
    return (
        <div className="p-5">
            
            <ul className="flex gap-3 font-bold">
                <li><img src="/rabbit.png" width="20px"/></li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projectsPage">Projects</a></li>
                <li><a href="/apply">Apply</a></li>
            </ul>
        </div>
    )
}