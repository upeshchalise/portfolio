import { Projects } from "@/lib/project";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <div className="pl-4 flex flex-col gap-4">
        <div>
          <span className="text-blue-500">const </span>{" "}
          <span className="text-purple-500">Projects</span>{" "}
          <span className="text-muted-foreground">= {`[`} </span>
        </div>
        <div>
          {Projects.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="flex hover:border gap-5 hover:border-white rounded-lg bg-slate-800 hover:bg-slate-700"
                >
                  <div className=" w-64 h-64 relative">
                    <Image
                      src={item.image}
                      alt="image of Upesh Chalise portfolio project"
                      className="rounded-l-lg h-full w-full"
                    //   height={500}
                    //   width={500}
                    layout="fill"
                      style={{
                        objectFit: "cover"
                      }}    
                    />
                  </div>
                  <div className=" flex-1 flex flex-col gap-5 pt-3 pb-2">
                    <div className="text-2xl font-bold">{item.name}</div>
                    <div className="text-muted-foreground">{item.description}</div>
                    <div className="flex gap-2">
                      {item.technology.map((item, index) => {
                        return (
                          <>
                            <span className="bg-slate-500 px-2 rounded-md" key={index}>{item}</span>
                          </>
                        );
                      })}
                    </div>
                    <div className="flex gap-3">
                      <Link href={item.source} className="flex gap-2 text-muted-foreground">
                        <Github /> Source
                      </Link>
                      <Link href={item.demo} className="flex gap-2 text-muted-foreground">
                        <Globe /> Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
