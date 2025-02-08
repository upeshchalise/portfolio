import { Github, House, Linkedin, Mail, Star } from "lucide-react";

export const SideNav = () => {
  return (
    <>
      <section className="text-white pl-3 pt-3 h-full w-16 items-center" id="sidenav">
        <ul className="flex flex-col gap-4">
            <li><House size={28} strokeWidth={1.25} /></li>
            <li><Star size={28} strokeWidth={1.25} /></li>
            <li><Github size={28} strokeWidth={1.25} /></li>
            <li><Linkedin size={28} strokeWidth={1.25} /></li>
            <li><Mail size={28} strokeWidth={1.25} /></li>
        </ul>
      </section>
    </>
  );
};
