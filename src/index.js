const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { healthRouter } = require('./modules/health/health.router');
const { authRouter } = require('./modules/auth/auth.router');
const { photoRouter } = require('./modules/photo/photo.router');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Modular Monolith API' });
});

app.use('/health', healthRouter);
app.use('/auth', authRouter);
app.use('/photo', photoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
