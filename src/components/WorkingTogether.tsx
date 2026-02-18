import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const packages = [
  {
    name: "Brand Starter",
    description: "Perfect for testing cinematic content",
    price: "300",
    priceLabel: "Starting at",
    features: [
      "1 cinematic video (30-90s)",
      "Concept consultation",
      "Professional filming & editing",
      "2 revision rounds",
      "Multiple format exports (16:9, 9:16, 1:1)",
      "5-7 day turnaround"
    ],
    perfectFor: ["Product launches", "Brand introductions", "Social media campaigns"],
    buttonText: "Get Started",
    featured: false,
  },
  {
    name: "Brand Growth",
    description: "Build consistent presence",
    price: "800",
    priceLabel: "Starting at",
    features: [
      "3-5 cinematic videos",
      "Content strategy consultation",
      "Mix of brand/product/social content",
      "Optimized for platform performance",
      "3 revision rounds per video",
      "10-14 day turnaround",
      "Raw footage included"
    ],
    perfectFor: ["Growing social presence", "Multi-platform campaigns", "Building brand awareness"],
    buttonText: "Most Popular",
    featured: true,
  },
  {
    name: "Brand Partnership",
    description: "Ongoing content creation",
    price: "Custom",
    priceLabel: null,
    features: [
      "5-10+ videos per month",
      "Full creative strategy",
      "Concept development & planning",
      "Priority turnaround",
      "Dedicated creative partnership",
      "Analytics & performance tracking",
      "Unlimited revisions"
    ],
    perfectFor: ["Established brands", "Long-term growth", "Consistent content pipeline"],
    buttonText: "Partner With Me",
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
          Choose the package that fits your brand
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
              className="text-sm font-light text-[#666] mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {pkg.description}
            </p>

            <p 
              className="text-[13px] font-normal text-[#999] mb-2 text-left"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              What You Get:
            </p>
            <ul className="space-y-3 mb-6 text-left">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#D2572F] mt-0.5">✓</span>
                  <span 
                    className="text-[15px] font-light text-[#333] leading-[1.6]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {pkg.perfectFor && (
              <>
                <p 
                  className="text-[13px] font-normal text-[#999] mb-2 text-left"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Perfect For:
                </p>
                <ul className="space-y-1 mb-8 text-left">
                  {pkg.perfectFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] font-light text-[#666]" style={{ fontFamily: 'var(--font-body)' }}>
                      <span className="text-[#D2572F]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {!pkg.perfectFor && <div className="mb-8" />}

            <div className="mb-8">
              {pkg.price === "Custom" ? (
                <p 
                  className="text-[48px] font-semibold text-black"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  Custom — Let's Talk
                </p>
              ) : (
                <>
                  <span 
                    className="text-sm tracking-wide text-[#666] block"
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

            <Link
              to="/contact"
              className="btn-secondary inline-block"
            >
              {pkg.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Not Sure Which Package? */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#FAFAFA] py-20 md:py-16 px-20 md:px-6 mt-20 text-center -mx-20 md:-mx-6"
      >
        <h3 
          className="text-[32px] font-semibold text-black mb-4"
          style={{ fontFamily: 'var(--font-header)' }}
        >
          Not Sure Which Package?
        </h3>
        <p 
          className="text-base font-light text-[#333] leading-[1.7] max-w-[600px] mx-auto mb-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Every brand is different. Let's hop on a call and figure out exactly what content will help you grow your audience and achieve your goals.
        </p>
        <Link
          to="/contact"
          className="btn-primary inline-block"
        >
          Schedule a Free Call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}

export default WorkingTogether
