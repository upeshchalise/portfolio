import Link from "next/link";
import { FaReact } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <section id="navbar">
      <ul className="flex gap-2">
      <li>
        <Link href={"/"}>
          <p className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB" />
            home.tsx
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/about"}>
          <p className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB" />
            about.tsx
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/blog"}>
          <p className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB" />
            blog.tsx
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/projects"}>
          <p className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB" />
            projects.tsx
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/contact"}>
          <p className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB" />
            contact.tsx
          </p>
        </Link>
      </li>
    </ul>
      </section>
    </>
  );
};
