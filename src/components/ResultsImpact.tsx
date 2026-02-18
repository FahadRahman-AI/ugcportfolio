import { motion } from 'framer-motion'

const benefits = [
  {
    icon: "📈",
    title: "Attract Quality Audiences",
    description: "High-quality visuals attract high-quality followers who actually care about your brand."
  },
  {
    icon: "💎",
    title: "Stand Out from Competition",
    description: "While competitors post generic content, you'll have cinema-quality visuals that command attention and respect."
  },
  {
    icon: "🎯",
    title: "Build Trust & Credibility",
    description: "Professional content signals that you're a professional brand. People buy from brands they trust."
  },
  {
    icon: "🚀",
    title: "Drive Real Results",
    description: "Content that looks this good gets shared, saved, and remembered. That means more reach, more followers, more customers."
  }
]

const ResultsImpact = () => {
  return (
    <section id="impact" className="bg-[#FAFAFA] py-[100px] md:py-[60px] px-20 md:px-6 md:ml-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <p 
          className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          THE IMPACT
        </p>
        <h2 
          className="text-[56px] md:text-[36px] font-semibold text-black leading-[1.2] mb-6"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-1px'
          }}
        >
          CONTENT THAT GROWS<br />YOUR BUSINESS
        </h2>
        <p 
          className="text-lg font-light text-[#333] mb-20"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Here's what cinematic content does for your brand
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-[1000px] mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white border-2 border-[#E5E5E5] rounded-3xl p-10 text-left transition-all duration-300 hover:border-[#D2572F] hover:-translate-y-1"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.06)'
              }}
            >
              <span className="text-5xl block mb-6">{benefit.icon}</span>
              <h3 
                className="text-2xl font-semibold text-black mb-3"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-[15px] font-light text-[#333] leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ResultsImpact
