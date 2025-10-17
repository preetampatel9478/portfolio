'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
                  <div className="text-3xl font-bold text-teal-400">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-teal-400">15+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-teal-400">3</div>
                  <div className="text-sm text-gray-400">Startups</div>
                </div>
              </div>
            </motion.div>

            {/* Image/Visual Element */}
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden glass"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="space-y-4 text-center">
                  <div className="text-6xl font-bold text-teal-400/30">SK</div>
                  <div className="space-y-2">
                    <p className="text-gray-400">Developer</p>
                    <p className="text-gray-400">Founder</p>
                    <p className="text-gray-400">Innovator</p>
                  </div>
                </div>
              </div>

              {/* Animated Elements */}
              <motion.div
                className="absolute top-8 right-8 w-24 h-24 border-2 border-teal-400/30 rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-16 h-16 border-2 border-blue-400/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
