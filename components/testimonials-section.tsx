import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl mb-16">
          Trusted by leading companies
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src="/images/avatar-jane.svg" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">Jane Doe</h3>
                <p className="text-sm text-muted-foreground">HR Director, Tech Co.</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Since implementing Moopa, we've seen a 30% reduction in financial stress among our employees and a
                measurable increase in productivity."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src="/images/avatar-john.svg" alt="John Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">John Smith</h3>
                <p className="text-sm text-muted-foreground">CFO, Retail Inc.</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Moopa has been a game-changer for our employee benefits package. It's easy to implement and our team
                loves the flexibility it provides."
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src="/images/avatar-alex.svg" alt="Alex Johnson" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">Alex Johnson</h3>
                <p className="text-sm text-muted-foreground">Employee, Healthcare Ltd.</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Having access to my earned wages when I need them has reduced my stress significantly. The app is
                intuitive and the financial education resources are incredibly helpful."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
