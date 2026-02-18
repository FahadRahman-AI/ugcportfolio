import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen flex items-center bg-[#FAFAFA] px-20 md:px-6 md:ml-[280px] pt-16 md:pt-0" id="hero">
      <div className="w-full flex items-center gap-16 md:flex-col md:gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1"
        >
          <h1 
            className="text-[96px] md:text-[48px] font-bold text-black leading-[0.95] mb-8 uppercase"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-2px'
            }}
          >
            BUILD YOUR BRAND<br />THROUGH CINEMA
          </h1>
          
          <p 
            className="text-xl font-light text-[#333] leading-[1.6] max-w-[480px] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Cinematic content that makes your brand unforgettable. I help businesses attract audiences and build lasting presence through film-quality visuals that stand out.
          </p>

          <a
            href="#portfolio"
            className="btn-primary"
          >
            See My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 max-w-[600px]"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden" style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-background.mp4" type="video/mp4" />
            </video>
            {/* Fallback gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D2572F] to-[#0A0A0A]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
