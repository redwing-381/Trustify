"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Archive,
  Clock,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Plus,
  Settings,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

export function AppSidebar() {
  const pathname = usePathname()
  const { isMobile } = useSidebar()

  // Don't show sidebar on landing page
  if (pathname === "/") return null

  // Don't show sidebar on auth pages
  if (pathname === "/login") return null

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-2">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-xl font-bold text-gradient">Trustify</span>
        </div>
        {!isMobile && <SidebarTrigger />}
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent ${pathname === "/dashboard" ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link
                  href="/capsules"
                  className={`flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent ${pathname.startsWith("/capsules") ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <Archive className="h-5 w-5" />
                  <span>Trust Capsules</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link
                  href="/beneficiaries"
                  className={`flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent ${pathname.startsWith("/beneficiaries") ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <Users className="h-5 w-5" />
                  <span>Beneficiaries</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link
                  href="/payments"
                  className={`flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent ${pathname.startsWith("/payments") ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <Clock className="h-5 w-5" />
                  <span>Automated Payments</span>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link
                  href="/capsules/create"
                  className="flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create Capsule</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link
                  href="/beneficiaries/add"
                  className="flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent"
                >
                  <Users className="h-5 w-5" />
                  <span>Add Beneficiary</span>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link
                  href="/help"
                  className={`flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent ${pathname.startsWith("/help") ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <HelpCircle className="h-5 w-5" />
                  <span>Help & Support</span>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link
                  href="/docs"
                  className={`flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent ${pathname.startsWith("/docs") ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Documentation</span>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link
              href="/settings"
              className={`flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent ${pathname.startsWith("/settings") ? "bg-accent text-accent-foreground" : ""}`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <button className="flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-accent">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span className="text-xs">Connected</span>
          </div>
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
