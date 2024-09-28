import Hero from "../components/Hero"
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid/Grid";
import RecentProjects from "@/components/RecentsPorjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black-100">
      <div>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
