import { JavascriptIcon } from "@/components/icons/javascript-icon";
import { MongodbIcon } from "@/components/icons/mongodb-icon";
import { NextjsIcon } from "@/components/icons/nextjs-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { PostgresqlIcon } from "@/components/icons/postgresql-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TypescriptIcon } from "@/components/icons/typescript-icon";
import { Skill } from "@/components/Skill";

const skills = [
{icon:JavascriptIcon, name:"Javascript"},
{icon: TypescriptIcon, name: "Typescript"},
{icon:ReactIcon, name:"React"},
{icon:NextjsIcon, name:"Next.js"},
{icon:NodeIcon, name:"Node.js"},
{icon:MongodbIcon, name:"Mongodb"},
{icon:PostgresqlIcon, name:"Postgresql"},
]

export default function Home() {


  const codes = [
    {
      tokens: [
        "import { ",
        "Developer",
        " }",
        " from ",
        '"https://github.com/upeshchalise"',
        ";",
      ],
      classNames: [
        "text-yellow-500",
        "text-purple-500",
        "text-yellow-500",
        "text-yellow-500",
        "text-orange-500",
        "text-muted-foreground",
      ],
    },
    {
      tokens: ["const ", "developer", " = ", "new ", "Developer", "()", ";"],
      classNames: [
        "text-yellow-500",
        "text-purple-500",
        "text-yellow-500",
        "text-red-500",
        "text-yellow-500",
        "text-muted-foreground",
      ],
    },
    {
      tokens: ["developer.", "name", " = ", '"Upesh Chalise"', ";"],
      classNames: [
        "text-purple-500",
        "text-blue-500",
        "text-yellow-500",
        "text-orange-500",
        "text-muted-foreground",
      ],
    },
    {
      tokens: ["developer.", "role", " = ", '"Full-stack Developer"', ";"],
      classNames: [
        "text-purple-500",
        "text-blue-500",
        "text-yellow-500",
        "text-orange-500",
        "text-muted-foreground",
      ],
    },
    {
      tokens: [
        "developer.",
        "skills",
        " = ",
        "[",
        <div
          key="skills"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-2 pl-4"
        >
          {skills.map(({ name, icon: Icon }) => (
            <Skill key={name} name={name} icon={Icon} />
          ))}
        </div>,
        "]",
        ";",
      ],
      classNames: [
        "text-purple-500",
        "text-blue-500",
        "text-yellow-500",
        "text-muted-foreground",
      ],
    },
  ]

  return (
    <>
    <div className="pl-4 ">
      {codes.map(({ tokens, classNames }, index) => (
        <div key={index} className="">
          {tokens.map((token, index) => (
            <span key={index} className={classNames[index]}>
              {token}
            </span>
          ))}
        </div>
      ))}
    </div>
    
    </>
  );
}
