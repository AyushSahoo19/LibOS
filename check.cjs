const fs = require('fs'); 
const html = fs.readFileSync('dist2.html', 'utf8'); 
console.log('Contains hero:', html.includes('class="hero')); 
console.log('Contains TerminalChart:', html.includes('TerminalChart') || html.includes('terminal-container')); 
console.log('Contains profile-card styles:', html.includes('.profile-card'));
