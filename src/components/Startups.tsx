'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Startup {
  name: string
  description: string
  status: string
  details: string[]
  website?: string
}

const Startups = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const startupData: Startup[] = [
    {
      name: 'HeyApnaGhr',
      description: 'AI-powered housing and PG discovery platform that helps students and working professionals find rooms, PGs, hostels, and compatible roommates using smart matching algorithms.',
      status: 'Active',
      website: 'https://apanaghr.in',
      details: ['B2C + B2B Platform', 'Early-Stage Startup', 'AI Roommate Matching', 'End-to-End Discovery'],
    },
    {
      name: 'Fasal Seva',
      description: 'AI-powered smart farming platform that helps farmers make data-driven decisions using satellite data, IoT sensors, and intelligent crop advisory systems.',
      status: 'Active',
      website: 'https://fasalseva.app',
      details: ['AgriTech Platform (B2C + B2B)', 'Early-Stage Product', 'AI-based Crop Recommendations', 'Multi-language Support'],
    },
    {
      name: 'Stock Connect',
      description: 'Social media platform focused on stock market news, discussions, and insights, enabling users to share opinions, analyze trends, and engage with a finance-focused community.',
      status: 'In Development',
      details: ['FinTech / Social Platform (B2C)', 'Early-Stage Product', 'Stock Market Discussions', 'Community Insights'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="startups" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Entrepreneurial Ventures
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto" />
          </motion.div>

          {/* Startups Timeline */}
          <div className="space-y-8">
            {startupData.map((startup, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="bg-gray-800/50 rounded-lg p-6 md:p-8 border border-teal-400/20 hover:border-teal-400/60 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {startup.name}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                        {startup.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <span
                        className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${
                          startup.status === 'Active'
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                        }`}
                      >
                        {startup.status}
                      </span>
                      {startup.website && (
                        <a
                          href={startup.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 border border-teal-400/30 rounded-lg hover:bg-teal-500/30 hover:border-teal-400/60 transition-all font-semibold text-sm"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {startup.details.map((detail, i) => (
                      <div
                        key={i}
                        className="bg-gray-900/50 rounded-lg p-3 border border-teal-400/10"
                      >
                        <p className="text-teal-400 font-semibold text-sm">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Stats */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              { label: 'Bootstrapped', value: '✓', icon: '💰' },
              { label: 'Active Users', value: '500+', icon: '👥' },
              { label: 'Team Members', value: '3', icon: '🚀' },
              { label: 'Years of Experience', value: '2+', icon: '⏱️' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-teal-500/15 to-blue-500/10 rounded-lg p-8 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <span className="text-4xl">{stat.icon}</span>
                  <p className="text-gray-400 text-sm font-medium text-center">{stat.label}</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Startups
