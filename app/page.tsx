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
      {/* Animated background elements - Mobile optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-purple-600/15 to-blue-600/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-600/15 to-cyan-400/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-purple-600/8 to-teal-400/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Brand */}
        <div className="animate-slide-up mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">UniNest.Network</h1>
          </div>
        </div>

        {/* Main heading */}
        <div className="animate-slide-up mb-6 sm:mb-8" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-balance px-2">
            Something{" "}
            <span className="gradient-text animate-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Revolutionary
            </span>
            <br />
            For Students
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty px-4">
            The ultimate platform for student collaboration, networking, and social connection. Get ready for something
            extraordinary.
          </p>
        </div>

        {/* Email signup */}
        <div className="animate-slide-up mb-8 sm:mb-12 w-full max-w-lg mx-auto px-4" style={{ animationDelay: "0.4s" }}>
          <Card className="glass p-4 sm:p-6 lg:p-8 animate-pulse-border">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Be the First to Know</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Join thousands of students waiting for launch</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your student email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background/50 border-white/20 text-white placeholder:text-white/60 focus:border-purple-500 text-sm sm:text-base"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 sm:py-3 animate-glow text-sm sm:text-base"
                  >
                    Notify Me
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                  <span className="text-xl sm:text-2xl">✨</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">You're In!</h3>
                <p className="text-sm text-muted-foreground">
                  We'll notify you the moment we launch. Get ready to be amazed!
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Features preview */}
        <div
          className="animate-slide-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12 px-4"
          style={{ animationDelay: "0.6s" }}
        >
          <Card className="glass p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:animate-glow">
              <span className="text-lg sm:text-xl">🎓</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Academic Networking</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Connect with peers in your field and build lasting academic relationships
            </p>
          </Card>

          <Card className="glass p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:animate-glow">
              <span className="text-lg sm:text-xl">🤝</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Collaborate & Share</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Work together on projects and share knowledge with your community
            </p>
          </Card>

          <Card className="glass p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:animate-glow">
              <span className="text-lg sm:text-xl">📱</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Social Campus</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stay connected with campus life and discover new opportunities
            </p>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 text-center text-muted-foreground text-xs sm:text-sm px-4">
          <p>© 2025 UniNest. All rights reserved. Built for students, by students.</p>
        </footer>
      </div>
    </div>
  )
}
