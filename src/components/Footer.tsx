import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ============================================
// USER CUSTOMIZATION REQUIRED:
// ============================================
// Replace "yourusername" with your actual handles (without @)
// ============================================

const Footer = () => {
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
    <footer className="bg-black text-white py-20 px-20 md:px-6 md:ml-[280px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mb-16">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              Fahad Rahman
            </h3>
            <p 
              className="text-sm font-light text-white/60"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Creating cinematic stories that move audiences
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 
              className="text-[11px] uppercase tracking-widest text-white/50 font-normal mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-0">
              {['Work', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm font-light text-white leading-[2.2] transition-colors duration-300 hover:text-[#D2572F]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 
              className="text-[11px] uppercase tracking-widest text-white/50 font-normal mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Connect
            </h4>
            <ul className="space-y-0">
              {socialLinks.map((link) => {
                if (link.isExternal) {
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm font-light text-white leading-[2.2] transition-colors duration-300 hover:text-[#D2572F]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                }
                
                return (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="block text-sm font-light text-white leading-[2.2] transition-colors duration-300 hover:text-[#D2572F]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p 
            className="text-xs font-light text-white/50"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            © 2025 Fahad Rahman. Available for projects worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
