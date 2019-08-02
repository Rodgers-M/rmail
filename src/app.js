import * as path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/emails', (req, res) => {
  const emails = [
    {
      id: '1',
      subject: 'My first subject',
      body:
        'This is just a dummy emai, open it then we will get to real business later. Regards',
      timeStamp: Date.now() + 1003,
    },
    {
      id: '2',
      subject: 'My second subject',
      body:
        'This is just a dummy emai, open it then we will get to real business later. Regards',
      timeStamp: Date.now() + 2004,
    },
    {
      id: '3',
      subject: 'My third subject',
      body:
        'This is just a dummy emai, open it then we will get to real business later. Regards',
      timeStamp: Date.now() + 3005,
    },
  ];
  return res.json(emails);
});

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

export default app;
