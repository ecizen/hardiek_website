import Navbar from "./component/organsisms/navbar";
import Hero from "./component/organsisms/hero";
import CustomCursor from "./component/atoms/custom-scroll";
import { ScrollBasedVelocityDemo } from "./component/molecules/marque";
import About from "./component/organsisms/about";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar harus lebih tinggi dari Hero */}
      <Navbar/>

      <CustomCursor />

      {/* Hero fixed di background */}
      <Hero />
      <div className="lg:h-[460px] h-[40vh]"></div>
      <div className="relative z-30">
        <ScrollBasedVelocityDemo />
        <About />

        <section className="relative z-20 min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <h2 className="text-4xl font-bold">Section 2</h2>
        </section>
      </div>
    </div>
  );
}

