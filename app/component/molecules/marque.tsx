import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

const words = [
  'Frontend Engineer',
  'Creative Coder',
  'Pixel Perfect UI',
  'React Enthusiast',
  'Next.js & Tailwind Lover',
  'Open Source Contributor',
  'Web3 Explorer',
  'Let’s Build Something Cool 🚀',
];

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
      <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
            {words.map((word, index) => (
          <span key={index} className="mx-6 glow-text text-white ">
            {word}
          </span>
        ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
            {words.map((word, index) => (
          <span key={index} className="mx-6 glow-text text-white ">
            {word}
          </span>
        ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      
    </div>
  );
}
