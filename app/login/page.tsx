"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWeb3 } from "@/lib/web3-provider"

export default function LoginPage() {
  const { 
    connect, 
    isConnected, 
    isRegistered, 
    username, 
    setUsername, 
    showUsernameInput, 
    registerUser 
  } = useWeb3()
  const router = useRouter()

  useEffect(() => {
    if (isConnected && isRegistered) {
      router.push("/dashboard")
    }
  }, [isConnected, isRegistered, router])

  const handleRegister = async () => {
    try {
      await registerUser(username)
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border bg-card p-8 shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <div className="rounded-full bg-primary/10 p-3">
            <Wallet className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Welcome to Trustify</h1>
          <p className="text-center text-sm text-muted-foreground">
            Connect your wallet to access your trust capsules and manage your legacy
          </p>
        </div>

        <div className="space-y-4">
          {!isConnected ? (
            <Button
              onClick={connect}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Connect Wallet
            </Button>
          ) : showUsernameInput ? (
            <div className="space-y-4">
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username (3-32 characters)"
                className="w-full"
              />
              <Button
                onClick={handleRegister}
                disabled={!username}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Register
              </Button>
            </div>
          ) : null}
          <p className="text-center text-xs text-muted-foreground">
            By connecting your wallet, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
