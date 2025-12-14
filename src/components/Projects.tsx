'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
}

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const projectData: Project[] = [
    {
      title: 'Video Ergonomics – Human Body Posture Analysis',
      description: 'AI-based system that analyzes human body posture from video input to detect ergonomic risks and unsafe movements. Helps identify posture-related health risks in workplaces for safety monitoring.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Video Analysis'],
      link: '#',
    },
    {
      title: 'AI Vehicle Number Plate Detection & Recognition',
      description: 'Real-time system for detecting vehicles, recognizing number plates, and extracting vehicle details using deep learning. Features accurate detection, real-time processing with speed estimation, and secure database storage.',
      tags: ['Python', 'YOLOv8', 'OpenCV', 'MySQL', 'Google Gemini AI'],
      link: '#',
    },
    {
      title: 'DeployProbe',
      description: 'Flask-based platform for load testing deployed projects. Simulates real-world traffic with concurrent requests to evaluate performance, response quality, and capacity limits. Generates comprehensive performance reports.',
      tags: ['Flask', 'Python', 'Load Testing', 'Bootstrap', 'ReportLab'],
      link: 'https://github.com/preetampatel9478/DeployProbe',
    },
    {
      title: 'Live Weather & Temperature App',
      description: 'Web application that displays real-time weather data based on user location. Features current temperature, weather conditions, and location-based forecasts with a clean, intuitive user interface.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      link: '#',
    },
    {
      title: 'Student Freelancing Platform',
      description: 'Task-based platform where college students can post and complete paid projects securely. Connects students with opportunities to earn while gaining practical experience.',
      tags: ['React', 'Node.js', 'Firebase'],
      link: '#',
    },
  ]

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
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30"
    >
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
                My Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <div className="h-full bg-gray-900/50 border border-teal-400/20 rounded-lg p-6 hover:border-teal-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 glass">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full border border-teal-400/30 group-hover:border-teal-400/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
