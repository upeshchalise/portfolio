import { FaReact } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <ul className="[&>_li]:flex [&>_li]:gap-2 [&>_li]:items-center [&>_li]:px-3 [&>_li]:py-2 [&>_li]:rounded-lg flex gap-2">
          <li className="hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB"/>
            home.tsx
          </li>
          <li className="hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB"/>
            about.tsx
          </li>
          <li className="hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB"/>
            blog.tsx
          </li>
          <li className="hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB"/>
            projects.tsx
          </li>
          <li className="hover:bg-slate-800 hover:cursor-pointer">
            <FaReact size={20} color="#87CEEB"/>
            contact.tsx
          </li>
        </ul>
      </section>
    </>
  );
};
