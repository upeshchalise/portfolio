"use client";

import { File, Folder, ChevronDown, ChevronRight, FolderIcon, FileIcon } from "lucide-react";
import { SiEslint } from "react-icons/si";
import { TbBrandNpm } from "react-icons/tb";
import Link from "next/link";
import { ReactIcon } from "./icons/react-icon";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import path from "path";

interface FileItems {
  name: string;
  type: "file" | "folder" | "link";
  icon?: React.ReactNode;
  children?: FileItems[];
  path: string;
}

const files: FileItems[] = [
  {
    name: ".vscode",
    type: "folder",
    path: "/.vscode",
    children: [],
  },
  {
    name: "public",
    type: "folder",
    path: "/public",
    children: [],
  },
  {
    name: "src",
    type: "folder",
    path: "/src",
    children: [
      {
        name: "pages",
        type: "folder",
        path: "/src/pages",
        children: [
          {
            name: "home.tsx",
            type: "link",
            icon: <ReactIcon width={20}/>,
            path: "/",
          },
          {
            name: "about.tsx",
            type: "link",
            icon: <ReactIcon width={20}/>,
            path: "/about",
          },
          {
            name: "blog.tsx",
            type: "link",
            icon: <ReactIcon width={20}/>,
            path: "/blog",
          },
          {
            name: "projects.tsx",
            type: "link",
            icon: <ReactIcon width={20}/>,
            path: "/projects",
          },
          {
            name: "contact.tsx",
            type: "link",
            icon: <ReactIcon width={20}/>,
            path: "/contact",
          },
        ],
      },
      {
        name: "components",
        type: "folder",
        path: "src/components",
        children: [],
      },
    ],
  },
  {
    name: ".env.local",
    type: "file",
    path: "/.env.local",
  },
  {
    name: ".eslintrc.json",
    type: "file",
    path: "/.eslintrc.json",
    icon: <SiEslint size={16} strokeWidth={1.5} color="purple" />,
  },
  {
    name: "package.json",
    type: "file",
    path: "/package.json",
    icon: <TbBrandNpm size={16} strokeWidth={1.5} color="red" />,
  },
];

interface FileTreeItemProps {
  item: FileItems;
  level?: number;
}

const FileTreeItem = ({ item, level = 0 }: FileTreeItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren =
    item.type === "folder" && item.children && item.children.length > 0;

  return (
    <>
       <div>
      <LinkItem item={item} level={level} isOpen={isOpen} setIsOpen={setIsOpen}>
        {item.type === "folder" ? (
          <>
            {hasChildren ? (
              <span className="flex h-4 w-4 items-center justify-center">
                {isOpen ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </span>
            ) : (
              <span className="w-4" />
            )}
            <FolderIcon size={16} />
          </>
        ) : (
          <>
            <span className="w-4" />
            {item.icon ?? <FileIcon size={16} />}
          </>
        )}
        <span className="truncate">{item.name}</span>
      </LinkItem>
      {isOpen && item.children && (
        <div>
          {item.children.map((child) => (
            <FileTreeItem key={child.path} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

const LinkItem = ({
  item,
  level,
  children,
  isOpen,
  setIsOpen,
}: {
  item: FileItems;
  level: number;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {

  const isActive = usePathname() === item.path;
  const hasChildren = item.type === "folder" && item.children && item.children.length > 0;

  if(item.type === "link") {
    return (
      <Link
      className={cn(
        "flex cursor-pointer items-center gap-1 py-1 rounded-md hover:bg-hover",
        isActive &&
          "bg-background text-foreground hover:bg-active-hover font-bold",
        level > 0 && "ml-4"
      )}
      onClick={() => hasChildren && setIsOpen(!isOpen)}
      style={{ marginLeft: `${level * 0.75}rem` }}
      href={item.path}
    >
      {children}
    </Link>
    )
  } 
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-1 py-1 rounded-md hover:bg-hover",
        isActive &&
          "bg-background text-foreground hover:bg-active-hover font-bold",
        level > 0 && "ml-4"
      )}
      onClick={() => hasChildren && setIsOpen(!isOpen)}
      style={{ marginLeft: `${level * 0.75}rem` }}
    >
      {children}
    </div>
  )

};

export const Explorer = () => {
  return (
    <>
      <section
        className="bg-[#181A1F]  rounded-md py-2 text-lg px-4 text-white hidden sm:block min-h-screen"
        id="explorer-section"
      >
        <div>EXPLORER</div>
        {/* <ul className="[&>_li]:flex [&>_li]:gap-2 [&>_li]:items-center">
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
            <span>{">"}</span>
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
        </ul> */}

          <div className="flex-1 px-2">
            {files.map((file) => {
              return (
                <FileTreeItem key={file.path} item={file} />
              )
            })}
          </div>
      </section>
    </>
  );
};
