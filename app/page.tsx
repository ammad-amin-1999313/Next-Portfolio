import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero"
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid/Grid";

export default function Home() {
  return (
    <main className="bg-black-100">
      <div>
        <FloatingNav navItems={[{name:"Home",link:"/",icon:<FaHome/>}]}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
