import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-[120px] md:py-[80px] px-20 md:px-6 text-center md:ml-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p 
          className="text-[11px] uppercase tracking-widest text-[#D2572F] font-semibold mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          FOR BRANDS WHO WANT MORE
        </p>

        <p 
          className="text-[48px] md:text-[32px] font-normal text-black leading-[1.3] max-w-[900px] mx-auto mb-8"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-0.5px'
          }}
        >
          Your brand deserves content that doesn't just blend in—it deserves to stand out, attract the right audience, and leave a lasting impression. That's what cinema-quality visuals do.
        </p>

        <p 
          className="text-lg font-light text-[#333] leading-[1.7] max-w-[700px] mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Whether you're launching a product, building your social presence, or telling your brand story—I create the visuals that make it happen.
        </p>
      </motion.div>
    </section>
  )
}

export default Testimonials
