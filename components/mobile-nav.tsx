"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-primary to-primary-dark text-primary-foreground p-0 border-none">
        <div className="flex flex-col h-full p-6">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

          <div className="flex items-center justify-between mb-8 relative z-10">
            <span className="text-xl font-bold">Menu</span>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </SheetClose>
          </div>

          <nav className="flex flex-col gap-6 relative z-10">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors hover:text-white ${
                pathname === "/" ? "text-white" : "text-primary-foreground/80"
              }`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/faq"
              className={`text-lg font-medium transition-colors hover:text-white ${
                pathname === "/faq" ? "text-white" : "text-primary-foreground/80"
              }`}
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/careers"
              className={`text-lg font-medium transition-colors hover:text-white ${
                pathname === "/careers" ? "text-white" : "text-primary-foreground/80"
              }`}
              onClick={() => setOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-colors hover:text-white ${
                pathname === "/contact" ? "text-white" : "text-primary-foreground/80"
              }`}
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="mt-auto pt-8 relative z-10">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full rounded-full shadow-lg group transition-transform hover:scale-105"
            >
              <Link href="/download" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2">
                Download the App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <div className="mt-6 text-center text-sm text-primary-foreground/60">
              <p>Need help? <Link href="/faq" className="text-white underline underline-offset-4" onClick={() => setOpen(false)}>Visit our FAQ</Link></p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
