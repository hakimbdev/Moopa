"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    name: "James Wilson",
    role: "HR Director",
    company: "Tech Co.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746003572/elegant-man-suit_mcbngu.jpg",
    quote: "Since implementing Moopa, we've seen a 30% reduction in financial stress among our employees and a measurable increase in productivity."
  },
  {
    name: "Clara T. Johnson",
    role: "CFO",
    company: "Retail Inc.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1747326965/Clara-Tauson-300x400_kdjqcu.jpg",
    quote: "Moopa has been a game-changer for our employee benefits package. It's easy to implement and our team loves the flexibility it provides."
  },
  {
    name: "Alex Johnson",
    role: "Employee",
    company: "Healthcare Ltd.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746003555/11434191_chbm6b.png",
    quote: "Having access to my earned wages when I need them has reduced my stress significantly. The app is intuitive and the financial education resources are incredibly helpful."
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useIsMobile()

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isMobile, testimonials.length])

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-secondary py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
      </div>
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl mb-4 animate-fade-in">
            Trusted by leading companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            See how Moopa is transforming financial wellbeing for teams across industries
          </p>
        </div>

        {/* Mobile View */}
        <div className="relative px-4 md:hidden">
          {!isLoaded ? (
            <Card className="border-none shadow-lg overflow-hidden bg-white/95 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-16 w-16 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-5 w-32 bg-primary/10 rounded animate-pulse"></div>
                  <div className="h-4 w-24 bg-primary/10 rounded animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2">
                  <div className="h-4 w-full bg-primary/10 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-primary/10 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-primary/10 rounded animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-none shadow-lg animate-fade-in overflow-hidden bg-white/95 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-16 w-16 border-2 border-primary/20 shadow-md overflow-hidden">
                  <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="object-cover" />
                  <AvatarFallback>{testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="relative">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground pl-4">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-4">
                <Button variant="ghost" size="icon" onClick={prevTestimonial} className="rounded-full">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-1">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-primary/20'}`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
                <Button variant="ghost" size="icon" onClick={nextTestimonial} className="rounded-full">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          {!isLoaded ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((index) => (
                <Card key={index} className="border-none shadow-lg overflow-hidden bg-white/95 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="h-16 w-16 rounded-full bg-primary/10 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-5 w-32 bg-primary/10 rounded animate-pulse"></div>
                      <div className="h-4 w-24 bg-primary/10 rounded animate-pulse"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-primary/10 rounded animate-pulse"></div>
                      <div className="h-4 w-full bg-primary/10 rounded animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-primary/10 rounded animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden bg-white/95 backdrop-blur-sm hover:scale-[1.02]" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar className="h-16 w-16 border-2 border-primary/20 shadow-md overflow-hidden">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="relative">
                      <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground pl-4">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
