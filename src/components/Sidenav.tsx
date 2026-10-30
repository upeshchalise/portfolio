import { Github, House, Linkedin, Mail, Star } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

export const SideNav = () => {
  return (
    <SidebarProvider className="h-full w-auto px-1 pt-3 sm:px-3">
      <Sidebar id="sidenav">
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <House size={28} strokeWidth={1.25} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="https://www.github.com/upeshchalise/portfolio"
                  target="_blank"
                >
                  <Star size={28} strokeWidth={1.25} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="https://www.github.com/upeshchalise" target="_blank">
                  <Github size={28} strokeWidth={1.25} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="https://www.linkedin.com/in/upesh-chalise-ab3b80243/"
                  target="_blank"
                >
                  <Linkedin size={28} strokeWidth={1.25} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="mailto:upeshchalise@gmail.com" target="_blank">
                  <Mail size={28} strokeWidth={1.25} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
