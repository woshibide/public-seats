const fs = require('fs');
const path = require('path');

// Get list of directories with index.html
const dirs = fs.readdirSync('.', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(dir => fs.existsSync(path.join(dir, 'index.html')))
    .sort();

// Read template
const template = fs.readFileSync('template.html', 'utf8');

// Generate links
const links = dirs.map(dir => `<li class="link-item"><a href="${dir}/index.html">${dir}</a></li>`).join('\n');

// Replace placeholder
const html = template.replace('{{links}}', links);

// Write index.html
fs.writeFileSync('index.html', html);

console.log('Index page generated successfully.');