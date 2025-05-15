"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/50 to-secondary">
      {/* Background shapes */}
      <div className="absolute inset-0 bg-white hidden md:block" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }}></div>
      <div className="absolute inset-0 bg-white md:hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)" }}></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl hidden lg:block"></div>

      <div className="container relative py-12 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-fade-in">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                New: Voice Payment Technology
              </div>

              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
                Secure your team&apos;s financial wellbeing
              </h1>

              <p className="max-w-[600px] text-base text-muted-foreground md:text-lg lg:text-xl animate-fade-in animation-delay-200">
                Financial stress costs companies billions of dollars in lost productivity, affecting team performance
                and wellbeing. Moopa gives your team the power to get paid easily, pay their bills, and deal with the
                unexpected at any time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl group"
              >
                <Link href="/download" className="flex items-center justify-center gap-2">
                  Download the App
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 animate-fade-in animation-delay-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">+1k</div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">+2k</div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">+5k</div>
              </div>
              <span>Trusted by 8,000+ companies worldwide</span>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[450px] h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1747327907/moopahero_auykrs.png"
                alt="Financial wellbeing illustration"
                fill
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
