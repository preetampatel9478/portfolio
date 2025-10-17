import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Shivpujan Kumar | Developer | Founder | Innovator',
  description: 'Portfolio of Shivpujan Kumar - Full-stack developer, startup founder, and AI innovator. Showcasing projects, skills, and entrepreneurial ventures.',
  keywords: ['developer', 'founder', 'portfolio', 'AI', 'machine learning', 'full-stack'],
  authors: [{ name: 'Shivpujan Kumar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivpujan.dev',
    title: 'Shivpujan Kumar - Developer | Founder | Innovator',
    description: 'Explore my portfolio, projects, and entrepreneurial journey',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="bg-gray-900 text-gray-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
