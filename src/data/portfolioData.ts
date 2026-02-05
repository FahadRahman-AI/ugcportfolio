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
// Uncomment and update the imports below:
//
// import project1Photo from '../assets/portfolio/photos/project-1.jpg';
// import project2Video from '../assets/portfolio/videos/project-2.mp4';
// import project2Thumb from '../assets/portfolio/thumbnails/project-2-thumb.jpg';
//
// STEP 4: UPDATE THE DATA BELOW
// Replace null values with your imported media:
//
// {
//   id: 1,
//   type: 'photo',
//   category: 'Photography',
//   title: 'Your Project Name',
//   description: 'What this project was about',
//   source: project1Photo, // ← Add imported photo here
//   thumbnail: project1Photo, // Same as source for photos
// },
//
// ============================================
// VIDEO COMPRESSION TIP:
// Use HandBrake (free) to compress videos:
// - Preset: "Web" or "Fast 1080p30"
// - Keep file under 10MB for good web performance
// ============================================

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
    title: 'Product Showcase',
    description: 'Professional product photography that highlights key features and aesthetic.',
    source: null, // Replace with: project2Photo
    thumbnail: null, // Same as source for photos
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
    title: 'Lifestyle Integration',
    description: 'Seamless product placement in real-life scenarios.',
    source: null, // Replace with: project6Photo
    thumbnail: null,
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
    type: 'video',
    category: 'Photography',
    title: 'Behind the Scenes',
    description: 'A glimpse into the creative process and production.',
    source: null, // Replace with: project9Video
    thumbnail: null, // Replace with: project9Thumb
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
    title: 'Editorial Style',
    description: 'Editorial photography with artistic composition.',
    source: null, // Replace with: project12Photo
    thumbnail: null,
    featured: false
  }
]

export const categories = ['All Work', 'Brand Film', 'UGC Content', 'Photography'] as const
