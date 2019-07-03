import * as path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

export default app;
