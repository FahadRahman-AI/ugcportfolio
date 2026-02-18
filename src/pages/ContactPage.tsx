import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ============================================
// USER CUSTOMIZATION REQUIRED:
// ============================================
// 1. Line 45: Replace "your.email@example.com" with your actual email address
// 2. Line 120: Replace "yourusername" with your Instagram handle (without @)
// 3. Line 125: Replace "yourusername" with your TikTok handle (without @)
// 4. Optional: Customize the intro text on line 35-37
// ============================================

const ContactPage = () => {
  return (
    <>
      {/* Hero/Intro Section */}
      <section className="h-screen flex items-center justify-center bg-[#FAFAFA] px-20 md:px-6 md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-[800px] mx-auto"
        >
          <p 
            className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            GET IN TOUCH
          </p>
          
          <h1 
            className="text-[72px] md:text-[48px] font-bold text-black leading-[1.1] mb-8 uppercase"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-1px'
            }}
          >
            LET'S GROW YOUR<br />BRAND TOGETHER
          </h1>
          
          <p 
            className="text-xl md:text-lg font-light text-[#333] leading-[1.7] mb-16"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Whether you're launching a product, building your social presence, or telling your brand story through cinema—I'm here to help you attract audiences and stand out. Let's discuss your goals and create a content strategy that actually moves the needle.
          </p>
        </motion.div>
      </section>

      {/* Email Display Card Section */}
      <section className="bg-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-[600px] mx-auto"
        >
          <div className="bg-white border-2 border-[#E5E5E5] rounded-3xl p-14 md:p-10 transition-all duration-300 hover:border-[#D2572F] hover:-translate-y-2"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.06)'
            }}
          >
            <p 
              className="text-[11px] uppercase tracking-widest text-[#D2572F] font-semibold mb-5 text-center"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              EMAIL ME DIRECTLY
            </p>
            
            {/* REPLACE "your.email@example.com" with your actual email address */}
            <a
              href="mailto:fahadrahman9819@gmail.com"
              className="block text-center mb-5 transition-colors duration-200 hover:text-[#D2572F]"
            >
              <p 
                className="text-[32px] md:text-[24px] font-semibold text-black"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                fahadrahman9819@gmail.com
              </p>
            </a>
            
            <p 
              className="text-sm font-light text-[#666] text-center mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Click to open in your email app
            </p>
            
            <div className="flex items-center justify-center gap-2 bg-[#FAFAFA] px-6 py-3 rounded-full w-fit mx-auto">
              <span>⚡</span>
              <span 
                className="text-sm font-normal text-black"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Usually responds within 24 hours with strategy ideas
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Alternative Contact Section */}
      <section className="bg-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-[800px] mx-auto"
        >
          {/* Divider */}
          <div 
            className="w-[60%] h-px mx-auto mb-16"
            style={{
              background: 'linear-gradient(to right, transparent, #E5E5E5, transparent)'
            }}
          />
          
          <h2 
            className="text-[28px] font-semibold text-black mb-6"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            OR FIND ME ON SOCIAL
          </h2>
          
          <p 
            className="text-base font-light text-[#333] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Prefer to connect on social media? I'm active on both platforms.
          </p>
          
          {/* Social Buttons */}
          <div className="flex justify-center gap-6 flex-wrap mb-20">
            {[
              { 
                label: 'Instagram', 
                // REPLACE "yourusername" with your Instagram handle (without @)
                href: 'https://instagram.com/the_fahadrahman' 
              },
              { 
                label: 'TikTok', 
                // REPLACE "yourusername" with your TikTok handle (without @)
                href: 'https://tiktok.com/fahadcaptures' 
              }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-10 py-4.5 rounded-full uppercase tracking-widest text-xs font-normal transition-all duration-300 hover:bg-[#D2572F] hover:scale-105"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {social.label} →
              </motion.a>
            ))}
          </div>
          
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 uppercase tracking-widest text-xs font-normal transition-all duration-300 border border-black text-black hover:bg-black hover:text-white rounded-full"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ← Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  )
}

export default ContactPage
