import { motion } from 'framer-motion'

const portfolioImages = [
  "/portfolio-1.jpg",
  "/portfolio-2.jpg",
  "/portfolio-3.jpg",
  "/portfolio-4.jpg"
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#FAFAFA] py-[200px] md:py-[100px] px-20 md:px-6 text-center md:ml-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1100px] mx-auto"
      >
        {/* Personal Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[40px] md:text-[32px] font-normal text-black leading-[1.3] mb-8 italic"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-1px'
          }}
        >
          "For me, filmmaking is about finding beauty in the mundane and emotion in the everyday. Every project is a chance to see the world differently."
        </motion.blockquote>

        <p 
          className="text-base font-light text-[#666] mb-16"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          — Fahad Rahman
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-4 md:grid-cols-2 gap-6">
          {portfolioImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div 
                className="w-full h-full bg-gray-200"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
