import { CreditCard, DollarSign, Mic, PiggyBank, Wallet } from "lucide-react"
import { VoicePaymentDialog } from "@/components/voice-payment-dialog"
import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl mb-4 animate-fade-in">
            How we boost your team&apos;s financial wellbeing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Our comprehensive suite of financial tools helps employees manage their finances with confidence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4 animate-fade-in animation-delay-100">
            <div className="flex h-24 w-24 items-center justify-center bg-primary/5 rounded-full p-4 mb-2">
              <Image
                src="/images/early-wages.svg"
                alt="Early Access to Wages"
                width={200}
                height={200}
                className="object-contain transition-transform hover:scale-110 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-primary">Early Access to Wages</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Employees can access a portion of their earned wages before payday to cover unexpected expenses.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4 animate-fade-in animation-delay-200">
            <div className="flex h-24 w-24 items-center justify-center bg-primary/5 rounded-full p-4 mb-2">
              <Image
                src="/images/bill-management.svg"
                alt="Bill Management"
                width={200}
                height={200}
                className="object-contain transition-transform hover:scale-110 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-primary">Bill Management</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Easily track, schedule, and pay bills from one convenient dashboard to avoid late fees.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4 animate-fade-in animation-delay-300">
            <div className="flex h-24 w-24 items-center justify-center bg-primary/5 rounded-full p-4 mb-2">
              <Image
                src="/images/voice-payment.svg"
                alt="Voice Payments"
                width={200}
                height={200}
                className="object-contain transition-transform hover:scale-110 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-primary">Voice Payments</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Make quick and secure payments across different accounts using simple voice commands.
            </p>
            <div className="mt-2">
              <VoicePaymentDialog />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4 animate-fade-in animation-delay-400">
            <div className="flex h-24 w-24 items-center justify-center bg-primary/5 rounded-full p-4 mb-2">
              <Image
                src="/images/savings-goals.svg"
                alt="Savings Goals"
                width={200}
                height={200}
                className="object-contain transition-transform hover:scale-110 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-primary">Savings Goals</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Set up automatic savings for specific goals and build financial security over time.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4 animate-fade-in animation-delay-500">
            <div className="flex h-24 w-24 items-center justify-center bg-primary/5 rounded-full p-4 mb-2">
              <Image
                src="/images/financial-education.svg"
                alt="Financial Education"
                width={200}
                height={200}
                className="object-contain transition-transform hover:scale-110 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-primary">Financial Education</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Access personalized financial tips and resources to improve financial literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
