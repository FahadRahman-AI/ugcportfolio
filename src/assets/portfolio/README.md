# Portfolio Media Folder

## How to Add Your Photos and Videos

### Step 1: Create Subfolders

Create these folders inside `/src/assets/portfolio/`:
- `photos/` - For your photo files
- `videos/` - For your video files  
- `thumbnails/` - For video thumbnail images

### Step 2: Add Your Media Files

**Photos:**
- Save as: `project-1.jpg`, `project-2.jpg`, etc.
- Format: JPG or PNG
- Size: 1920x1080px or larger
- File size: under 2MB each

**Videos:**
- Save as: `project-1.mp4`, `project-2.mp4`, etc.
- Format: MP4 (H.264 codec)
- Size: 1920x1080px recommended
- Duration: 15-60 seconds
- File size: under 10MB each (compress for web!)

**Video Thumbnails:**
- Save as: `project-1-thumb.jpg`, `project-2-thumb.jpg`, etc.
- Format: JPG
- Size: 1920x1080px
- File size: under 500KB

### Step 3: Update portfolioData.ts

1. Open `/src/data/portfolioData.ts`
2. Uncomment the import section at the top
3. Import your files:
   ```typescript
   import project1Photo from '../assets/portfolio/photos/project-1.jpg'
   import project2Video from '../assets/portfolio/videos/project-2.mp4'
   import project2Thumb from '../assets/portfolio/thumbnails/project-2-thumb.jpg'
   ```
4. Update the `portfolioItems` array:
   ```typescript
   {
     id: 1,
     type: 'photo',
     category: 'Photography',
     title: 'Your Project Name',
     description: 'Project description',
     source: project1Photo, // ← Your imported photo
     thumbnail: project1Photo, // Same for photos
   }
   ```

### Video Compression Tips

Use **HandBrake** (free) to compress videos:
- Preset: "Web" or "Fast 1080p30"
- Target file size: under 10MB
- This ensures fast loading on your website

### File Naming Convention

Use consistent naming:
- Photos: `project-1.jpg`, `project-2.jpg`, etc.
- Videos: `project-1.mp4`, `project-2.mp4`, etc.
- Thumbnails: `project-1-thumb.jpg`, `project-2-thumb.jpg`, etc.

This makes it easier to match files to portfolio items!
