import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProcessPage = () => {
  const processSteps = [
    {
      id: 1,
      number: "01",
      label: "DISCOVERY",
      title: "Understanding Your Brand & Goals",
      description: "We start with a strategy call about your brand, target audience, and business goals. I'll learn what makes you different, who you're trying to reach, and what success looks like. This ensures every frame of content serves your growth objectives.",
      deliverables: [
        "Brand discovery questionnaire",
        "Target audience analysis",
        "Goal-setting & KPIs",
        "Content strategy recommendations"
      ]
    },
    {
      id: 2,
      number: "02",
      label: "CONCEPT",
      title: "Creative Strategy & Planning",
      description: "I develop a creative concept that aligns with your brand voice and resonates with your target audience. You'll get mood boards, shot list ideas, and a clear direction that balances cinematic quality with content that performs.",
      deliverables: [
        "Creative brief & concept",
        "Visual style references",
        "Script/shot list",
        "Platform optimization strategy"
      ]
    },
    {
      id: 3,
      number: "03",
      label: "PRODUCTION",
      title: "Professional Filming",
      description: "This is where your brand comes to life. I handle all aspects of production—lighting, composition, directing—to create cinema-quality content that makes your brand look premium and professional.",
      deliverables: [
        "Professional filming",
        "Multiple angles & takes",
        "B-roll footage",
        "High-quality audio"
      ]
    },
    {
      id: 4,
      number: "04",
      label: "POST-PRODUCTION",
      title: "Editing for Performance",
      description: "I edit your content with both aesthetics and performance in mind—optimizing pacing for platform algorithms, adding music and sound design, and color grading for maximum impact. You'll review drafts and provide feedback until it's perfect.",
      deliverables: [
        "First draft review",
        "2-3 revision rounds",
        "Color grading & sound design",
        "Platform-optimized edits"
      ]
    },
    {
      id: 5,
      number: "05",
      label: "DELIVERY",
      title: "Launch & Results",
      description: "You receive final files in all formats you need (Instagram, TikTok, YouTube, website, etc.) along with posting recommendations. Your content is ready to attract audiences, build presence, and drive real results for your brand.",
      deliverables: [
        "Multiple format exports",
        "Posting strategy recommendations",
        "Thumbnail/cover options",
        "Usage rights & raw footage"
      ]
    }
  ]

  const timelineCards = [
    {
      days: "2-3",
      label: "DAYS",
      description: "Strategy & Concept Development"
    },
    {
      days: "3-5",
      label: "DAYS",
      description: "Production & Filming"
    },
    {
      days: "5-7",
      label: "DAYS",
      description: "Editing & Revisions"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#FAFAFA] pt-[160px] pb-20 md:pt-[100px] md:pb-12 px-20 md:px-6 md:ml-[280px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[700px] mx-auto"
        >
          <p 
            className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            HOW I WORK
          </p>
          
          <h1 
            className="text-[72px] md:text-[48px] font-bold text-black leading-[1.1] mb-8"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-1px'
            }}
          >
            MY CREATIVE<br />PROCESS
          </h1>
          
          <p 
            className="text-xl md:text-lg font-light text-[#333] leading-[1.7] mb-20"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From initial strategy to final delivery, here's how I help brands create cinematic content that attracts audiences, builds presence, and drives real business results.
          </p>
        </motion.div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px]">
        <div className="max-w-[1400px] mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: index * 0.15 
              }}
              className={`grid grid-cols-[1fr_2fr] md:grid-cols-1 gap-20 md:gap-10 py-20 md:py-12 ${
                index < processSteps.length - 1 ? 'border-b border-[#E5E5E5]' : ''
              }`}
            >
              {/* Left Side - Step Number */}
              <div className="md:mb-6">
                <div 
                  className="text-[120px] md:text-[72px] font-light leading-none mb-6"
                  style={{ 
                    fontFamily: 'var(--font-header)',
                    color: 'rgba(0,0,0,0.08)'
                  }}
                >
                  {step.number}
                </div>
                <p 
                  className="text-[11px] uppercase tracking-widest text-[#D2572F] font-semibold"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {step.label}
                </p>
              </div>

              {/* Right Side - Step Content */}
              <div>
                <h2 
                  className="text-[40px] md:text-[28px] font-semibold text-black leading-[1.2] mb-6"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  {step.title}
                </h2>
                
                <p 
                  className="text-lg md:text-base font-light text-[#333] leading-[1.7] mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.deliverables.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start gap-3 text-base md:text-sm font-light text-[#666] leading-[2.2]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="text-[#D2572F] mt-1.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Overview Section */}
      <section className="bg-[#FAFAFA] py-32 md:py-20 px-20 md:px-6 md:ml-[280px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1200px] mx-auto"
        >
          <h2 
            className="text-[40px] md:text-[28px] font-semibold text-black mb-4"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            TYPICAL TIMELINE
          </h2>
          
          <p 
            className="text-lg font-light text-[#666] mb-16"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From first call to final delivery
          </p>
          
          {/* Timeline Cards */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-10 md:gap-6 mb-12">
            {timelineCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white border-2 border-[#E5E5E5] rounded-3xl p-12 md:p-8 text-center transition-all duration-300 hover:border-[#D2572F] hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div 
                  className="text-[56px] md:text-[40px] font-light text-[#D2572F] mb-2"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  {card.days}
                </div>
                <p 
                  className="text-xs uppercase tracking-widest text-[#666] mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {card.label}
                </p>
                <p 
                  className="text-xl md:text-lg font-medium text-black"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <p 
            className="text-base font-normal text-[#333] mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Total: 10-15 days from strategy to final delivery
          </p>
          
          <p 
            className="text-sm font-light text-[#666]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Need content faster? Rush delivery available for time-sensitive campaigns and launches.
          </p>
        </motion.div>
      </section>

      {/* What Makes Me Different Section */}
      <section className="bg-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1400px] mx-auto grid grid-cols-[2fr_3fr] md:grid-cols-1 gap-20 md:gap-12"
        >
          {/* Left Column */}
          <div>
            <p 
              className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              MY APPROACH
            </p>
            
            <h2 
              className="text-[48px] md:text-[36px] font-semibold text-black leading-[1.2]"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              WHY WORK<br />WITH ME?
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <p 
              className="text-[28px] md:text-[22px] font-normal text-black leading-[1.4] mb-10"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              I'm not just a videographer—I'm a brand growth partner who understands that content needs to do more than look good. It needs to attract the right audience, build your presence, and ultimately help your business grow.
            </p>
            
            <p 
              className="text-lg font-light text-[#333] leading-[1.7] mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              You'll get cinema-quality visuals that make your brand look premium, combined with strategic thinking about what content will actually perform and drive results.
            </p>
            
            <p 
              className="text-lg font-light text-[#333] leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Clear communication at every step. Fast turnarounds without sacrificing quality. And content that's designed to grow your brand—not just fill your feed.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[800px] mx-auto"
        >
          <h2 
            className="text-[56px] md:text-[36px] font-semibold text-white leading-[1.2] mb-6"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            READY TO GET<br />STARTED?
          </h2>
          
          <p 
            className="text-lg font-light text-white/80 leading-[1.7] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Let's create cinematic content that grows your brand.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-black px-12 py-5 rounded-full uppercase tracking-widest text-xs font-normal transition-all duration-300 hover:bg-[#D2572F] hover:text-white hover:scale-105"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Start a Project
            </Link>
            
            <a
              href="/#packages"
              className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full uppercase tracking-widest text-xs font-normal transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Packages
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default ProcessPage
