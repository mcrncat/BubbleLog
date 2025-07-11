// src/components/BubbleParticles.tsx
import { motion } from 'framer-motion';

interface BubbleParticlesProps {
  x: number;
  y: number;
  count?: number;
  size?: number;
}

export default function BubbleParticles({ x, y, count = 6, size = 10 }: BubbleParticlesProps) {
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count;
    const distance = 40 + Math.random() * 20;
    return {
      id: i,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
    };
  });

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: size,
            height: size,
            left: x,
            top: y,
          }}
          animate={{
            x: p.dx,
            y: p.dy,
            opacity: [1, 0],
            scale: [1, 0.5],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
}
