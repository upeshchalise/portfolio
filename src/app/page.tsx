import Header from "@/components/Header";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div>
      <Header />
      <p>The name is upesh chalise.</p>
      <DropdownMenu>{<div>hello</div>} </DropdownMenu>
    </div>
  );
}
