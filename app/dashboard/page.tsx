import Link from "next/link"
import { Archive, ArrowRight, Plus, Users, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DashboardHeader } from "@/components/dashboard-header"
import { RecentActivity } from "@/components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader heading="Dashboard" text="Welcome back, John Doe" />
      <div className="w-full px-4 md:px-6 lg:px-8 py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="text-sm font-medium">Total Trust Capsules</CardTitle>
              <Archive className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient">3</div>
              <p className="text-xs text-muted-foreground">2 active, 1 pending</p>
            </CardContent>
            <CardFooter>
              <Link href="/capsules" className="text-xs text-primary hover:underline">
                View all capsules
              </Link>
            </CardFooter>
          </Card>
          <Card className="border border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-secondary/5 to-transparent">
              <CardTitle className="text-sm font-medium">Total Beneficiaries</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div
                className="text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--secondary)), hsl(262 83% 68%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                5
              </div>
              <p className="text-xs text-muted-foreground">Across 3 capsules</p>
            </CardContent>
            <CardFooter>
              <Link href="/beneficiaries" className="text-xs text-secondary hover:underline">
                Manage beneficiaries
              </Link>
            </CardFooter>
          </Card>
          <Card className="border border-accent/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-accent/10 to-transparent">
              <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
              <Wallet className="h-4 w-4 text-accent-foreground" />
            </CardHeader>
            <CardContent>
              <div
                className="text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $125,000
              </div>
              <p className="text-xs text-muted-foreground">Digital and tokenized assets</p>
            </CardContent>
            <CardFooter>
              <Link href="/assets" className="text-xs text-accent-foreground hover:underline">
                View all assets
              </Link>
            </CardFooter>
          </Card>
          <Card className="md:col-span-2 border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Capsule Overview</CardTitle>
              <CardDescription>Status and distribution of your trust capsules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium">Family Trust</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Active</span>
                  </div>
                  <Progress value={75} className="h-2 bg-primary/20" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>3 beneficiaries</span>
                    <span>75% allocated</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="text-sm font-medium">Charity Fund</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Pending</span>
                  </div>
                  <Progress value={50} className="h-2 bg-secondary/20" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>2 beneficiaries</span>
                    <span>50% allocated</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm font-medium">Education Fund</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Active</span>
                  </div>
                  <Progress value={100} className="h-2 bg-accent/20" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 beneficiary</span>
                    <span>100% allocated</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" size="sm" className="gap-1 text-primary hover:bg-primary/10">
                <Link href="/capsules">
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-1 lg:col-span-3 border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                View all activity
              </Button>
              <Button asChild size="sm" className="gap-1 bg-gradient-primary hover:opacity-90 transition-opacity">
                <Link href="/capsules/create">
                  <Plus className="h-4 w-4" /> Create New Capsule
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
