# Keeta Rider Rest Areas

A responsive React-based rider information webpage for Keeta, built with Vite and optimized for Vercel hosting.

## Features

- Fully responsive design for desktop and mobile
- Keeta-branded colors (#FFE41F yellow, #11CC9A green)
- Sticky navigation with mobile hamburger menu
- Smooth scrolling table of contents
- City-wise rest area listings with Google Maps links
- Professional footer with grouped links

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
cd keeta-rider-rest-areas
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the Vite project
5. Click Deploy

That's it! Your site will be live on a `.vercel.app` domain.

## Project Structure

```
keeta-rider-rest-areas/
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── public/
│   └── assets/
│       └── keeta-logo.png  # Place your logo here
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main application component
    ├── App.css             # Application styles
    └── index.css           # Global styles
```

## Customization

### Logo

Replace `/public/assets/keeta-logo.png` with your actual Keeta logo file.

### Rest Area Locations

Edit the `cityData` array in `src/App.jsx` to update locations:

```javascript
const cityData = [
  {
    id: 'dubai',
    name: 'Dubai Rest Areas',
    locations: [
      { name: 'Business Bay', url: 'https://maps.google.com/?q=Business+Bay+Dubai' },
      // Add more locations...
    ],
  },
  // Add more cities...
]
```

### Colors

Update CSS variables in `src/App.css`:

```css
:root {
  --keeta-yellow: #FFE41F;
  --keeta-green: #11CC9A;
  --keeta-black: #000000;
  --keeta-white: #FFFFFF;
}
```

## License

© 2026 Keeta. All rights reserved.
