import type { ReactNode } from 'react'
import { motion, easeInOut, easeOut } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface AboutIntroCardProps {
  avatarSrc: string
  title: string
  children: ReactNode
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOut } },
}

const floatVariants: Variants = {
  animate: {
    y: [0, -5, 0, 5, 0],
    transition: {
      duration: 6,
      ease: easeInOut,
      repeat: Infinity,
    },
  },
}

export default function AboutIntroCard({ avatarSrc, title, children }: AboutIntroCardProps) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 flex items-center space-x-4"
      >
        <img src={avatarSrc} alt="Avatar" className="w-20 h-20 rounded-full border-2 border-white/30" />
        <div>
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          <div className="text-gray-300 leading-relaxed">{children}</div>
        </div>
      </motion.div>
    </motion.section>
  )
}
