# Video Setup Guide for iStock Video

## 📋 What to Download from iStock

When purchasing the video from iStock (https://www.istockphoto.com/video/futuristic-hi-tech-planet-loop-gm156620830-22034846), follow these guidelines:

### 1. **Video Format & Resolution**
   - **Format**: Download **MP4 (H.264)** format
   - **Resolution**: Choose **1920x1080 (Full HD)** or **3840x2160 (4K)** if available
   - **Aspect Ratio**: 16:9 is ideal (most common for web banners)
   - **Frame Rate**: 30fps is sufficient (24fps or 30fps both work)

### 2. **Video Specifications**
   - **Codec**: H.264 (most compatible)
   - **Bitrate**: 
     - For Full HD (1920x1080): 5-8 Mbps
     - For 4K: 10-15 Mbps
   - **Duration**: Since it's a loop, shorter is better (10-30 seconds ideal)
   - **File Size**: Try to keep under 10MB for web (you can compress it)

### 3. **Additional Files to Download**
   - **Poster/Thumbnail Image**: Download a high-quality still frame from the video
     - Use this as the `posterImage` prop
     - Resolution: 1920x1080 or higher
     - Format: JPG or PNG

## 🎬 Video Optimization Steps

### Step 1: Compress the Video (if needed)
If the downloaded video is too large (>10MB), compress it using:

**Option A: Online Tools**
- **CloudConvert**: https://cloudconvert.com/mp4-converter
- **HandBrake**: Free desktop software (recommended)
- **FFmpeg**: Command-line tool (advanced)

**Option B: Using HandBrake (Recommended)**
1. Download HandBrake: https://handbrake.fr/
2. Open your video
3. Preset: "Web/General" or "Fast 1080p30"
4. Video Codec: H.264
5. Quality: RF 23-28 (lower = better quality, larger file)
6. FPS: Same as source (usually 30)
7. Click "Start Encode"

**Target File Size**: 
- Mobile-friendly: 2-5 MB
- Desktop: 5-10 MB
- Maximum: 15 MB

### Step 2: Create WebM Version (Optional but Recommended)
WebM format provides better compression:
- Use CloudConvert or FFmpeg
- Format: WebM (VP9 codec)
- This can reduce file size by 30-50%

## 📱 Responsive Video Setup

The VideoBanner component is already set up to handle responsive videos. Here's how it works:

### Current Setup in AboutPage.jsx:
```jsx
<VideoBanner
  videoSrc="/path/to/your/video.mp4"
  videoSrcWebm="/path/to/your/video.webm" // Optional
  posterImage="/path/to/poster.jpg"
  height="h-[360px] sm:h-[420px] md:h-[720px] lg:h-[900px]"
  // This creates responsive heights:
  // Mobile: 360px
  // Small screens: 420px
  // Medium screens (tablets): 720px
  // Large screens (desktop): 900px
/>
```

### How It Works:
- **`object-cover`**: Video fills the container while maintaining aspect ratio
- **Responsive Heights**: Different heights for different screen sizes
- **Aspect Ratio**: Video maintains its original aspect ratio
- **Centered**: Video is centered in the container

## 🔧 Implementation Steps

### 1. Upload Video Files
Place your optimized video files in:
```
public/assets/videos/
  ├── about-us-banner.mp4
  └── about-us-banner.webm (optional)
```

### 2. Upload Poster Image
Place your poster image in:
```
public/assets/images/
  └── about-us-banner-poster.jpg
```

### 3. Update AboutPage.jsx
```jsx
<VideoBanner
  videoSrc="/assets/videos/about-us-banner.mp4"
  videoSrcWebm="/assets/videos/about-us-banner.webm" // Optional
  posterImage="/assets/images/about-us-banner-poster.jpg"
  title="Unicorn Petroleum Industries Pvt. Ltd."
  subtitle="A legacy of excellence"
  overlay={true}
  height="h-[360px] sm:h-[420px] md:h-[720px] lg:h-[900px]"
  loadImmediately={true}
/>
```

## ✅ Checklist Before Going Live

- [ ] Video file size is optimized (< 10MB recommended)
- [ ] Video format is MP4 (H.264)
- [ ] WebM version created (optional but recommended)
- [ ] Poster image is high quality and matches video
- [ ] Video loops smoothly (no visible jump)
- [ ] Video is muted (required for autoplay)
- [ ] Tested on mobile devices
- [ ] Tested on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Video loads quickly (< 3 seconds on 4G)
- [ ] Fallback poster image displays correctly

## 🎯 Best Practices

1. **Video Length**: Keep it short (10-30 seconds) for banner videos
2. **File Size**: Smaller is better for web performance
3. **Aspect Ratio**: 16:9 works best for most screens
4. **Loop**: Ensure seamless loop (no visible cut)
5. **Muted**: Always muted for autoplay compatibility
6. **Poster Image**: Use a compelling frame from the video
7. **Testing**: Test on real devices, not just browser dev tools

## 🚀 Performance Tips

1. **Use CDN**: Host videos on Cloudinary, AWS S3, or similar CDN
2. **Lazy Loading**: Already implemented (loads when near viewport)
3. **Preload**: Set to "metadata" (already done) - only loads metadata initially
4. **Multiple Formats**: Provide MP4 and WebM for best compatibility
5. **Compression**: Always compress videos before uploading

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify video file paths are correct
3. Ensure video format is supported (MP4 H.264)
4. Test with poster image first to verify setup
5. Check file permissions on server

