'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

interface ResumeModal {
  isOpen: boolean
  title: string
  downloadUrl: string
  fileName: string
}

const Resume = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [modal, setModal] = useState<ResumeModal>({
    isOpen: false,
    title: '',
    downloadUrl: '',
    fileName: '',
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

  const resume = {
    title: 'Full Resume',
    description: 'Complete professional resume with full work history and achievements',
    fileSize: '250 KB',
    format: 'PDF',
    downloadUrl: '/resumes/Shivpujan_Kumar_Resume.pdf',
    fileName: 'Shivpujan_Kumar_Resume.pdf',
  }

  const openModal = () => {
    setModal({
      isOpen: true,
      title: resume.title,
      downloadUrl: resume.downloadUrl,
      fileName: resume.fileName,
    })
  }

  const closeModal = () => {
    setModal({
      isOpen: false,
      title: '',
      downloadUrl: '',
      fileName: '',
    })
  }

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
                My Resume
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              View and download my professional resume
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-4" />
          </motion.div>

          {/* Resume Button Card */}
          <motion.div className="flex justify-center mb-12" variants={itemVariants}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-teal-400/20 rounded-lg p-8 hover:border-teal-400/60 transition-all duration-300 max-w-md w-full">
              {/* Document Icon */}
              <div className="mb-6 flex justify-center">
                <div className="inline-block p-4 bg-teal-500/20 rounded-lg">
                  <svg
                    className="w-10 h-10 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{resume.title}</h3>
              <p className="text-gray-300 text-center mb-6">
                {resume.description}
              </p>

              {/* File Info */}
              <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full border border-teal-400/30">
                  {resume.format}
                </span>
                <span className="text-gray-400">{resume.fileSize}</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900 font-semibold rounded-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  View
                </motion.button>

                <motion.a
                  href={resume.downloadUrl}
                  download={resume.fileName}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-gray-700/50 text-teal-400 font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 border border-teal-400/30 hover:border-teal-400/60 group"
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
            </div>
          </motion.div>
        </motion.div>

        {/* Resume Modal */}
        {modal.isOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-teal-400/30"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-b border-teal-400/20 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">{modal.title}</h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-gray-950 p-6">
                <iframe
                  src={`${modal.downloadUrl}#toolbar=0`}
                  className="w-full h-full rounded-lg border border-teal-400/10"
                  title={modal.title}
                />
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-t border-teal-400/20 p-6 flex gap-3 justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-700/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition-colors border border-gray-600"
                >
                  Close
                </button>
                <a
                  href={modal.downloadUrl}
                  download={modal.fileName}
                  className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900 font-semibold rounded-lg hover:from-teal-400 hover:to-teal-500 transition-all flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
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
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Resume