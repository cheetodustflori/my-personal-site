import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="border w-fit sm:w-100 flex flex-col text-4xl font-bold items-center  justify-center">
        <ul className="flex flex-col gap-10">
          <li>
            <Link className="active:relative active:top-px" href="/about">
              <img src="folder.png" className="w-30"/>
              <p className="text-center">About</p>
            </Link>
          </li>
          <li>
            <Link className="active:relative active:top-px" href="/projects">
              <img src="folder.png" className="w-30"/>
              <p className="text-center">Projects</p>
            </Link>
          </li>
          <li>
            <Link className="active:relative active:top-px" href="#">
              <img src="folder.png" className="w-30"/>
              <p className="text-center">Apply</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

<style></style>;
