# How to Add Your Gear Images - Simple Guide

## Step 1: Get Your Images Ready

Take photos of your 4 pieces of gear:
- Sony A7 IV camera
- iPhone 13
- DJI Mic 2
- DJI Ronin RS 3 Mini

**Image Tips:**
- Square photos work best (like Instagram posts)
- White or light background
- Product centered in the photo
- Good lighting so the product is clear

## Step 2: Save Your Images

1. Open the folder: `src/assets/gear/` (in your project folder)
2. Save your 4 images there with these exact names:
   - `sony-a7iv.jpg` (or `.png`)
   - `iphone-13.jpg` (or `.png`)
   - `dji-mic-2.jpg` (or `.png`)
   - `dji-ronin-rs3-mini.jpg` (or `.png`)

**That's it for the images!** Just drag and drop them into that folder.

## Step 3: Update the Code (Super Simple)

1. Open the file: `src/pages/SetupPage.tsx`
2. Find the very top of the file (around line 3-15)
3. You'll see a comment section that says "GEAR IMAGE IMPORTS"
4. Replace that whole comment section with these 4 lines:

```typescript
import sonyA7iv from '../assets/gear/sony-a7iv.jpg'
import iphone13 from '../assets/gear/iphone-13.jpg'
import djiMic2 from '../assets/gear/dji-mic-2.jpg'
import djiRonin from '../assets/gear/dji-ronin-rs3-mini.jpg'
```

5. Scroll down a bit (around line 30-70) and find the `gearItems` array
6. For each gear item, change the `image:` line:

**For Sony A7 IV** (first item):
- Find: `image: "/gear/sony-a7iv.jpg"`
- Change to: `image: sonyA7iv`

**For iPhone 13** (second item):
- Find: `image: "/gear/iphone-13.jpg"`
- Change to: `image: iphone13`

**For DJI Mic 2** (third item):
- Find: `image: "/gear/dji-mic-2.jpg"`
- Change to: `image: djiMic2`

**For DJI Ronin** (fourth item):
- Find: `image: "/gear/dji-ronin-rs3-mini.jpg"`
- Change to: `image: djiRonin`

## Step 4: Save and Check

1. Save the file
2. Your dev server should automatically refresh
3. Go to `/setup` page and you should see your images!

---

## Quick Checklist

- [ ] Images saved in `src/assets/gear/` folder
- [ ] Images named correctly (exact names above)
- [ ] Added 4 import lines at top of SetupPage.tsx
- [ ] Changed all 4 `image:` lines in gearItems array
- [ ] Saved the file

That's it! Your images should now appear on the setup page.
