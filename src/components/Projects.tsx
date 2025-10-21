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
      title: 'AI Vision Analytics Platform',
      description: 'Real-time object detection and tracking system using YOLOv8. Built with Python, FastAPI, and React for analyzing video streams and generating insights.',
      tags: ['Python', 'YOLOv8', 'FastAPI', 'React', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product management, payment integration, and real-time inventory tracking. Deployed on AWS with serverless architecture.',
      tags: ['Next.js', 'Node.js', 'Stripe', 'AWS', 'MongoDB'],
      link: '#',
    },
    {
      title: 'SaaS Analytics Dashboard',
      description: 'Comprehensive analytics dashboard for tracking user metrics, revenue, and engagement. Features real-time data updates and custom report generation.',
      tags: ['React', 'TypeScript', 'D3.js', 'Firebase', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'ChatGPT-like application built with OpenAI API, featuring conversation history, context switching, and prompt optimization for various use cases.',
      tags: ['Next.js', 'OpenAI API', 'LangChain', 'Pinecone', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Blockchain Asset Manager',
      description: 'Decentralized asset management system with smart contract integration. Track, trade, and manage digital assets on Ethereum blockchain.',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethers.js', 'Hardhat'],
      link: '#',
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'Document collaboration platform with live editing, commenting, and version control. Built with WebSockets for real-time synchronization.',
      tags: ['Next.js', 'WebSockets', 'Yjs', 'PostgreSQL', 'Redis'],
      link: '#',
    },
    {
      title: 'DeployProbe',
      description: 'Flask-based platform for load testing deployed projects. Simulates real-world traffic with concurrent requests to evaluate performance, response quality, and capacity limits. Generates comprehensive performance reports.',
      tags: ['Flask', 'Python', 'Load Testing', 'Bootstrap', 'ReportLab'],
      link: 'https://github.com/preetampatel9478/DeployProbe',
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
                Featured Projects
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
