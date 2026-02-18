import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProcessPage = () => {
  const processSteps = [
    {
      id: 1,
      number: "01",
      label: "DISCOVERY",
      title: "Understanding Your Vision",
      description: "We start with a conversation about your brand, goals, and target audience. I'll ask about your vision, preferred style, key messages, and success metrics. This ensures we're aligned before the camera starts rolling.",
      deliverables: [
        "Brand questionnaire",
        "Project scope discussion",
        "Timeline planning",
        "Budget confirmation"
      ]
    },
    {
      id: 2,
      number: "02",
      label: "CONCEPT",
      title: "Crafting the Story",
      description: "Based on our discussion, I develop a creative concept that aligns with your brand voice and campaign goals. This includes scripting ideas, visual style references, and a content outline for your approval.",
      deliverables: [
        "Creative brief",
        "Script/storyboard concepts",
        "Visual mood board",
        "Shot list preparation"
      ]
    },
    {
      id: 3,
      number: "03",
      label: "PRODUCTION",
      title: "Lights, Camera, Action",
      description: "This is where the magic happens. I handle all aspects of filming—from setup and lighting to directing and capturing authentic moments. Whether it's a narrative short or automotive footage, every shot is intentional and crafted with care.",
      deliverables: [
        "Professional filming",
        "Multiple takes/angles",
        "B-roll footage",
        "Audio recording"
      ]
    },
    {
      id: 4,
      number: "04",
      label: "EDITING",
      title: "Polishing Perfection",
      description: "I edit your content with attention to pacing, color grading, sound design, and storytelling flow. You'll receive drafts for feedback, and I'll refine until it's exactly what you envisioned—or even better.",
      deliverables: [
        "First draft review",
        "Revision rounds (2-3 included)",
        "Color grading",
        "Sound mixing & music"
      ]
    },
    {
      id: 5,
      number: "05",
      label: "DELIVERY",
      title: "Ready to Launch",
      description: "Final files are delivered in your preferred formats and aspect ratios—optimized for each platform. You'll get everything you need to launch your content and start seeing results.",
      deliverables: [
        "Multiple formats (16:9, 9:16, 1:1)",
        "Platform-optimized exports",
        "Raw footage (if requested)",
        "Usage rights & licensing"
      ]
    }
  ]

  const timelineCards = [
    {
      days: "1-2",
      label: "DAYS",
      description: "Discovery & Concept"
    },
    {
      days: "3-5",
      label: "DAYS",
      description: "Production & Filming"
    },
    {
      days: "5-7",
      label: "DAYS",
      description: "Editing & Delivery"
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
            From concept to delivery, here's how I bring your project to life through cinematic content and authentic storytelling.
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
            Total: 10-14 days from start to finish
          </p>
          
          <p 
            className="text-sm font-light text-[#666]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Need it faster? Rush delivery available for urgent projects.
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
              I'm not just a content creator—I'm a visual storyteller who brings cinematic quality to every project. Whether it's a single video or a full production, every frame gets the same attention to detail.
            </p>
            
            <p 
              className="text-lg font-light text-[#333] leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              You'll get clear communication at every step, fast turnarounds without sacrificing quality, and content that's designed to move people—not just look pretty.
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
            Let's discuss your project and create something amazing together.
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
