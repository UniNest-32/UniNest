"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background grid-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/15 to-blue-600/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-cyan-400/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/8 to-teal-400/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Brand */}
        <div className="animate-slide-up mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">UniNest.Network</h1>
          </div>
        </div>

        {/* Main heading */}
        <div className="animate-slide-up mb-8" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-balance">
            Something{" "}
            <span className="gradient-text animate-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Revolutionary
            </span>
            <br />
            For Students
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            The ultimate platform for student collaboration, networking, and social connection. Get ready for something
            extraordinary.
          </p>
        </div>

        {/* Email signup */}
        <div className="animate-slide-up mb-12" style={{ animationDelay: "0.4s" }}>
          <Card className="glass p-8 max-w-md mx-auto animate-pulse-border">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Be the First to Know</h3>
                  <p className="text-muted-foreground">Join thousands of students waiting for launch</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your student email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-white/20 text-white placeholder:text-white/60 focus:border-purple-500"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 animate-glow"
                  >
                    Notify Me
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">You're In!</h3>
                <p className="text-sm text-muted-foreground">
                  We'll notify you the moment we launch. Get ready to be amazed!
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Features preview */}
        <div
          className="animate-slide-up grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          style={{ animationDelay: "0.6s" }}
        >
          <Card className="glass p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <span className="text-xl">🎓</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Academic Networking</h3>
            <p className="text-sm text-muted-foreground">
              Connect with peers in your field and build lasting academic relationships
            </p>
          </Card>

          <Card className="glass p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <span className="text-xl">🤝</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Collaborate & Share</h3>
            <p className="text-sm text-muted-foreground">
              Work together on projects and share knowledge with your community
            </p>
          </Card>

          <Card className="glass p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <span className="text-xl">📱</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Social Campus</h3>
            <p className="text-sm text-muted-foreground">
              Stay connected with campus life and discover new opportunities
            </p>
          </Card>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-muted-foreground text-sm">
          <p>© 2025 UniNest. All rights reserved. Built for students, by students.</p>
        </footer>
      </div>
    </div>
  )
}
