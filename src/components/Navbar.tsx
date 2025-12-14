'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Startups', href: '#startups' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Resume', href: '#resume' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-teal-400/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center font-bold text-gray-900 group-hover:bg-teal-400 transition-colors">
              SK
            </div>
            <span className="text-lg font-bold text-teal-400 hidden sm:inline">Shivpujan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-block px-6 py-2 bg-teal-500 text-gray-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5 flex flex-col">
              <span
                className={`block w-6 h-0.5 bg-teal-400 transition-all ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-teal-400 transition-all ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-teal-400 transition-all ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 bg-teal-500 text-gray-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
