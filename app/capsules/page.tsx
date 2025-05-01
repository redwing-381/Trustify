import Link from "next/link"
import { Archive, ArrowRight, Clock, FileText, MoreHorizontal, Plus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { Capsule3DModel } from "@/components/capsule-3d-model"

export default function CapsulesPage() {
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader heading="Trust Capsules" text="Manage your trust capsules">
        <Button asChild size="sm" className="gap-1 bg-gradient-primary hover:opacity-90 transition-opacity">
          <Link href="/capsules/create">
            <Plus className="h-4 w-4" /> Create Capsule
          </Link>
        </Button>
      </DashboardHeader>
      <div className="w-full px-4 md:px-6 lg:px-8 pb-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Capsules</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="triggered">Triggered</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card className="border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-primary/5 to-transparent">
                <div>
                  <CardTitle className="text-lg">Family Trust</CardTitle>
                  <CardDescription>Created on April 15, 2025</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/30 dark:text-primary-foreground">
                    Active
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/capsules/1" className="flex w-full">
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Capsule</DropdownMenuItem>
                      <DropdownMenuItem>Add Beneficiary</DropdownMenuItem>
                      <DropdownMenuItem>Add Asset</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Revoke Capsule</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-lg border border-primary/10 p-3">
                      <Archive className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">3 Assets</p>
                        <p className="text-xs text-muted-foreground">$75,000 total value</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-primary/10 p-3">
                      <Users className="h-4 w-4 text-secondary" />
                      <div>
                        <p className="text-sm font-medium">3 Beneficiaries</p>
                        <p className="text-xs text-muted-foreground">2 primary, 1 backup</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-primary/10 p-3">
                      <FileText className="h-4 w-4 text-accent-foreground" />
                      <div>
                        <p className="text-sm font-medium">5 Documents</p>
                        <p className="text-xs text-muted-foreground">Will, deeds, photos</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Asset Allocation</span>
                      <span>75% allocated</span>
                    </div>
                    <Progress value={75} className="h-2 bg-primary/20" />
                  </div>

                  {/* 3D Capsule Model */}
                  <div className="h-40 w-full rounded-lg border border-primary/10 overflow-hidden">
                    <Capsule3DModel />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-1 border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Link href="/capsules/1">
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-lg">Charity Fund</CardTitle>
                  <CardDescription>Created on April 22, 2025</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                    Pending
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/capsules/2" className="flex w-full">
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Capsule</DropdownMenuItem>
                      <DropdownMenuItem>Add Beneficiary</DropdownMenuItem>
                      <DropdownMenuItem>Add Asset</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Revoke Capsule</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Archive className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">1 Asset</p>
                        <p className="text-xs text-muted-foreground">$25,000 total value</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">2 Beneficiaries</p>
                        <p className="text-xs text-muted-foreground">2 charities</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Time-locked</p>
                        <p className="text-xs text-muted-foreground">Releases Jan 1, 2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Asset Allocation</span>
                      <span>50% allocated</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link href="/capsules/2">
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
