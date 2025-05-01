"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, FileText, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "@/components/dashboard-header"

export default function CreateCapsulePage() {
  const [step, setStep] = useState(1)

  return (
    <div className="flex flex-col">
      <DashboardHeader heading="Create Trust Capsule" text="Set up a new trust capsule">
        <Button asChild variant="outline" size="sm" className="gap-1">
          <Link href="/capsules">
            <ArrowLeft className="h-4 w-4" /> Back to Capsules
          </Link>
        </Button>
      </DashboardHeader>
      <div className="container pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                1
              </div>
              <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>Basic Info</span>
            </div>
            <div className="h-0.5 flex-1 self-center bg-muted mx-2" />
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                2
              </div>
              <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>Assets & Documents</span>
            </div>
            <div className="h-0.5 flex-1 self-center bg-muted mx-2" />
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                3
              </div>
              <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>Beneficiaries</span>
            </div>
            <div className="h-0.5 flex-1 self-center bg-muted mx-2" />
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 4 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                4
              </div>
              <span className={step >= 4 ? "font-medium" : "text-muted-foreground"}>Triggers</span>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the basic details for your trust capsule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Capsule Name</Label>
                  <Input id="name" placeholder="e.g., Family Trust" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe the purpose of this trust capsule" rows={4} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Capsule Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family Trust</SelectItem>
                      <SelectItem value="charity">Charity Fund</SelectItem>
                      <SelectItem value="education">Education Fund</SelectItem>
                      <SelectItem value="business">Business Succession</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Cancel
                </Button>
                <Button onClick={() => setStep(2)}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Assets & Documents</CardTitle>
                <CardDescription>Add assets and documents to your trust capsule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Digital Assets</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="asset-name">Asset Name</Label>
                          <Input id="asset-name" placeholder="e.g., Bitcoin Holdings" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="asset-value">Value (USD)</Label>
                          <Input id="asset-value" placeholder="e.g., 50000" type="number" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="asset-type">Asset Type</Label>
                          <Select>
                            <SelectTrigger id="asset-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="crypto">Cryptocurrency</SelectItem>
                              <SelectItem value="token">Tokenized Asset</SelectItem>
                              <SelectItem value="nft">NFT</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="asset-details">Details/Location</Label>
                          <Input id="asset-details" placeholder="e.g., Wallet address or details" />
                        </div>
                      </div>
                      <Button className="mt-4" variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" /> Upload Proof of Ownership
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      + Add Another Asset
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Documents</h3>
                  <div className="rounded-lg border border-dashed p-8">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FileText className="h-10 w-10 text-muted-foreground" />
                      <h4 className="mt-2 text-lg font-medium">Upload Documents</h4>
                      <p className="mt-1 text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>
                      <p className="mt-1 text-xs text-muted-foreground">Supports PDF, JPG, PNG (max 10MB each)</p>
                      <Button className="mt-4" size="sm">
                        Browse Files
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">Uploaded Documents:</p>
                    <p className="text-sm">No documents uploaded yet</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(3)}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Beneficiaries & Trustees</CardTitle>
                <CardDescription>Assign beneficiaries and trustees to your trust capsule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Beneficiaries</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="beneficiary-name">Full Name</Label>
                          <Input id="beneficiary-name" placeholder="e.g., Jane Doe" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="beneficiary-email">Email</Label>
                          <Input id="beneficiary-email" placeholder="e.g., jane@example.com" type="email" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="beneficiary-wallet">Wallet Address (Optional)</Label>
                          <Input id="beneficiary-wallet" placeholder="e.g., 0x..." />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="beneficiary-relationship">Relationship</Label>
                          <Select>
                            <SelectTrigger id="beneficiary-relationship">
                              <SelectValue placeholder="Select relationship" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="spouse">Spouse</SelectItem>
                              <SelectItem value="child">Child</SelectItem>
                              <SelectItem value="parent">Parent</SelectItem>
                              <SelectItem value="sibling">Sibling</SelectItem>
                              <SelectItem value="friend">Friend</SelectItem>
                              <SelectItem value="charity">Charity</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2 md:col-span-2">
                          <Label htmlFor="beneficiary-allocation">Allocation Percentage</Label>
                          <Input id="beneficiary-allocation" placeholder="e.g., 50" type="number" min="0" max="100" />
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      + Add Another Beneficiary
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Trustees (Optional)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Trustees can help manage the trust and approve distributions
                  </p>
                  <div className="rounded-lg border p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="trustee-name">Full Name</Label>
                        <Input id="trustee-name" placeholder="e.g., John Smith" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="trustee-email">Email</Label>
                        <Input id="trustee-email" placeholder="e.g., john@example.com" type="email" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="trustee-wallet">Wallet Address (Optional)</Label>
                        <Input id="trustee-wallet" placeholder="e.g., 0x..." />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="trustee-role">Role</Label>
                        <Select>
                          <SelectTrigger id="trustee-role">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="executor">Executor</SelectItem>
                            <SelectItem value="advisor">Advisor</SelectItem>
                            <SelectItem value="guardian">Guardian</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(4)}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Automated Triggers & Conditions</CardTitle>
                <CardDescription>Set up conditions for when assets should be released</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="trigger-type">Trigger Type</Label>
                    <Select>
                      <SelectTrigger id="trigger-type">
                        <SelectValue placeholder="Select trigger type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="time">Time-based</SelectItem>
                        <SelectItem value="event">Event-based</SelectItem>
                        <SelectItem value="multi-sig">Multi-signature</SelectItem>
                        <SelectItem value="oracle">Oracle Verification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="text-md font-medium mb-4">Time-based Trigger</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="release-date">Release Date</Label>
                        <Input id="release-date" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="release-time">Release Time (Optional)</Label>
                        <Input id="release-time" type="time" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="text-md font-medium mb-4">Recurring Payments (Optional)</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="payment-frequency">Frequency</Label>
                        <Select>
                          <SelectTrigger id="payment-frequency">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="annually">Annually</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="payment-amount">Amount per Payment</Label>
                        <Input id="payment-amount" placeholder="e.g., 1000" type="number" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="payment-start">Start Date</Label>
                        <Input id="payment-start" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="payment-end">End Date (Optional)</Label>
                        <Input id="payment-end" type="date" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="text-md font-medium mb-4">Additional Conditions (Optional)</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="condition-verification"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="condition-verification" className="text-sm">
                          Require identity verification from beneficiaries
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="condition-approval"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="condition-approval" className="text-sm">
                          Require trustee approval for distributions
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="condition-age"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="condition-age" className="text-sm">
                          Require beneficiary to reach a certain age
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(3)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button>Create Capsule</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
