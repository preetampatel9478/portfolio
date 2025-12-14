'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

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

  const certifications = [
    {
      icon: '🏆',
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      icon: '☁️',
      title: 'AWS Academy Graduate',
      issuer: 'AWS Academy Cloud Foundations',
      year: '2023',
    },
    {
      icon: '🔐',
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco',
      year: '2022',
    },
    {
      icon: '�️',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2022',
    },
    {
      icon: '�',
      title: 'Introduction to Android Development',
      issuer: 'Infosys',
      year: '2022',
    },
    {
      icon: '🤖',
      title: 'Machine Learning Using Python',
      issuer: 'Infosys',
      year: '2023',
    },
    {
      icon: '⚙️',
      title: 'Kubernetes Certified',
      issuer: 'Linux Foundation',
      year: '2022',
    },
    {
      icon: '☁️',
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2023',
    },
    {
      icon: '📊',
      title: 'Data Science Professional',
      issuer: 'Coursera',
      year: '2023',
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
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-teal-400/20 rounded-lg p-6 hover:border-teal-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 glass">
                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-teal-300 text-sm font-semibold mb-2">
                      {cert.issuer}
                    </p>

                    {/* Year */}
                    <p className="text-gray-400 text-xs">
                      Issued {cert.year}
                    </p>

                    {/* Hover Icon */}
                    <div className="mt-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
