import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link
        href="/"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Home
      </Link>
      <Link
        href="/faq"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/faq" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        FAQ
      </Link>
      <Link
        href="/careers"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/careers" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Careers
      </Link>
      <Link
        href="/contact"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/contact" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Contact Us
      </Link>
    </nav>
  )
}
