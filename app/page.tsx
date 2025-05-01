import Link from "next/link"
import { ArrowRight, Lock, Sparkles, Zap, FileText, Users, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { HeroSection } from "@/components/hero-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      {/* Header */}
      <header className="border-b backdrop-blur-sm bg-white/70 dark:bg-black/20 sticky top-0 z-50 w-full">
        <div className="flex h-16 items-center justify-between w-full px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xl font-bold text-gradient">Trustify</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-6 md:flex">
              <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#security" className="text-sm font-medium hover:text-primary transition-colors">
                Security
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Connect Wallet
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D Animation */}
      <HeroSection />

      {/* Features Section */}
      <section
        id="features"
        className="border-t bg-gradient-to-b from-white to-accent/10 dark:from-background dark:to-accent/5 py-16 md:py-24 w-full"
      >
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-gradient">Key Features</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Trustify provides everything you need to secure your legacy and ensure your wishes are carried out.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4 rounded-xl glass-effect p-6 text-center shadow-sm animate-fade-in">
              <div className="rounded-full bg-primary/10 p-3">
                <Sparkles className="h-6 w-6 text-primary animate-float" />
              </div>
              <h3 className="text-xl font-bold">Secure Storage</h3>
              <p className="text-muted-foreground">
                Encrypt and store important documents, digital assets, and instructions on the blockchain.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl glass-effect p-6 text-center shadow-sm animate-fade-in-delay-1">
              <div className="rounded-full bg-secondary/10 p-3">
                <Zap className="h-6 w-6 text-secondary animate-float-delay-1" />
              </div>
              <h3 className="text-xl font-bold">Automated Transfers</h3>
              <p className="text-muted-foreground">
                Set up smart contracts to automatically transfer assets to beneficiaries based on triggers you define.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl glass-effect p-6 text-center shadow-sm animate-fade-in-delay-2">
              <div className="rounded-full bg-accent/20 p-3">
                <Lock className="h-6 w-6 text-accent-foreground animate-float-delay-2" />
              </div>
              <h3 className="text-xl font-bold">Privacy Control</h3>
              <p className="text-muted-foreground">
                Maintain complete control over who can access your information and when they can access it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-primary animate-gradient opacity-5"></div>
        <div className="w-full px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-gradient">How It Works</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Trustify makes it easy to secure your legacy in just a few simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4 rounded-xl glass-effect p-6 text-center shadow-sm animate-fade-in">
              <div className="rounded-full bg-primary/10 p-3 mb-2">
                <FileText className="h-6 w-6 text-primary animate-float" />
              </div>
              <h3 className="text-xl font-bold">Create Trust Capsules</h3>
              <p className="text-muted-foreground">
                Set up secure vaults for different types of assets and documents with customized access rules.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl glass-effect p-6 text-center shadow-sm animate-fade-in-delay-1">
              <div className="rounded-full bg-secondary/10 p-3 mb-2">
                <Users className="h-6 w-6 text-secondary animate-float-delay-1" />
              </div>
              <h3 className="text-xl font-bold">Assign Beneficiaries</h3>
              <p className="text-muted-foreground">
                Add beneficiaries and trustees to your capsules and define how assets should be distributed.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl glass-effect p-6 text-center shadow-sm animate-fade-in-delay-2">
              <div className="rounded-full bg-accent/20 p-3 mb-2">
                <Clock className="h-6 w-6 text-accent-foreground animate-float-delay-2" />
              </div>
              <h3 className="text-xl font-bold">Set Triggers</h3>
              <p className="text-muted-foreground">
                Define conditions for when and how your assets should be transferred to your beneficiaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-primary text-white py-16 md:py-24 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
        <div className="w-full flex flex-col items-center gap-6 px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
            Ready to Secure Your Legacy?
          </h2>
          <p className="max-w-[600px] md:text-xl animate-slide-up-delay-1">
            Join thousands of users who trust Trustify with their most important assets and wishes.
          </p>
          <Link href="/login" className="animate-slide-up-delay-2">
            <Button size="lg" variant="secondary" className="gap-1 bg-white text-primary hover:bg-white/90">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background w-full">
        <div className="w-full px-4 py-8 md:py-12 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold text-gradient">Trustify</span>
            </div>
            <nav className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Trustify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
