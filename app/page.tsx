import Navbar from "./component/organsisms/navbar";
import Hero from "./component/organsisms/hero";
import CustomCursor from "./component/atoms/custom-scroll";
import { ScrollBasedVelocityDemo } from "./component/molecules/marque";
import About from "./component/organsisms/about";
import ProjectS from "./component/organsisms/project";
import NoiseBackground from "./component/organsisms/bg-aura";
import Link from "next/link";
import ShortDescripiton from "./component/organsisms/short-decription";

export default function Home() {
  return (
    <div className="relative">
      {/* 🔥 Noise background selalu di paling belakang */}
      <NoiseBackground />

      <Navbar />
      <CustomCursor />
      <Hero />
      <ScrollBasedVelocityDemo />
      <section id="about" className="about">
        <About />
      </section>
      <section>
        <ProjectS />
        <div className="py-8">
          <div className="flex justify-center mt-0">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      <section>
        <ShortDescripiton/>
      </section>
    </div>
  );
}
