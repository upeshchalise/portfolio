"use client";

import { useState } from "react";
import { Explorer } from "@/components/Explorer";
import { SideNav } from "@/components/Sidenav";

export const SidebarWorkspace = () => {
  const [explorerOpen, setExplorerOpen] = useState(true);

  return (
    <>
      <SideNav
        explorerOpen={explorerOpen}
        onExplorerToggle={() => setExplorerOpen((open) => !open)}
      />
      {explorerOpen && <Explorer />}
    </>
  );
};
