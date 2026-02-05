# 📸 Simple Guide: Adding Images to Your Setup Page

## The 3-Step Process

### Step 1: Save Your Images 📁

1. Open your project folder
2. Go to: `src` → `assets` → `gear`
3. Put 4 images in that folder with these **exact names**:
   - `sony-a7iv.jpg` (your camera photo)
   - `iphone-13.jpg` (your phone photo)
   - `dji-mic-2.jpg` (your microphone photo)
   - `dji-ronin-rs3-mini.jpg` (your gimbal photo)

**Tip:** Just drag and drop your photos into that folder!

---

### Step 2: Uncomment the Import Lines ✏️

1. Open the file: `src/pages/SetupPage.tsx`
2. Find the top of the file (around line 4-20)
3. You'll see 4 lines that start with `//` (they're commented out)
4. Remove the `//` from these 4 lines:

**Before:**
```typescript
// import sonyA7iv from '../assets/gear/sony-a7iv.jpg'
// import iphone13 from '../assets/gear/iphone-13.jpg'
// import djiMic2 from '../assets/gear/dji-mic-2.jpg'
// import djiRonin from '../assets/gear/dji-ronin-rs3-mini.jpg'
```

**After:**
```typescript
import sonyA7iv from '../assets/gear/sony-a7iv.jpg'
import iphone13 from '../assets/gear/iphone-13.jpg'
import djiMic2 from '../assets/gear/dji-mic-2.jpg'
import djiRonin from '../assets/gear/dji-ronin-rs3-mini.jpg'
```

---

### Step 3: Update the Image Paths 🔄

Scroll down in the same file until you find the `gearItems` array (around line 34).

For each of the 4 items, change the `image:` line:

**Item 1 - Sony A7 IV:**
- Find: `image: "/gear/sony-a7iv.jpg"`
- Change to: `image: sonyA7iv`

**Item 2 - iPhone 13:**
- Find: `image: "/gear/iphone-13.jpg"`
- Change to: `image: iphone13`

**Item 3 - DJI Mic 2:**
- Find: `image: "/gear/dji-mic-2.jpg"`
- Change to: `image: djiMic2`

**Item 4 - DJI Ronin:**
- Find: `image: "/gear/dji-ronin-rs3-mini.jpg"`
- Change to: `image: djiRonin`

---

## ✅ Done!

Save the file and your images will appear on the `/setup` page!

---

## Quick Checklist

- [ ] Images saved in `src/assets/gear/` folder
- [ ] Images named correctly (exact names above)
- [ ] Removed `//` from 4 import lines
- [ ] Changed all 4 `image:` lines in gearItems array
- [ ] Saved the file

---

## Need Help?

If images don't show:
1. Check the file names match exactly (case-sensitive!)
2. Make sure images are in `src/assets/gear/` folder
3. Make sure you removed the `//` from imports
4. Make sure you changed all 4 `image:` lines
