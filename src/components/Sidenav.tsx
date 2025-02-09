import { Github, House, Linkedin, Mail, Star } from "lucide-react";
import Link from "next/link";

export const SideNav = () => {
  return (
    <>
      <section
        className="text-white pl-3 pt-3 h-full w-16 items-center hidden sm:block"
        id="sidenav"
      >
        <ul className="flex flex-col gap-4 [&>_li]:rounded-lg [&>_li]:p-2 [&>_li]:items-center">
          <li className="hover:bg-[#181A1F]">
            <Link href={"/"}>
              <House size={28} strokeWidth={1.25} />
            </Link>
          </li>
          <li className="hover:bg-[#181A1F]">
            <Link
              href={"https://www.github.com/upeshchalise/portfolio"}
              target="_blank"
            >
              <Star size={28} strokeWidth={1.25} />
            </Link>
          </li>
          <li className="hover:bg-[#181A1F]">
            <Link href="https://www.github.com/upeshchalise" target="_blank">
              <Github size={28} strokeWidth={1.25} />
            </Link>
          </li>
          <li className="hover:bg-[#181A1F]">
            <Link href="https://www.linkedin.com/in/upesh-chalise-ab3b80243/" target="_blank">
              <Linkedin size={28} strokeWidth={1.25} />
            </Link>
          </li>
          <li className="hover:bg-[#181A1F]">
            <Link href="mailto:upeshchalise@gmail.com" target="_blank">
              <Mail size={28} strokeWidth={1.25} />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
