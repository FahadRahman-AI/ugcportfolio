import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioItems, categories } from '../data/portfolioData'
import type { PortfolioItem } from '../data/portfolioData'

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Work')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // Filter items based on active category
  const filteredItems = activeFilter === 'All Work' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  // Featured items (first 2)
  const featuredItems = filteredItems.filter(item => item.featured).slice(0, 2)
  const regularItems = filteredItems.filter(item => !item.featured || !featuredItems.includes(item))

  // Open lightbox
  const openLightbox = (item: PortfolioItem, index: number) => {
    setSelectedItem(item)
    setSelectedIndex(index)
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedItem(null)
  }

  // Navigate lightbox
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedItem) return
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    
    if (newIndex < 0) newIndex = filteredItems.length - 1
    if (newIndex >= filteredItems.length) newIndex = 0
    
    setSelectedItem(filteredItems[newIndex])
    setSelectedIndex(newIndex)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#FAFAFA] py-40 md:py-24 px-20 md:px-6 text-center md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[800px] mx-auto"
        >
          <p 
            className="text-[11px] uppercase tracking-widest text-[#666] font-normal mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            PORTFOLIO
          </p>
          
          <h1 
            className="text-[72px] md:text-[48px] font-bold text-black leading-[1.1] mb-6 uppercase"
            style={{ 
              fontFamily: 'var(--font-header)',
              letterSpacing: '-1px'
            }}
          >
            RECENT WORK
          </h1>
          
          <p 
            className="text-xl md:text-lg font-light text-[#333] leading-[1.7]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A collection of cinematic storytelling, automotive, urban, and travel content.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs Section */}
      <section className="bg-[#FAFAFA] pb-16 px-20 md:px-6 md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3 rounded-full uppercase tracking-widest text-xs font-normal transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-black text-white border border-black'
                  : 'bg-white text-black border border-[#E5E5E5] hover:border-[#D2572F] hover:text-[#D2572F]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-32 md:py-20 px-20 md:px-6 md:ml-[280px]">
        <div className="max-w-[1600px] mx-auto">
          {/* Featured Items (Larger) */}
          {featuredItems.length > 0 && (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-8">
              {featuredItems.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  index={index}
                  isFeatured={true}
                  onClick={() => openLightbox(item, index)}
                />
              ))}
            </div>
          )}

          {/* Regular Grid Items */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {regularItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={featuredItems.length + index}
                isFeatured={false}
                onClick={() => openLightbox(item, featuredItems.length + index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-32 md:py-20 px-20 md:px-6 text-center md:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[800px] mx-auto"
        >
          <h2 
            className="text-[56px] md:text-[36px] font-semibold text-white mb-6"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            LIKE WHAT YOU SEE?
          </h2>
          
          <p 
            className="text-lg font-light text-white/80 leading-[1.7] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Let's create something amazing together. Get in touch and let's discuss your project.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-black px-12 py-5 rounded-full uppercase tracking-widest text-xs font-normal transition-all duration-300 hover:bg-[#D2572F] hover:text-white hover:scale-105"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get In Touch
            </Link>
            
            <Link
              to="/setup"
              className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full uppercase tracking-widest text-xs font-normal transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Setup
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox
            item={selectedItem}
            items={filteredItems}
            currentIndex={selectedIndex}
            onClose={closeLightbox}
            onNavigate={navigateLightbox}
          />
        )}
      </AnimatePresence>
    </>
  )
}

// Gallery Item Component
interface GalleryItemProps {
  item: PortfolioItem
  index: number
  isFeatured: boolean
  onClick: () => void
}

const GalleryItem = ({ item, index, isFeatured, onClick }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      className={`relative cursor-pointer overflow-hidden rounded-2xl bg-black ${
        isFeatured ? 'h-[500px] md:h-[600px]' : 'h-[400px]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isHovered ? '0 20px 60px rgba(0,0,0,0.15)' : 'none'
      }}
    >
      {/* Loading Placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-[#F5F5F5] animate-pulse" />
      )}

      {/* Photo or Video */}
      {item.type === 'photo' ? (
        item.source ? (
          <img
            src={item.source}
            alt={item.title}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
            Add {item.title} image
          </div>
        )
      ) : (
        <>
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
              Add {item.title} thumbnail
            </div>
          )}
          
          {/* Play Icon */}
          {!isHovered && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pointer-events-none opacity-80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}

          {/* Video Preview on Hover */}
          {isHovered && item.source && (
            <video
              src={item.source}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </>
      )}

      {/* Overlay on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8"
      >
        <div>
          <p 
            className="text-[10px] uppercase tracking-widest text-[#D2572F] font-semibold mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {item.category}
          </p>
          <h3 
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            {item.title}
          </h3>
          <p 
            className="text-sm font-light text-white/80 leading-[1.5]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Lightbox Component
interface LightboxProps {
  item: PortfolioItem
  items: PortfolioItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
  onKeyDown?: (e: React.KeyboardEvent) => void
}

const Lightbox = ({ item, items, onClose, onNavigate }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate('prev')
      if (e.key === 'ArrowRight') onNavigate('next')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNavigate])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-16 right-0 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/20 transition-all duration-300"
        >
          ×
        </button>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNavigate('prev')
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNavigate('next')
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              →
            </button>
          </>
        )}

        {/* Content */}
        {item.type === 'photo' ? (
          item.source ? (
            <img
              src={item.source}
              alt={item.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          ) : (
            <div className="w-[800px] h-[600px] bg-white/10 rounded-lg flex items-center justify-center text-white">
              Image not available
            </div>
          )
        ) : (
          item.source ? (
            <video
              src={item.source}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-[800px] h-[600px] bg-white/10 rounded-lg flex items-center justify-center text-white">
              Video not available
            </div>
          )
        )}

        {/* Item Info */}
        <div className="mt-6 text-center text-white">
          <p 
            className="text-[10px] uppercase tracking-widest text-[#D2572F] font-semibold mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {item.category}
          </p>
          <h3 
            className="text-2xl font-semibold mb-2"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            {item.title}
          </h3>
          <p 
            className="text-sm font-light text-white/80"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PortfolioPage
