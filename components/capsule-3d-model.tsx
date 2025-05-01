"use client"

import { useEffect, useState } from "react"

export function Capsule3DModel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Crystal container with 3D perspective */}
      <div
        className="relative w-32 h-48 animate-float"
        style={{
          perspective: "800px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Crystal body - diamond/prism shape */}
        <div
          className="absolute w-32 h-32 animate-pulse"
          style={{
            transformStyle: "preserve-3d",
            animation: "rotate3d 8s linear infinite",
          }}
        >
          {/* Top pyramid */}
          <div
            className="absolute w-0 h-0 border-l-[64px] border-r-[64px] border-b-[64px] border-l-transparent border-r-transparent border-b-primary/70"
            style={{
              transform: "translateY(-32px) rotateX(0deg)",
            }}
          />

          {/* Bottom pyramid */}
          <div
            className="absolute w-0 h-0 border-l-[64px] border-r-[64px] border-t-[64px] border-l-transparent border-r-transparent border-t-primary/70"
            style={{
              transform: "translateY(32px) rotateX(0deg)",
            }}
          />

          {/* Side faces with gradient */}
          <div
            className="absolute w-32 h-64 bg-gradient-primary opacity-50"
            style={{
              transform: "translateZ(-32px) rotateY(0deg)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />

          {/* Crystal shine effect */}
          <div
            className="absolute inset-0 rounded-lg bg-white/30 blur-sm"
            style={{
              clipPath: "polygon(0 0, 30% 0, 100% 100%, 0% 100%)",
              transform: "translateZ(5px)",
            }}
          />
        </div>

        {/* Glowing particles inside */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/70 blur-sm animate-pulse"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 70 + 15}%`,
              top: `${Math.random() * 70 + 15}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `translateZ(${Math.random() * 20 - 10}px)`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Base glow effect */}
      <div className="absolute bottom-0 w-24 h-8 bg-primary/30 rounded-full blur-xl animate-pulse" />

      <style jsx>{`
        @keyframes rotate3d {
          0% {
            transform: rotateY(0deg) rotateX(10deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(10deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Capsule3DModel
