# 📸 Simple Guide: Adding Photos to Your Portfolio Page

## The 3-Step Process

### Step 1: Save Your Photos 📁

1. Open your project folder
2. Go to: `src` → `assets` → `portfolio` → `photos`
3. Put your photos in that folder
4. Name them clearly: `urban-showcase.jpg`, `outdoor-captures.jpg`, `nightlife-1.jpg`, `nightlife-2.jpg`, etc.

**Photo Tips:**
- Format: JPG or PNG
- Size: 1920x1080px or larger works best
- File size: under 2MB each (compress if needed)

---

### Step 2: Import Your Photos ✏️

1. Open the file: `src/data/portfolioData.ts`
2. Find the top of the file (around line 35-40)
3. You'll see commented import examples
4. Add your imports. For example:

```typescript
import urbanShowcase from '../assets/portfolio/photos/urban-showcase.jpg'
import outdoorCaptures from '../assets/portfolio/photos/outdoor-captures.jpg'
import nightlife1 from '../assets/portfolio/photos/nightlife-1.jpg'
import nightlife2 from '../assets/portfolio/photos/nightlife-2.jpg'
```

**Add these import lines right after the comment section (around line 60)**

---

### Step 3: Update the Data 🔄

Scroll down to the `portfolioItems` array (around line 72).

For each Photography item, find the `source:` line and replace `null` with your imported photo:

**Item 2 - "Urban showcase" (1st big card):**
- Find: `source: null, // Replace with: project2Photo`
- Change to: `source: urbanShowcase,`

**Item 6 - "Outdoor captures":**
- Find: `source: null, // Replace with: project6Photo`
- Change to: `source: outdoorCaptures,`
- Also change: `thumbnail: null,` to `thumbnail: outdoorCaptures,`

**Item 9 - "Cinematic nightlife" (first one):**
- Find: `source: null, // Replace with: project9Photo`
- Change to: `source: nightlife1,`
- Also change: `thumbnail: null,` to `thumbnail: nightlife1,`

**Item 12 - "Cinematic nightlife" (second one):**
- Find: `source: null, // Replace with: project12Photo`
- Change to: `source: nightlife2,`
- Also change: `thumbnail: null,` to `thumbnail: nightlife2,`

---

## ✅ Done!

Save the file and your photos will appear on the `/work` page when you filter by "Photography"!

---

## Quick Checklist

- [ ] Photos saved in `src/assets/portfolio/photos/` folder
- [ ] Photos named clearly
- [ ] Added import lines at top of portfolioData.ts
- [ ] Changed all 4 `source:` lines in Photography items
- [ ] Changed all 4 `thumbnail:` lines (same as source for photos)
- [ ] Saved the file

---

## Example of What It Should Look Like

**At the top of portfolioData.ts:**
```typescript
import urbanShowcase from '../assets/portfolio/photos/urban-showcase.jpg'
import outdoorCaptures from '../assets/portfolio/photos/outdoor-captures.jpg'
import nightlife1 from '../assets/portfolio/photos/nightlife-1.jpg'
import nightlife2 from '../assets/portfolio/photos/nightlife-2.jpg'
```

**In the portfolioItems array:**
```typescript
{
  id: 2,
  type: 'photo',
  category: 'Photography',
  title: 'Urban showcase',
  description: 'Capturing the energy...',
  source: urbanShowcase, // ← Your photo here
  thumbnail: urbanShowcase, // ← Same for photos
  featured: true
},
```

That's it! Your photos will show up on the portfolio page.
