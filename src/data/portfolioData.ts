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
// RECOMMENDED SPECS:
// Photos:
// - Format: JPG or PNG
// - Size: 1920x1080px or larger
// - Aspect ratio: 16:9 or 4:5 or 1:1 (can be mixed)
// - File size: under 2MB each (compress if needed)
//
// Videos:
// - Format: MP4 (H.264 codec)
// - Size: 1920x1080px recommended
// - Duration: 15-60 seconds for web (longer videos load slowly)
// - File size: under 10MB each (compress heavily for web)
// - Aspect ratio: 9:16 (vertical) or 16:9 (horizontal)
//
// STEP 3: IMPORT YOUR MEDIA
// Add your import statements here (after line 60, before the interface):
//
// For Photography section photos:
// import urbanShowcase from '../assets/portfolio/photos/urban-showcase.jpg';
// import outdoorCaptures from '../assets/portfolio/photos/outdoor-captures.jpg';
// import nightlife1 from '../assets/portfolio/photos/nightlife-1.jpg';
// import nightlife2 from '../assets/portfolio/photos/nightlife-2.jpg';
//
// STEP 4: UPDATE THE DATA BELOW
// Replace null values with your imported media (see examples in the array below)
//
// ============================================
// VIDEO COMPRESSION TIP:
// Use HandBrake (free) to compress videos:
// - Preset: "Web" or "Fast 1080p30"
// - Keep file under 10MB for good web performance
// ============================================


export type PortfolioCategory = 'Storytelling' | 'Automotive' | 'Urban' | 'Travel'

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
    category: 'Storytelling',
    title: 'Narrative Short Film',
    description: 'A cinematic piece exploring human emotion and visual storytelling.',
    source: null,
    thumbnail: null,
    featured: true
  },
  {
    id: 2,
    type: 'video',
    category: 'Automotive',
    title: 'Car Showcase',
    description: 'Dynamic shots capturing speed, design, and automotive beauty.',
    source: null,
    thumbnail: null,
    featured: true
  },
  {
    id: 3,
    type: 'video',
    category: 'Urban',
    title: 'City Vibes',
    description: 'Urban exploration showcasing architecture and atmosphere.',
    source: null,
    thumbnail: null,
    featured: false
  },
  {
    id: 4,
    type: 'video',
    category: 'Travel',
    title: 'Exploration Series',
    description: 'Documenting places, moments, and the journey itself.',
    source: null,
    thumbnail: null,
    featured: false
  },
  {
    id: 5,
    type: 'video',
    category: 'Automotive',
    title: 'Motion Study',
    description: 'Another automotive piece with different style and approach.',
    source: null,
    thumbnail: null,
    featured: false
  },
  {
    id: 6,
    type: 'video',
    category: 'Storytelling',
    title: 'Visual Essay',
    description: 'A cinematic study in composition, light, and narrative.',
    source: null,
    thumbnail: null,
    featured: false
  }
]

export const categories = ['All Work', 'Storytelling', 'Automotive', 'Urban', 'Travel'] as const
