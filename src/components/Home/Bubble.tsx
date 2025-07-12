import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
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
  // delay = 0,
  label = '',
  to = '/',
  interactive = true,
}: BubbleProps) {
 const navigate = useNavigate()
  const bubbleRef = useRef<HTMLDivElement>(null)
  const [isPopped, setIsPopped] = useState(false)
  const [popPosition, setPopPosition] = useState<{ x: number; y: number } | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  // 初期位置をuseMemoで生成し初回からランダムに
  const initialX = useMemo(() => Math.random() * window.innerWidth, [])
  const initialY = useMemo(() => window.innerHeight + Math.random() * 400, [])

  // MotionValuesで座標管理
  const x = useMotionValue(initialX)
  const y = useMotionValue(initialY)

  // 上昇アニメーション（ホバー時は停止）
  useAnimationFrame((_t, delta) => {
  if (!isHovered && !isPopped) {
    const speed = (window.innerHeight + 200) / (duration * 1000)
    let newY = y.get() - speed * delta
    if (newY < -200) {
      newY = window.innerHeight + Math.random() * 200
      const newX = Math.random() * window.innerWidth
      x.set(newX)  // X座標もランダムにリセット
    }
    y.set(newY)
  }
})

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
      const px = Math.cos(angle) * distance
      const py = Math.sin(angle) * distance
      return (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: px, y: py, opacity: 0, scale: 0.5 }}
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
    <>
      <motion.div
        ref={bubbleRef}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(0,50,100,0.7)] ${
          interactive ? 'cursor-pointer' : ''
        }`}
        style={{
          width: size,
          height: size,
          background:
            'linear-gradient(135deg, rgba(100,180,255,0.4), rgba(50,120,200,0.25), rgba(80,150,230,0.1))',
          boxShadow:
            'inset 0 0 15px 5px rgba(150,210,255,0.6), 0 6px 10px rgba(0,30,80,0.8)',
          color: 'white',
          x,
          y,
        }}
      >
        {interactive && (
          <span className="select-none font-semibold text-white text-sm">{label}</span>
        )}
      </motion.div>

      {isHovered && (
        <div
          className="fixed px-2 py-1 text-xs text-white bg-black/70 rounded shadow"
          style={{
            top: y.get() - 30,
            left: x.get(),
            transform: 'translate(-50%, -100%)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          {label}ページへ
        </div>
      )}
    </>
  )
}
