const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything from root as static
app.use(express.static(__dirname, {
  maxAge: '7d',
  etag: true,
  lastModified: true
}));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Torgas Blue Energy running at http://localhost:${PORT}`);
});
