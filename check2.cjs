const fs = require('fs'); 
const html = fs.readFileSync('dist2.html', 'utf8'); 
const mainMatch = html.match(/<main\b[^>]*>(.*?)<\/main>/s);
if (mainMatch) {
  console.log(mainMatch[1].substring(0, 1500));
} else {
  console.log('NO MAIN TAG');
}
