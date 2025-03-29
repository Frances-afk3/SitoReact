import http from 'http';
import { readFile } from 'fs';
import { extname, join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Creazione di __dirname in ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
    let filePath = join(__dirname, req.url === '/' ? 'index.html' : req.url);
    let ext = extname(filePath);

    // Definisci il Content-Type in base all'estensione del file
    let contentType = 'text/html'; // Default
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.css') contentType = 'text/css';

    readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
