import { motion } from 'framer-motion'

const Philosophy = () => {
  const services = [
    {
      number: "01",
      title: "Cinematic Storytelling",
      description: "Narrative-driven video content that captures emotion, atmosphere, and genuine human moments through intentional cinematography."
    },
    {
      number: "02",
      title: "Automotive Content",
      description: "Dynamic car videos showcasing design, motion, and lifestyle through creative angles and professional production quality."
    },
    {
      number: "03",
      title: "Urban & Travel",
      description: "Location-based content capturing the essence of places—from city architecture to travel destinations—with cinematic flair."
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
          I'm a cinematic creator exploring visual storytelling through film. Whether capturing the energy of city streets, the beauty of automotive design, or crafting narrative-driven shorts—every frame is intentional, every story is personal.
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
