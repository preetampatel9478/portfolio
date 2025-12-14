'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate developer and entrepreneur with a deep interest in building scalable applications and innovative solutions. With 5+ years of experience in full-stack development, I've worked on diverse projects ranging from e-commerce platforms to AI-powered SaaS applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Beyond coding, I'm a serial entrepreneur who loves identifying problems and building products to solve them. My journey has been about continuous learning, experimenting with emerging technologies, and pushing the boundaries of what's possible.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding or working on startups, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-teal-400">20+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-teal-400">5+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-teal-400">2</div>
                  <div className="text-sm text-gray-400">Startups</div>
                </div>
              </div>
            </motion.div>

            {/* Image/Visual Element */}
            <motion.div
              className="relative h-full min-h-96"
              variants={itemVariants}
            >
              {/* Main Profile Card */}
              <div className="relative w-full h-full bg-gradient-to-br from-teal-900/30 to-blue-900/30 border-2 border-teal-400/40 rounded-2xl overflow-hidden glass shadow-2xl shadow-teal-500/20 flex flex-col">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5" />
                
                {/* Profile Image Section */}
                <div className="relative flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
                  <div className="relative w-full h-full max-w-xs">
                    <Image
                      src="/profile.jpg"
                      alt="Shivpujan Kumar"
                      fill
                      className="object-cover rounded-xl"
                      priority
                    />
                    {/* Image Border Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400/20 to-blue-400/20 pointer-events-none" />
                  </div>
                </div>

                {/* Info Section */}
                <div className="relative border-t border-teal-400/20 px-6 py-8 bg-gradient-to-r from-teal-900/20 to-blue-900/20">
                  <div className="text-center space-y-3">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                      SHIVPUJAN KUMAR
                    </h3>
                    <div className="space-y-2">
                      <p className="text-teal-300 font-semibold">Developer</p>
                      <p className="text-teal-300 font-semibold">Founder</p>
                      <p className="text-teal-300 font-semibold">Innovator</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 border-2 border-teal-400/30 rounded-lg opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute bottom-32 left-4 w-12 h-12 border-2 border-blue-400/20 rounded-full opacity-50"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
