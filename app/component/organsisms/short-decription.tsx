"use client";
import { BorderBeam } from "@/components/magicui/border-beam";

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block px-4  bg-black border leading-none py-2 border-gray-800 rounded-full text-gray-400">
      <BorderBeam
        
        duration={6}
        borderWidth={2}
        colorFrom="#6366f1"
        colorTo="#ec4899"
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
};

const ShortDescripiton = () => {
  return (
    <div className="w-full py-12 my-8 px-4 flex items-center justify-center">
      <div className="max-w-xl">
        {/* pakai div bukan <p> biar aman */}
        <div className="text-white lg:text-2xl text-lg text-center tracking-wide leading-[70px]">
          With <Highlight>3 years</Highlight> of experience, I build modern,
          responsive <Highlight>web applications</Highlight> using React,
          Next.js, Python, delivering clean design, robust functionality, and
          user-friendly experiences. Passionate about turning ideas into
          seamless <Highlight>digital solutions</Highlight>.
        </div>
      </div>
    </div>
  );
};

export default ShortDescripiton;
