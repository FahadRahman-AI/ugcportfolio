import { motion } from 'framer-motion'

const Philosophy = () => {
  const services = [
    {
      number: "01",
      title: "Brand Content",
      description: "Cinematic videos that showcase your brand story with professional production quality and emotional impact."
    },
    {
      number: "02",
      title: "UGC & Social",
      description: "Authentic, scroll-stopping content that feels real, builds trust, and converts viewers into customers."
    },
    {
      number: "03",
      title: "Product Showcases",
      description: "High-quality product videos that highlight features and benefits while maintaining a premium aesthetic."
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
          I believe great content lives at the intersection of cinema and authenticity. Whether it's a brand film or UGC that stops the scroll, every frame should tell a story and every video should drive action.
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
