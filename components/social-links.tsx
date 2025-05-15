import Link from "next/link"
import { Linkedin, Facebook, Instagram } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
        <Instagram className="h-4 w-4" />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  )
}
