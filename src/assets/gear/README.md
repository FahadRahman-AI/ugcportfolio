# Gear Images Folder

## How to Add Your Gear Images

1. **Save your images** in this folder (`/src/assets/gear/`)
   - Recommended file names:
     - `sony-a7iv.jpg` (or `.png`)
     - `iphone-13.jpg`
     - `dji-mic-2.jpg`
     - `dji-ronin-rs3-mini.jpg`

2. **Image Specifications:**
   - Square format (1:1 ratio)
   - Recommended size: 1200x1200px
   - White or neutral background
   - Product centered in frame
   - High quality PNG or JPG
   - File size: under 500KB each

3. **Update SetupPage.tsx:**
   - Open `src/pages/SetupPage.tsx`
   - Uncomment and update the import statements at the top
   - Replace the placeholder image paths in the `gearItems` array

## Example Import:

```typescript
import sonyA7iv from '../assets/gear/sony-a7iv.jpg'
import iphone13 from '../assets/gear/iphone-13.jpg'
import djiMic2 from '../assets/gear/dji-mic-2.jpg'
import djiRonin from '../assets/gear/dji-ronin-rs3-mini.jpg'
```

Then in the `gearItems` array, replace:
```typescript
image: "/gear/sony-a7iv.jpg"
```

With:
```typescript
image: sonyA7iv
```
