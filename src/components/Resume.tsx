'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Resume = () => {
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

  const resumeFiles = [
    {
      title: 'Full Resume',
      description: 'Complete professional resume with full work history and achievements',
      format: 'PDF',
      downloadUrl: 'G:\\portfolio\\portfolio\\src\\components\\shiv (3).pdf',
    },
    {
      title: 'CV (Curriculum Vitae)',
      description: 'Detailed curriculum vitae for academic and research positions',
      fileSize: '280 KB',
      format: 'PDF',
      downloadUrl: '/resume/Shivpujan_Kumar_CV.pdf',
    },
    {
      title: 'Technical Resume',
      description: 'Specialized resume highlighting technical skills and projects',
      fileSize: '200 KB',
      format: 'PDF',
      downloadUrl: '/resume/Shivpujan_Kumar_Technical_Resume.pdf',
    },
  ]

  return (
    <section id="resume" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
                Resume & Documents
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Download my professional resume and curriculum vitae
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto" />
          </motion.div>

          {/* Resume Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {resumeFiles.map((resume, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-teal-400/20 rounded-lg p-6 hover:border-teal-400/60 transition-all duration-300 flex flex-col">
                  {/* Document Icon */}
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-teal-500/20 rounded-lg">
                      <svg
                        className="w-8 h-8 text-teal-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{resume.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {resume.description}
                  </p>

                  {/* File Info */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="text-gray-400">{resume.format}</span>
                    <span className="text-gray-400">{resume.fileSize}</span>
                  </div>

                  {/* Download Button */}
                  <motion.a
                    href={resume.downloadUrl}
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900 font-semibold rounded-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <svg
                      className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resume Preview Section */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-teal-400/20 rounded-lg p-8 hover:border-teal-400/40 transition-colors"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Professional Summary
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Experience</h4>
                  <p className="text-gray-300">
                    5+ years of full-stack development experience with focus on scalable applications, 
                    cloud infrastructure, and emerging technologies.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Education</h4>
                  <p className="text-gray-300">
                    Bachelor's degree in Computer Science with specialization in AI/ML and 
                    multiple industry certifications.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Key Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Stack Dev', 'Cloud Arch', 'AI/ML', 'DevOps', 'Leadership', 'Startups'].map(
                      (skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-400/30"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Certifications</h4>
                  <p className="text-gray-300">
                    AWS Solutions Architect, Google Cloud Professional, Kubernetes Certified
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Certifications', value: '5+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-800/50 rounded-lg p-4 border border-teal-400/10 text-center"
              >
                <p className="text-teal-400 text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-gray-300 mb-6">
              Can't find the right resume format? Contact me for a customized version.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-teal-500 text-gray-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Request Custom Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
