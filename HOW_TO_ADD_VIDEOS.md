# How to Add Your Sample Videos

## Quick Steps

### 1. Prepare Your Files

**Video Files:**
- Format: `.mp4` (recommended) or `.webm`, `.mov`
- Place them in the `/public` folder
- Name them clearly: `video-1.mp4`, `video-2.mp4`, etc.

**Thumbnail Images:**
- Format: `.jpg` or `.png`
- Recommended size: 1200x1600px (9:16 aspect ratio for vertical videos)
- Place them in the `/public` folder
- Name them to match: `video-1-thumb.jpg`, `video-2-thumb.jpg`, etc.

### 2. Edit the Portfolio Component

Open `src/components/Portfolio.tsx` and find the `portfolioItems` array (around line 14).

Replace the example items with your actual videos:

```typescript
const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    number: "01", 
    title: "Your Video Title", 
    description: "A brief description of what this video shows.",
    thumbnail: "/video-1-thumb.jpg",  // Your thumbnail file name
    video: "/video-1.mp4",              // Your video file name
    span: true  // Set to true for larger items, false for smaller
  },
  { 
    id: 2, 
    number: "02", 
    title: "Another Video", 
    description: "Another description.",
    thumbnail: "/video-2-thumb.jpg", 
    video: "/video-2.mp4"
    // span omitted = smaller item
  },
  // Add more videos...
]
```

### 3. File Structure Example

Your `/public` folder should look like this:

```
public/
  ├── video-1.mp4
  ├── video-1-thumb.jpg
  ├── video-2.mp4
  ├── video-2-thumb.jpg
  ├── video-3.mp4
  ├── video-3-thumb.jpg
  └── fahad-rahman.jpg
```

### 4. Tips

- **Thumbnails**: You can extract a frame from your video as a thumbnail, or create custom thumbnails
- **Large Items**: Set `span: true` on your best/most impressive videos to make them stand out
- **Order**: Arrange items in the order you want them to appear
- **File Paths**: Always start paths with `/` (e.g., `/video-1.mp4` not `video-1.mp4`)

### 5. Testing

After adding your files:
1. Make sure the dev server is running (`npm run dev`)
2. Check the Portfolio section
3. Click on a video card to open the modal
4. Verify videos play correctly

## Need Help?

If videos don't appear:
- Check that file names match exactly (case-sensitive)
- Ensure files are in the `/public` folder, not `/src`
- Check browser console for any errors
- Verify video format is supported (MP4 is best)
