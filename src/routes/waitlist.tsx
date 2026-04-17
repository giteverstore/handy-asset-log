import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/waitlist')({
  component: WaitlistPage,
})

function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const existing = JSON.parse(localStorage.getItem('waitlist') || '[]')
    localStorage.setItem('waitlist', JSON.stringify([...existing, email]))

    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-fountor-bg px-4">
      <div className="w-full max-w-md bg-white border border-fountor-border rounded-2xl p-8 text-center">

        <h1 className="text-2xl font-semibold">Join the Waitlist</h1>

        {submitted ? (
          <>
            <p className="mt-4 text-green-600">You're on the list 🚀</p>
            <Link to="/" className="block mt-4 text-fountor-orange">Go home</Link>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" className="w-full bg-fountor-orange text-white">
              Join Waitlist
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}