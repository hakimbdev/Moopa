import Link from "next/link"
import Image from "next/image"
import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
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
            <p className="text-primary-foreground/80">
              Secure your team&apos;s financial wellbeing with easy access to earned wages, bill management, and
              financial education.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">123 Financial Street</li>
              <li className="text-primary-foreground/80">London, UK</li>
              <li className="text-primary-foreground/80">01228 251 328</li>
              <li className="text-primary-foreground/80">info@moopa.com</li>
            </ul>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Moopa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
