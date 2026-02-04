import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Northward Studio",
    avatar: "/testimonial-1.jpg"
  },
  {
    name: "Marcus Johnson",
    company: "Stillform Magazine",
    avatar: "/testimonial-2.jpg"
  },
  {
    name: "Emma Williams",
    company: "Silent Coast Weddings",
    avatar: "/testimonial-3.jpg"
  }
]

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
        {/* Client Cards */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-3 mx-auto overflow-hidden">
                <img 
                  src={client.avatar} 
                  alt={client.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <p 
                className="text-sm font-normal text-[#333]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {client.name}
              </p>
              <p 
                className="text-sm font-light text-[#666]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {client.company}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Project Label */}
        <p 
          className="text-[13px] font-medium text-black mb-12"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Brand Collaboration - 2025
        </p>

        {/* Large Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[56px] md:text-[32px] font-normal text-black leading-[1.3] mb-16"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-1px'
          }}
        >
          "Working with Fahad felt effortless from start to finish. The content didn't just showcase our product—it captured the feeling we wanted our customers to experience."
        </motion.blockquote>

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
