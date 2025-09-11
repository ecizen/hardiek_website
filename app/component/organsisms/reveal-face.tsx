import images from "@/app/assets/data";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import Image from "next/image";

export function ScratchToRevealDemo() {
  return (
    <div className="px-8 py-12">
      <ScratchToReveal
        width={250}
        height={250}
        minScratchPercentage={70}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
      >
        <Image
          src={images.face}
          alt="face-reveal"
          width={250}
          height={250}
          className="object-cover"
        />
      </ScratchToReveal>
    </div>
  );
}
