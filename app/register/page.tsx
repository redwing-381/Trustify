"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useWeb3 } from "@/lib/web3-provider"

export default function RegisterPage() {
  const { address, registerUser } = useWeb3()
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username) {
      setError("Username is required")
      return
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters")
      return
    }
    if (username.length > 32) {
      setError("Username must be less than 32 characters")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      await registerUser(username)
      router.push("/dashboard")
    } catch (err) {
      setError("Failed to register. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border bg-card p-8 shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <div className="rounded-full bg-primary/10 p-3">
            <User className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Complete Registration</h1>
          <p className="text-center text-sm text-muted-foreground">
            Choose a username to complete your Trustify account
          </p>
          {address && (
            <p className="text-xs text-muted-foreground">
              Connected wallet: {address.slice(0, 6)}...{address.slice(-4)}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="border-primary/20 focus-visible:ring-primary/50"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            {isLoading ? "Registering..." : "Complete Registration"}
          </Button>
        </form>
      </div>
    </div>
  )
} 