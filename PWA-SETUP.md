# Progressive Web App (PWA) Setup

Your Next.js application is now configured as a Progressive Web App following the official Next.js documentation approach.

## What's Been Implemented

### 1. Web App Manifest (`/public/manifest.json`)
- Defines app metadata (name, colors, icons)
- Configures how the app appears when installed
- Sets standalone display mode

### 2. Service Worker (`/public/sw.js`)
- Implements offline functionality
- Caches static resources
- Provides fallback to offline page
- Auto-updates on new service worker versions

### 3. Service Worker Registration (`/app/register-sw.tsx`)
- Client-side component that registers the service worker
- Runs on page load
- Integrated into the root layout

### 4. PWA Meta Tags (`/app/layout.tsx`)
- Theme color configuration
- Mobile web app capabilities
- Apple-specific PWA tags
- Manifest link

### 5. Icons
- Generated placeholder SVG icons in multiple sizes (192x192, 256x256, 384x384, 512x512)
- Configured in manifest.json
- Apple touch icon support

### 6. Offline Page (`/app/offline/page.tsx`)
- Fallback page when user is offline and content isn't cached

## Testing Your PWA

### Local Development
1. Build the production version:
   ```bash
   pnpm build
   pnpm start
   ```

2. Open Chrome DevTools:
   - Go to Application tab
   - Check "Manifest" to verify manifest.json
   - Check "Service Workers" to verify registration
   - Use "Lighthouse" to run PWA audit

### Installation
- Chrome/Edge: Look for install icon in address bar
- Mobile: Use "Add to Home Screen" option

### Offline Testing
1. Open the app in browser
2. Navigate to different pages to cache them
3. Open DevTools > Network tab
4. Set to "Offline" mode
5. Reload and navigate - should still work!

## Customization

### Icons
Replace the placeholder SVG icons with your actual brand icons:
1. Create PNG icons in these sizes: 192x192, 256x256, 384x384, 512x512
2. Place them in `/public` folder
3. Update `/public/manifest.json` to reference PNG files:
   ```json
   "type": "image/png"
   ```
4. Recommended tool: https://realfavicongenerator.net/

### Theme Colors
Update in `/public/manifest.json`:
- `theme_color`: Browser UI color
- `background_color`: Splash screen background

### Caching Strategy
Modify `/public/sw.js` to customize:
- What URLs to cache initially
- Cache names and versions
- Network-first vs cache-first strategies

### Manifest Settings
Edit `/public/manifest.json` to change:
- App name and short name
- Display mode (standalone, fullscreen, minimal-ui)
- Orientation
- Categories and scope

## Production Deployment

### Vercel/Netlify
- PWA works out of the box
- Service worker is served from `/public`

### Custom Server
Ensure:
- Service worker is served with correct MIME type
- HTTPS is enabled (required for service workers)
- Proper cache headers for sw.js

## Browser Support

- ✅ Chrome/Edge: Full support
- ✅ Safari (iOS): Limited support (no service worker background sync)
- ✅ Firefox: Full support
- ✅ Samsung Internet: Full support

## Resources

- [Next.js PWA Guide](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [MDN Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web.dev PWA Guide](https://web.dev/progressive-web-apps/)
