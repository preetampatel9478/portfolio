'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, send form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-4" />
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
          >
            {[
              {
                icon: '✉️',
                label: 'Email',
                value: 'shivpujankumar02002@gmail.com',
                link: 'mailto:shivpujankumar02002@gmail.com',
              },
              {
                icon: '💼',
                label: 'LinkedIn',
                value: 'linkedin.com/in/shivpujan-kumar',
                link: 'https://www.linkedin.com/in/shivpujan-kumar-329a54266',
              },
              {
                icon: '🔗',
                label: 'GitHub',
                value: 'github.com/preetampatel9478',
                link: 'https://github.com/preetampatel9478',
              },
              {
                icon: '𝕏',
                label: 'Twitter',
                value: '@Preetam94785232',
                link: 'https://twitter.com/Preetam94785232',
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-900/50 border border-teal-400/20 rounded-lg p-6 hover:border-teal-400/60 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{contact.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-teal-400 hover:text-teal-300 transition-colors">
                    {contact.value || contact.link.replace('mailto:', '').replace('https://', '')}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-900/50 border border-teal-400/20 rounded-lg p-8 glass"
            variants={itemVariants}
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-green-400"
              >
                ✓ Thank you! I'll get back to you soon.
              </motion.div>
            )}

            {/* Name and Email Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-teal-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-teal-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-teal-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-teal-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-teal-500 text-gray-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors shadow-lg hover:shadow-teal-500/50"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* CTA Section */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-300 mb-6">
              Prefer a quick chat? Schedule a call with me.
            </p>
            <a
              href="https://calendly.com/shivpujan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400/10 transition-colors"
            >
              Schedule a Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
