import { motion } from 'framer-motion'

const packages = [
  {
    name: "Starter",
    description: "Perfect for testing content styles",
    price: "200",
    features: [
      "1 video (UGC or cinematic style)",
      "2 revisions included",
      "48-hour delivery",
      "Raw file included",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "Versatile content for multiple platforms",
    price: "500",
    features: [
      "Mix of UGC and brand content",
      "3 revisions each",
      "5-day delivery",
      "Hook variations included",
    ],
    featured: true,
  },
  {
    name: "Premium",
    description: "Full creative production",
    price: "Custom",
    features: [
      "Cinematic + UGC styles",
      "Concept development",
      "Priority delivery",
      "Ongoing collaboration",
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
                  {pkg.price}
                </p>
              ) : (
                <>
                  <span 
                    className="text-sm tracking-wide text-[#666]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Starting at
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
    </section>
  )
}

export default WorkingTogether
