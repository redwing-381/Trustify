"use client"

import { useEffect, useState } from "react"

export function BlockchainModel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D cube with CSS transforms */}
      <div
        className="relative w-32 h-32 animate-float"
        style={{
          perspective: "800px",
          transformStyle: "preserve-3d",
          animation: "rotate3d 10s linear infinite",
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 bg-primary/70 backdrop-blur-sm border border-white/20"
          style={{ transform: "translateZ(16px)" }}
        />

        {/* Back face */}
        <div
          className="absolute inset-0 bg-primary/70 backdrop-blur-sm border border-white/20"
          style={{ transform: "translateZ(-16px) rotateY(180deg)" }}
        />

        {/* Left face */}
        <div
          className="absolute inset-0 bg-primary/70 backdrop-blur-sm border border-white/20"
          style={{ transform: "translateX(-16px) rotateY(-90deg)", transformOrigin: "left" }}
        />

        {/* Right face */}
        <div
          className="absolute inset-0 bg-primary/70 backdrop-blur-sm border border-white/20"
          style={{ transform: "translateX(16px) rotateY(90deg)", transformOrigin: "right" }}
        />

        {/* Top face */}
        <div
          className="absolute inset-0 bg-primary/70 backdrop-blur-sm border border-white/20"
          style={{ transform: "translateY(-16px) rotateX(90deg)", transformOrigin: "top" }}
        />

        {/* Bottom face */}
        <div
          className="absolute inset-0 bg-primary/70 backdrop-blur-sm border border-white/20"
          style={{ transform: "translateY(16px) rotateX(-90deg)", transformOrigin: "bottom" }}
        />
      </div>

      <style jsx>{`
        @keyframes rotate3d {
          0% {
            transform: rotateY(0deg) rotateX(20deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(20deg);
          }
        }
      `}</style>
    </div>
  )
}
