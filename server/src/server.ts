import dotenv from 'dotenv';
import app from './app';
dotenv.config();

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy!' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
