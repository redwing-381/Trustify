"use client"

import dynamic from "next/dynamic"

const Hero3DAnimation = dynamic(() => import("@/components/hero-3d-animation").then((mod) => mod.Hero3DAnimation), {
  ssr: false,
})

export function Hero3DAnimationWrapper() {
  return <Hero3DAnimation />
} 