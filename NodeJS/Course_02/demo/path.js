import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Name of file: ', path.basename(__filename))
console.log('Name of directory: ', path.dirname('path.js'))
console.log('File ext: ', path.extname('path.js'))
console.log('Parse: ', path.parse('path.js').name)
console.log(path.join(__dirname, 'server', 'index.html'))