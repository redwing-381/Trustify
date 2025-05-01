"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero3DAnimationWrapper } from "@/components/hero-3d-animation-wrapper"

export function HeroSection() {
  return (
    <section className="flex-1 relative overflow-hidden w-full">
      {/* 3D Animation Background */}
      <Hero3DAnimationWrapper />

      {/* Content overlay */}
      <div className="w-full px-4 py-16 md:py-24 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 lg:py-32 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left backdrop-blur-sm bg-white/5 p-6 rounded-2xl max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-slide-up">
            <span className="text-gradient">Secure Your Legacy</span> on the Blockchain
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl animate-slide-up-delay-1">
            Trustify enables you to securely store, manage, and automate the transfer of assets to your beneficiaries
            using smart contracts on the Pharos Network.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-up-delay-2">
            <Link href="/signup">
              <Button size="lg" className="gap-1 bg-gradient-primary hover:opacity-90 transition-opacity">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Sparkles logo with glow effect */}
        <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl glass-effect p-4 lg:p-8 animate-fade-in hidden lg:block">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-gradient"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-32 w-32 text-primary/60 md:h-48 md:w-48 animate-float" />
            <div className="absolute h-48 w-48 md:h-64 md:w-64 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 