import { CreditCard, DollarSign, Mic, PiggyBank, Wallet } from "lucide-react"
import { VoicePaymentDialog } from "@/components/voice-payment-dialog"
import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl mb-16">
          How we boost your team&apos;s financial wellbeing
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center">
              <Image
                src="/images/early-wages.svg"
                alt="Early Access to Wages"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold">Early Access to Wages</h3>
            <p className="text-muted-foreground">
              Employees can access a portion of their earned wages before payday to cover unexpected expenses.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center">
              <Image
                src="/images/bill-management.svg"
                alt="Bill Management"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold">Bill Management</h3>
            <p className="text-muted-foreground">
              Easily track, schedule, and pay bills from one convenient dashboard to avoid late fees.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center">
              <Image
                src="/images/voice-payment.svg"
                alt="Voice Payments"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold">Voice Payments</h3>
            <p className="text-muted-foreground">
              Make quick and secure payments across different accounts using simple voice commands.
            </p>
            <div className="mt-2">
              <VoicePaymentDialog />
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center">
              <Image
                src="/images/savings-goals.svg"
                alt="Savings Goals"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold">Savings Goals</h3>
            <p className="text-muted-foreground">
              Set up automatic savings for specific goals and build financial security over time.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center">
              <Image
                src="/images/financial-education.svg"
                alt="Financial Education"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold">Financial Education</h3>
            <p className="text-muted-foreground">
              Access personalized financial tips and resources to improve financial literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
