import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id="about" className="bg-[#FAFAFA] py-40 md:py-20 px-20 md:px-6 md:ml-[280px]">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[35%_65%] grid-cols-1 gap-16">
        {/* Left Column - Image & Nav */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full aspect-[3/4] bg-gray-200 rounded-2xl mb-12 overflow-hidden">
            <img 
              src="/fahad-rahman.jpg" 
              alt="Fahad Rahman - UGC Creator" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          <nav className="space-y-0">
            {['What I Bring', 'My Setup', 'Work Together'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block text-[15px] font-normal text-black leading-[2.5] transition-colors duration-200 hover:text-[#D2572F]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Right Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p 
            className="text-[36px] md:text-[28px] font-normal text-black leading-[1.4] max-w-[700px] mb-16"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-0.5px'
            }}
          >
            I'm a UGC creator who believes authentic content is the key to cutting through the noise. With months creating content and a passion for helping brands connect, I help brands connect with their audience through genuine, relatable videos.
          </p>

          <p 
            className="text-lg font-light text-[#333] leading-[1.7] max-w-[650px] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            While I'm building my portfolio, I bring fresh perspectives, quick turnaround times, and an obsession with creating content that actually converts.
          </p>

          <p 
            className="text-lg font-light text-[#333] leading-[1.7] max-w-[650px] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From hook to CTA, I focus on creating content that doesn't just look good—it performs. Every frame is intentional, every word is crafted to drive action.
          </p>

          <a
            href="#about"
            className="btn-primary"
          >
            About Me
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
