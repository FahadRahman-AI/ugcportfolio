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


 import urbanShowcase from '../assets/portfolio/photos/urban-showcase.jpg'
 import outdoorCaptures from '../assets/portfolio/photos/outdoor-captures.jpg'
 import nightlife1 from '../assets/portfolio/photos/nightlife-1.jpg'
 import nightlife2 from '../assets/portfolio/photos/nightlife-2.jpg'

export interface PortfolioItem {
  id: number
  type: 'photo' | 'video'
  category: 'Brand Film' | 'UGC Content' | 'Photography'
  title: string
  description: string
  source: string | null // Photo URL or video URL
  thumbnail: string | null // Thumbnail for videos, same as source for photos
  featured?: boolean // Highlight certain pieces
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: 'video',
    category: 'Brand Film',
    title: 'Cinematic Brand Story',
    description: 'A cinematic brand film showcasing the essence of the product through visual storytelling.',
    source: null, // Replace with: project1Video
    thumbnail: null, // Replace with: project1Thumb
    featured: true
  },
  {
    id: 2,
    type: 'photo',
    category: 'Photography',
    title: 'Urban showcase',
    description: 'Capturing the energy and character of urban environments through cinematic composition and lighting.',
    source: null, // ← Change to: urbanShowcase (after importing above)
    thumbnail: null, // ← Change to: urbanShowcase (same as source for photos)
    featured: true
  },
  {
    id: 3,
    type: 'video',
    category: 'UGC Content',
    title: 'Authentic Review',
    description: 'Scroll-stopping UGC content that feels genuine and builds trust.',
    source: null, // Replace with: project3Video
    thumbnail: null, // Replace with: project3Thumb
    featured: false
  },
  {
    id: 4,
    type: 'photo',
    category: 'Brand Film',
    title: 'Brand Campaign',
    description: 'Visual campaign that captures brand identity and messaging.',
    source: null, // Replace with: project4Photo
    thumbnail: null,
    featured: false
  },
  {
    id: 5,
    type: 'video',
    category: 'UGC Content',
    title: 'Product Unboxing',
    description: 'First-impression content that captures genuine excitement.',
    source: null, // Replace with: project5Video
    thumbnail: null, // Replace with: project5Thumb
    featured: false
  },
  {
    id: 6,
    type: 'photo',
    category: 'Photography',
    title: 'Outdoor captures',
    description: 'Natural landscapes and outdoor scenes captured with cinematic precision and attention to detail.',
    source: null, // ← Change to: outdoorCaptures (after importing above)
    thumbnail: null, // ← Change to: outdoorCaptures (same as source for photos)
    featured: false
  },
  {
    id: 7,
    type: 'video',
    category: 'Brand Film',
    title: 'Corporate Video',
    description: 'Professional brand content with cinematic production quality.',
    source: null, // Replace with: project7Video
    thumbnail: null, // Replace with: project7Thumb
    featured: false
  },
  {
    id: 8,
    type: 'photo',
    category: 'UGC Content',
    title: 'Social Media Content',
    description: 'Authentic content designed for social platforms.',
    source: null, // Replace with: project8Photo
    thumbnail: null,
    featured: false
  },
  {
    id: 9,
    type: 'photo',
    category: 'Photography',
    title: 'Cinematic nightlife',
    description: 'Vibrant nightlife scenes brought to life with dramatic lighting and cinematic storytelling.',
    source: null, // ← Change to: nightlife1 (after importing above)
    thumbnail: null, // ← Change to: nightlife1 (same as source for photos)
    featured: false
  },
  {
    id: 10,
    type: 'photo',
    category: 'Brand Film',
    title: 'Campaign Visuals',
    description: 'High-quality visuals for brand marketing campaigns.',
    source: null, // Replace with: project10Photo
    thumbnail: null,
    featured: false
  },
  {
    id: 11,
    type: 'video',
    category: 'UGC Content',
    title: 'User Testimonial',
    description: 'Real user experience captured authentically.',
    source: null, // Replace with: project11Video
    thumbnail: null, // Replace with: project11Thumb
    featured: false
  },
  {
    id: 12,
    type: 'photo',
    category: 'Photography',
    title: 'Cinematic nightlife',
    description: 'Vibrant nightlife scenes brought to life with dramatic lighting and cinematic storytelling.',
    source: null, // ← Change to: nightlife2 (after importing above)
    thumbnail: null, // ← Change to: nightlife2 (same as source for photos)
    featured: false
  }
]

export const categories = ['All Work', 'Brand Film', 'UGC Content', 'Photography'] as const
