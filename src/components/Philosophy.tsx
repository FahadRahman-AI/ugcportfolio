import { motion } from 'framer-motion'

const Philosophy = () => {
  const services = [
    {
      number: "01",
      title: "Product Reviews",
      description: "Authentic reviews that highlight real benefits and build trust with your audience."
    },
    {
      number: "02",
      title: "Unboxing Videos",
      description: "First-impression content that captures genuine excitement and showcases your product beautifully."
    },
    {
      number: "03",
      title: "Lifestyle Integration",
      description: "Seamless product placement in real-life scenarios that feel natural and relatable."
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
          I believe the best UGC doesn't feel like an ad—it feels like a recommendation from someone you trust. Every video I create is rooted in genuine experience, crafted to stop thumbs mid-scroll, and designed to turn viewers into customers.
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
                className="text-base font-light text-[#666] leading-[1.7] max-w-[300px]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Philosophy
