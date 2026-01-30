# 📸 How to Add Photos & Videos to Your MAC Website

## 🖼️ **Option 1: Using Your Own Images (Recommended)**

### **Step 1: Add Images to Public Folder**
1. Create an `images` folder inside `/public/`:
   ```
   /public/images/
   ```

2. Add your photos organized by category:
   ```
   /public/images/hero/malta-sunset.jpg
   /public/images/teachers/teacher-1.jpg
   /public/images/venue/hotel-exterior.jpg
   /public/images/venue/pool.jpg
   /public/images/gallery/workshop-1.jpg
   ```

### **Step 2: Update Image Paths in Components**

#### **Hero Background** (`app/page.tsx`):
```tsx
<ParallaxHero
  backgroundUrl="/images/hero/malta-sunset.jpg"  // ← Change this
  overlay={true}
>
```

#### **Venue Section** (`app/components/VenueSection.tsx`):
```tsx
<Image
  src="/images/venue/hotel-exterior.jpg"  // ← Change this
  alt="Riviera Spa Hotel Malta"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover"
/>
```

#### **Teacher Cards** (`app/components/TeachersPreview.tsx`):
```tsx
const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Sofia Martinez',
    imageUrl: '/images/teachers/sofia.jpg',  // ← Change these
    // ...
  },
];
```

---

## 🎥 **Option 2: Adding Videos**

### **YouTube/Vimeo Embed**
Create a new component `/app/components/VideoSection.tsx`:

```tsx
import { FC } from 'react';
import Reveal from './Reveal';

const VideoSection: FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-brand-sand/20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-4xl font-bold text-brand-sea text-center mb-8">
            Experience MAC 2025
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="MAC 2025 Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default VideoSection;
```

Then add to `app/page.tsx`:
```tsx
import VideoSection from './components/VideoSection';

// In the component:
<VideoSection />  // Add after Teachers section
```

---

## 📷 **Option 3: Photo Gallery**

Create `/app/components/PhotoGallery.tsx`:

```tsx
import { FC } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

const photos = [
  { id: 1, src: '/images/gallery/photo-1.jpg', alt: 'Workshop scene' },
  { id: 2, src: '/images/gallery/photo-2.jpg', alt: 'Beach jam' },
  { id: 3, src: '/images/gallery/photo-3.jpg', alt: 'Group photo' },
  { id: 4, src: '/images/gallery/photo-4.jpg', alt: 'Acro performance' },
  { id: 5, src: '/images/gallery/photo-5.jpg', alt: 'Sunset practice' },
  { id: 6, src: '/images/gallery/photo-6.jpg', alt: 'Community dinner' },
];

const PhotoGallery: FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-4xl font-bold text-brand-sea text-center mb-12">
            MAC 2025 Highlights
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 0.1}>
              <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
```

---

## 🌐 **Option 4: Keep Using Unsplash (Current Setup)**

Your site currently uses Unsplash images, which are:
- ✅ Free and high-quality
- ✅ Already optimized with Next.js Image component
- ✅ No copyright issues

To change Unsplash images, just update the URLs:

1. Go to [Unsplash.com](https://unsplash.com)
2. Search for: "malta", "mediterranean", "acrobatics", "yoga"
3. Click on an image → Click "Download" button (or copy URL)
4. Use the URL like: `https://images.unsplash.com/photo-XXXXX?q=80&w=1200`

---

## 📁 **Recommended Folder Structure**

```
/public/
  /images/
    /hero/
      - hero-background.jpg (1920x1080 or larger)
    /teachers/
      - teacher-1.jpg (800x1200, portrait)
      - teacher-2.jpg
    /venue/
      - hotel-exterior.jpg
      - pool.jpg
      - room.jpg
      - restaurant.jpg
    /gallery/
      - workshop-1.jpg
      - workshop-2.jpg
      - beach-jam.jpg
      - sunset.jpg
    /logos/
      - mac-logo.png (transparent background)
```

---

## 🎨 **Image Optimization Tips**

1. **Resize before uploading:**
   - Hero images: 1920x1080px
   - Teacher cards: 800x1200px
   - Gallery: 1000x1000px

2. **Use tools:**
   - [TinyPNG](https://tinypng.com) - Compress images
   - [Squoosh](https://squoosh.app) - Google's image optimizer

3. **File formats:**
   - Use `.jpg` for photos
   - Use `.png` for logos with transparency
   - Next.js auto-converts to WebP for you!

---

## 🚀 **Quick Start: Replace Hero Image**

1. Save your Malta photo as `/public/images/hero-malta.jpg`
2. Edit `app/page.tsx`:
   ```tsx
   <ParallaxHero
     backgroundUrl="/images/hero-malta.jpg"
     overlay={true}
   >
   ```
3. Save and refresh!

---

Need help? Let me know which images you want to add first and I'll help you implement them! 📸
