const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/v1/messages') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      console.log('Received request body:', body);
      res.writeHead(202, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ messageId: 'FAKE_MESSAGE_ID_12345' }));
    });
    return;
  }
  res.writeHead(404);
  res.end();
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Mock IOTA node listening at http://127.0.0.1:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => { server.close(() => process.exit(0)); });
