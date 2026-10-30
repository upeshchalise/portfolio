import {
  Blocks,
  Bug,
  Files,
  GitBranch,
  Linkedin,
  Mail,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface SideNavProps {
  explorerOpen: boolean;
  onExplorerToggle: () => void;
}

export const SideNav = ({ explorerOpen, onExplorerToggle }: SideNavProps) => {
  return (
    <SidebarProvider className="h-auto w-full sm:h-full sm:w-auto">
      <Sidebar id="sidenav" className="w-full border-b border-[#333333] bg-[#181818] sm:w-12 sm:border-b-0 sm:border-r">
        <SidebarContent>
          <SidebarMenu className="flex-row justify-around gap-0 py-1 sm:flex-col sm:justify-start sm:gap-2 sm:py-3">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className={`relative text-[#cccccc] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#007acc] sm:before:bottom-auto sm:before:left-0 sm:before:top-0 sm:before:h-full sm:before:w-0.5 ${
                  explorerOpen ? "" : "text-[#858585]"
                }`}
              >
                <button
                  type="button"
                  onClick={onExplorerToggle}
                  aria-label="Explorer"
                  aria-expanded={explorerOpen}
                  title="Explorer"
                >
                  <Files size={22} strokeWidth={1.5} />
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-[#858585]">
                <Link href="/about" aria-label="Search" title="Search">
                  <Search size={22} strokeWidth={1.5} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-[#858585]">
                <Link href="https://github.com/upeshchalise" target="_blank" aria-label="Source control" title="Source Control">
                  <GitBranch size={22} strokeWidth={1.5} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-[#858585]">
                <Link href="/projects" aria-label="Run and debug" title="Run and Debug">
                  <Bug size={22} strokeWidth={1.5} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-[#858585]">
                <Link href="https://github.com/upeshchalise/portfolio" target="_blank" aria-label="Extensions" title="Extensions">
                  <Blocks size={22} strokeWidth={1.5} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <li className="hidden flex-1 sm:block" />
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-[#858585]">
                <Link href="https://www.linkedin.com/in/upesh-chalise-ab3b80243/" target="_blank" aria-label="LinkedIn" title="LinkedIn">
                  <Linkedin size={22} strokeWidth={1.5} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-[#858585]">
                <Link href="mailto:upeshchalise@gmail.com" aria-label="Contact" title="Contact">
                  <Mail size={22} strokeWidth={1.5} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="text-[#858585]">
                <Link href="/" aria-label="Settings" title="Settings">
                  <Settings size={22} strokeWidth={1.5} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
