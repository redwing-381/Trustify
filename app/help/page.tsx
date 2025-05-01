import Link from "next/link"
import { ArrowRight, FileText, HelpCircle, MessageSquare, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DashboardHeader } from "@/components/dashboard-header"

export default function HelpPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader heading="Help & Support" text="Find answers and get support" />
      <div className="container pb-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search for help articles..." />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-medium">Documentation</h3>
              <p className="mt-1 text-sm text-muted-foreground">Browse our detailed guides and documentation</p>
              <Button asChild variant="link" className="mt-2">
                <Link href="/docs">View Docs</Link>
              </Button>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-medium">FAQs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Find answers to commonly asked questions</p>
              <Button asChild variant="link" className="mt-2">
                <Link href="#faqs">View FAQs</Link>
              </Button>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-medium">Contact Support</h3>
              <p className="mt-1 text-sm text-muted-foreground">Get in touch with our support team</p>
              <Button asChild variant="link" className="mt-2">
                <Link href="/help/contact">Contact Us</Link>
              </Button>
            </Card>
          </div>

          <Card id="faqs">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to the most common questions about Trustify</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Trustify?</AccordionTrigger>
                  <AccordionContent>
                    Trustify is a blockchain-based legacy and inheritance platform that enables users to securely store,
                    manage, and automate the transfer of real-world assets (RWAs) and payments to beneficiaries using
                    smart contracts on the Pharos Network.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does Trustify ensure the security of my assets?</AccordionTrigger>
                  <AccordionContent>
                    Trustify uses advanced encryption and blockchain technology to secure your assets. All data is
                    encrypted and stored on the blockchain, making it immutable and tamper-proof. Additionally,
                    multi-signature authentication and time-lock features provide extra layers of security.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What types of assets can I store in Trustify?</AccordionTrigger>
                  <AccordionContent>
                    Trustify supports various types of assets, including cryptocurrencies, tokenized real-world assets
                    (RWAs), digital documents (wills, deeds, photos, videos), and automated payment instructions. You
                    can create different capsules for different types of assets or purposes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do beneficiaries claim their assets?</AccordionTrigger>
                  <AccordionContent>
                    Beneficiaries receive notifications when assets are available to them. They can log in to the
                    Beneficiary Portal to view and claim their assigned assets once the conditions set by you are met.
                    They may need to complete identity verification depending on your settings.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What happens if I lose access to my account?</AccordionTrigger>
                  <AccordionContent>
                    Trustify provides multiple account recovery options, including email recovery, SMS recovery, and
                    recovery through trusted contacts (trustees). We recommend setting up all available recovery methods
                    to ensure you never lose access to your account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Is KYC verification required?</AccordionTrigger>
                  <AccordionContent>
                    KYC (Know Your Customer) verification is optional but recommended for legal compliance and to ensure
                    smooth asset transfers. Completing KYC verification helps prevent fraud and ensures that your
                    beneficiaries can receive their assets without legal complications.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>How are automated payments triggered?</AccordionTrigger>
                  <AccordionContent>
                    Automated payments can be triggered based on various conditions you set, including specific dates,
                    recurring schedules, milestone events, or multi-signature approvals. The smart contracts
                    automatically execute these payments when the conditions are met.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Can I revoke or modify a trust capsule?</AccordionTrigger>
                  <AccordionContent>
                    Yes, as long as the capsule has not been triggered or executed, you can modify or revoke it at any
                    time. Once a capsule has been triggered and assets have been transferred, those specific
                    transactions cannot be reversed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link href="/help/all-faqs">
                  View all FAQs <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Educational Resources</CardTitle>
              <CardDescription>Learn more about legacy planning and blockchain security</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-md font-medium">Getting Started with Trustify</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A comprehensive guide to setting up your first trust capsule
                  </p>
                  <Button asChild variant="link" className="mt-2 px-0">
                    <Link href="/docs/getting-started">Read Guide</Link>
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-md font-medium">Understanding Smart Contracts</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Learn how smart contracts work to secure your legacy
                  </p>
                  <Button asChild variant="link" className="mt-2 px-0">
                    <Link href="/docs/smart-contracts">Read Guide</Link>
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-md font-medium">Legacy Planning Best Practices</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tips and strategies for effective digital estate planning
                  </p>
                  <Button asChild variant="link" className="mt-2 px-0">
                    <Link href="/docs/legacy-planning">Read Guide</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg border bg-muted/40 p-6 text-center">
            <h3 className="text-lg font-medium">Still need help?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Button asChild>
                <Link href="/help/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/help/live-chat">Live Chat</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
