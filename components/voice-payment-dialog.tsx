"use client"

import * as React from "react"
import Image from "next/image"
import { Mic, MicOff, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function VoicePaymentDialog() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isListening, setIsListening] = React.useState(false)
  const [transcript, setTranscript] = React.useState("")
  const [amount, setAmount] = React.useState("")
  const [recipient, setRecipient] = React.useState("")
  const [processing, setProcessing] = React.useState(false)
  const { toast } = useToast()

  // Simulate voice recognition
  const toggleListening = () => {
    setIsListening(!isListening)

    if (!isListening) {
      // Simulate voice recognition after a delay
      setTimeout(() => {
        setTranscript("Pay $50 to John Smith")
        setAmount("50")
        setRecipient("John Smith")
        setIsListening(false)
      }, 2000)
    } else {
      setTranscript("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      setIsOpen(false)

      // Reset form
      setTranscript("")
      setAmount("")
      setRecipient("")

      // Show success toast
      toast({
        title: "Payment Successful",
        description: `$${amount} has been sent to ${recipient}`,
      })
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Mic className="h-4 w-4" />
          Voice Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Voice Payment</DialogTitle>
          <DialogDescription>
            Use your voice to make a payment. Say something like "Pay $50 to John Smith".
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center mb-2">
              <Image
                src="/images/voice-dialog.svg"
                alt="Voice Payment Illustration"
                width={200}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="button"
                onClick={toggleListening}
                variant={isListening ? "destructive" : "outline"}
                size="lg"
                className="rounded-full h-16 w-16"
              >
                {isListening ? (
                  <MicOff className="h-6 w-6" />
                ) : (
                  <Mic className="h-6 w-6" />
                )}
              </Button>
            </div>

            {transcript && (
              <div className="bg-muted p-3 rounded-md text-center">
                "{transcript}"
              </div>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="amount" className="text-right">
                Amount
              </label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="col-span-3"
                placeholder="0.00"
                type="number"
                step="0.01"
                min="0"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="recipient" className="text-right">
                Recipient
              </label>
              <Input
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="col-span-3"
                placeholder="Name or account"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={processing}>
              {processing ? "Processing..." : "Send Payment"}
              {!processing && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
