import Header from "@/components/Header";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { File, Folder } from "lucide-react";
import { SiEslint } from "react-icons/si";
import { TbBrandNpm } from "react-icons/tb";

export default function Home() {
  return (
    <div className="text-white flex gap-4 h-full ">
      <div className="bg-[#181A1F]  rounded-md p-2 text-lg">
        <div>EXPLORER</div>
        <ul className="[&>_li]:flex [&>_li]:gap-2 [&>_li]:items-center">
          <li className="flex gap-2 items-center">
            <span></span>
            <Folder size={16} strokeWidth={1.5} />
            .vscode
          </li>
          <li>
            <span></span>
            <Folder size={16} strokeWidth={1.5} />
            public
          </li>
          <li>
            <span>{'>'}</span> 
            <Folder size={16} strokeWidth={1.5} />
            src
          </li>
          <li>
            <File size={16} strokeWidth={1.5} />
            .env.local
          </li>
          <li>
            <SiEslint size={16} strokeWidth={1.5} color="purple" />
            .eslintrc.json
          </li>
          <li>
            <TbBrandNpm size={16} strokeWidth={1.5} color="red" />
            package.json
          </li>
        </ul>
      </div>
      <div className="bg-[#181A1F] flex-1 rounded-md p-2">
        main body section
      </div>
    </div>
  );
}
