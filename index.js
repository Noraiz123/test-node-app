import express from 'express';
import cors from 'cors';

const PORT = 8080;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('App works properly!');
});

app.listen(PORT, () => console.log('server is running on port 8080'));
