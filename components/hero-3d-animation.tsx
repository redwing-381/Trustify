"use client"

import { useEffect, useState } from "react"

export function Hero3DAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden z-0 w-full" style={{ pointerEvents: "none" }}>
      {/* Background gradient */}
      <div className="absolute inset-0 w-full bg-gradient-primary animate-gradient opacity-10 dark:opacity-20"></div>

      {/* 3D-like floating cubes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-lg bg-primary/20 dark:bg-primary/30 backdrop-blur-sm animate-float"
          style={{
            width: `${Math.random() * 80 + 40}px`,
            height: `${Math.random() * 80 + 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            transform: `rotate(${Math.random() * 360}deg) translateZ(${Math.random() * 100}px)`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}

      {/* Blockchain-like connected nodes */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-[80vh]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-lg glass-effect animate-pulse"
            style={{
              width: "80px",
              height: "80px",
              left: `${i * 10}%`,
              top: `${Math.sin(i * 0.8) * 20 + 40}%`,
              animationDelay: `${i * 0.2}s`,
              background:
                i % 3 === 0
                  ? "linear-gradient(135deg, rgba(15, 188, 185, 0.3), rgba(15, 188, 185, 0.1))"
                  : i % 3 === 1
                    ? "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1))"
                    : "linear-gradient(135deg, rgba(110, 231, 183, 0.3), rgba(110, 231, 183, 0.1))",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              transform: `rotate(${i * 10}deg) translateZ(${i * 10}px)`,
              zIndex: 10 - i,
            }}
          />
        ))}

        {/* Connection lines between blocks */}
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-white/20 dark:bg-white/30"
            style={{
              height: "2px",
              width: "60px",
              left: `${i * 10 + 8}%`,
              top: `${Math.sin(i * 0.8) * 20 + 40 + 3}%`,
              transform: `rotate(${
                Math.atan2((Math.sin((i + 1) * 0.8) - Math.sin(i * 0.8)) * 20, 15) * (180 / Math.PI)
              }deg)`,
              transformOrigin: "left center",
              zIndex: 5,
            }}
          />
        ))}

        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/50 dark:bg-white/70"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero3DAnimation
