'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C++'],
    },
    {
      name: 'Frameworks',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'FastAPI'],
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'Supabase'],
    },
    {
      name: 'AI/ML Tools',
      skills: ['TensorFlow', 'PyTorch', 'YOLOv8', 'OpenAI API', 'LangChain', 'Hugging Face'],
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
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
                My Tech Stack
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-teal-400/10 hover:border-teal-400/30 transition-colors">
                  <h3 className="text-xl font-bold text-teal-400 mb-6">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 rounded-full text-sm font-medium text-teal-300 hover:border-teal-400 hover:text-teal-400 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            className="mt-8 grid md:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {[
              { label: 'Deployment', value: 'AWS, Vercel, Docker' },
              { label: 'Version Control', value: 'Git, GitHub, GitLab' },
              { label: 'Tools', value: 'VS Code, Figma, Postman' },
              { label: 'Methodologies', value: 'Agile, REST, GraphQL' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-800/30 rounded-lg p-4 border border-teal-400/10 hover:border-teal-400/30 transition-colors"
              >
                <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                <p className="text-teal-400 font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
