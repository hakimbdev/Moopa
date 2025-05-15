import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }}></div>
      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                Secure your team&apos;s financial wellbeing
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Financial stress costs companies billions of dollars in lost productivity, affecting team performance
                and wellbeing. Moopa gives your team the power to get paid easily, pay their bills, and deal with the
                unexpected at any time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[300px] w-[400px] sm:h-[350px] sm:w-[500px] md:h-[400px] md:w-[600px]">
              <Image
                src="/images/hero-finance.svg"
                alt="Financial wellbeing illustration"
                width={600}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
