import { motion } from 'framer-motion'

const packages = [
  {
    name: "Single Video",
    description: "Perfect for testing my style",
    price: "150",
    priceLabel: "Starting at",
    features: [
      "1 cinematic video (30-90s)",
      "2 revisions included",
      "5-7 day delivery",
      "Multiple format exports",
    ],
    featured: false,
  },
  {
    name: "Content Bundle",
    description: "Multiple videos, cohesive style",
    price: "350",
    priceLabel: "Starting at",
    features: [
      "3 cinematic videos",
      "Mix of styles/subjects",
      "3 revisions each",
      "10-14 day delivery",
      "Raw footage included",
    ],
    featured: true,
  },
  {
    name: "Full Production",
    description: "Complete creative collaboration",
    price: "Custom",
    priceLabel: null,
    features: [
      "5+ videos with concept development",
      "Location scouting",
      "Professional post-production",
      "Ongoing creative partnership",
    ],
    featured: false,
  },
]

const WorkingTogether = () => {
  return (
    <section id="packages" className="bg-white py-40 md:py-20 px-20 md:px-6 text-center md:ml-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-20"
      >
        <h2 
          className="text-[64px] md:text-[48px] font-bold text-black mb-4 uppercase"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-1px'
          }}
        >
          LET'S CREATE<br />TOGETHER
        </h2>
        <p 
          className="text-base font-light text-[#666]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Choose the package that fits your needs
        </p>
      </motion.div>

      <div className="max-w-[1300px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="relative bg-white border-2 border-[#E5E5E5] p-14 rounded-3xl transition-all duration-300 hover:border-[#D2572F] hover:-translate-y-2"
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
            {pkg.featured && (
              <div 
                className="absolute -top-4 right-8 px-4 py-1.5 rounded-full bg-[#D2572F] text-white text-[11px] uppercase tracking-widest font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                MOST POPULAR
              </div>
            )}

            <h3 
              className="text-[28px] font-semibold text-black mb-4"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              {pkg.name}
            </h3>
            
            <p 
              className="text-sm font-light text-[#666] mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {pkg.description}
            </p>

            <ul className="space-y-4 mb-10 text-left">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#D2572F] mt-1">✓</span>
                  <span 
                    className="text-[15px] font-light text-[#333] leading-[2]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mb-8">
              {pkg.price === "Custom" ? (
                <p 
                  className="text-[48px] font-semibold text-black"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  Custom — Let's Discuss
                </p>
              ) : (
                <>
                  <span 
                    className="text-sm tracking-wide text-[#666]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {pkg.priceLabel}
                  </span>
                  <p 
                    className="text-[48px] font-semibold text-black"
                    style={{ fontFamily: 'var(--font-header)' }}
                  >
                    ${pkg.price}
                  </p>
                </>
              )}
            </div>

            <button className="btn-secondary">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      <p 
        className="text-sm font-light text-[#666] text-center mt-8 italic max-w-[600px] mx-auto"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        Building my portfolio? I'm open to creative collaborations and passion projects. Let's talk about your vision.
      </p>
    </section>
  )
}

export default WorkingTogether
