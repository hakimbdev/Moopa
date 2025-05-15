import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import { SocialLinks } from "@/components/social-links"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container flex h-10 items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium">Hotline: 01228 251 328</span>
        </div>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">En</span>
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dc5qncppu/image/upload/v1747319642/2_pyuswd.png"
            alt="Moopa Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold">moopa</span>
        </Link>
        <MainNav />
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="rounded-full">
            <Link href="/download">Download the App</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
