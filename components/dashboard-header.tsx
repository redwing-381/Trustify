import type React from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full px-4 py-4 md:py-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="text-xl font-semibold md:text-2xl">
            <span className="text-gradient">{heading}</span>
          </h1>
          {text && <p className="text-sm text-muted-foreground">{text}</p>}
        </div>
      </div>
      {children}
    </div>
  )
}
