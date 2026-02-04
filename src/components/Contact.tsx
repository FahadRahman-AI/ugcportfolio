import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
    budget: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', details: '', budget: '' })
  }

  return (
    <section id="contact" className="bg-[#FAFAFA] py-40 md:py-20 px-20 md:px-6 md:ml-[280px]">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[56px] md:text-[40px] font-semibold text-black mb-4"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            Let's Talk
          </h2>
          <p 
            className="text-lg font-light text-[#333] leading-[1.7]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Have a project in mind? Drop me a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-14 text-center"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
            }}
          >
            <p 
              className="text-xl font-light text-black"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Thank you! I'll be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-14 space-y-6"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
            }}
          >
            <div>
              <label 
                htmlFor="name" 
                className="block text-xs uppercase tracking-wide text-[#666] font-medium mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#D2572F] transition-all duration-300"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  color: 'var(--color-black)'
                }}
                placeholder="Your name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-xs uppercase tracking-wide text-[#666] font-medium mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#D2572F] transition-all duration-300"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  color: 'var(--color-black)'
                }}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label 
                htmlFor="company" 
                className="block text-xs uppercase tracking-wide text-[#666] font-medium mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Brand/Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-6 py-4.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#D2572F] transition-all duration-300"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  color: 'var(--color-black)'
                }}
                placeholder="Your brand name"
              />
            </div>

            <div>
              <label 
                htmlFor="details" 
                className="block text-xs uppercase tracking-wide text-[#666] font-medium mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Project Details *
              </label>
              <textarea
                id="details"
                required
                rows={5}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-6 py-4.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#D2572F] transition-all duration-300 resize-none"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  color: 'var(--color-black)'
                }}
                placeholder="Tell me about your project..."
              />
            </div>

            <div>
              <label 
                htmlFor="budget" 
                className="block text-xs uppercase tracking-wide text-[#666] font-medium mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Budget Range
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-6 py-4.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#D2572F] transition-all duration-300"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  color: 'var(--color-black)'
                }}
              >
                <option value="">Select a range</option>
                <option value="<$500">&lt;$500</option>
                <option value="$500-1000">$500 - $1,000</option>
                <option value="$1000-2000">$1,000 - $2,000</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-secondary mt-4"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default Contact
