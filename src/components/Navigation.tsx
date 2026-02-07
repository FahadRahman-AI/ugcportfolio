import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const projectLinks = [
    { label: 'Work', href: '/work', isHash: false },
    { label: 'About Me', href: '/#about', isHash: true },
    { label: 'Process', href: '/process', isHash: false },
    { label: 'Packages', href: '/#packages', isHash: true },
    { label: 'Testimonials', href: '/#testimonials', isHash: true },
    { label: 'My Setup', href: '/setup', isHash: false },
  ]

  // ============================================
  // USER CUSTOMIZATION REQUIRED:
  // ============================================
  // Replace "yourusername" with your actual handles (without @)
  // ============================================
  const socialLinks = [
    { 
      label: 'Instagram', 
      href: 'https://instagram.com/the_fahadrahman', // REPLACE with your Instagram handle
      isExternal: true 
    },
    { 
      label: 'TikTok', 
      href: 'https://tiktok.com/@fahadcaptures', // REPLACE with your TikTok handle
      isExternal: true 
    },
    { 
      label: 'Email', 
      href: '/contact', 
      isExternal: false 
    },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:w-[280px] md:h-screen md:bg-white md:border-r md:border-[#E5E5E5] md:z-50 md:flex md:flex-col md:p-12">
        {/* Logo/Name */}
        <Link to="/" className="mb-12">
          <h1 
            className="text-[28px] font-semibold text-black leading-none"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-0.5px'
            }}
          >
            Fahad Rahman
          </h1>
        </Link>

        {/* Bio */}
        <p 
          className="text-[15px] font-light text-[#666] leading-[1.7] max-w-[220px] mb-20"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Cinematic creator specializing in brand content, UGC, and visual storytelling for ambitious brands.
        </p>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 
            className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Projects
          </h2>
          <nav className="space-y-0">
            {projectLinks.map((link) => {
              const isActive = !link.isHash && location.pathname === link.href
              
              if (link.isHash) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-[15px] font-normal text-black leading-[2.2] transition-colors duration-200 hover:text-[#D2572F]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </a>
                )
              }
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block text-[15px] font-normal leading-[2.2] transition-colors duration-200 hover:text-[#D2572F] ${
                    isActive ? 'text-[#D2572F] border-l-2 border-[#D2572F] pl-3 -ml-3' : 'text-black'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Socials Section */}
        <div className="mb-auto">
          <h2 
            className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Socials
          </h2>
          <nav className="space-y-0">
            {socialLinks.map((link) => {
              const isActive = !link.isExternal && location.pathname === link.href
              
              if (link.isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[15px] font-normal text-black leading-[2.2] transition-colors duration-200 hover:text-[#D2572F]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </a>
                )
              }
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block text-[15px] font-normal leading-[2.2] transition-colors duration-200 hover:text-[#D2572F] ${
                    isActive ? 'text-[#D2572F] border-l-2 border-[#D2572F] pl-3 -ml-3' : 'text-black'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="w-full bg-black text-white px-4 py-4 text-[13px] uppercase tracking-widest text-center transition-all duration-300 hover:bg-[#D2572F] cursor-pointer"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Work With Me
        </a>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-[#E5E5E5] z-50 flex items-center justify-between px-6">
        <Link to="/">
          <h1 
            className="text-xl font-semibold text-black"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-0.5px'
            }}
          >
            Fahad Rahman
          </h1>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-8 h-8 flex flex-col justify-center gap-1.5"
        >
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-16 px-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="space-y-8"
            >
              {/* Bio */}
              <p 
                className="text-[15px] font-light text-[#666] leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Cinematic creator specializing in brand content, UGC, and visual storytelling for ambitious brands.
              </p>

              {/* Projects */}
              <div>
                <h2 
                  className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Projects
                </h2>
                <nav className="space-y-2">
                  {projectLinks.map((link) => {
                    const isActive = !link.isHash && location.pathname === link.href
                    
                    if (link.isHash) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className="block text-[15px] font-normal text-black leading-[2.2] transition-colors duration-200 hover:text-[#D2572F]"
                          style={{ fontFamily: 'var(--font-body)' }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      )
                    }
                    
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block text-[15px] font-normal leading-[2.2] transition-colors duration-200 hover:text-[#D2572F] ${
                          isActive ? 'text-[#D2572F]' : 'text-black'
                        }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* Socials */}
              <div>
                <h2 
                  className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Socials
                </h2>
                <nav className="space-y-2">
                  {socialLinks.map((link) => {
                    const isActive = !link.isExternal && location.pathname === link.href
                    
                    if (link.isExternal) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-[15px] font-normal text-black leading-[2.2] transition-colors duration-200 hover:text-[#D2572F]"
                          style={{ fontFamily: 'var(--font-body)' }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      )
                    }
                    
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block text-[15px] font-normal leading-[2.2] transition-colors duration-200 hover:text-[#D2572F] ${
                          isActive ? 'text-[#D2572F]' : 'text-black'
                        }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="block w-full bg-black text-white px-4 py-4 text-[13px] uppercase tracking-widest text-center transition-all duration-300 hover:bg-[#D2572F]"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work With Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
