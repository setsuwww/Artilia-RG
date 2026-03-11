"use client"

import { useState } from "react"
import {
  Send,
  Mail,
  MessageSquare,
  User,
  Phone,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Heart
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulasi pengiriman form
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950" />

        {/* Animated Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-slow-spin" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float-delayed" />

      <div className="mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Talk
            </span>
          </h1>

          <div className="flex justify-center gap-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you.
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="fixed top-6 right-6 z-50 animate-slide-in">
            <div className="bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-sm bg-green-500/90">
              <CheckCircle className="w-5 h-5" />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                  Quick Response
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10">
                      <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Response Time</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Within 24-48 hours on weekdays
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/10">
                      <MapPin className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Remote / Available worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-pink-500/10">
                      <Heart className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Open for</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Collaboration, Freelance, Full-time opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Github, href: "https://github.com", label: "GitHub", color: "blue" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "purple" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "pink" },
                  ].map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300"
                      >
                        <div className={`p-3 rounded-full bg-${social.color}-500/10 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-5 h-5 text-${social.color}-500`} />
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {social.label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Testimonial/Quote */}
            <div className="relative p-6 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl border border-gray-200 dark:border-gray-800">
              <p className="text-sm italic text-gray-600 dark:text-gray-400">
                "The best way to predict the future is to create it. Let's build something amazing together."
              </p>
              <p className="text-xs text-gray-500 mt-2">— Developer</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-pink-500" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-500" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl group-hover/btn:blur-2xl transition-all duration-500" />
                <div className="relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </div>
              </button>

              {/* Form Footer */}
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                I'll get back to you within 24-48 hours. Your email is safe with me.
              </p>
            </form>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Prefer email? You can also reach me at:
            <a href="mailto:developer@example.com" className="text-blue-500 hover:underline">
              developer@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
