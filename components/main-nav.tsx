import Link from "next/link"

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
        Home
      </Link>
      <Link href="/faq" className="text-sm font-medium hover:underline underline-offset-4">
        FAQ
      </Link>
      <Link href="/careers" className="text-sm font-medium hover:underline underline-offset-4">
        Careers
      </Link>
      <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
        Contact Us
      </Link>
    </nav>
  )
}
