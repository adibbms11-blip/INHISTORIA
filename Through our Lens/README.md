# InHistoria — Frontend Home

Frontend Home implementation based on the supplied HOME.svg.

## Run

No build step is required. Open `index.html` in a browser, or serve this folder with any static server.

## Implemented

- Hover-triggered slide-down/fade navbar
- Clickable logo and navigation routes
- Three-panel hero image rotation with fade/scale transition
- Explore Our Work and Booking Now navigation
- Floating WhatsApp button that follows scroll and becomes slightly transparent while scrolling
- Four-card portfolio preview with hover gradient/title reveal
- Smooth previous/next catalog shifting
- Explore All Work navigation
- Closing image crossfade
- Footer logo back-to-top, social links and navigation links
- Responsive mobile layout

## Configure links

Edit `app.js` at the top:

```js
const CONFIG={
  whatsapp:'https://wa.me/YOUR_NUMBER',
  instagram:'https://instagram.com/YOUR_ACCOUNT',
  tiktok:'https://tiktok.com/@YOUR_ACCOUNT'
};
```

The non-home routes currently render placeholders. They are intentionally wired now so we can build Portfolio, Booking, Package, Contact, and Through Our Lens next without changing the Home navigation.
