const fs = require('fs'); 
const html = fs.readFileSync('dist2.html', 'utf8'); 
console.log(html.substring(0, 1000));
