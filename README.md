# Kimiko's Sanctuary 🌸

A beautiful, interactive tribute website for a beloved black Maine Coon cat named Kimiko. This static website features warm, cozy design with three interactive zones and is perfect for deployment on GitHub Pages.

## ✨ Features

- **Four Interactive Zones:**
  - **Entrance Zone**: Hover over Kimiko to hear her gentle meow
  - **Window Ledge**: Click sleeping Kimiko to see her peaceful dreams
  - **Garden Zone**: Click to place flowers with chime sounds
  - **Memory Bench**: Light candles in memory of Kimiko

- **Theme Toggle**: Switch between warm light mode and peaceful olive mode
- **Responsive Design**: Works beautifully on desktop and mobile
- **Graceful Fallbacks**: Handles missing images and audio gracefully
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🎨 Design Theme

- **Warm Color Palette**: Golden beige, wooden browns, grassy greens
- **Cozy Atmosphere**: Glassmorphism effects with soft blur
- **Peaceful Typography**: Playfair Display and Crimson Text fonts
- **Smooth Animations**: Gentle hover effects and transitions

## 📁 Project Structure

```
kimiko-sanctuary/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # Interactive functionality
├── assets/
│   ├── images/            # Image assets (PNG/JPG)
│   │   ├── sanctuary_bg.jpg
│   │   ├── kimiko_sitting.png
│   │   ├── flower.png
│   │   ├── candle_unlit.png
│   │   └── candle_lit.png
│   └── audio/             # Audio assets (MP3)
│       ├── meow.mp3
│       └── chime.mp3
└── README.md              # This file
```

## 🚀 Quick Start

1. **Clone or Download** this repository
2. **Add Your Assets** (see Asset Requirements below)
3. **Test Locally**: Open `index.html` in your browser
4. **Deploy to GitHub Pages** (instructions below)

## 📦 Asset Requirements

### Required Images (`assets/images/`)
- `sanctuary_bg.jpg` - Full-page background (1920x1080+ recommended)
- `kimiko_sitting.png` - Kimiko at entrance (200-300px width)
- `flower.png` - Flower for garden (40x40px)
- `candle_unlit.png` - Unlit candle (80px width)
- `candle_lit.png` - Lit candle with glow (80px width)

### Required Audio (`assets/audio/`)
- `meow.mp3` - Gentle cat meow (1-3 seconds)
- `chime.mp3` - Soft chime sound (1-3 seconds)

**Note**: The website gracefully handles missing assets and continues to function.

## 🌐 GitHub Pages Deployment

### Step 1: Upload to GitHub
1. Create a new repository on GitHub
2. Name it `kimiko-sanctuary` (or your preferred name)
3. Upload all files to the repository

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/(root)** folder
6. Click **Save**

### Step 3: Access Your Site
Your site will be available at:
```
https://yourusername.github.io/kimiko-sanctuary
```

## 🛠 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --bg-primary: #f2e4c9;    /* Background */
    --wood: #a87c4f;          /* Wood elements */
    --grass: #a9c178;         /* Garden area */
    --accent: #d4a373;        /* Accent color */
}
```

### Content
- Update text in `index.html`
- Modify zone descriptions
- Change footer message

### Interactions
- Adjust audio volume in `js/script.js`
- Modify animation timings
- Customize flower placement behavior

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎯 Interactive Features

1. **Theme Toggle** (☀️/🌙): Switch between light and olive modes
2. **Kimiko Hover**: Hear gentle meow on hover
3. **Window Dreams**: Click sleeping Kimiko to see her peaceful dreams
4. **Flower Placement**: Click button to place flowers with chime
5. **Candle Lighting**: Click candle to light/extinguish with glow effect
6. **Milestone Celebrations**: Special effects every 5 flowers placed

## 💝 Perfect Gift

This website makes a beautiful, personal tribute that can be:
- Shared with family and friends
- Accessed from anywhere
- Customized with personal photos
- Kept as a lasting memory

## 📄 License

This project is open source and available under the MIT License.

---

*Created with love for Kimiko and all beloved pets who bring joy to our lives.* 🐱💕 