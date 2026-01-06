import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const ParallaxBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 100;
      const y = (clientY / window.innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Yellow Blob - Top Right */}
      <motion.div
        className="blob blob-yellow w-[500px] h-[500px] -top-20 -right-20"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, 10, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Purple Blob - Center Left */}
      <motion.div
        className="blob blob-purple w-[600px] h-[600px] top-1/3 -left-40"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 0.9, 1.1, 1],
          rotate: [0, -15, 10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      {/* Yellow Blob - Bottom Center */}
      <motion.div
        className="blob blob-yellow w-[400px] h-[400px] bottom-20 left-1/3"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 20, -10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
      />

      {/* Purple Blob - Bottom Right */}
      <motion.div
        className="blob blob-purple w-[450px] h-[450px] -bottom-20 right-1/4"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 0.95, 1.1, 1],
          rotate: [0, -10, 15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Small Yellow Blob - Middle */}
      <motion.div
        className="blob blob-yellow w-[250px] h-[250px] top-2/3 right-1/3 opacity-10"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
