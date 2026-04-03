const fs = require('fs'); 
const html = fs.readFileSync('dist2.html', 'ucs2'); // utf-16le 
console.log('Contains layout-split CSS:', html.includes('.layout-split'));
console.log('Contains layout-split HTML:', html.includes('layout-split'));
console.log('Contains TerminalChart:', html.includes('TerminalChart'));
