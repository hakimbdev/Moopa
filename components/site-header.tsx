"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { SocialLinks } from "@/components/social-links"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}>
        <div className="container flex h-10 items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium hidden xs:inline">Hotline: 01228 251 328</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <SocialLinks />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium hidden xs:inline">En</span>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative overflow-hidden rounded-md">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1747319642/2_pyuswd.png"
                alt="Moopa Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold">moopa</span>
          </Link>
          <MainNav />
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="rounded-full hidden md:flex shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/download">Download the App</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary-dark ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </>
  )
}
