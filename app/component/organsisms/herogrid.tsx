import {motion } from 'framer-motion'
const FloatingShapes = () => {
  const shapes = Array.from({ length: 6 });

  return (
    <>
      {shapes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${50 + i * 20}px`,
            height: `${50 + i * 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + i * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};
export default FloatingShapes