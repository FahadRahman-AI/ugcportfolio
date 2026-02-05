import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ============================================
// SIMPLE GUIDE: HOW TO ADD YOUR GEAR IMAGES
// ============================================
//
// STEP 1: Put your images in the folder
//    → Go to: src/assets/gear/
//    → Save 4 images with these exact names:
//       • sony-a7iv.jpg
//       • iphone-13.jpg
//       • dji-mic-2.jpg
//       • dji-ronin-rs3-mini.jpg
//
// STEP 2: Uncomment the 4 lines below (remove the //)
//
// STEP 3: Change the image paths in the gearItems array below
//    → Find each "image: '/gear/...'" line
//    → Replace with the variable name (sonyA7iv, iphone13, etc.)
//
// That's it! Save the file and your images will appear.
// ============================================

 
 import sonyA7iv from '../assets/gear/sony-a7iv.jpg'
 import iphone13 from '../assets/gear/iphone-13.jpg'
 import djiMic2 from '../assets/gear/dji-mic-2.jpg'
 import djiRonin from '../assets/gear/dji-ronin-rs3-mini.jpg'

interface GearItem {
  id: number
  category: string
  name: string
  description: string
  specs: string[]
  image: string // Replace with imported image path
}

const gearItems: GearItem[] = [
  {
    id: 1,
    category: "CAMERA",
    name: "Sony A7 IV",
    description: "Full-frame mirrorless powerhouse that delivers stunning 4K footage with incredible low-light performance. Perfect for both cinematic brand content and authentic UGC-style videos.",
    specs: [
      "33MP full-frame sensor",
      "4K 60fps video",
      "10-bit 4:2:2 recording",
      "Real-time autofocus"
    ],
    // Change this line to: image: sonyA7iv (after uncommenting import above)
    image: sonyA7iv // ← Change to: image: sonyA7iv
  },
  {
    id: 2,
    category: "PHONE",
    name: "iPhone 13",
    description: "My secret weapon for authentic UGC. The best content doesn't always need the best camera—it needs to feel real. The iPhone delivers that authenticity while maintaining broadcast quality.",
    specs: [
      "Cinematic mode",
      "4K Dolby Vision HDR",
      "Instant portability",
      "Perfect for genuine moments"
    ],
    // Change this line to: image: iphone13 (after uncommenting import above)
    image: iphone13 // ← Change to: image: iphone13
  },
  {
    id: 3,
    category: "AUDIO",
    name: "DJI Mic 2",
    description: "Crystal-clear audio capture with intelligent noise cancellation. Because great content isn't just about what people see—it's about what they hear.",
    specs: [
      "32-bit float recording",
      "Intelligent noise cancelling",
      "250m transmission range",
      "18-hour battery life"
    ],
    // Change this line to: image: djiMic2 (after uncommenting import above)
    image: djiMic2 // ← Change to: image: djiMic2
  },
  {
    id: 4,
    category: "STABILIZATION",
    name: "DJI Ronin RS 3 Mini",
    description: "Buttery-smooth cinematic movement without the bulk. Essential for creating that professional, flowing footage that separates good content from great.",
    specs: [
      "3-axis stabilization",
      "Lightweight design",
      "Precise motion control",
      "Professional results"
    ],
    // Change this line to: image: djiRonin (after uncommenting import above)
    image: djiRonin // ← Change to: image: djiRonin
  }
]

const SetupPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#FAFAFA] py-40 md:py-24 px-20 md:px-6 text-center md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p 
            className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            THE GEAR
          </p>
          
          <h1 
            className="text-[72px] md:text-[48px] font-bold text-black mb-6 uppercase"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-1px'
            }}
          >
            LESS IS MORE
          </h1>
          
          <p 
            className="text-xl md:text-lg font-light text-[#333] leading-[1.7] max-w-[800px] mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I believe in mastering the essentials rather than chasing the latest gear. This minimal setup allows me to move fast, stay creative, and deliver cinema-quality content without the complexity.
          </p>
        </motion.div>
      </section>

      {/* Gear Grid Section */}
      <section className="bg-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-16">
          {gearItems.map((gear, index) => (
            <motion.div
              key={gear.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex md:flex-row flex-col gap-12 bg-[#FAFAFA] p-12 rounded-3xl border border-[#E5E5E5] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2572F]"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
              }}
            >
              {/* Left side - Gear Image */}
              <div className="w-full md:w-[45%] aspect-square bg-white rounded-2xl p-8 flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                }}
              >
                {/* GEAR IMAGE PLACEHOLDER */}
                {/* Replace the src below with your imported image */}
                {/* Example: <img src={sonyA7iv} alt={gear.name} /> */}
                <img 
                  src={gear.image} 
                  alt={gear.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-[#666] text-sm">Image placeholder<br/>Add ${gear.name} image</div>`
                    }
                  }}
                />
              </div>

              {/* Right side - Gear Details */}
              <div className="flex-1">
                <p 
                  className="text-[10px] uppercase tracking-widest text-[#D2572F] font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {gear.category}
                </p>
                
                <h3 
                  className="text-[36px] md:text-[28px] font-semibold text-black mb-4"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  {gear.name}
                </h3>
                
                <p 
                  className="text-base font-light text-[#333] leading-[1.7] mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {gear.description}
                </p>
                
                <ul className="space-y-2">
                  {gear.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#D2572F] mt-1.5">•</span>
                      <span 
                        className="text-sm font-light text-[#666] leading-[2]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout Section */}
      <section className="bg-black text-white py-32 md:py-20 px-20 md:px-6 text-center md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[800px] mx-auto"
        >
          <h2 
            className="text-[48px] md:text-[36px] font-semibold text-white mb-8 uppercase"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            WHY MINIMAL?
          </h2>
          
          <p 
            className="text-lg font-light text-white/80 leading-[1.8] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            This setup is intentionally lean. Instead of getting lost in endless gear upgrades, I've mastered these four tools. The result? Faster workflows, more creative freedom, and consistent quality across every project.
            <br /><br />
            Great content comes from vision and execution—not from having the most expensive equipment.
          </p>
          
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-4 px-10 py-5 uppercase tracking-widest text-xs font-normal transition-all duration-300 cursor-pointer border-2 border-white text-white hover:bg-white hover:text-black"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            See What I Create With It
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </section>
    </>
  )
}

export default SetupPage
