'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'

const Footer = () => {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '0fh290fG-PvuUuzSY')
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_v6hj7a8'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_oaq3i0u'

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'shivpujankumar02002@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        }
      )

      setSuccessMessage('✅ Your message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSuccessMessage('')
      }, 4000)
    } catch (err: any) {
      console.error('Error sending email:', err)
      setErrorMessage('❌ Failed to send message. Please try again.')

      setTimeout(() => {
        setErrorMessage('')
      }, 4000)
    } finally {
      setLoading(false)
    }
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

  const handleCertificationClick = (pdfPath: string) => {
    window.open(pdfPath, '_blank')
  }

  const certifications = [
    {
      icon: '☁️',
      title: 'AWS Academy Graduate',
      issuer: 'AWS Academy Cloud Foundations',
      pdfPath: '/certification/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20241004-7-45q8lw.pdf',
    },
    {
      icon: '🔐',
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco',
      pdfPath: '/certification/Cybersecurity_Essentials_Badge20241004-7-jndl9r.pdf',
    },
    {
      icon: '🛡️',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      pdfPath: '/certification/Introduction_to_Cybersecurity_Badge20241004-7-ro7pzh.pdf',
    },
    {
      icon: '�',
      title: 'Introduction to Android Development',
      issuer: 'Infosys',
      pdfPath: '/certification/introduction android devel.pdf',
    },
    {
      icon: '🐍',
      title: 'Machine Learning Using Python',
      issuer: 'Infosys',
      pdfPath: '/certification/machine learning using python.pdf',
    },
    {
      icon: '🏪',
      title: 'Flipkart Grid Participation',
      issuer: 'Unstop (by Dare2Compete)',
      pdfPath: '/certification/unstop flipkart.pdf',
    },
  ]

  return (
    <footer className="bg-gray-900/80 border-t border-teal-400/20" ref={ref} id="certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Certifications Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Certifications & Credentials
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-12" />

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => handleCertificationClick(cert.pdfPath)}
                >
                  <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-teal-400/20 rounded-lg p-6 hover:border-teal-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 glass">
                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-teal-300 text-sm font-semibold mb-3">
                      {cert.issuer}
                    </p>

                    {/* View PDF Button */}
                    <div className="mt-4 inline-flex items-center gap-2 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                      <span>View Certificate</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Get In Touch Section */}
          <motion.div className="mb-16 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-teal-400/20 rounded-lg p-8" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing.
            </p>

            {/* Contact Form and Call Section */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-teal-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-teal-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      placeholder="Project inquiry"
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-teal-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-teal-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-teal-400 to-blue-400 text-gray-900 font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>

              {/* Schedule Call Section */}
              <motion.div 
                className="flex flex-col justify-between bg-gradient-to-br from-teal-400/10 to-blue-400/10 border border-teal-400/30 rounded-lg p-6"
                variants={itemVariants}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Prefer a quick chat?</h3>
                  <p className="text-gray-300 mb-6">
                    Schedule a call with me and let's discuss your project in detail.
                  </p>
                </div>

                <button
                  onClick={() => window.open('https://calendly.com/shivpujankumar', '_blank')}
                  className="bg-gradient-to-r from-teal-400 to-blue-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 self-start"
                >
                  Schedule a Call
                </button>
              </motion.div>
            </div>

            {/* Success/Error Notification */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
                >
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg shadow-lg shadow-green-500/50 font-semibold flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    {successMessage}
                  </div>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
                >
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg shadow-lg shadow-red-500/50 font-semibold flex items-center gap-3">
                    <span className="text-2xl">❌</span>
                    {errorMessage}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            className="border-t border-teal-400/20 pt-8"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* About */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">About</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Developer & entrepreneur passionate about building innovative solutions and scalable applications.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {['About', 'Projects', 'Startups', 'Resume', 'Contact'].map(
                    (link, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${link.toLowerCase()}`}
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: '💼',
                      link: 'https://www.linkedin.com/in/shivpujan-kumar-329a54266',
                      label: 'LinkedIn',
                    },
                    {
                      icon: '🔗',
                      link: 'https://github.com/preetampatel9478',
                      label: 'GitHub',
                    },
                    {
                      icon: '𝕏',
                      link: 'https://twitter.com/Preetam94785232',
                      label: 'Twitter',
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-teal-400 transition-colors hover:scale-110"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-teal-400/20 pt-6 text-center text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} Shivpujan Kumar. All rights reserved.
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
