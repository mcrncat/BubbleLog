import type { ReactNode } from 'react'
import { motion, easeInOut, easeOut } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface AboutSectionCardProps {
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

export default function AboutSectionCard({ title, children }: AboutSectionCardProps) {
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
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <div className="text-gray-400 leading-relaxed">{children}</div>
      </motion.div>
    </motion.section>
  )
}
