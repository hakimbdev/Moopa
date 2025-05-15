import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-white/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl max-w-[800px] animate-fade-in">
            Ready to transform your team&apos;s financial wellbeing?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/90 max-w-[600px] animate-fade-in animation-delay-200">
            Join thousands of companies already using Moopa to boost productivity and employee satisfaction.
          </p>
          <div className="flex justify-center w-full animate-fade-in animation-delay-400">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full shadow-lg w-full max-w-md transition-transform hover:scale-105 group"
            >
              <Link href="/download" className="flex items-center justify-center gap-2">
                Download the App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
