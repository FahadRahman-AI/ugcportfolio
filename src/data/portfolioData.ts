// ============================================
// PORTFOLIO MEDIA DATA
// ============================================
// This file contains all your portfolio items (photos and videos)
//
// HOW TO ADD YOUR PHOTOS AND VIDEOS:
// ============================================
//
// STEP 1: CREATE FOLDERS
// In your project, create these folders:
// /src/assets/portfolio/photos/
// /src/assets/portfolio/videos/
// /src/assets/portfolio/thumbnails/
//
// STEP 2: ADD YOUR MEDIA FILES
// - Save photos as: project-1.jpg, project-2.jpg, etc.
// - Save videos as: project-1.mp4, project-2.mp4, etc.
// - Save video thumbnails as: project-1-thumb.jpg, etc.
//
// STEP 3: IMPORT YOUR MEDIA and replace null values in the array below
//
// ============================================

export type PortfolioCategory = 'Brand Films' | 'Social Content' | 'Product Showcases' | 'Lifestyle & Atmosphere'

export interface PortfolioItem {
  id: number
  type: 'photo' | 'video'
  category: PortfolioCategory
  title: string
  description: string
  source: string | null
  thumbnail: string | null
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: 'video',
    category: 'Brand Films',
    title: 'Brand Story',
    description: 'Cinematic brand film showcasing mission, values, and what makes this brand different.',
    source: null,
    thumbnail: null,
    featured: true
  },
  {
    id: 2,
    type: 'video',
    category: 'Product Showcases',
    title: 'Product Launch',
    description: 'High-quality product video combining lifestyle aesthetics with clear feature highlights.',
    source: null,
    thumbnail: null,
    featured: true
  },
  {
    id: 3,
    type: 'video',
    category: 'Social Content',
    title: 'Social Campaign',
    description: 'Scroll-stopping social media content designed to grow presence and attract audiences.',
    source: null,
    thumbnail: null,
    featured: false
  },
  {
    id: 4,
    type: 'video',
    category: 'Lifestyle & Atmosphere',
    title: 'Lifestyle Content',
    description: 'Atmospheric brand content that builds emotional connection and brand identity.',
    source: null,
    thumbnail: null,
    featured: false
  },
  {
    id: 5,
    type: 'video',
    category: 'Brand Films',
    title: 'Company Story',
    description: 'Cinematic piece telling the story behind the business and connecting with ideal customers.',
    source: null,
    thumbnail: null,
    featured: false
  },
  {
    id: 6,
    type: 'video',
    category: 'Social Content',
    title: 'Viral Moment',
    description: 'Content crafted for maximum shareability and audience growth on social platforms.',
    source: null,
    thumbnail: null,
    featured: false
  }
]

export const categories = ['All Work', 'Brand Films', 'Social Content', 'Product Showcases', 'Lifestyle & Atmosphere'] as const
