import { Explorer } from "@/components/Explorer"
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="text-white flex gap-4 h-full ">
      <Explorer />
      <div className="bg-[#181A1F] flex-1 rounded-md p-2 flex flex-col gap-3">
        <Navbar />
        {/* content */}
        main body section
      </div>
    </div>
  );
}
