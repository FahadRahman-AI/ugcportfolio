import { motion } from 'framer-motion'

const Philosophy = () => {
  const services = [
    {
      number: "01",
      title: "Brand Films & Stories",
      description: "Cinematic brand videos that showcase your mission, products, and values. The kind of content that builds emotional connection with your audience and makes your brand unforgettable.",
      perfectFor: ["Brand launches", "Company stories", "Product releases", "Building credibility"]
    },
    {
      number: "02",
      title: "Social Media Presence",
      description: "Scroll-stopping content optimized for Instagram, TikTok, and YouTube. High-quality visuals that make your brand stand out in the feed and attract your ideal customers.",
      perfectFor: ["Growing your following", "Launching campaigns", "Building brand awareness", "Driving traffic"]
    },
    {
      number: "03",
      title: "Product & Lifestyle Content",
      description: "Showcase your products or services with cinematic quality. From e-commerce to lifestyle brands, I create visuals that highlight what makes you different and drive sales.",
      perfectFor: ["E-commerce brands", "Service businesses", "Lifestyle products", "Premium positioning"]
    }
  ]

  return (
    <section id="philosophy" className="bg-white py-40 md:py-20 px-20 md:px-6 text-center md:ml-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1000px] mx-auto mb-32"
      >
        <p 
          className="text-[40px] md:text-[28px] font-normal text-black leading-[1.4]"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-0.5px'
          }}
        >
          In a sea of generic content, brands need to stand out. That's where cinema-quality visuals come in. Whether it's a brand story, product showcase, or social content that builds your presence—I create the kind of content that makes people stop, watch, and remember your brand. Every frame is crafted to attract your audience and elevate your image. My diverse range (narratives, lifestyle, urban, atmospheric) means I can adapt to any brand's voice while maintaining the cinematic quality that makes content perform.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 
          className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-16"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <p 
                className="text-[32px] font-light text-black mb-6"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                {service.number}
              </p>
              <h3 
                className="text-[28px] font-semibold text-black mb-4"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-base font-light text-[#666] leading-[1.7] max-w-[300px] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {service.description}
              </p>
              {service.perfectFor && (
                <div className="text-left max-w-[300px] mx-auto md:mx-0">
                  <p 
                    className="text-[13px] font-normal text-[#999] mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Perfect for:
                  </p>
                  <ul className="space-y-1.5">
                    {service.perfectFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[14px] font-light text-[#666]" style={{ fontFamily: 'var(--font-body)' }}>
                        <span className="text-[#D2572F]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Philosophy
