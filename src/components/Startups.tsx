'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Startup {
  name: string
  description: string
  status: string
  details: string[]
}

const Startups = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const startupData: Startup[] = [
    {
      name: 'DataFlow Analytics',
      description: 'AI-powered data analytics platform for businesses to extract insights from unstructured data.',
      status: 'Active',
      details: ['B2B SaaS', 'Series A Funded', '50+ Enterprise Clients'],
    },
    {
      name: 'CodementorPro',
      description: 'Platform connecting junior developers with experienced mentors for personalized learning and career guidance.',
      status: 'Active',
      details: ['EdTech', 'Community of 10K+', 'Bootstrapped'],
    },
    {
      name: 'CloudGuard Solutions',
      description: 'Cybersecurity SaaS providing real-time threat detection and vulnerability management for small businesses.',
      status: 'In Development',
      details: ['Cybersecurity', 'Pre-Launch', 'Seeking Investors'],
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
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {startup.name}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                        {startup.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${
                          startup.status === 'Active'
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                        }`}
                      >
                        {startup.status}
                      </span>
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
            className="mt-16 grid md:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {[
              { label: 'Total Funding Raised', value: '$2.5M+' },
              { label: 'Active Customers', value: '10K+' },
              { label: 'Team Members', value: '50+' },
              { label: 'Years Experience', value: '7+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-lg p-6 border border-teal-400/20 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-teal-400">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Startups
