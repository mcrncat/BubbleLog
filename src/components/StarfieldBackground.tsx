import { useMemo, useEffect, useState } from 'react'

interface Star {
  x: number
  y: number
  r: number
  opacity: number
  animationDelay: number
  animationDuration: number
}

export default function StarfieldBackground() {
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 })

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 画面サイズに応じて星の数を調整
  const starCount = useMemo(() => {
    if (windowSize.width > 1200) return 150
    if (windowSize.width > 800) return 100
    return 70
  }, [windowSize.width])

  // 画面サイズに応じて星の最大・最小半径を調整
  const radiusRange = useMemo(() => {
    if (windowSize.width > 1200) return { min: 0.5, max: 1.7 }
    if (windowSize.width > 800) return { min: 0.4, max: 1.3 }
    return { min: 0.3, max: 1.0 }
  }, [windowSize.width])

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: starCount }).map(() => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      r:
        Math.random() * (radiusRange.max - radiusRange.min) +
        radiusRange.min,
      opacity: Math.random() * 0.4 + 0.5,
      animationDelay: Math.random() * 5,
      animationDuration: 2 + Math.random() * 3,
    }))
  }, [starCount, radiusRange, windowSize])

  const timeOfDay = useMemo(() => {
      return 'night'
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 8) return 'dawn'
    if (hour >= 8 && hour < 18) return 'day'
    if (hour >= 18 && hour < 20) return 'sunset'
  }, [])

  const gradientId = {
    dawn: 'gradDawn',
    day: 'gradDay',
    sunset: 'gradSunset',
    night: 'gradNight',
  }[timeOfDay]

  return (
    <svg
      className="absolute inset-0 w-full h-full z-0"
      viewBox={`0 0 ${windowSize.width} ${windowSize.height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="gradNight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020024" />
          <stop offset="50%" stopColor="#090979" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id="gradDawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c003e" />
          <stop offset="100%" stopColor="#ffb6c1" />
        </linearGradient>
        <linearGradient id="gradDay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87cefa" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="gradSunset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff7e5f" />
          <stop offset="100%" stopColor="#feb47b" />
        </linearGradient>

        <style>{`
          .twinkle {
            animation-name: twinkle;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}</style>
      </defs>

      <rect
        width={windowSize.width}
        height={windowSize.height}
        fill={`url(#${gradientId})`}
      />

      {stars.map((star, i) => (
        <circle
          key={i}
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill="white"
          opacity={star.opacity}
          style={{
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
          className="twinkle"
        />
      ))}
    </svg>
  )
}
