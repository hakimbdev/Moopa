import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl max-w-[800px]">
            Ready to transform your team&apos;s financial wellbeing?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-[600px]">
            Join thousands of companies already using Moopa to boost productivity and employee satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
