"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactSimple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section className="px-6 py-20">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Feel free to reach out for collaboration or just a friendly hello.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 text-sm text-green-600 bg-green-50 border border-green-200 px-4 py-3 rounded-lg">
            Message sent successfully.
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl"
        >
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send size={16} />}
          </button>
        </form>
      </div>
    </section>
  )
}
