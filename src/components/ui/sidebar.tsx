"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const SidebarContext = React.createContext<{ collapsible: "icon" | "none" }>({
  collapsible: "none",
})

const SidebarProvider = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <SidebarContext.Provider value={{ collapsible: "icon" }}>
    <div className={cn("flex min-h-0 w-auto", className)}>{children}</div>
  </SidebarContext.Provider>
)

const Sidebar = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  const { collapsible } = React.useContext(SidebarContext)

  return (
    <aside
      data-collapsible={collapsible}
      id={id}
      className={cn(
        "group/sidebar flex shrink-0 flex-col bg-transparent text-white",
        "w-16",
        className
      )}
    >
      {children}
    </aside>
  )
}

const SidebarContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
    {children}
  </div>
)

const SidebarMenu = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <ul
    className={cn(
      "flex w-full flex-col items-center gap-4",
      className
    )}
  >
    {children}
  </ul>
)

const SidebarMenuItem = ({
  children,
}: {
  children: React.ReactNode
}) => <li className="w-auto rounded-lg">{children}</li>

const SidebarMenuButton = ({
  children,
  asChild = false,
  className,
}: {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}) => {
  const Comp = asChild ? "span" : "button"

  return (
    <Comp
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg p-2",
        "hover:bg-[#181A1F]",
        className
      )}
    >
      {children}
    </Comp>
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
}
