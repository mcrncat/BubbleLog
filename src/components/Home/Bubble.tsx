import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

interface BubbleProps {
  size?: number
  duration?: number
  delay?: number
  label?: string
  to?: string
  interactive?: boolean
}

export default function Bubble({
  size = 100,
  duration = 8,
  delay = 0,
  label = '',
  to = '/',
  interactive = true,
}: BubbleProps) {
  const navigate = useNavigate()
  const bubbleRef = useRef<HTMLDivElement>(null)

  const [isPopped, setIsPopped] = useState(false)
  const [popPosition, setPopPosition] = useState<{ x: number; y: number } | null>(null)

  // ���ʒu�͒����t�߁i50vw�}10vw�̃����_���j
  const baseLeft = useMemo(() => {
    const center = 50
    const spread = 10
    const offset = (Math.random() * 2 - 1) * spread
    return center + offset
  }, [])

  const handleClick = () => {
    if (!interactive || isPopped) return

    const rect = bubbleRef.current?.getBoundingClientRect()
    if (rect) {
      setPopPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    }

    setIsPopped(true)
    setTimeout(() => {
      if (to) navigate(to)
    }, 1000)
  }

  const renderParticles = () => {
    if (!popPosition) return null
    return Array.from({ length: 8 }).map((_, i) => {
      const angle = (i / 8) * Math.PI * 2
      const distance = 40
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance
      return (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x, y, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="absolute rounded-full bg-blue-300/60"
          style={{
            width: 10,
            height: 10,
            top: popPosition.y,
            left: popPosition.x,
            pointerEvents: 'none',
            position: 'fixed',
            filter: 'blur(1px)',
          }}
        />
      )
    })
  }

  if (isPopped) {
    return <>{renderParticles()}</>
  }

  return (
    <motion.div
      ref={bubbleRef}
      onClick={handleClick}
      initial={{
        y: '100vh', // ��ʉ�����X�^�[�g
        opacity: 1,
        scale: 1,
      }}
      animate={{
        y: ['100vh', '-20vh'], // ��Ɉړ�
        x: [
          `${baseLeft}vw`,
          `${baseLeft + 5}vw`,
          `${baseLeft - 5}vw`,
          `${baseLeft + 4}vw`,
          `${baseLeft - 4}vw`,
          `${baseLeft}vw`,
        ], // ���E�ɗh��Ȃ���ړ�
        opacity: [0.8, 0],
        scale: [1, 1.2],
      }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 2,
      }}
      className={`absolute flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(0,50,100,0.7)] ${
        interactive ? 'cursor-pointer' : ''
      }`}
      style={{
        width: size,
        height: size,
        left: 0, // left��0�ɂ���x�̒l�ňʒu�����ivw�w��Ȃ̂Łj
        background:
          'linear-gradient(135deg, rgba(100,180,255,0.4), rgba(50,120,200,0.25), rgba(80,150,230,0.1))',
        boxShadow:
          'inset 0 0 15px 5px rgba(150,210,255,0.6), 0 6px 10px rgba(0,30,80,0.8)',
        color: 'white',
      }}
    >
      {interactive && (
        <span className="select-none font-semibold text-white text-sm">{label}</span>
      )}
    </motion.div>
  )
}
