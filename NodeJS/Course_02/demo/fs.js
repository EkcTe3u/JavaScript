import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// fs.mkdir(path.join(__dirname, 'test'), (err) =>{
//     if(err){
//         throw err 
//     }
//     console.log('Папка создана');
// })

const filePath = path.join(__dirname, 'test', 'test.txt');
// перетирает файлы
// fs.writeFile(filePath, 'Hello Node JS', err => {
//     if(err) {
//         throw err
//     }
//     console.log('Файл создан');
// })

fs.readFileSync(filePath, 'utf-8', (err, content) => {
    if(err){
        throw err
    }
    // const data = Buffer.from(content)
    // console.log('Content:', data.toString());
    console.log(content);
})