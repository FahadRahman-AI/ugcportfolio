import { motion } from 'framer-motion'

const valuePoints = [
  {
    stat: "3x",
    label: "Higher Engagement",
    description: "Cinematic content gets 3x more engagement than standard videos"
  },
  {
    stat: "2x",
    label: "Audience Growth",
    description: "Premium visuals attract quality audiences who become loyal followers"
  },
  {
    stat: "10x",
    label: "Brand Recall",
    description: "Film-quality content makes your brand unforgettable and shareable"
  }
]

const WhyCinematic = () => {
  return (
    <section className="bg-black text-white py-[100px] md:py-[60px] px-20 md:px-6 text-center md:ml-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 
          className="text-[56px] md:text-[36px] font-semibold text-white leading-[1.2] mb-16"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-1px'
          }}
        >
          WHY CINEMATIC<br />CONTENT MATTERS
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 max-w-[1200px] mx-auto">
          {valuePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-10 text-center"
            >
              <p 
                className="text-[64px] font-semibold text-[#D2572F] mb-4"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                {point.stat}
              </p>
              <h3 
                className="text-2xl font-semibold text-white mb-4"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                {point.label}
              </h3>
              <p 
                className="text-[15px] font-light text-white/70 leading-[1.6]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default WhyCinematic
