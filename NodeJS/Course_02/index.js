import http from 'http';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

//   if(req.url === '/'){
//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
//     if (err){
//         throw err
//     }
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     res.end(data)
// })
//   }else if(req.url === '/contact'){
//     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data)=>{
//     if (err){
//         throw err
//     }
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     res.end(data)
// })

let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }})
}

);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});