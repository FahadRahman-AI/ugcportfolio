import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface PortfolioItem {
  id: number
  number: string
  category: string
  title: string
  description: string
  thumbnail: string
  video: string
  span?: boolean // For asymmetric layout
  comingSoon?: boolean // When true, modal shows "Coming Soon" instead of video
}

// HOW TO ADD YOUR VIDEOS:
// 1. Add your video files (.mp4) to the /public folder
// 2. Add thumbnail images (.jpg or .png) to the /public folder
// 3. Update the array below with your video information
// 
// TIP: Set span: true on items you want to be larger (they'll span 2 columns)
//      Use span: false or omit it for smaller items (1 column)

const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    number: "01", 
    category: "STORYTELLING",
    title: "Cinematic Storytelling", 
    description: "Narrative-driven visual stories that capture emotion, atmosphere, and genuine moments through intentional cinematography and editing.",
    thumbnail: "/portfolio-1.jpg",
    video: "/portfolio-1.mp4",
    span: true
  },
  { 
    id: 2, 
    number: "02", 
    category: "PRODUCT",
    title: "Product Showcases", 
    description: "High-quality product videos that highlight features while maintaining a premium, film-quality aesthetic.",
    thumbnail: "/portfolio-2.jpg", 
    video: "/portfolio-2.mp4",
    comingSoon: true
  },
  { 
    id: 3, 
    number: "03", 
    category: "SOCIAL",
    title: "Social Presence Content", 
    description: "Scroll-stopping social media content that builds your brand's presence and attracts your ideal audience.",
    thumbnail: "/portfolio-3.jpg", 
    video: "/portfolio-3.mp4"
  },
]

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null)

  return (
    <section id="portfolio" className="bg-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h2 
          className="text-[72px] md:text-[48px] font-bold text-black leading-[1.1] mb-4 uppercase"
          style={{ 
            fontFamily: 'var(--font-header)',
            letterSpacing: '-1px'
          }}
        >
          BRAND CONTENT<br />THAT STANDS OUT
        </h2>
        <p 
          className="text-base font-light text-[#666]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Cinematic content that attracts audiences and builds presence
        </p>
      </motion.div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-3 md:grid-cols-1 gap-8">
        {portfolioItems.map((item, index) => {
          // Asymmetric pattern: Large spans 2 cols, Small spans 1 col
          const isLarge = item.span
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`group cursor-pointer ${isLarge ? 'col-span-2 md:col-span-1' : ''}`}
              onClick={() => setSelectedVideo(item)}
            >
              <div className="flex bg-black rounded-none overflow-hidden h-[500px] md:h-[400px]">
                {/* Left side - Text */}
                <div className="w-[40%] md:w-full p-12 flex flex-col justify-between">
                  <p 
                    className="text-[56px] font-light text-white"
                    style={{ fontFamily: 'var(--font-header)' }}
                  >
                    {item.number}
                  </p>
                  
                  <div>
                    <p 
                      className="text-[10px] uppercase tracking-widest text-[#D2572F] font-semibold mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.category}
                    </p>
                    <h3 
                      className="text-[32px] font-semibold text-white mb-4"
                      style={{ fontFamily: 'var(--font-header)' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-[15px] font-light text-white/70 leading-[1.6] mb-8"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.description}
                    </p>
                    
                    <div className="w-14 h-14 rounded-full bg-[#D2572F] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-90">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right side - Video/Image */}
                <div 
                  className="w-[60%] md:w-full h-full bg-cover bg-center relative group-hover:opacity-90 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p 
                      className="text-white text-sm uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      View Full Video
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-16 right-0 text-4xl text-white transition-colors hover:text-[#D2572F]"
              >
                ✕
              </button>
              {selectedVideo.comingSoon ? (
                <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-none flex items-center justify-center min-h-[400px]">
                  <p 
                    className="text-[32px] md:text-[24px] font-semibold text-white uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Coming Soon
                  </p>
                </div>
              ) : (
                <video
                  src={selectedVideo.video}
                  controls
                  autoPlay
                  className="w-full h-full rounded-none"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
