const fs = require('fs'); 
const html = fs.readFileSync('dist2.html', 'ucs2');
const styleMatch = html.match(/<style[^>]*data-astro-cid-j7pv25f6[^>]*>([\s\S]*?)<\/style>/);
if (styleMatch) {
  console.log("Found style block length:", styleMatch[1].length);
  console.log(styleMatch[1].substring(0, 500));
} else {
  // Try finding any style with profile-card
  const anyStyle = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
  if (anyStyle) {
    for (let s of anyStyle) {
      if (s.includes('.profile-card')) {
        console.log("Found profile-card in style:", s.substring(0, 500));
        return;
      }
    }
  }
  console.log("No style block with profile-card found at all!");
}
